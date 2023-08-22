"use client";

import { FC } from "react";

import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useAppDispatch } from "@/redux-store/hooks";
import { openSubscriptionModal } from "@/featuers/modals/modalSlice";
import { Card, CardContent } from "../ui/card";
import { MAX_FREE_COUNTS } from "@/constants/constants";
interface FreeCounterProps {
  isPro: boolean;
  apiLimitCount: number;
}

const FreeCounter: FC<FreeCounterProps> = ({ isPro, apiLimitCount }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="px-3 mt-auto mb-8">
      <Card className="border-0 bg-orange-50">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-sm text-center">
            <h6 style={{ color: "black" }}>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free API Call
            </h6>

            <Progress
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
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
