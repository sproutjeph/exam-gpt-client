"use client";

import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { closeSubscriptionModal } from "@/featuers/modals/modalSlice";
import { tools } from "@/constants/constants";

interface SubscriptionModalProps {}

const SubscriptionModal: FC<SubscriptionModalProps> = ({}) => {
  const dispatch = useAppDispatch();
  const { isSubscriptionModalOpen } = useAppSelector((state) => state.modals);

  return (
    <Dialog
      open={isSubscriptionModalOpen}
      onOpenChange={() => dispatch(closeSubscriptionModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
            <span className="flex items-center text-xl font-bold gap-x-2">
              Upgrade to Exam-GPT
              <Badge variant="premium" className="py-1 text-sm uppercase">
                pro
              </Badge>
            </span>
          </DialogTitle>
          <div className="pt-2 space-y-2 font-medium text-center text-zinc-900">
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className="flex items-center justify-between p-3 border-black/5"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="text-sm font-semibold">{tool.label}</div>
                </div>
                <Check className="w-5 h-5 text-primary" />
              </Card>
            ))}
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={false}
            onClick={() => {}}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionModal;
