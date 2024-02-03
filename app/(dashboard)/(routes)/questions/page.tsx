import GoBack from "@/components/base-components/GoBack";
import Questions from "./_components/Questions";
import { Suspense } from "react";
import { Loader } from "@/components/base-components";

const QuestionsPage = () => {
  return (
    <main className="mt-8 overflow-scroll">
      <GoBack />
      <Suspense fallback={<Loader />}>
        <Questions />
      </Suspense>
    </main>
  );
};

export default QuestionsPage;
