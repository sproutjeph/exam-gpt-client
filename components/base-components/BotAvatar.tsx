import { Avatar, AvatarImage } from "../ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage className="rounded-full" src="/bot.png" />
    </Avatar>
  );
};

export default BotAvatar;
