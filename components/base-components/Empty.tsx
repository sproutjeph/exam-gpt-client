import Image from "next/image";
import { FC } from "react";

interface EmptyProps {
  label: string;
}

const Empty: FC<EmptyProps> = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-20">
      <div className="relative h-72 w-72">
        <Image src="/empty.png" fill alt="Empty" />
      </div>
      <p className="text-sm text-center text-muted-foreground">{label}</p>
    </div>
  );
};

export default Empty;
