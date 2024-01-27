"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  closeManageProfileModal,
  openChangeProfileImageModal,
  openChangePasswordModal,
} from "@/featuers/modals/modalSlice";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const ManageProfileModal = () => {
  const dispatch = useAppDispatch();
  const { user } = useKindeBrowserClient();

  const { isManageProfileModalOpen } = useAppSelector((state) => state.modals);

  return (
    <Dialog
      open={isManageProfileModalOpen}
      onOpenChange={() => dispatch(closeManageProfileModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">Account</DialogTitle>
          <span className="text-sm text-center text-muted-foreground">
            Manage your account information
          </span>
        </DialogHeader>

        <div className="">
          <div className="">
            <h4>Profile</h4>

            <Separator />
            <div className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted">
              <Avatar className="w-12 h-12 ">
                <AvatarImage src={user?.picture || "/no-photo.jpg"} />
              </Avatar>
              <h4>{user?.family_name}</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>
          <div className="">
            <h4>Email Address</h4>

            <Separator />
            <div className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted">
              <h4>{user?.email}</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>
          <div className="">
            <h4>Password</h4>

            <Separator />
            <div
              className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted"
              onClick={() => dispatch(openChangePasswordModal())}
            >
              <h4>Change Password</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>

          <div className="">
            <h4>Profile Image</h4>

            <Separator />
            <div
              className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted"
              onClick={() => dispatch(openChangeProfileImageModal())}
            >
              <Avatar className="w-12 h-12 ">
                <AvatarImage src={user?.picture || "/no-photo.jpg"} />
              </Avatar>
              <h4>Change Profile Image</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManageProfileModal;
