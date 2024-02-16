"use client";

import { openSubscriptionModal } from "@/featuers/modals/modalSlice";
import { MAX_FREE_COUNTS } from "@/constants/constants";
import { useAppDispatch } from "@/redux-store/hooks";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { FC } from "react";

interface FreeCounterProps {
  apiUseageCount: number;
}

const FreeCounter: FC<FreeCounterProps> = ({ apiUseageCount }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="px-3 mt-auto mb-8">
      <Card className="border dark:bg-dark-3 dark:border-gray-600">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-sm text-center">
            <h6>
              {apiUseageCount} / {MAX_FREE_COUNTS} Free API Call
            </h6>

            <Progress
              value={(Number(apiUseageCount) / MAX_FREE_COUNTS) * 100}
              color=""
            />
          </div>
          <Button
            variant="premium"
            onClick={() => dispatch(openSubscriptionModal())}
            className="w-full"
          >
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
