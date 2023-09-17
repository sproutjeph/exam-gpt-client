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
  options: {
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

export interface ITextBook {
  id: number;
  subject: string;
  image: string;
  description: string;
  title: string;
  date: string;
}

export interface ISelectedData {
  subject: string;
  examYear: string;
  numberOfQuestions: string;
  isSelected: boolean;
  exam: string;
}

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export interface IRegUser {
  name?: string;
  email: string;
  password: string;
}
export interface IActivateUser {
  activationToken: string;
  activationCode: string;
}

export interface IUser {
  apiUseageCount: number;
  email: string;
  isVerified: boolean;
  name: string;
  role: string;
  subjectVideo?: [];
  updatedAt?: string;
  createdAt?: string;
  __v?: number;
  _id?: string;
  imageUrl?: string;
}
