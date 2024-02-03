import GoBack from "@/components/base-components/GoBack";
import { Heading } from "@/components/base-components";
import AskAiForm from "./_components/AskAiForm";
import { MessageSquare } from "lucide-react";
import { Suspense } from "react";

const AskAiPage = () => {
  return (
    <div className="flex h-[90vh] w-full max-w-5xl flex-col px-2 pt-2 mx-auto">
      <Heading
        title="Slove With AI"
        description="Our most advanced AI  model"
        icon={MessageSquare}
        iconColor="text-white"
        bgColor="bg-violet-500/10"
      />
      <GoBack />
      <Suspense fallback={<p>Loading...</p>}>
        <AskAiForm />
      </Suspense>
    </div>
  );
};

export default AskAiPage;
