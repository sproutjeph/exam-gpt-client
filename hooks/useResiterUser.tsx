import { axiosInstance } from "@/lib/axiosInstance";
import { queryKeys } from "@/constants/constants";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { IRegUser } from "@/types/types";

async function registerUser(user: IRegUser) {
  await axiosInstance.post("/register-user", user);
}

export function useRegisterUser(): UseMutateFunction<
  void,
  unknown,
  IRegUser,
  unknown
> {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((user: IRegUser) => registerUser(user), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.registerUser]);
      toast("Registration successfull", { position: "bottom-center" });
    },
  });

  return mutate;
}
