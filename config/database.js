import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("Already connected to database");

    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    connected = true;
    console.log(`MongoDB Connected...`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
