import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    apiUseageCount: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      unique: true,
    },
    image: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
