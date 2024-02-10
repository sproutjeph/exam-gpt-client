"use client";

import { FC, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Bot, Send } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { closeAiChatModal } from "@/featuers/modals/modalSlice";
import { Message, useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { Textarea } from "../ui/textarea";

interface AiChatModalProps {}

const AiChatModal: FC<AiChatModalProps> = ({}) => {
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

  return (
    <Dialog
      open={isAiChatModalOpen}
      onOpenChange={() => dispatch(closeAiChatModal())}
    >
      <DialogContent>
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

        <ScrollArea className="h-[600px] flex-col">
          <div className="" ref={scrollRef}>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
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
          </div>
        </ScrollArea>

        <div className="">
          <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
            <Textarea
              value={input}
              onChange={handleInputChange}
              ref={inputRef}
              className="flex-1"
            />

            <Button
              disabled={isLoading || currentQuestion.length === 0}
              size="icon"
              variant="premium"
              className=""
              type="submit"
            >
              <Send className="fill-white" size={24} />
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

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end"
      )}
    >
      {isAiMessage && <Bot className="mr-2 flex-none" />}
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
