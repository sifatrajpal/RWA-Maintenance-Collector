// components/organisms/WhatChangesSection.tsx
import SectionHeader from "../molecules/SectionHeader";
import Eyebrow from "../atoms/Eyebrow";
import FeatureListItem from "../molecules/FeatureListItem";

const adminFeatures = [
  { title: 'Bulk billing', description: "Generate every resident's invoice in one click, on schedule." },
  { title: 'Live dues ledger', description: 'See paid vs pending by flat, and reconcile offline payments manually.' },
  { title: 'Expense tracker', description: 'Log watchman salary, lift AMC, plumbing — visible to the whole committee.' },
];

const residentFeatures = [
  { title: 'One-tap payment', description: 'Settle dues by UPI or card straight from the invoice.' },
  { title: 'Digital receipts', description: 'A downloadable PDF lands the moment a payment succeeds.' },
  { title: 'Full payment history', description: 'Every past due, on record, without a single forwarded message.' },
];

export default function WhatChangesSection() {
  return (
    <div className="bg-[#EDE4CC] py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader
          eyebrow="WHAT CHANGES"
          title="One ledger, two portals, zero spreadsheets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-10 md:mt-14">
          <div>
            <Eyebrow color="brass">FOR THE ADMIN</Eyebrow>
            <ul className="mt-4 flex flex-col gap-5">
              {adminFeatures.map((f) => (
                <FeatureListItem key={f.title} title={f.title} description={f.description} />
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow color="brass">FOR THE RESIDENT</Eyebrow>
            <ul className="mt-4 flex flex-col gap-5">
              {residentFeatures.map((f) => (
                <FeatureListItem key={f.title} title={f.title} description={f.description} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}