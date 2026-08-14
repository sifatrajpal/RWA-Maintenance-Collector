import { getMyInvoices, getMyPaymentHistory } from "./actions";
import { getSocietyContext } from "@/lib/getSocietyContext";
import SectionHeader from "@/app/Components/molecules/SectionHeader";
import DuesSummaryCardWrapper from "@/app/Components/organisms/DuesSummaryCardWrapper";
import PaymentHistoryTable from "@/app/Components/organisms/PaymentHistoryTable";
import ResidentTopBar from "@/app/Components/organisms/ResidentTopBar";

const monthName = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
const dayLabel = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default async function ResidentPage() {
    const [invoices, history, societyContext] = await Promise.all([
        getMyInvoices(), getMyPaymentHistory(), getSocietyContext(),
    ]);

    const { societyName, userName, upiId, qrCodeUrl, bankDetails } = societyContext;

    const currentInvoice = invoices.find((inv) => inv.status !== "success");
    const firstName = userName.split(" ")[0];

    const lineItems = [
        { label: "Maintenance", amount: 3200 },
        { label: "Water charges", amount: 450 },
        { label: "Sinking fund", amount: 200 },
    ];

const historyRows = history
    .filter((inv: any) => inv.payments && inv.payments.length > 0)
    .map((inv: any) => {
        const payment = inv.payments[0];
        return {
            month: monthName(inv.due_date),
            amount: payment.amount_paid,
            paidOn: dayLabel(payment.created_at),
            status: "success" as const,
            proofUrl: inv.payment_proof_url ?? null,
        };
    });

    return (
        <div>
            <ResidentTopBar flatNumber="" societyName={societyName} userName={userName} />

            <div className="max-w-4xl mx-auto px-6 py-12">
                <SectionHeader eyebrow="SECTION 01 · CURRENT DUES" title={`Hi ${firstName} — here's what's due.`} size="default" />
                <div className="mt-6 mb-16">
                    {currentInvoice ? (
                        currentInvoice.status === "pending_verification" ? (
                            <div className="border border-[#D9D6C7] bg-white p-8">
                                <p className="text-xs tracking-widest uppercase text-[#8A8A78] mb-3">
                                    {monthName(currentInvoice.due_date)} · DUE {dayLabel(currentInvoice.due_date)}
                                </p>
                                <p className="text-4xl font-mono mb-4">₹{currentInvoice.amount.toLocaleString("en-IN")}</p>
                                <div className="bg-[#EDE3C8] text-[#8A7A2E] text-sm px-4 py-3 rounded">
                                    Your payment proof has been submitted and is awaiting verification from your society admin.
                                </div>
                            </div>
                        ) : (
                            <DuesSummaryCardWrapper
                                invoiceId={currentInvoice.id}
                                billingMonth={monthName(currentInvoice.due_date)}
                                dueDateLabel={dayLabel(currentInvoice.due_date)}
                                totalAmount={currentInvoice.amount}
                                lineItems={lineItems}
                                upiId={upiId}
                                qrCodeUrl={qrCodeUrl}
                                bankDetails={bankDetails}
                            />
                        )
                    ) : (
                        <p className="text-sm text-[#8A8A78]">No dues pending — you're all caught up.</p>
                    )}
                </div>

                <SectionHeader eyebrow="SECTION 02 · PAYMENT HISTORY" title="Every due you've settled, on record." size="default" />
                <div className="mt-6">
                    <PaymentHistoryTable rows={historyRows} />
                </div>
            </div>
        </div>
    )
}