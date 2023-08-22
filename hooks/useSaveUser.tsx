import { queryKeys } from "@/constants/constants";
import { axiosInstance } from "@/lib/axiosInstance";
import { IUser } from "@/types/types";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

async function saveUser(user: IUser) {
  await axiosInstance.post("/users", user);
}

export function useSaveUser(): UseMutateFunction<
  void,
  unknown,
  IUser,
  unknown
> {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((user: IUser) => saveUser(user), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.users]);
    },
  });

  return mutate;
}
