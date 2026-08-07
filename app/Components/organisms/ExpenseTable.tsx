import Badge from "@/app/Components/atoms/Badge";

type ExpenseRow = { date: string; category: string; description: string; amount: number; status: "pending" | "success" | "failed" }

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function ExpenseTable({ rows }: { rows: ExpenseRow[] }) {
    return (
        <div>
            <h2 className="text-lg mb-4">Recent entries</h2>
            <table className="w-full border-t border-[#D9D6C7] text-sm">
                <thead>
                    <tr className="text-left text-xs tracking-widest uppercase text-[#8A8A78]">
                        <th className="py-3 font-normal">Date</th>
                        <th className="py-3 font-normal">Category</th>
                        <th className="py-3 font-normal">Description</th>
                        <th className="py-3 font-normal">Amount</th>
                        <th className="py-3 font-normal">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-t border-[#D9D6C7]">
                            <td className="py-4">{formatDate(row.date)}</td>
                            <td className="py-4 capitalize">{row.category}</td>
                            <td className="py-4">{row.description}</td>
                            <td className="py-4 font-mono">₹{row.amount.toLocaleString("en-IN")}</td>
                            <td className="py-4"><Badge status={row.status} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}