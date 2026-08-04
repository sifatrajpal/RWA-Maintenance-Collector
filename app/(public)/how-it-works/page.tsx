// app/(public)/how-it-works/page.tsx
import Navbar from "@/app/Components/organisms/Navbar";
import PageIntro from "@/app/Components/organisms/PageIntro";
import StepsSection from "@/app/Components/organisms/StepsSection";
import SecuritySection from "@/app/Components/organisms/SecuritySection";
import CTABanner from "@/app/Components/molecules/CTABanner";
import Footer from "@/app/Components/organisms/Footer";

export default function HowItWorksPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <Navbar activePage="how-it-works" />

      <PageIntro
        eyebrow="HOW BAHI WORKS"
        title="From flat list to first payment, in three passes of the ledger."
        description="No migration project, no training day. Most secretaries have their society live before the next billing cycle."
      />

      <StepsSection />
      <SecuritySection />

      <CTABanner title="Ready to close the register?" buttonText="Try the demo" />

      <Footer />
    </div>
  );
}