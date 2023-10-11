"use client";

import { Avatar, AvatarImage } from "../ui/avatar";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Loader2, LogOutIcon, Settings } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { redirect } from "next/navigation";
import { openManageProfileModal } from "@/featuers/modals/modalSlice";
import { signOut } from "next-auth/react";
import { useLogOutQuery } from "@/featuers/auth/authApi";

const UserAvatar = () => {
  const dispath = useAppDispatch();
  const [loggedOut, setLoggedOut] = useState(false);

  const { user } = useAppSelector((state) => state.auth);
  const { isLoading } = useLogOutQuery(undefined, {
    skip: !loggedOut ? true : false,
  });

  async function logoutUser() {
    setLoggedOut(true);
    await signOut();
    redirect("/");
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarImage src={user?.avatar?.url || "/no-photo.jpg"} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user?.avatar?.url || "/no-photo.jpg"} />
            </Avatar>
            <div className="">
              <h4 className="text-xs">{user?.name}</h4>
              <h6 className="text-xs text-primary-foreground/50">
                {user?.email}
              </h6>
            </div>
          </div>
          <div
            className="flex items-center gap-8 px-6 py-2 mx-2 mt-6 rounded-sm cursor-pointer hover:bg-muted"
            onClick={() => dispath(openManageProfileModal())}
          >
            <Settings className="w-4 h-4" />
            <h6 className="text-sm">Manage Account</h6>
          </div>
          <div
            className="flex items-center gap-8 px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-muted"
            onClick={() => logoutUser()}
          >
            <LogOutIcon className="w-4 h-4" />
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <h6 className="text-sm">Log out</h6>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserAvatar;
