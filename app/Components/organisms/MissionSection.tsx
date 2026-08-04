
import SectionHeader from "../molecules/SectionHeader";

export default function MissionSection() {
  return (
    <div className="max-w-[1180px] px-8 md:px-76 py-14 md:py-20 ">
      <SectionHeader
        eyebrow="WHO IT'S FOR"
        title="Built with RWA secretaries, not around them."
        description="Every screen in Bahi was shaped by sitting next to a society treasurer during an actual billing cycle — watching where the spreadsheet broke, and where the WhatsApp thread went quiet."
        size="sm"
      />
    </div>
  );
}