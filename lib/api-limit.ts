import { MAX_FREE_COUNTS } from "@/constants/constants";
import User from "@/models/user";
import { auth } from "@clerk/nextjs";

export const increamentApiLimit = async (email: string) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userExists = await User.findOne({ userId });

  if (userExists) {
    // If the user exists, increase the count by 1
    userExists.apiUseageCount += 1;
    await userExists.save();
    return userExists.apiUseageCount;
  } else {
    // If the user doesn't exist, create a new entry with count set to 1
    const newUser = new User({ userId, apiUsageCount: 1, email: email });
    await newUser.save();
    return newUser.count;
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await User.findOne({ userId });

  if (!userApiLimit || userApiLimit.apiUsageCount < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await User.findOne({ userId });

  if (!userApiLimit) {
    return 0;
  }
  return userApiLimit.apiUsageCount;
};
