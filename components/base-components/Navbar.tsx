"use client";

import { User } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import ModeToggle from "./ModeToggle";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { openRegisterUserModal } from "@/featuers/modals/modalSlice";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

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
            onClick={() => dispatch(openRegisterUserModal())}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
