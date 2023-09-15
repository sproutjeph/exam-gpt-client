import { Avatar, AvatarImage } from "../ui/avatar";
import { useAppSelector } from "@/redux-store/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOutIcon, Settings } from "lucide-react";

const UserAvatar = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

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
          <div className="flex items-center gap-8 px-6 py-2 mx-2 mt-6 rounded-sm cursor-pointer hover:bg-muted">
            <Settings className="w-4 h-4" />
            <h6 className="text-sm">Manage Account</h6>
          </div>
          <div className="flex items-center gap-8 px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-muted">
            <LogOutIcon className="w-4 h-4" />
            <h6 className="text-sm">Log out</h6>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserAvatar;
