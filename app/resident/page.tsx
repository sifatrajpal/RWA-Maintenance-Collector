import { getMyInvoices, getMyPaymentHistory } from "./actions";
import { getSocietyContext } from "@/lib/getSocietyContext";
import { createClient } from "@/lib/supabase/server";
import SectionHeader from "@/app/Components/molecules/SectionHeader";
import DuesSummaryCardWrapper from "@/app/Components/organisms/DuesSummaryCardWrapper";
import PaymentHistoryTable from "@/app/Components/organisms/PaymentHistoryTable";
import ResidentTopBar from "@/app/Components/organisms/ResidentTopBar";

const monthName = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
const dayLabel = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default async function ResidentPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const [invoices, history, { societyName, userName }] = await Promise.all([
        getMyInvoices(), getMyPaymentHistory(), getSocietyContext(),
    ]);

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
            };
        });

    return (
        <div>
            <ResidentTopBar flatNumber="" societyName={societyName} userName={userName} />

            <div className="max-w-4xl mx-auto px-6 py-12">
                <SectionHeader eyebrow="SECTION 01 · CURRENT DUES" title={`Hi ${firstName} — here's what's due.`} size="default" />
                <div className="mt-6 mb-16">
                    {currentInvoice ? (
                        <DuesSummaryCardWrapper
                            invoiceId={currentInvoice.id}
                            billingMonth={monthName(currentInvoice.due_date)}
                            dueDateLabel={dayLabel(currentInvoice.due_date)}
                            totalAmount={currentInvoice.amount}
                            lineItems={lineItems}
                            residentName={userName}
                            residentEmail={user?.email ?? ""}
                        />
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