import { MAX_FREE_COUNTS } from "@/constants/constants";
import { NextResponse } from "next/server";
import { getUserApiUseageCount, updateUserApiUseageCount } from "@/utils/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { StreamingTextResponse, Message, GoogleGenerativeAIStream } from "ai";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export const runtime = "edge";

const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(
      (message) => message.role === "user" || message.role === "assistant"
    )
    .map((message) => ({
      role: message.role === "user" ? "user" : "model",
      parts: [{ text: message.content }],
    })),
});

export async function POST(req: Request) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return NextResponse.json("Messages are required", { status: 400 });
    }

    const apiUseageCount = await getUserApiUseageCount(user.id);

    if (Number(apiUseageCount) >= MAX_FREE_COUNTS) {
      throw new Error("You have reached the limit of API usage", {
        cause: 403,
      });
    }

    const geminiStream = await genAI
      .getGenerativeModel({ model: "gemini-pro" })
      .generateContentStream(buildGoogleGenAIPrompt(messages));

    // increase API limit
    const count = await updateUserApiUseageCount(user?.id);
    console.log(count);

    // Convert the response into a friendly text-stream
    const stream = GoogleGenerativeAIStream(geminiStream);

    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
