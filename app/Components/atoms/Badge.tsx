type BadgeProps = { status: "pending" | "pending_verification" | "success" | "failed" }

const config = {
    success: { label: "PAID", classes: "bg-[#DCE6D5] text-[#3E5C2E]" },
    pending: { label: "PENDING", classes: "bg-[#EDE3C8] text-[#8A7A2E]" },
    pending_verification: { label: "AWAITING REVIEW", classes: "bg-[#D9E4EC] text-[#2E5C8A]" },
    failed: { label: "FAILED", classes: "bg-[#F3D9D6] text-[#A13A2E]" },
} as const;

export default function Badge({ status }: BadgeProps) {
    const { label, classes } = config[status];
    return (
        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full uppercase tracking-wide ${classes}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {label}
        </span>
    )
}