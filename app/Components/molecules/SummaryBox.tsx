type SummaryBoxProps = { residentCount: number; total: number }

export default function SummaryBox({ residentCount, total }: SummaryBoxProps) {
    return (
        <div className="flex items-center justify-between border border-[#D9D6C7] bg-[#F1EFE3] px-6 py-5 mb-6">
            <div>
                <p className="text-sm font-medium">{residentCount} residents will be billed</p>
                <p className="text-sm text-[#8A8A78] font-mono">Total to be raised: ₹{total.toLocaleString("en-IN")}</p>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-[#B8963E] flex items-center justify-center text-xs text-[#B8963E]">
                ×{residentCount}
            </div>
        </div>
    )
}