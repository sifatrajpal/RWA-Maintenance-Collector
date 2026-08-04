
import Eyebrow from "../atoms/Eyebrow";
import StampBadge from "../atoms/StampBadge";

export default function SecuritySection() {
  return (
    <div className="bg-[#EDE4CC]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-18 items-center">
        <div className="">
          <Eyebrow color="brass">A NOTE ON SECURITY</Eyebrow>
          <h2 className="font-serif text-[26px] md:text-[28px] mt-4">
            Every society&apos;s book is sealed.
          </h2>
          <p className="text-sm md:text-[15px] leading-relaxed opacity-75 mt-4">
            Residents can only ever query their own invoices; admins can only ever see their own society. That boundary is enforced at the database layer itself, not just hidden by the interface — so there&apos;s no page in the app that can accidentally leak another building&apos;s ledger.
          </p>
        </div>
        <StampBadge size="lg" color="ink">
          ROW LEVEL
          <br />
          SECURITY
          <br />
          ENFORCED
        </StampBadge>
      </div>
    </div>
  );
}