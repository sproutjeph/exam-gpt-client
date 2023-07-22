import {
  LandingContent,
  LandingHero,
  LandingNavbar,
  StoreDownLoadBtns,
} from "@/components/base-components";

export default function LandingPage() {
  return (
    <main className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <StoreDownLoadBtns />
      <LandingContent />
    </main>
  );
}
