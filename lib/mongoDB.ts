// import mongoose from "mongoose";

// let isConnected = false; // Variable to track the connection status
// const connectMongoDB = async () => {
//   // Set strict query mode for Mongoose to prevent unknown field queries.
//   mongoose.set("strictQuery", true);

//   if (!process.env.MONGODB_URI) return console.log("Missing MongoDB URL");

//   if (isConnected) {
//     console.log("MongoDB connection already established");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI as string);
//     isConnected = true;
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectMongoDB;
