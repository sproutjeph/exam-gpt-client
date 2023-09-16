import { axiosInstance } from "@/lib/axiosInstance";
import { queryKeys } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/providers/queryClient";

async function getCurrentUser() {
  const { data } = await axiosInstance.get("/me");
  return data;
}

const userQuery = {
  queryKey: [queryKeys.currentUser],
  queryFn: getCurrentUser,
};

export const loadCurrentUser = () => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    console.log(error);
  }
};

export function useGetCurrentUser() {
  const { data: currentUser, isLoading, error } = useQuery(userQuery);

  return { currentUser, isLoading, error };
}
