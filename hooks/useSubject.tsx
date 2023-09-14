import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { queryKeys } from "@/constants/constants";
import { useEffect } from "react";
import { ISubject } from "@/types/types";

interface IAxiosReturnType {
  message: string;
  data: ISubject[];
}

async function getSubject(examName: string): Promise<IAxiosReturnType> {
  const { data } = await axiosInstance.get(`/get-subject/${examName}`);

  return data;
}

export function useSubject(examName: string) {
  const {
    data: subjects,
    isLoading,
    error,
    isSuccess,
  } = useQuery([queryKeys.subjects, examName], () => getSubject(examName));

  // prefetch the next subject set to "WASSEC" Bcos by "JAMB" is defalut
  const queryClient = useQueryClient();
  let examToPrefecth = "WASSCE";
  if (examName === "WASSCE") {
    examToPrefecth = "NECO";
  } else if (examName === "NECO") {
    examToPrefecth = "POST-UTME";
  }

  useEffect(() => {
    queryClient.prefetchQuery([queryKeys.subjects, examToPrefecth], () =>
      getSubject(examToPrefecth)
    );
  }, [examToPrefecth, queryClient]);

  return { subjects, isLoading, error, isSuccess };
}
