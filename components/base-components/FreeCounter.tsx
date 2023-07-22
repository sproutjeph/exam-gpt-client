"use client";

import { FC } from "react";
import { Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useAppDispatch } from "@/redux-store/hooks";
import { openSubscriptionModal } from "@/featuers/modals/modalSlice";

interface FreeCounterProps {
  isPro: boolean;
  apiLimitCount: number;
}

const FreeCounter: FC<FreeCounterProps> = ({
  isPro = false,
  apiLimitCount = 1,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-sm text-center text-white">
            <p>
              {apiLimitCount} / {5} Free Generations
            </p>
            <Progress className="h-3" value={(apiLimitCount / 0) * 100} />
          </div>
          <Button
            variant="premium"
            onClick={() => dispatch(openSubscriptionModal())}
            className="w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
