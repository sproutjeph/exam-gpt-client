"use client";

import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { routes } from "@/constants/constants";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <aside className="flex flex-col h-full py-4 space-y-4 overflow-y-scroll text-white bg-mainColor">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Exam GPT
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter />
    </aside>
  );
};

export default Sidebar;
