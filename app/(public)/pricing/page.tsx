// app/(public)/pricing/page.tsx
import Navbar from "@/app/Components/organisms/Navbar";
import PageIntro from "@/app/Components/organisms/PageIntro";
import PricingGrid from "@/app/Components/organisms/PricingGrid";
import FAQSection from "@/app/Components/organisms/FAQSection";
import Footer from "@/app/Components/organisms/Footer";

export default function PricingPage() {
  return (
    <div className="bg-[#F5F1E6]">
      <Navbar activePage="pricing"  />

      <PageIntro
        eyebrow="PRICING"
        title="Priced like a society fee — simple, and per flat."
        description="One flat rate per society, based on how many flats you're billing. No per-resident add-ons, no surprise invoices for your invoicing tool."
      />

      <PricingGrid />
      <FAQSection />

      <Footer />
    </div>
  );
}