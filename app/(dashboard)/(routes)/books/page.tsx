"use client";

import { TextBookCard } from "@/components/base-components";
import { textBooks } from "@/constants/constants";
import { FC } from "react";

interface pageProps {}

const BooksPage: FC<pageProps> = ({}) => {
  return (
    <main className="mx-8">
      <h2 className="my-8 text-center text-white">Text Books</h2>

      <ul className="grid items-center justify-center px-4 space-y-4 lg:grid-cols-2 lg:px-8 xl:grid-cols-3">
        {textBooks.map((textBook) => (
          <li key={textBook.id}>
            <TextBookCard textBook={textBook} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BooksPage;
