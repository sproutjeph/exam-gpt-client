import * as z from "zod";

export const formSchema = z.object({
  exam: z.string({
    required_error: "Select Exam Type.",
  }),
  examYear: z.string({
    required_error: "Select Exam Year.",
  }),
  subject: z.string({
    required_error: "Select Subject.",
  }),
  questionType: z.string({
    required_error: "Select Qusetion Type.",
  }),
  question: z.string().min(1),
  solution: z.string().min(1),

  optionA: z.string().min(1),

  optionB: z.string().min(1),

  optionC: z.string().min(1),

  optionD: z.string().min(1),
  optionE: z.string().min(1),

  correctOption: z.string().min(1),
  image: z.string().optional(),
});

export const examTypeOptions = [
  {
    value: "JAMB",
    label: "JAMB",
  },
  {
    value: "WASSCE",
    label: "WASSCE",
  },
  {
    value: "NECO",
    label: "NECO",
  },
  {
    value: "POST-UTME",
    label: "POST-UTME",
  },
];

export function getExamYearsOptions(): { value: string; label: string }[] {
  const currentYear = new Date().getFullYear();
  const startYear = 2000;
  const yearsArray: { value: string; label: string }[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    yearsArray.push({ value: year.toString(), label: year.toString() });
  }

  return yearsArray;
}

export const subjectsOptions = [
  {
    value: "English",
    label: "English",
  },
  {
    value: "Mathematics",
    label: "Mathematics",
  },
  {
    value: "Physics",
    label: "Physics",
  },
  {
    value: "Chemistry",
    label: "Chemistry",
  },
  {
    value: "Biology",
    label: "Biology",
  },
  {
    value: "Geography",
    label: "Geography",
  },
  {
    value: "History",
    label: "History",
  },
  {
    value: "Civics",
    label: "Civics",
  },
  {
    value: "Agriculture",
    label: "Agriculture",
  },
  {
    value: "Business Studies",
    label: "Business Studies",
  },
  {
    value: "Computer Science",
    label: "Computer Science",
  },
  {
    value: "Economics",
    label: "Economics",
  },
];
