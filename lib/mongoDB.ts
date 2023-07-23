import mongoose from "mongoose";

const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI as string);
  console.log("Connected to MongoDB");
};

export default connectMongoDB;
