// components/organisms/PricingTeaser.tsx
import SectionHeader from "../molecules/SectionHeader";
import { Button } from "../atoms/Button";
import Link from "next/link";

export default function PricingTeaser() {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <SectionHeader
        eyebrow="SIMPLE PRICING"
        title="Priced like a society fee — per flat, not per feature."
        size="sm"
      />
      <Link href="/public/pricing" className="shrink-0">
        <Button variant="outline">View pricing →</Button>
      </Link>
    </div>
  );
}