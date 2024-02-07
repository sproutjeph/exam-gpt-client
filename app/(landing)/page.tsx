import {
  LandingContent,
  LandingHero,
  LandingNavbar,
  StoreDownLoadBtns,
} from "@/components/base-components";

export default function LandingPage() {
  return (
    <main className="mb-8">
      <div className="max-w-screen-xl mx-auto">
        <LandingNavbar />
        <LandingHero />
        <StoreDownLoadBtns />
      </div>
      <LandingContent />
    </main>
  );
}
