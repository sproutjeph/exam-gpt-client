import { queryKeys } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getSubject(examName: string) {
  const { data } = await axios.get(
    // `http://localhost:3000/api/subjects?exam=${examName}`
    `http://localhost:8000/api/v1/subjects/${examName}`
  );

  return data;
}

export function useSubject(examName: string = "jamb") {
  const {
    data: subjects,
    isLoading,
    error,
    isSuccess,
  } = useQuery([queryKeys.subjects, examName], () => getSubject(examName), {
    staleTime: 360000, // 30 mins to refetch
    cacheTime: 360000, // 30 mins for cache data
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { subjects, isLoading, error, isSuccess };
}
