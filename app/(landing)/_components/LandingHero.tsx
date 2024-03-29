"use client";

import TypewriterComponent from "typewriter-effect";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useAppDispatch } from "@/redux-store/hooks";
import { openLoginModal } from "@/featuers/modals/modalSlice";

const LandingHero = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="space-y-5 font-bold text-center text-white pt-14">
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
        <Link href="/dashboard">
          <Button
            variant="premium"
            className="p-4 font-semibold transition-all rounded-full md:text-lg md:p-6 hover:scale-105"
            // onClick={()=> dispatch(openLoginModal)}
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
