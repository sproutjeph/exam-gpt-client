import GoBack from "@/components/base-components/GoBack";
import Questions from "./_components/Questions";

function QuestionsPage({
  searchParams,
}: {
  searchParams: { examType: string; subject: string; examYear: string };
}) {
  return (
    <main className="mt-8 overflow-scroll mx-3">
      <GoBack />
      <Questions searchParams={searchParams} />
    </main>
  );
}

export default QuestionsPage;
