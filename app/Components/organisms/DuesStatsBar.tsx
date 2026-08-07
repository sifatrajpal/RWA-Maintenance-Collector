import StatCard from "@/app/Components/molecules/StatCard";

type DuesStatsBarProps = { totalBilled: number; collected: number; pending: number; failed: number }

const formatRupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function DuesStatsBar({ totalBilled, collected, pending, failed }: DuesStatsBarProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard label="Total Billed" value={formatRupees(totalBilled)} />
            <StatCard label="Collected" value={formatRupees(collected)} />
            <StatCard label="Pending" value={formatRupees(pending)} accent="warning" />
            <StatCard label="Failed" value={formatRupees(failed)} accent="danger" />
        </div>
    )
}