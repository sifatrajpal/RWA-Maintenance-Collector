// components/organisms/BillingPanel.tsx
import SectionHeader from "../molecules/SectionHeader";
import PillTab from "../molecules/PillTab";
import PassbookCard from "../molecules/PassbookCard";

const tabs = [
  { label: 'DUES OVERVIEW — live paid/pending', active: true },
  { label: 'EXPENSE LOG — transparent spend', active: false },
  { label: 'RESIDENT PORTAL — pay + receipts', active: false },
];

const passbookData = {
  flatNumber: 'FLAT B-204',
  title: 'August dues',
  stampText: 'PAID · 02 AUG',
  lineItems: [
    { label: 'Maintenance', amount: '₹3,200' },
    { label: 'Water charges', amount: '₹450' },
    { label: 'Sinking fund', amount: '₹200' },
  ],
  total: '₹3,850',
};

export default function BillingPanel() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 min-h-[480px] max-w-[1180px] mx-auto py-12">
      <div className="p-8 md:p-14 flex flex-col justify-between bg-[#16231B] ">
        <SectionHeader
          eyebrow="NEW · AUTOMATED BILLING"
          title="Bills that write themselves, every 1st."
          description="On the first of each month, Bahi generates every resident's invoice in one pass — flat fee, water, sinking fund — no secretary sitting with a calculator."
          theme="dark"
          size="default"
        />
        <div className="mt-8 md:mt-0">
          {tabs.map((tab) => (
            <PillTab key={tab.label} label={tab.label} active={tab.active} />
          ))}
        </div>
      </div>

      <div className="bg-[#EDE4CC] flex items-center justify-center p-8 md:p-10">
        <PassbookCard {...passbookData} />
      </div>
    </div>
  );
}