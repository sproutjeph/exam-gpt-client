import { Heading } from "@/components/base-components";

import { MessageSquare } from "lucide-react";
import AskAiForm from "./_components/AskAiForm";
import GoBack from "@/components/base-components/GoBack";

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

      <AskAiForm />
    </div>
  );
};

export default AskAiPage;
