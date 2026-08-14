'use client'
import { useState } from "react";
import FormField from "@/app/Components/molecules/FormField";
import SummaryBox from "@/app/Components/molecules/SummaryBox";
import { Button } from "@/app/Components/atoms/Button";
import { generateInvoices } from "@/app/(admin)/generate-invoices/actions";

export default function GenerateInvoicesForm({ residentCount }: { residentCount: number }) {
    const [billingMonth, setBillingMonth] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [maintenanceFee, setMaintenanceFee] = useState("3200");
    const [waterCharges, setWaterCharges] = useState("450");
    const [sinkingFund, setSinkingFund] = useState("200");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const today = new Date().toISOString().split('T')[0];
    const perFlat = Number(maintenanceFee) + Number(waterCharges) + Number(sinkingFund);
    const total = perFlat * residentCount;

    async function handleSubmit() {
        const totalAmount = Number(maintenanceFee) + Number(waterCharges) + Number(sinkingFund);
        const result = await generateInvoices(totalAmount, dueDate);

        if (result?.success === false) {
            setErrorMsg(result.message ?? "Something went wrong");
            setSuccessMsg("");
        } else {
            setSuccessMsg(result.message ?? "Invoices generated successfully.");
            setErrorMsg("");
        }
    }

    return (
        <div className="border border-[#D9D6C7] bg-white p-8 max-w-2xl">
            <h2 className="text-lg mb-1">{billingMonth || "This month's"} billing run</h2>
            <p className="text-sm text-[#8A8A78] mb-6">
                This creates one invoice per resident, in the status <code>pending</code>. It cannot be undone from this screen — reconcile mistakes from Dues Overview instead.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <FormField labelChildren="Billing Month" placeholder="August 2026" value={billingMonth} type="text" onChange={(e) => setBillingMonth(e.target.value)} />
                <FormField
                    labelChildren="Due Date"
                    placeholder="DD/MM/YYYY"
                    value={dueDate}
                    type="date"
                    onChange={(e) => setDueDate(e.target.value)}
                    min={today}
                    max="2030-12-31"
                />
                <FormField labelChildren="Maintenance Fee (per flat)" placeholder="₹ 3,200" value={maintenanceFee} type="text" onChange={(e) => setMaintenanceFee(e.target.value)} />
                <FormField labelChildren="Water Charges (per flat)" placeholder="₹ 450" value={waterCharges} type="text" onChange={(e) => setWaterCharges(e.target.value)} />
                <FormField labelChildren="Sinking Fund (per flat)" placeholder="₹ 200" value={sinkingFund} type="text" onChange={(e) => setSinkingFund(e.target.value)} />
            </div>

            <div className="mt-6">
                <SummaryBox residentCount={residentCount} total={total} />
            </div>

            {errorMsg && <p className="text-sm text-red-700 mb-4">{errorMsg}</p>}
            {successMsg && <p className="text-sm text-green-700 mb-4">{successMsg}</p>}

            <Button
                variant="brass"
                children={`Generate invoices for ${billingMonth || "this month"}`}
                onClick={handleSubmit}
            />
            <p className="text-xs text-[#8A8A78] text-center mt-3">
                Already run for this month? Re-running will not duplicate flats that already have an invoice.
            </p>
        </div>
    )
}