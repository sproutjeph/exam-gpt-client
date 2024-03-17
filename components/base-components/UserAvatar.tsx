"use client";

import { Avatar, AvatarImage } from "../ui/avatar";
import { useAppDispatch } from "@/redux-store/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOutIcon, Settings } from "lucide-react";
import { openManageProfileModal } from "@/featuers/modals/modalSlice";

const UserAvatar = ({ user }: { user: null }) => {
  const dispath = useAppDispatch();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarImage src={"/no-photo.jpg"} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={"/no-photo.jpg"} />
            </Avatar>
            <div className="">
              <h4 className="text-xs">jeph</h4>
              <h6 className="text-xs text-primary-foreground/50">
                example@gamil.com
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

          <form
            action="/auth/signout"
            method="post"
            className=" px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-muted"
          >
            <button
              type="submit"
              className="text-sm border-0 outline-none flex items-center gap-8"
            >
              <LogOutIcon className="w-4 h-4" />
              Log out
            </button>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserAvatar;
