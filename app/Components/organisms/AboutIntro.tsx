
import Eyebrow from "../atoms/Eyebrow";

export default function AboutIntro() {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-4 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 items-end">
      <div>
        <Eyebrow color="brass">ABOUT BAHI</Eyebrow>
        <h1 className="font-serif text-[34px] md:text-[46px] leading-[1.15] mt-4">
          We grew up refreshing a WhatsApp group, waiting for a maintenance receipt.
        </h1>
      </div>
      <p className="text-sm md:text-[15px] leading-relaxed text-[#2B3D2F]">
        Bahi — from <em>bahi-khata</em>, the ledger book every Indian shopkeeper and society once kept by hand — is our attempt to give that same trusted record a digital home, without losing what made it trustworthy: everyone could open it and see the truth.
      </p>
    </div>
  );
}