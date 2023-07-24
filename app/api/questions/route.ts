import connectMongoDB from "@/lib/mongoDB";
import Question from "@/models/questionsModal";
import Subject from "@/models/subjectModal";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const data = await Question.find({});

    return NextResponse.json({ data: data, message: "Success" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const body = await request.json();

    const data = await Subject.create(body);

    return NextResponse.json({ data: data, message: "Success" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
