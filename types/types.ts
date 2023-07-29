import * as z from "zod";

export const askAiformSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
});

export interface ISubject {
  name: string;
  _id: string;
  exam: string;
  examYears: {
    examYear: number;
    _id: string;
    isActive: boolean;
  }[];
}

export interface IQuestion {
  option: {
    [key: string]: string;
  };
  _id: string;
  correctOption: string;
  examType: string;
  examYear: string;
  subject: string;
  image: string;
  question: string;
  solution: string;
}

export interface Option {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
}

export interface IUploadQuestion {
  correctOption: string;
  examType: string;
  examYear: string;
  subject: string;
  image: string;
  option: IUploadOption;
  question: string;
  solution: string;
}

interface IUploadOption {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
}
