"use client";

import {
  BotAvatar,
  Empty,
  Heading,
  Loader,
  UserAvatar,
} from "@/components/base-components";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { openSubscriptionModal } from "@/featuers/modals/modalSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatCompletionRequestMessage } from "openai";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { Button } from "@/components/ui/button";
import { askAiformSchema } from "@/types/types";
import { ChevronLeft, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { clearQuestion } from "@/featuers/askAiSlice";

const AskAiPage = () => {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const { currentQuestion } = useAppSelector((state) => state.askAi);

  const form = useForm<z.infer<typeof askAiformSchema>>({
    resolver: zodResolver(askAiformSchema),
    defaultValues: {
      prompt: currentQuestion.length > 0 ? currentQuestion : "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  useEffect(() => {
    dispatch(clearQuestion());
  }, [path, dispatch]);

  const onSubmit = async (values: z.infer<typeof askAiformSchema>) => {
    // console.log(values);

    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/ask-ai", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.setValue("prompt", "");
    } catch (error: any) {
      // console.log(error);

      if (error?.response?.status === 403) {
        dispatch(openSubscriptionModal());
      } else {
        toast.error(`Something went wrong. ${error}`);
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="mt-4">
      <Heading
        title="Slove With AI"
        description="Our most advanced AI  model"
        icon={MessageSquare}
        iconColor="text-white"
        bgColor="bg-violet-500/10"
      />

      <div
        className="container flex items-center my-4 cursor-pointer"
        onClick={() => {
          router.back();
        }}
      >
        <ChevronLeft />
        <span className="text-xs">Back to Questions</span>
      </div>

      <div className="px-4 lg:px-8">
        <div className="rounded-md ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Textarea
                        className="p-2 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="w-full col-span-12 lg:col-span-2"
                type="submit"
                disabled={isLoading}
                size="icon"
                variant="default"
              >
                Slove
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-4 space-y-4">
          {isLoading && (
            <div className="flex items-center justify-center w-full p-8 rounded-lg bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? " border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAiPage;
