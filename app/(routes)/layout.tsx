import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserByUserId, saveUser } from "@/utils/user";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/base-components";
import Navbar from "./dashboard/_components/Navbar";
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
    <section className="relative h-screen dark:bg-dark-1 bg-gray-50 flex overflow-y-hidden">
      <Sidebar
        isAdmin={isAdmin}
        apiUseageCount={Number(userInDB?.apiUseageCount) | 0}
        isMobile={false}
      />
      <main className="pb-10 flex-1">
        <Navbar isAdmin apiUseageCount={Number(userInDB?.apiUseageCount) | 0} />
        <ScrollArea className="h-[900px]">{children}</ScrollArea>
      </main>
    </section>
  );
};

export default DashboardLayout;
