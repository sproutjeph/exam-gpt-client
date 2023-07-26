import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getQuestionsByQuery(
  examType: string = "jamb",
  examYear: string = "2010",
  subject: string = "mathematics"
) {
  const { data } = await axios.get(
    // `http://localhost:3000/api/subjects?exam=${examName}`
    `http://localhost:8000/api/v1/questions/${examType}/${examYear}/${subject}`
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
  } = useQuery(
    ["questions", examType, examYear, subject],
    () => getQuestionsByQuery(examType, examYear, subject),
    {
      staleTime: 3600, // 40 mins to refetch
      cacheTime: 360000, // 30 mins for cache data
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  return { questions, isLoading, error, isSuccess };
}
