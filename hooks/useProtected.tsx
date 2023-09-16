"use client";
import { redirect } from "next/navigation";
import useAuth from "./useAuth";
import { FC } from "react";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected: FC<ProtectedProps> = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <>{children}</> : redirect("/");
};
export default Protected;
