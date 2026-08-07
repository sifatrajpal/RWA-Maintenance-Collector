'use client'

import Badge from "../atoms/Badge";
import TextLink from "../atoms/TextLink";

type HistoryRow = { month: string; amount: number; paidOn: string; status: "pending" | "success" | "failed" }

export default function PaymentHistoryTable({ rows }: { rows: HistoryRow[] }) {
    return (
        <table className="w-full border-t border-[#D9D6C7] text-sm">
            <thead>
                <tr className="text-left text-xs tracking-widest uppercase text-[#8A8A78]">
                    <th className="py-3 font-normal">Month</th>
                    <th className="py-3 font-normal">Amount</th>
                    <th className="py-3 font-normal">Paid On</th>
                    <th className="py-3 font-normal">Status</th>
                    <th className="py-3"></th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-t border-[#D9D6C7]">
                        <td className="py-4">{row.month}</td>
                        <td className="py-4 font-mono">₹{row.amount.toLocaleString("en-IN")}</td>
                        <td className="py-4">{row.paidOn}</td>
                        <td className="py-4"><Badge status={row.status} /></td>
                        <td className="py-4 text-right"><TextLink onClick={() => {}}>Download receipt</TextLink></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}