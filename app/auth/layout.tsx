import React, { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="flex items-center justify-center h-full">{children}</main>
  );
};

export default AuthLayout;
