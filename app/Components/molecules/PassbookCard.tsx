// components/molecules/PassbookCard.tsx
import StampBadge from "../atoms/StampBadge";

type LineItem = { label: string; amount: string };

type PassbookCardProps = {
  flatNumber: string;
  title: string;
  stampText: string;
  lineItems: LineItem[];
  total: string;
};

export default function PassbookCard({ flatNumber, title, stampText, lineItems, total }: PassbookCardProps) {
  return (
    <div className="bg-[#F5F1E6] text-[#16231B] w-full max-w-[360px] p-6">
      <div className="flex justify-between items-start mb-5">
        <div>
          <div className="font-mono text-[10.5px] opacity-55">{flatNumber}</div>
          <div className="font-serif text-lg mt-1">{title}</div>
        </div>
        <StampBadge size="sm" color="brass">{stampText}</StampBadge>
      </div>

      <div className="border-t border-[#DED2AE]">
        {lineItems.map((item) => (
          <div key={item.label} className="flex justify-between py-2 text-sm border-b border-[#DED2AE]">
            <span className="opacity-65">{item.label}</span>
            <span className="font-mono">{item.amount}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#16231B]">
        <span className="font-mono text-[11px] tracking-wide uppercase">Total settled</span>
        <span className="font-mono text-xl font-semibold">{total}</span>
      </div>
    </div>
  );
}