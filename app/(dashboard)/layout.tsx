"use client";

import {
  DashboardBottomNavbar,
  Navbar,
  Sidebar,
} from "@/components/base-components";
import { FC, Suspense, useEffect } from "react";
import Loading from "./(routes)/loading";
import { useAppDispatch } from "@/redux-store/hooks";
import { loadCurrentUser, useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { saveUser } from "@/featuers/userSlice";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { currentUser } = useGetCurrentUser();
  console.log(currentUser);

  useEffect(() => {
    loadCurrentUser()();
    dispatch(saveUser(currentUser));
  }, [currentUser, dispatch]);
  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <DashboardBottomNavbar />
      </main>
    </section>
  );
};

export default DashboardLayout;
