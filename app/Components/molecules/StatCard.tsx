type StatCardProps = { label: string; value: string; accent?: "default" | "warning" | "danger" }

const accentColor = {
    default: "text-[#1C2317]",
    warning: "text-[#B8963E]",
    danger: "text-[#A13A2E]",
} as const;

export default function StatCard({ label, value, accent = "default" }: StatCardProps) {
    return (
        <div className="border border-[#D9D6C7] px-6 py-5">
            <p className="text-xs tracking-widest uppercase text-[#8A8A78] mb-2">{label}</p>
            <p className={`text-2xl font-mono ${accentColor[accent]}`}>{value}</p>
        </div>
    )
}