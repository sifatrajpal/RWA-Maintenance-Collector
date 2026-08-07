
import Logo from "../atoms/Logo";
import StampBadge from "../atoms/StampBadge";
import QuoteBlock from "../molecules/QuoteBlock";

export default function LoginBrandPanel() {
    return (
        <div className="hidden md:flex md:flex-col md:justify-between bg-[#1C2317] text-white h-full px-12 py-10">
            <Logo />

            <div className="flex flex-col gap-8">
                <StampBadge size="lg" color="light" children="Ledger sealed & signed" />
                <QuoteBlock
                    quote="Every flat, every rupee, on one page — finally something the whole committee agrees on."
                    author="Radhika Sen, Secretary"
                    role="Greenfield Residency"
                />
            </div>

            <p className="text-xs text-[#8A8A78]">© 2026 Bahi</p>
        </div>
    )
}