"use client";

import { User } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import ModeToggle from "./ModeToggle";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { openLoginModal } from "@/featuers/modals/modalSlice";
import UserAvatar from "./UserAvatar";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useCurrentUser();

  return (
    <nav className="flex items-center p-4 shadow-sm bg-accent">
      <MobileSidebar />
      <div className="ml-10 ">
        <ModeToggle />
      </div>
      <div className="flex justify-end w-full">
        {user ? (
          <UserAvatar />
        ) : (
          <User
            className="cursor-pointer"
            onClick={() => dispatch(openLoginModal())}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
