import { AccountProfile } from "@/components/base-components";
import { FC } from "react";

interface pageProps {}

const SettingsPage: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-col justify-start max-w-3xl px-10 py-10 mx-auto text-white">
      <p className="text-center text-base-regular text-light-2">
        Update your profile.
      </p>

      <section className="p-10 mt-4 bg-dark-2">
        <AccountProfile btnTitle="Update" />
      </section>
    </main>
  );
};

export default SettingsPage;
