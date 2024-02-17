import TextBookCard from "@/components/base-components/TextBookCard";
import { textBooks } from "@/utils/data";

const TextBooksPage = () => {
  return (
    <main className="mx-3">
      <h1 className="text-2xl text-center my-8">Text Books</h1>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {textBooks.map((textBook) => (
          <TextBookCard textBook={textBook} />
        ))}
      </ul>
    </main>
  );
};

export default TextBooksPage;
