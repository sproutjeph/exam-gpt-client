import { FC } from "react";

import { ITextBook } from "@/types/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

interface TextBookCardProps {
  textBook: ITextBook;
}

const TextBookCard: FC<TextBookCardProps> = ({ textBook }) => {
  return (
    <Card>
      <CardHeader title={textBook.subject}>
        <p> {textBook.subject.slice(0, 1).toUpperCase()}</p>
        <Image
          height={194}
          width={450}
          src={textBook.image}
          alt={textBook.subject}
          className="w-full"
        />
      </CardHeader>

      <CardContent>
        <p className="text-sm">{textBook.title}</p>
      </CardContent>
    </Card>
  );
};

export default TextBookCard;
