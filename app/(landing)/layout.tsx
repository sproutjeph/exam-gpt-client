import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const LandingLayout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="h-full overflow-auto bg-black">
      <div className="w-full h-full max-w-screen-xl mx-auto">{children}</div>
    </main>
  );
};

export default LandingLayout;
