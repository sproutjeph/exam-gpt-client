import User from "@/models/user";
import connectMongoDB from "./mongoDB";

export const saveCurrentUSerToDB = async (userEmail: string) => {
  try {
    await connectMongoDB();
    const userId = "";

    if (!userId) {
      return;
    }

    const exsistingUser = await User.findOne({ userId });

    if (!exsistingUser) {
      const newUser = new User({
        userId,
        email: userEmail,
        apiUseageCount: 0,
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
