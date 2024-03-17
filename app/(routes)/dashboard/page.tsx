import DashboardCard from "./_components/DashboardCard";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

const DashboardPage = async () => {
  return (
    <main className="mx-4 my-4">
      <h1 className="text-2xl">👋 Hi Good Morning Jeph!</h1>
      <p className="text-sm text-muted-foreground ml-8 mt-1 mb-8">
        Here's your summary for today
      </p>
      <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <DashboardCard
          description="Qeustions solved"
          imageUrl="/exams.svg"
          value="10"
        />
        <DashboardCard
          description="Books Read"
          imageUrl="/study.svg"
          value="20"
        />
        <DashboardCard
          description="Free User"
          imageUrl="/study.svg"
          value="Sub"
        />
        <DashboardCard
          description="API calls"
          imageUrl="/mobile_testing.svg"
          value="0"
        />
      </div>
    </main>
  );
};

export default DashboardPage;
