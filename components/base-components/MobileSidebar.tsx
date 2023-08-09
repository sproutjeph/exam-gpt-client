"use client";
import { FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar: FC<MobileSidebarProps> = ({
  apiLimitCount = 0,
  isPro = false,
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
