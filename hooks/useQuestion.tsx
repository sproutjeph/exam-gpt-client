import { axiosInstance } from "@/lib/axiosInstance";
import { queryKeys } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import { IQuestion } from "@/types/types";

interface IAxiosReturnType {
  message: string;
  data: IQuestion[];
}

async function getQuestionsByQuery(
  examType: string,
  examYear: string,
  subject: string
): Promise<IAxiosReturnType> {
  const { data } = await axiosInstance.get(
    `/get-questions/${examType}/${examYear}/${subject}`
  );

  return data;
}

export function useQuestion(
  examType: string,
  examYear: string,
  subject: string
) {
  const {
    data: questions,
    isLoading,
    error,
    isSuccess,
  } = useQuery([queryKeys.questions, examType, examYear, subject], () =>
    getQuestionsByQuery(examType, examYear, subject)
  );

  return { questions, isLoading, error, isSuccess };
}
