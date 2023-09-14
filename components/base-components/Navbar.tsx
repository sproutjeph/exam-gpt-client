"use client";

import { User } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import ModeToggle from "./ModeToggle";
import { useAppDispatch } from "@/redux-store/hooks";
import { openRegisterUserModal } from "@/featuers/modals/modalSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className="flex items-center p-4 shadow-sm bg-accent">
      <MobileSidebar />
      <div className="ml-10 ">
        <ModeToggle />
      </div>
      <div className="flex justify-end w-full">
        <User
          className="cursor-pointer"
          onClick={() => dispatch(openRegisterUserModal())}
        />
      </div>
    </nav>
  );
};

export default Navbar;
