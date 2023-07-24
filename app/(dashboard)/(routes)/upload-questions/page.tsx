"use client";

import * as z from "zod";
import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  formSchema,
  examTypeOptions,
  getExamYearsOptions,
  subjectsOptions,
} from "./constants";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { questionData } from "@/utils/data";

interface pageProps {}

const UploadQuestionPage: FC<pageProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      optionE: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    console.log("clicked Submit");
  };

  return (
    <main className="px-4 ">
      <h2 className="my-4 text-3xl font-bold text-center text-white underline">
        Help Train Our AI
      </h2>

      <div className="lg:max-w-xl lg:mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-y-6 gap-x-4"
          >
            <FormField
              control={form.control}
              name="exam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Exam Type</FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select Exam Type"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-scroll">
                      {examTypeOptions.map((option) => (
                        <SelectItem key={option.label} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="examYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Exam Year</FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select Exam Year"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-scroll">
                      {getExamYearsOptions().map((option) => (
                        <SelectItem key={option.label} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Subject</FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select Subject"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-scroll">
                      {subjectsOptions.map((option) => (
                        <SelectItem key={option.label} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="questionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Question Type</FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select Question Type"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-scroll">
                      <SelectItem value="OBJ">OBJ</SelectItem>
                      <SelectItem value="Essay">Essay</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="question"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-white">Question</FormLabel>

                  <FormControl className="">
                    <Textarea
                      className=""
                      disabled={isLoading}
                      placeholder="Type Your Question Here"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormDescription className="text-center">
              Options Section.
            </FormDescription>

            <div className="flex w-full col-span-2 gap-x-4">
              <Button disabled={true} variant="main" type="button">
                A
              </Button>
              <FormField
                name="optionA"
                render={({ field }) => (
                  <FormItem className="flex-1 col-span-2">
                    <FormControl className="">
                      <Input
                        className=""
                        disabled={isLoading}
                        placeholder="Enter Option A"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full col-span-2 gap-x-4">
              <Button disabled={true} variant="main" type="button">
                B
              </Button>
              <FormField
                name="optionB"
                render={({ field }) => (
                  <FormItem className="flex-1 col-span-2">
                    <FormControl className="">
                      <Input
                        className=""
                        disabled={isLoading}
                        placeholder="Enter Option B"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full col-span-2 gap-x-4">
              <Button disabled={true} variant="main" type="button">
                C
              </Button>
              <FormField
                name="optionC"
                render={({ field }) => (
                  <FormItem className="flex-1 col-span-2">
                    <FormControl className="">
                      <Input
                        className=""
                        disabled={isLoading}
                        placeholder="Enter Option C"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full col-span-2 gap-x-4">
              <Button disabled={true} variant="main" type="button">
                D
              </Button>
              <FormField
                name="optionD"
                render={({ field }) => (
                  <FormItem className="flex-1 col-span-2">
                    <FormControl className="">
                      <Input
                        className=""
                        disabled={isLoading}
                        placeholder="Enter Option D"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full col-span-2 gap-x-4">
              <Button disabled={true} variant="main" type="button">
                E
              </Button>
              <FormField
                name="optionE"
                render={({ field }) => (
                  <FormItem className="flex-1 col-span-2">
                    <FormControl className="">
                      <Input
                        className=""
                        disabled={isLoading}
                        placeholder="Enter Option E"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              variant="main"
              className="col-span-2"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default UploadQuestionPage;
