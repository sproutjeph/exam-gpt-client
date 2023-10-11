"use client";

import {
  DashboardBottomNavbar,
  Loader,
  Navbar,
  Sidebar,
} from "@/components/base-components";
import { FC, Suspense, useEffect, useState } from "react";
import { useAppSelector } from "@/redux-store/hooks";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useLogOutQuery, useSocialAuthMutation } from "@/featuers/auth/authApi";
import toast from "react-hot-toast";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = ({ children }) => {
  const [socailAuth, { isSuccess }] = useSocialAuthMutation();
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useSession();
  // console.log(user);
  // console.log(data);
  const [loggedOut, setLoggedOut] = useState(false);

  const {} = useLogOutQuery(undefined, {
    skip: !loggedOut ? true : false,
  });

  useEffect(() => {
    if (!user) {
      if (data) {
        socailAuth({
          name: data.user?.name,
          email: data.user?.email,
          avatar: {
            public_id: "",
            url: data.user?.image,
          },
        });
      }
    }

    if (data === null) {
      if (isSuccess) {
        toast.success("Logged in successfully");
      }
    }

    if (data === null && user === null) {
      setLoggedOut(true);
      toast.success("Logged out successfully");
      redirect("/");
    }
  }, [data, isSuccess, socailAuth, user]);

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
