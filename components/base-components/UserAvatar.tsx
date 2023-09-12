import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserAvatar = () => {
  const { user } = { user: {} as any };

  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
