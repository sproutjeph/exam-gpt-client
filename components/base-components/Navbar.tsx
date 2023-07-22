import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 bg-gray-900">
      <MobileSidebar isPro={false} apiLimitCount={5} />
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
