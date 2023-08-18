import { AccountProfile } from "@/components/base-components";
import { FC } from "react";

interface pageProps {}

const SettingsPage: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-col justify-start max-w-3xl py-10 mx-auto sm:px-10">
      <p className="text-center text-base-regular">Update your profile.</p>

      <section className="mt-4">
        <AccountProfile btnTitle="Update" />
      </section>
    </main>
  );
};

export default SettingsPage;
