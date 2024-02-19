"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingNavbar = () => {
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
      <LoginLink className="rounded-full hover:bg-mainColor/90">
        <Button variant="main">Get Started</Button>
      </LoginLink>
    </nav>
  );
};

export default LandingNavbar;
