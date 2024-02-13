import { getAllSubject } from "@/actions/getAllSubjects";
import ExamsTabs from "./_components/ExamsTabs";

const ExamsPage = async () => {
  // const subjects = await getAllSubject();
  return (
    <main className="py-8 sm:px-8">
      <ExamsTabs />
    </main>
  );
};

export default ExamsPage;
