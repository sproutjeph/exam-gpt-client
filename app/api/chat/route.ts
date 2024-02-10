import { OpenAIStream, StreamingTextResponse } from "ai";
import { MAX_FREE_COUNTS } from "@/constants/constants";
import { ChatCompletionMessageParam } from "ai/prompts";
import { NextResponse } from "next/server";
import Openai from "openai";

export async function POST(req: Request) {
  try {
    const { userId } = { userId: "will add soon" };

    const body = await req.json();
    const { messages } = body;

    // if (!userId) {
    //   return Response.json("Unauthorized", { status: 401 });
    // }

    const openia = new Openai();
    const systemMessage: ChatCompletionMessageParam = {
      role: "system",
      content: "You are an educational chat bot",
    };

    if (!messages) {
      return NextResponse.json("Messages are required", { status: 400 });
    }

    let apiUseageCount = 0;

    if (apiUseageCount === MAX_FREE_COUNTS) {
      return NextResponse.json(
        "Free trial has expired. Please upgrade to pro.",
        {
          status: 403,
        }
      );
    }
    const response = await openia.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
    });

    const stream = OpenAIStream(response);
    // increase API limit
    apiUseageCount += 1;
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
