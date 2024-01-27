"use client";

import { Avatar, AvatarImage } from "../ui/avatar";
import { useAppDispatch } from "@/redux-store/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOutIcon, Settings } from "lucide-react";
import { openManageProfileModal } from "@/featuers/modals/modalSlice";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

const UserAvatar = ({ user }: { user: KindeUser }) => {
  const dispath = useAppDispatch();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarImage src={user?.picture || "/no-photo.jpg"} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user?.picture || "/no-photo.jpg"} />
            </Avatar>
            <div className="">
              <h4 className="text-xs">{user.family_name}</h4>
              <h6 className="text-xs text-primary-foreground/50">
                {user.email}
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

          <LogoutLink className="flex items-center gap-8 px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-muted">
            <LogOutIcon className="w-4 h-4" />
            <h6 className="text-sm">Log out</h6>
          </LogoutLink>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserAvatar;
