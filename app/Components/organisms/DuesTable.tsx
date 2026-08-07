import Badge from "@/app/Components/atoms/Badge";

type DueRow = { flat: string; resident: string; amount: number; status: "pending" | "success" | "failed"; dueDate: string }

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function DuesTable({ rows }: { rows: DueRow[] }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg">All flats</h2>
                <span className="text-xs border border-[#D9D6C7] px-2 py-1">{rows.length} flats</span>
            </div>
            <table className="w-full border-t border-[#D9D6C7] text-sm">
                <thead>
                    <tr className="text-left text-xs tracking-widest uppercase text-[#8A8A78]">
                        <th className="py-3 font-normal">Flat</th>
                        <th className="py-3 font-normal">Resident</th>
                        <th className="py-3 font-normal">Amount</th>
                        <th className="py-3 font-normal">Status</th>
                        <th className="py-3 font-normal">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.flat} className="border-t border-[#D9D6C7]">
                            <td className="py-4">{row.flat}</td>
                            <td className="py-4">{row.resident}</td>
                            <td className="py-4 font-mono">₹{row.amount.toLocaleString("en-IN")}</td>
                            <td className="py-4"><Badge status={row.status} /></td>
                            <td className="py-4">{formatDate(row.dueDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}