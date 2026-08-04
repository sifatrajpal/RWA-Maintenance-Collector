import Navbar from "@/app/Components/organisms/Navbar";
import Hero from "@/app/Components/organisms/Hero";
import BillingPanel from "@/app/Components/organisms/BillingPanel";
import ProblemSection from "@/app/Components/organisms/ProblemSection";
import WhatChangesSection from "@/app/Components/organisms/WhatChangesSection";
import PricingTeaser from "@/app/Components/organisms/PricingTeaser";
import CTABanner from "@/app/Components/molecules/CTABanner";
import Footer from "@/app/Components/organisms/Footer";





export default function HomePage() {
  return (
    <div className="bg-[#F5F1E6]">
      <Navbar activePage="home" />

      <Hero
        eyebrow="MAINTENANCE COLLECTION FOR RWAs"
        title="The society ledger, closed for good on WhatsApp."
        description="Bahi replaces reminder threads and cash registers with automated monthly bills, one-tap UPI payments, and a running ledger every resident can see for themselves."
        primaryLabel="See how it works"
        primaryHref="/public/how-it-works"
        primaryVariant="outline"
        secondaryLabel="Try the demo"
        secondaryHref="/login/login"
        secondaryVariant="dark"
      />

      <BillingPanel />
      <ProblemSection />
      <WhatChangesSection />
      <PricingTeaser />

      <CTABanner
        title={"Close the register.\nOpen the ledger."}
        buttonText="Try the demo"
      />

      <Footer />
    </div >
  );
}