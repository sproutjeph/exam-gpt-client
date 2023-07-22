"use client";

import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <section className="space-y-5 font-bold text-center text-white pt-28 pb-14">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool to Prepare for your O-Level Exams</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ["JAMB.", "WASSEC.", "NECO.", "POST-UTME."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light md:text-xl text-zinc-400">
        Slove Exam past Questions with AI.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="p-4 font-semibold rounded-full md:text-lg md:p-6"
          >
            Start Sloving For Free
          </Button>
        </Link>
      </div>
      <div className="text-xs font-normal text-zinc-400 md:text-sm">
        No credit card required.
      </div>
    </section>
  );
};

export default LandingHero;
