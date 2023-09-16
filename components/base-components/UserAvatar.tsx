"use client";

import { Avatar, AvatarImage } from "../ui/avatar";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Loader2, LogOutIcon, Settings } from "lucide-react";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { clearUser } from "@/featuers/userSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { openProfileModal } from "@/featuers/modals/modalSlice";

const UserAvatar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispath = useAppDispatch();
  console.log(user);

  async function logoutUser() {
    try {
      const res = await axiosInstance.get("/logout-user");
      setLoading(true);
      if (res?.data?.success === true) {
        toast.success(`${res?.data?.message || "Logged out successfully"}`);
        setLoading(false);
        dispath(clearUser());
        router.push("/");
        // window.location.reload();
      }
    } catch (error: any) {
      toast.error(`${error.response.data.msg}`);
      setLoading(false);
    }
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="w-10 h-10 ">
            <AvatarImage src={user?.imageUrl || "/no-photo.jpg"} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user?.imageUrl || "/no-photo.jpg"} />
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
            onClick={() => dispath(openProfileModal())}
          >
            <Settings className="w-4 h-4" />
            <h6 className="text-sm">Manage Account</h6>
          </div>
          <div
            className="flex items-center gap-8 px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-muted"
            onClick={() => logoutUser()}
          >
            <LogOutIcon className="w-4 h-4" />
            {loading ? (
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
