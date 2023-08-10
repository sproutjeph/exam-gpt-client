"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IQuestion } from "@/types/types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux-store/hooks";
import { saveCurrentQuestion } from "@/featuers/askAiSlice";

interface QuestionCardProps {
  question: IQuestion;
  index: number;
  cbTest: boolean;
}

const QuestionCard: FC<QuestionCardProps> = ({ question, index, cbTest }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <article>
      <Card className="w-[350px] md:w-[450px]  border-dark-4">
        <CardHeader>
          <CardTitle className="text-center">Question ({index + 1})</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{question.question}</p>
          <hr className="my-2" />

          <h4 className="mb-2 text-center text-mainColor">
            Select from the Options
          </h4>

          <RadioGroup defaultValue="">
            {Object.keys(question.option).map((optionKey) => (
              <div key={optionKey} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={optionKey}
                  id={optionKey}
                  className="bg-white"
                />

                <Label htmlFor={optionKey}>
                  <span className="mr-4 capitalize">{optionKey}:</span>{" "}
                  {question.option[optionKey]}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <hr className="my-2" />

          {!cbTest && (
            <CardFooter className="flex justify-between gap-4 px-0 pt-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="" variant="outline">
                    Check Answer
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-32 h-8 py-1 font-bold text-center">
                  {question.correctOption}
                </PopoverContent>
              </Popover>

              <Button
                variant="default"
                className=""
                onClick={() => {
                  dispatch(saveCurrentQuestion(question.question));
                  router.push("/ask-ai");
                }}
              >
                Ask AI To Slove
              </Button>
            </CardFooter>
          )}
        </CardContent>
      </Card>
    </article>
  );
};

export default QuestionCard;
