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
import { useUploadQuestion } from "@/hooks/useUploadQuestion";
import { IUploadQuestion } from "@/types/types";
import { useIsMutating } from "@tanstack/react-query";

interface pageProps {}

const UploadQuestionPage: FC<pageProps> = ({}) => {
  const mutate = useUploadQuestion();
  const isMutating = useIsMutating();

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
  const isLoading = form.formState.isSubmitting || isMutating !== 0;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const newQuestion: IUploadQuestion = {
      correctOption: values.correctOption,
      examType: values.exam,
      examYear: values.examYear,
      subject: values.subject,
      question: values.question,
      option: {
        a: values.optionA,
        b: values.optionB,
        c: values.optionC,
        d: values.optionD,
        e: values.optionE,
      },
      solution: "",
      image: "",
    };

    mutate(newQuestion);

    form.reset();
  };

  return (
    <main className="px-4 ">
      <h2 className="my-4 text-3xl font-bold text-center text-white underline">
        Help Train Our AI
      </h2>

      <div className="p-6 mt-4 lg:max-w-xl lg:mx-auto bg-dark-2">
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
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="account-form_input no-focus">
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select Exam Type"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-scroll account-form_input no-focus">
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
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="account-form_input no-focus">
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
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="account-form_input no-focus">
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
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="account-form_input no-focus">
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
                  <FormControl className="">
                    <Textarea
                      className="account-form_input no-focus"
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
                        className="account-form_input no-focus"
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
                        className="account-form_input no-focus"
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
                        className="account-form_input no-focus"
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
                        className="account-form_input no-focus"
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
                        className="account-form_input no-focus"
                        disabled={isLoading}
                        placeholder="Enter Option E"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="correctOption"
              render={({ field }) => (
                <FormItem className="">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="account-form_input no-focus">
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select Correct Answer"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-scroll">
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                      <SelectItem value="C">C</SelectItem>
                      <SelectItem value="D">D</SelectItem>
                      <SelectItem value="E">E</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              variant="main"
              className=""
            >
              {isLoading ? "uploading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default UploadQuestionPage;
