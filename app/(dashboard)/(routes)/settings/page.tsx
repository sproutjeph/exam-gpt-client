import { AccountProfile } from "@/components/base-components";
import PaymentMethod from "@/components/base-components/PaymentMethods";
import { FC } from "react";

interface pageProps {}

const SettingsPage: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-col justify-start py-10 mx-auto sm:px-10">
      <p className="text-center text-base-regular">Update your profile.</p>

      <section className="grid gap-8 mt-4 lg:grid-cols-2">
        <AccountProfile btnTitle="Update" />
        <PaymentMethod />
      </section>
    </main>
  );
};

export default SettingsPage;
