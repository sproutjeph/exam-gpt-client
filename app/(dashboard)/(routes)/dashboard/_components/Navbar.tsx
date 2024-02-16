"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import MobileSidebar from "@/components/base-components/MobileSidebar";
import { User } from "lucide-react";
import ModeToggle from "@/components/base-components/ModeToggle";
import UserAvatar from "@/components/base-components/UserAvatar";
import { FC } from "react";

interface NavbarProps {
  isAdmin: boolean | null;
  apiUseageCount: number;
}
const Navbar: FC<NavbarProps> = ({ isAdmin, apiUseageCount }) => {
  const { user } = useKindeBrowserClient();
  return (
    <nav className="flex items-center p-4 shadow-sm border-b">
      <MobileSidebar isAdmin={isAdmin} apiUseageCount={apiUseageCount} />
      <div className="ml-10 ">
        <ModeToggle />
      </div>
      <div className="flex justify-end w-full">
        {user ? (
          <UserAvatar user={user} />
        ) : (
          <User className="cursor-pointer" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
