import { Navbar, Sidebar } from "@/components/base-components";
import connectMongoDB from "@/lib/mongoDB";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const getQuestionsDataFromDb = async () => {
  try {
    await connectMongoDB();
    const data = await fetch("http://localhost:3000/api/questions");

    // return data.json();
  } catch (error) {
    console.log(error);
  }
};

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  // const questions = await getQuestionsDataFromDb();

  // console.log(`questions: ${questions} `);

  return (
    <section className="relative h-full bg-black">
      <div className="hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar isPro={false} apiLimitCount={5} />
      </div>
      <main className="pb-10 md:pl-72">
        <Navbar />

        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
