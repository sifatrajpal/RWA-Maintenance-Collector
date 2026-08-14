'use client'
import Badge from "@/app/Components/atoms/Badge";
import { confirmPayment, rejectPayment } from "@/app/(admin)/dues-overview/actions";

type DueRow = { id: string; flat: string; resident: string; amount: number; status: "pending" | "pending_verification" | "success" | "failed"; dueDate: string; proofUrl: string | null }

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function DuesTable({ rows }: { rows: DueRow[] }) {
    async function handleConfirm(id: string) {
        await confirmPayment(id);
        window.location.reload();
    }

    async function handleReject(id: string) {
        await rejectPayment(id);
        window.location.reload();
    }

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
                        <th className="py-3 font-normal">Proof</th>
                        <th className="py-3 font-normal">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id} className="border-t border-[#D9D6C7]">
                            <td className="py-4">{row.flat}</td>
                            <td className="py-4">{row.resident}</td>
                            <td className="py-4 font-mono">₹{row.amount.toLocaleString("en-IN")}</td>
                            <td className="py-4"><Badge status={row.status} /></td>
                            <td className="py-4">{formatDate(row.dueDate)}</td>
                            <td className="py-4">
                                {row.proofUrl ? (
                                    <a href={row.proofUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                                        View
                                    </a>
                                ) : (
                                    <span className="text-[#8A8A78]">—</span>
                                )}
                            </td>
                            <td className="py-4">
                                {row.status === "pending_verification" && (
                                    <div className="flex gap-2">
                                        <button onClick={() => handleConfirm(row.id)} className="text-xs px-3 py-1.5 rounded-full bg-[#1C2317] text-white">
                                            Confirm
                                        </button>
                                        <button onClick={() => handleReject(row.id)} className="text-xs px-3 py-1.5 rounded-full border border-[#D9D6C7]">
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}