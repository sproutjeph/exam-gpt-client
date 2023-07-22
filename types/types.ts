import * as z from "zod";

export const askAiformSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
});

interface ExamSubject {
  id: string;
  name: string;
  examYears: number[];
}

interface ExamType {
  id: string;
  name: string;
  examCat: string;
  subjects: ExamSubject[];
}

export interface IExamsData {
  result: number;
  message: string;
  examTypes: ExamType[];
}

export interface IQuestion {
  correctOption: string;
  examType: string;
  examYear: number;
  id: string;
  image: string;
  option: {
    [key: string]: string;
  };
  question: string;
  solution: string;
}

export interface IQuestionData {
  result: number;
  message: string;
  data: {
    subject: string;
    examType: string;
    examYear: number;
    id: string;
    questions: IQuestion[];
  }[];
}
