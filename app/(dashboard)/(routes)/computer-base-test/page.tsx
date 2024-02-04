import ComputerBaseTestTabs from "./_components/ComputerBaseTestTabs";

const ComputerBaseTestPage = () => {
  return (
    <main className="relative mx-2 mb-16 overflow-scroll sm:mx-10">
      <h1 className="mt-8 text-xl text-center">Test Your Knowledge</h1>

      <h6 className="mb-4 text-center">Select the subjects you want </h6>

      <ComputerBaseTestTabs />
    </main>
  );
};

export default ComputerBaseTestPage;
