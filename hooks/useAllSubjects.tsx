import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { queryKeys } from "@/constants/constants";
import { ISubject } from "@/types/types";

interface IAxiosReturnType {
  message: string;
  data: ISubject[];
}

async function getAllSubjects(): Promise<IAxiosReturnType> {
  const { data } = await axiosInstance.get(`/subjects`);

  return data;
}

export function useAllSubjects() {
  const {
    data: subjects,
    isLoading,
    error,
    isSuccess,
  } = useQuery([queryKeys.allSubjects], () => getAllSubjects());

  return { subjects, isLoading, error, isSuccess };
}
