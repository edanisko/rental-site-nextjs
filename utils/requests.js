const apiDomain = process.env.NEXT_PUBLIC_API_URI || null;

// Fetch all properties from the API
async function fetchProperties() {
  try {
    if (!apiDomain) {
      console.log("API domain is not set");
      return [];
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/properties`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Fetch a single property by ID
async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      console.log("API domain is not set");
      return null;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/properties/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch property");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
