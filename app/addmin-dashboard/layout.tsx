import { AddminNavbar } from "@/components/base-components";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="">
      <AddminNavbar />
      <div className="container py-8">{children}</div>
    </main>
  );
};

export default layout;
