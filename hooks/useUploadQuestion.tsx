import { IQuestion } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

async function uploadQuestion(question: IQuestion) {
  await axios.post("http://localhost:8080/api/question", question);
}

export function useUploadQuestion() {
  const { mutate } = useMutation((question: IQuestion) =>
    uploadQuestion(question)
  );

  return mutate;
}
