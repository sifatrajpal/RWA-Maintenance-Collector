type LineItemRowProps = { label: string; amount: number }

export default function LineItemRow({ label, amount }: LineItemRowProps) {
    return (
        <div className="flex justify-between py-3 border-t border-[#EDEAE0] text-sm">
            <span className="text-[#5A5A4E]">{label}</span>
            <span className="font-mono">₹{amount.toLocaleString("en-IN")}</span>
        </div>
    )
}