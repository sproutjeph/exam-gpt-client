import { MAX_FREE_COUNTS } from "@/constants/constants";
import User from "@/models/user";

export const increamentApiLimit = async (userId: string) => {
  if (!userId) {
    return;
  }

  const userExists = await User.findOne({ userId });

  if (userExists) {
    userExists.apiUseageCount += 1;
    await userExists.save();
    return userExists.apiUseageCount;
  }
};

export const checkApiLimit = async () => {
  const userId = "";

  if (!userId) {
    return false;
  }

  const userApiLimit = await User.findOne({ userId });

  if (userApiLimit.apiUsageCount > MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimit = async (userId: string): Promise<number> => {
  if (!userId) {
    return 0;
  }

  const userApiLimit = await User.findOne({ userId });

  return userApiLimit?.apiUseageCount as number;
};
