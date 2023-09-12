"use server";

import connectMongoDB from "../mongoDB";
import User from "@/models/user";

export async function fetchUser(userId: string) {
  try {
    connectMongoDB();

    return await User.findOne({ userId: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function updateUser(
  userId: string,
  name: string,
  email: string,
  image: string
) {
  try {
    connectMongoDB();

    return await User.findOneAndUpdate(
      { id: userId },
      {
        name: name.toLowerCase(),
        email: email,
        image: image,
      },
      { upsert: true }
    );
  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}

export const saveCurrentUSerToDB = async (userEmail: string) => {
  try {
    await connectMongoDB();
    const { userId, user } = { userId: "", user: {} as any };

    if (!userId) {
      return;
    }

    const exsistingUser = await User.findOne({ userId });

    if (!exsistingUser) {
      const newUser = new User({
        userId,
        email: userEmail,
        apiUseageCount: 0,
        name: user?.firstName,
        image: user?.imageUrl,
      });

      await newUser.save();

      return newUser;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
