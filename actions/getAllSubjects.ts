"use server";

import prisma from "@/lib/db";

export async function getAllSubject() {
  try {
    const subjects = await prisma.subjects.findMany();
    return subjects;
  } catch (error) {
    return { error: "Could not fetch subjects" };
  }
}
