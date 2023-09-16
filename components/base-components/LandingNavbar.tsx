"use client";

import { openLoginModal } from "@/featuers/modals/modalSlice";
import { useAppDispatch } from "@/redux-store/hooks";
import { Montserrat } from "next/font/google";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingNavbar = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Exam-GPT
        </h1>
      </Link>
      <div
        className="flex items-center gap-x-2"
        onClick={() => dispatch(openLoginModal())}
      >
        <Button variant="main" className="rounded-full hover:bg-mainColor/90">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
