"use client";

import { FC } from "react";
import ModeToggle from "./ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";

interface AddminNavbarProps {}

const AddminNavbar: FC<AddminNavbarProps> = ({}) => {
  return (
    <nav className="px-4 py-2 border-b border-gray-200 ">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto ">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <Link href="/dashboard">
          <Button variant="ghost">Main Dashboard</Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default AddminNavbar;
