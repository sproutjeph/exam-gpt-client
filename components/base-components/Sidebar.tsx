"use client";

import { Dispatch, SetStateAction, memo, useEffect, useState } from "react";
import { MAX_FREE_COUNTS, routes } from "@/constants/constants";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

interface SidebarProps {
  isAdmin: boolean | null;
  apiUseageCount: number;
  setIsSheetOpen?: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
}

const Sidebar = memo(function Sidebar({
  isAdmin,
  apiUseageCount,
  setIsSheetOpen,
  isMobile,
}: SidebarProps) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [expand, setExpand] = useState(true);

  const showOnCollasp = !isMobile && !expand;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <aside
      className={cn(
        "flex flex-col h-screen py-4 space-y-4 overflow-y-scroll border dark:bg-dark-2 bg-gray-100  md:flex md:flex-col  md:inset-y-0 z-40",
        !isMobile && expand && "md:w-64 hidden",
        !isMobile && !expand && "md:w-24 hidden"
      )}
    >
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1
            className={cn(
              "text-2xl font-bold",
              poppins.className,
              showOnCollasp && "hidden"
            )}
          >
            Exam GPT
          </h1>
        </Link>
        <div className="space-y-1">
          {isAdmin && (
            <Link
              href="/admin-dashboard"
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition",
                pathname === "/admin-dashboard"
                  ? "dark:text-white dark:bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div
                className={cn(
                  "flex items-center flex-1 gap-2",
                  showOnCollasp && "flex-col"
                )}
              >
                <User className={cn("h-5 w-5")} />
                Admin
              </div>
            </Link>
          )}
          {routes.map((route) => {
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer dark:hover:text-white dark:hover:bg-white/10 rounded-lg transition hover:bg-gray-100 hover:text-black",
                  pathname === route.href
                    ? "dark:text-white dark:bg-white/10"
                    : "text-zinc-400"
                )}
                onClick={() => setIsSheetOpen && setIsSheetOpen(false)}
              >
                <div
                  className={cn(
                    "flex items-center flex-1 gap-2",
                    showOnCollasp && "justify-center"
                  )}
                >
                  <route.icon className={cn("h-5 w-5", route.color)} />

                  <p className={cn(showOnCollasp && "hidden")}>{route.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {!isMobile ? (
        <Button
          size="icon"
          className={cn(
            "rounded-full fixed  bg-primary/25 hover:bg-primary/35 top-[70%]",
            expand ? " left-[235px]" : "left-[75px]"
          )}
          onClick={() => setExpand(!expand)}
        >
          {expand ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      ) : null}

      {showOnCollasp ? (
        <div className="flex flex-col justify-center items-center">
          <p className="dark:text-white">{`${apiUseageCount} / ${MAX_FREE_COUNTS}`}</p>
          <p>API calls</p>
        </div>
      ) : (
        <FreeCounter apiUseageCount={apiUseageCount} />
      )}
    </aside>
  );
});

export default Sidebar;
