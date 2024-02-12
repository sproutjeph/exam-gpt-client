import prisma from "@/lib/db";
import { User } from "@prisma/client";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserByUserId = async (userId: string | undefined) => {
  try {
    const user = await prisma.user.findUnique({ where: { userId } });

    return user;
  } catch {
    return null;
  }
};

export const saveUser = async (user: User) => {
  try {
    await prisma.user.create({
      data: {
        ...user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserApiUseageCount = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { userId } });

    if (!user) return;

    await prisma.user.update({
      where: {
        userId: user?.userId,
      },
      data: {
        apiUseageCount: user?.apiUseageCount + 1,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserApiUseageCount = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { userId } });
    return user?.apiUseageCount;
  } catch {
    return 0;
  }
};
