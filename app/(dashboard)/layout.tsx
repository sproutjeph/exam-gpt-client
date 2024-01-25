"use client";

import { Loader, Navbar, Sidebar } from "@/components/base-components";
import { FC, Suspense, useEffect, useState } from "react";
import { useAppSelector } from "@/redux-store/hooks";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import toast from "react-hot-toast";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = ({ children }) => {
  const { data } = useSession();

  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </section>
  );
};

export default DashboardLayout;
