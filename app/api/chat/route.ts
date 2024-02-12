import { MAX_FREE_COUNTS } from "@/constants/constants";
import { NextResponse } from "next/server";
import { getUserApiUseageCount, updateUserApiUseageCount } from "@/utils/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LangChainStream, StreamingTextResponse } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function POST(req: Request) {
  const { getUser } = getKindeServerSession();
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { messages } = body;

    const currentMessageContent = messages[messages.length - 1].content;

    const { stream, handlers } = LangChainStream();

    const chatModal = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],
    });

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "You are an educational chat bot"],
      ["user", "{input}"],
    ]);

    const chain = prompt.pipe(chatModal);

    chain.invoke({
      input: currentMessageContent,
    });

    if (!messages) {
      return NextResponse.json("Messages are required", { status: 400 });
    }

    const apiUseageCount = await getUserApiUseageCount(user.id);

    if (apiUseageCount === MAX_FREE_COUNTS) {
      throw new Error("You have reached the limit of API usage", {
        cause: 400,
      });
    }

    // increase API limit
    await updateUserApiUseageCount(user?.id);

    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
