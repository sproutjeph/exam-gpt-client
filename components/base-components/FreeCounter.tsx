"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Button as ButtonSCN } from "../ui/button";
interface FreeCounterProps {
  isPro: boolean;
  apiLimitCount: number;
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const FreeCounter: FC<FreeCounterProps> = ({ isPro, apiLimitCount }) => {
  return (
    <div className="px-3 mt-auto mb-8">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-sm text-center text-white">
            <Typography style={{ color: "black" }}>
              {apiLimitCount} / {5} Free API Call
            </Typography>
            <BorderLinearProgress variant="determinate" value={50} />
          </div>
          <ButtonSCN
            variant="premium"
            // onClick={() => dispatch(openSubscriptionModal())}
            className="w-full"
          >
            Upgrade
          </ButtonSCN>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
