import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { ISubject } from "@/types/types";

interface IAxiosReturnType {
  message: string;
  data: ISubject[];
}

async function refreshToken(): Promise<IAxiosReturnType> {
  const { data } = await axiosInstance.get(`/refresh`);

  return data;
}

export function useRefreshToken() {
  const {
    data: accessToken,
    isLoading,
    error,
    isSuccess,
  } = useQuery([], () => refreshToken());

  return { accessToken, isLoading, error, isSuccess };
}
