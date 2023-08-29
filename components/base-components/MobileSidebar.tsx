"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useAppSelector } from "@/redux-store/hooks";

const MobileSidebar = () => {
  const { apiLimitCount } = useAppSelector((state) => state.apiLimitCount);
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={false} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
