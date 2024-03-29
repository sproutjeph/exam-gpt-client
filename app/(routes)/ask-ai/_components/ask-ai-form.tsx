"use client";

import { FC, Fragment, useEffect, useState } from "react";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { clearQuestion } from "@/featuers/askAiSlice";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { askAiformSchema } from "@/types/types";
import { openSubscriptionModal } from "@/featuers/modals/modalSlice";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  BotAvatar,
  Empty,
  Loader,
  UserAvatar,
} from "@/components/base-components";
import ChatActionIcons from "@/components/base-components/ChatActionIcons";
import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

interface AskAiFormProps {}

const AskAiForm: FC<AskAiFormProps> = ({}) => {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();
  const { user } = useKindeBrowserClient();

  const { currentQuestion } = useAppSelector((state) => state.askAi);

  const form = useForm<z.infer<typeof askAiformSchema>>({
    resolver: zodResolver(askAiformSchema),
    defaultValues: {
      prompt: currentQuestion.length > 0 ? currentQuestion : "",
    },
  });

  useEffect(() => {
    dispatch(clearQuestion());
  }, [path, dispatch]);

  // const onSubmit = async (values: z.infer<typeof askAiformSchema>) => {
  //   try {
  //     const userMessage: ChatCompletionRequestMessage = {
  //       role: "user",
  //       content: values.prompt,
  //     };
  //     const newMessages = [...messages, userMessage];

  //     const response = await axios.post("/api/ask-ai", {
  //       messages: newMessages,
  //     });
  //     setMessages((current) => [...current, userMessage, response.data]);

  //     form.setValue("prompt", "");
  //   } catch (error: any) {
  //     if (error?.response?.status === 403) {
  //       dispatch(openSubscriptionModal());
  //     } else {
  //       toast.error(`Something went wrong. ${error}`);
  //     }
  //   } finally {
  //     router.refresh();
  //   }
  // };

  return (
    <>
      <div className="flex-1 p-4 overflow-y-auto text-sm leading-6 rounded-xl sm:text-base sm:leading-7">
        {isLoading && (
          <div className="flex items-center justify-center w-full p-8 rounded-lg bg-muted">
            <Loader />
          </div>
        )}
        {messages.length === 0 && !isLoading && (
          <Empty label="No conversation started." />
        )}
        <div className="">
          {messages.map((message, i) => (
            <Fragment key={i}>
              <ChatActionIcons />

              <div
                className={cn(
                  "p-6 w-full flex items-start gap-x-4 rounded-lg",
                  message.role === "user"
                    ? " border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? (
                  <UserAvatar user={user} />
                ) : (
                  <BotAvatar />
                )}

                <p>{message.content}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <Form {...form}>
        <form className="mt-2" onSubmit={handleSubmit}>
          <label htmlFor="chat-input" className="sr-only">
            Enter your prompt
          </label>
          <div className="relative">
            <Button
              variant="ghost"
              type="button"
              className="absolute left-0 flex items-center pl-3 bottom-6"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
                <path d="M5 10a7 7 0 0 0 14 0"></path>
                <path d="M8 21l8 0"></path>
                <path d="M12 17l0 4"></path>
              </svg>
              <span className="sr-only">Use voice input</span>
            </Button>

            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="mx-2">
                  <FormControl>
                    <Textarea
                      className="block pt-6 pl-10 pr-20 text-sm shadow-md resize-none bg-gray-50 dark:bg-dark-4 sm:text-base"
                      disabled={isLoading}
                      placeholder="How do I calculate the radius of a circle?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              variant="ghost"
              type="submit"
              className="absolute bottom-6 right-2.5 rounded-lg  px-4 py-2 text-sm font-medium sm:text-base text-primary"
              disabled={isLoading}
            >
              Solve <span className="sr-only">Solve</span>
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AskAiForm;
