import { axiosInstance } from "@/lib/axiosInstance";
import { queryKeys } from "@/constants/constants";
import { IUploadQuestion } from "@/types/types";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-hot-toast";

async function uploadQuestion(question: IUploadQuestion) {
  await axiosInstance.post("/questions", question);
}

export function useUploadQuestion(): UseMutateFunction<
  void,
  unknown,
  IUploadQuestion,
  unknown
> {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (question: IUploadQuestion) => uploadQuestion(question),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.questions]);
        toast("Question uploaded successfully", { position: "bottom-center" });
      },
    }
  );

  return mutate;
}
