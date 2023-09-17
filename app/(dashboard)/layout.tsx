"use client";

import {
  DashboardBottomNavbar,
  Loader,
  Navbar,
  Sidebar,
} from "@/components/base-components";
import { FC, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { loadCurrentUser, useGetCurrentUser } from "@/hooks/useGetCurrentUser";
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
  const { currentUser, isLoading } = useGetCurrentUser();
  const { user } = useAppSelector((state) => state.user);
  // const { data } = useSession();
  console.log(currentUser);

  async function refreshToken() {
    try {
      const res = await axiosInstance.get("/refresh");
    } catch (error) {
      console.log(error);
    }
  }
  // async function socialAuth() {
  //   try {
  //     const res = await axiosInstance.post("/social-auth", {
  //       email: data?.user?.email,
  //       name: data?.user?.name,
  //       avatar: data?.user?.image,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   if (data) {
  //     socialAuth();
  //     dispatch(saveUser(data?.user as IUser));
  //   }
  // }, [data]);

  useEffect(() => {
    loadCurrentUser()();
    dispatch(saveUser(currentUser));
    // Refresh the token every 9 minutes (540,000 milliseconds)
    const refreshTokenInterval = setInterval(() => {
      refreshToken();
    }, 540000);
    return () => {
      clearInterval(refreshTokenInterval);
    };
  }, [currentUser, dispatch]);

  if (!isLoading && !currentUser && !user) {
    redirect("/");
  }
  return (
    <section className="relative min-h-full">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="pb-10 md:pl-64">
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
        {/* <Custom>{children}</Custom> */}
        <DashboardBottomNavbar />
      </main>
    </section>
  );
};

export default DashboardLayout;

// interface CustomProps {
//   children: React.ReactNode;
// }

// const Custom: FC<CustomProps> = ({ children }) => {
//   const { isLoading } = useGetCurrentUser();

//   return <>{isLoading ? <Loader /> : <>{children}</>}</>;
// };
