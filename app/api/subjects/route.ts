import connectMongoDB from "@/lib/mongoDB";
import Subject from "@/models/subjectModal";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const exam = searchParams.get("exam");
  await connectMongoDB();

  // const data = await Subject.find({ exam: exam });
  const data = await Subject.find({ exam: { $regex: exam, $options: "i" } });

  return NextResponse.json({ data: data, message: "Success", result: 1 });
}
