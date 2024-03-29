"use client";

import * as z from "zod";
import { ChangeEvent, FC, useState } from "react";
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
} from "../constants";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useUploadQuestion } from "@/hooks/useUploadQuestion";
import { IUploadQuestion } from "@/types/types";
import { useIsMutating } from "@tanstack/react-query";
import Image from "next/image";

interface UploadQuestionFormProps {}

const UploadQuestionForm: FC<UploadQuestionFormProps> = ({}) => {
  const [files, setFiles] = useState<File[]>([]);
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
      image: "",
      solution: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

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
      solution: values.solution || "",
      image: values.image || "",
    };

    mutate(newQuestion);

    form.reset();
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-4 mt-2 shadow-md lg:max-w-3xl lg:mx-auto">
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
                  <FormControl className="">
                    <SelectTrigger className="text-xs">
                      <SelectValue
                        placeholder="Select Exam Type"
                        defaultValue={field.value}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="overflow-scroll ">
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
                  <FormControl className="">
                    <SelectTrigger className="text-xs">
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
                  <FormControl className="">
                    <SelectTrigger className="text-xs">
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
                  <FormControl className="">
                    <SelectTrigger className="text-xs">
                      <SelectValue
                        placeholder=" Question Type"
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
                    className=""
                    disabled={isLoading}
                    placeholder="Type Your Question Here"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="solution"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl className="">
                  <Textarea
                    className=""
                    disabled={isLoading}
                    placeholder="Type the solution here if any"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="col-span-2 ">
                <FormLabel className="">
                  {field.value ? (
                    <div className="w-1/2 ">
                      <Image
                        src={field.value}
                        alt="question_image"
                        width={200}
                        height={100}
                        priority
                        className="object-contain rounded-sm"
                      />
                    </div>
                  ) : (
                    <div className="h-20 rounded-md bg-accent" />
                  )}
                </FormLabel>
                <FormControl className=" text-base-semibold">
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="Add profile photo"
                    className=""
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormDescription className="col-span-2 text-center">
            Options Section.
          </FormDescription>

          <div className="flex w-full col-span-2 gap-x-4 md:col-span-1">
            <Button variant="main" type="button">
              A
            </Button>

            <FormField
              name="optionA"
              render={({ field }) => (
                <FormItem className="flex-1 col-span-2 ">
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
          <div className="flex w-full col-span-2 gap-x-4 md:col-span-1">
            <Button variant="main" type="button">
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
          <div className="flex w-full col-span-2 gap-x-4 md:col-span-1">
            <Button variant="main" type="button">
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
          <div className="flex w-full col-span-2 gap-x-4 md:col-span-1">
            <Button variant="main" type="button">
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
          <div className="flex w-full col-span-2 gap-x-4 md:col-span-1">
            <Button variant="main" type="button">
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
                  <FormControl className="">
                    <SelectTrigger className="text-xs">
                      <SelectValue
                        defaultValue={field.value}
                        placeholder=" Correct Answer"
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
            variant="default"
            className=""
          >
            {isLoading ? "uploading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UploadQuestionForm;
