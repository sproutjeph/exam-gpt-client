import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Navbar from "./dashboard/_components/Navbar";
import { getUserByUserId, saveUser } from "@/utils/user";
import { Sidebar } from "@/components/base-components";
import { redirect } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  const { isAuthenticated, getPermission, getUser } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }

  const permission = await getPermission("upload:question");
  const isAdmin = permission?.isGranted as boolean | null;
  const userInDB = await getUserByUserId(user?.id);

  if (!userInDB) {
    const name = `${user?.family_name} ${user?.given_name}`;
    saveUser({
      userId: String(user?.id),
      email: String(user?.email),
      name,
      // @ts-ignore
      picture: user?.picture,
    });
  }

  return (
    <section className="relative min-h-full dark:bg-dark-1 bg-gray-50">
      <div className="hidden h-full md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar
          isAdmin={isAdmin}
          apiUseageCount={Number(userInDB?.apiUseageCount) | 0}
        />
      </div>
      <main className="pb-10 md:pl-64 ">
        <Navbar isAdmin apiUseageCount={Number(userInDB?.apiUseageCount) | 0} />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
