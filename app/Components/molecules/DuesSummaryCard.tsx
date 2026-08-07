import LineItemRow from "../atoms/LineItemRow";
import CircleStat from "../atoms/CircleStat";

type LineItem = { label: string; amount: number }

type DuesSummaryCardProps = {
    billingMonth: string;
    dueDateLabel: string;
    totalAmount: number;
    lineItems: LineItem[];
    payButton: React.ReactNode;
}

export default function DuesSummaryCard({ billingMonth, dueDateLabel, totalAmount, lineItems, payButton }: DuesSummaryCardProps) {
    return (
        <div className="border border-[#D9D6C7] bg-white p-8 flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex-1">
                <p className="text-xs tracking-widest uppercase text-[#8A8A78] mb-3">{billingMonth} · DUE {dueDateLabel}</p>
                <p className="text-4xl font-mono mb-4">₹{totalAmount.toLocaleString("en-IN")}</p>
                <div>
                    {lineItems.map((item) => <LineItemRow key={item.label} label={item.label} amount={item.amount} />)}
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:pl-8">
                <CircleStat lines={["DUE", dueDateLabel]} />
                {payButton}
                <p className="text-xs text-[#8A8A78] text-center">Opens Razorpay · UPI, cards, netbanking</p>
            </div>
        </div>
    )
}