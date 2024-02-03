"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { FC } from "react";

interface MobileSidebarProps {
  isAdmin: boolean | undefined;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ isAdmin }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isAdmin={isAdmin} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
