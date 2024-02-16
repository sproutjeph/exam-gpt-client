"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { FC, useState } from "react";

interface MobileSidebarProps {
  isAdmin: boolean | null;
  apiUseageCount: number;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ isAdmin, apiUseageCount }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger>
        <div className=" md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar
          isAdmin={isAdmin}
          apiUseageCount={apiUseageCount}
          setIsSheetOpen={setIsSheetOpen}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
