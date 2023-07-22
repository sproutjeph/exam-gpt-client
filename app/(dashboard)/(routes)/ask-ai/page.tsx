"use client";

import { askAiformSchema } from "@/types/types";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heading } from "@/components/base-components/Heading";
import { MessageSquare } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/base-components/Loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/base-components/UserAvatar";
import { BotAvatar } from "@/components/base-components/BotAvatar";
import { Empty } from "@/components/base-components/Empty";

interface pageProps {}

const AskAiPage: FC<pageProps> = ({}) => {
  const [messages, setMessages] = useState<{ content: string; role: string }[]>(
    []
  );

  const form = useForm<z.infer<typeof askAiformSchema>>({
    resolver: zodResolver(askAiformSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof askAiformSchema>) => {
    console.log(values);
  };

  return (
    <div className="text-white ">
      <Heading
        title="Slove With AI"
        description="Our most advanced AI  model"
        icon={MessageSquare}
        iconColor="text-white"
        bgColor="bg-violet-500/10"
      />

      <div className="px-4 lg:px-8">
        <div className="bg-white rounded-md">
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
                      <Input
                        className="text-black border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
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
                variant="main"
              >
                Generate
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
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
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
