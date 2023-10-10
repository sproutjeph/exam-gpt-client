"use client";

import {
  DashboardBottomNavbar,
  Loader,
  Navbar,
  Sidebar,
} from "@/components/base-components";
import { FC, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";

import { saveUser } from "@/featuers/userSlice";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { axiosInstance } from "@/lib/axiosInstance";
import { IUser } from "@/types/types";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  // const { data } = useSession();
  console.log(user);

  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
        <DashboardBottomNavbar />
      </main>
    </section>
  );
};

export default DashboardLayout;
