type LogoProps = {
    variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
    const textColor = variant === "dark" ? "text-[#1C2317]" : "text-white";

    return (
        <div className={`flex items-center gap-2 ${textColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="font-serif text-lg font-semibold">Bahi</span>
        </div>
    )
}