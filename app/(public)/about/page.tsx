// app/(public)/about/page.tsx
import Navbar from "@/app/Components/organisms/Navbar";
import AboutIntro from "@/app/Components/organisms/AboutIntro";
import MissionSection from "@/app/Components/organisms/MissionSection";
import ValuesSection from "@/app/Components/organisms/ValuesSection";
import CTABanner from "@/app/Components/molecules/CTABanner";
import Footer from "@/app/Components/organisms/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="about" />
      <AboutIntro />
      <MissionSection />
      <ValuesSection />
      <CTABanner title="Bring your society's ledger online." buttonText="Try the demo" />
      <Footer />
    </>
  );
}