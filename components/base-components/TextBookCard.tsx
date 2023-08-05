import { ITextBook } from "@/types/types";
import { FC } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface TextBookCardProps {
  textBook: ITextBook;
}

const TextBookCard: FC<TextBookCardProps> = ({ textBook }) => {
  return (
    <Card className="flex flex-col bg-dark-3 w-[300px]">
      <div className="w-[300px] h-[300px] ">
        <Image
          src={textBook.image}
          width={500}
          height={500}
          alt="books"
          className="object-fill w-full h-full"
        />
      </div>
      <div className="flex justify-between m-8 bg-dark-1">
        <Button variant="main">Read</Button>
        <Button variant="secondary">Details</Button>
      </div>
    </Card>
  );
};

export default TextBookCard;
