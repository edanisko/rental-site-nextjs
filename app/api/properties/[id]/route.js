import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

// GET /api/properties/[id]
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property not found", { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);

    return new Response("Something went wrong", { status: 500 });
  }
};

// DELETE /api/properties/[id]
export const DELETE = async (req, { params }) => {
  try {
    const propertyId = params.id;
    const sessionUser = await getSessionUser();

    //check for sessions
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required.", { status: 401 });
    }

    const { userId } = sessionUser;

    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property not found", { status: 404 });
    }

    // verify ownership
    if (property.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    await property.deleteOne();

    return new Response("Property deleted", { status: 200 });
  } catch (error) {
    console.log(error);

    return new Response("Something went wrong", { status: 500 });
  }
};

// /api/properies/[id]/edit
export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { id } = params;
    const { userId } = sessionUser;

    const formData = await request.formData();

    // access all values fro amenities
    const amenities = formData.getAll("amenities");

    const existingProperty = await Property.findById(id);

    if (!existingProperty) {
      return new Response("Property does not exist", { status: 404 });
    }

    // verify owner
    if (existingProperty.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        nightly: formData.get("rates.nightly"),
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };

    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData);

    return new Response(JSON.stringify(updatedProperty), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add new property", { status: 500 });
  }
};
