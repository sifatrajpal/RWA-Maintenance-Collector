import SectionHeader from "../molecules/SectionHeader";
import PainPointCard from "../molecules/PainPointCard";

const painPoints = [
  {
    number: "01",
    title: "Reminders live in WhatsApp",
    description: "Due dates get buried under group chatter, and half the building only pays after the third nudge."
  },
  {
    number: "02",
    title: "Cash reconciles by memory",
    description: "Cheques and cash payments get logged in a register nobody else can check against."
  },
  {
    number: "03",
    title: "No one can see the balance sheet",
    description: "Residents ask where the maintenance money went; the committee re-types the same answer every quarter."
  },
];

export default function ProblemSection() {
  return (
    <section className="max-w-[1180px] mx-auto py-12">
      <SectionHeader eyebrow="THE PROBLEM" title="Every society is running the same ledger — badly." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DED2AE] border border-[#DED2AE] mt-8 md:mt-11">
        {painPoints.map((p) => <PainPointCard key={p.number} {...p} />)}
      </div>
    </section>
  );
}