import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 shadow-sm bg-accent">
      <MobileSidebar isPro={false} apiLimitCount={5} />
      <div className="ml-10 ">
        <ModeToggle />
      </div>
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
