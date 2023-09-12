import MobileSidebar from "./MobileSidebar";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 shadow-sm bg-accent">
      <MobileSidebar />
      <div className="ml-10 ">
        <ModeToggle />
      </div>
      <div className="flex justify-end w-full">user</div>
    </nav>
  );
};

export default Navbar;
