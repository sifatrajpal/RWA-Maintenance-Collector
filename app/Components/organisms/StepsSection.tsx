
import SectionHeader from "../molecules/SectionHeader";
import StepRow from "../molecules/StepRow";

const steps = [
  {
    number: "01",
    eyebrow: "SET UP",
    title: "Add your society, once",
    description: "A secretary registers Greenfield Residency, adds every flat, and invites residents by email. Each person lands in exactly one society — the database keeps every ledger sealed from every other one.",
  },
  {
    number: "02",
    eyebrow: "BILL",
    title: "Billing runs itself on the 1st",
    description: "Bahi bulk-generates the month's invoices for every resident in a single pass — flat fee, water, sinking fund. The committee edits nothing unless a charge genuinely changes.",
  },
  {
    number: "03",
    eyebrow: "COLLECT",
    title: "Residents settle up, you watch it happen",
    description: "Each resident sees their due the moment it's raised and pays by UPI or card. The Dues Overview updates in real time; a downloadable receipt is issued automatically.",
  },
];

export default function StepsSection() {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-10 md:py-14">
      {steps.map((step) => (
        <StepRow key={step.number} {...step} />
      ))}
    </div>
  );
}