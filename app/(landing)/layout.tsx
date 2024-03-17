import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const LandingLayout: FC<layoutProps> = async ({ children }) => {
  return (
    <main className="h-full overflow-auto bg-black w-full">{children}</main>
  );
};

export default LandingLayout;
