"use client";

import { Fragment, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { closeAiChatModal } from "@/featuers/modals/modalSlice";
import { Message, useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { Textarea } from "../ui/textarea";
import { BotAvatar, Empty, UserAvatar } from "../base-components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import ChatActionIcons from "../base-components/ChatActionIcons";

const AiChatModal = () => {
  const dispatch = useAppDispatch();
  const { isAiChatModalOpen } = useAppSelector((state) => state.modals);
  const { currentQuestion } = useAppSelector((state) => state.askAi);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
    setInput,
  } = useChat();

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (isAiChatModalOpen) {
      inputRef.current?.focus();
    }
  }, [isAiChatModalOpen]);

  useEffect(() => {
    setInput(currentQuestion);
  }, [currentQuestion]);

  // useEffect(() => {
  //   if (error?.message) {
  //   }
  // }, []);

  return (
    <Dialog
      open={isAiChatModalOpen}
      onOpenChange={() => dispatch(closeAiChatModal())}
    >
      <DialogContent className="h-[90%] flex flex-col p-2">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
            <span className="flex items-center text-xl font-bold gap-x-2">
              Ai Chat
              <Badge variant="premium" className="py-1 text-sm uppercase">
                pro
              </Badge>
            </span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-col flex-1">
          <div className="" ref={scrollRef}>
            {messages.map((message) => (
              <Fragment key={message.id}>
                <ChatActionIcons />
                <ChatMessage message={message} />
              </Fragment>
            ))}
            {isLoading && lastMessageIsUser && (
              <ChatMessage
                message={{
                  id: "loading",
                  role: "assistant",
                  content: "Thinking...",
                }}
              />
            )}
            {error && (
              <ChatMessage
                message={{
                  id: "error",
                  role: "assistant",
                  content: error.message,
                }}
              />
            )}

            {!error && messages.length === 0 && (
              <>
                <BotAvatar />
                <Empty label="No conversation started." />
              </>
            )}
          </div>
        </ScrollArea>

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
          <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
            <Textarea
              value={input}
              onChange={handleInputChange}
              ref={inputRef}
              className="block pt-2 pl-10 pr-20 text-sm shadow-md resize-none bg-gray-50 dark:bg-dark-4 sm:text-base"
              cols={30}
            />

            <Button
              disabled={isLoading || currentQuestion.length === 0}
              variant="ghost"
              type="submit"
              className="absolute bottom-6 right-2.5 rounded-lg  px-4 py-2 text-sm font-medium sm:text-base text-primary"
            >
              Solve
              <span className="sr-only">Solve</span>
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AiChatModal;

function ChatMessage({ message: { role, content } }: { message: Message }) {
  const isAiMessage = role === "assistant";
  const { user } = useKindeBrowserClient();

  return (
    <div
      className={cn(
        "mb-3 flex items-center gap-1",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end"
      )}
    >
      {isAiMessage ? <BotAvatar /> : <UserAvatar user={user} />}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-foreground text-background"
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...prpos }) => (
              <Link
                {...prpos}
                href={prpos.href ?? ""}
                className="text-blue-500 hover:underline"
              />
            ),
            p: ({ node, ...prpos }) => (
              <p {...prpos} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...prpos }) => (
              <ul
                {...prpos}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...prpos }) => <li {...prpos} className="mt-1 " />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
