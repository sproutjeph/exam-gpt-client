import { OpenAIStream, StreamingTextResponse } from "ai";
import { MAX_FREE_COUNTS } from "@/constants/constants";
import { ChatCompletionMessageParam } from "ai/prompts";
import { NextResponse } from "next/server";
import Openai from "openai";
import { getUserApiUseageCount, updateUserApiUseageCount } from "@/utils/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {
  const { getUser } = getKindeServerSession();
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { messages } = body;

    const openia = new Openai();
    const systemMessage: ChatCompletionMessageParam = {
      role: "system",
      content: "You are an educational chat bot",
    };

    if (!messages) {
      return NextResponse.json("Messages are required", { status: 400 });
    }

    const apiUseageCount = await getUserApiUseageCount(user.id);

    if (apiUseageCount === MAX_FREE_COUNTS) {
      throw new Error("You have reached the limit of API usage");
    }

    const response = await openia.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
    });

    const stream = OpenAIStream(response);
    // increase API limit
    await updateUserApiUseageCount(user?.id);
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
