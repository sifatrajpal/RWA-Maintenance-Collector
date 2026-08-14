'use client'
import { useState } from "react";
import FormField from "@/app/Components/molecules/FormField";
import FileInput from "@/app/Components/atoms/FileInput";
import { Button } from "@/app/Components/atoms/Button";
import { updatePaymentDetails } from "@/app/(admin)/manage-flats/society-actions";

type PaymentDetailsFormProps = {
    societyId: string;
    currentUpiId: string;
    currentBankDetails: string;
    currentQrUrl: string;
}

export default function PaymentDetailsForm({ societyId, currentUpiId, currentBankDetails, currentQrUrl }: PaymentDetailsFormProps) {
    const [upiId, setUpiId] = useState(currentUpiId);
    const [bankDetails, setBankDetails] = useState(currentBankDetails);
    const [qrFile, setQrFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit() {
        setIsLoading(true);
        const formData = new FormData();
        if (qrFile) formData.set('qr', qrFile);

        const result = await updatePaymentDetails(societyId, upiId, bankDetails, formData);
        setIsLoading(false);

        if (result?.success === false) {
            setMessage(result.message ?? "Something went wrong");
        } else {
            setMessage("Saved successfully");
        }
    }

    return (
        <div className="border border-[#D9D6C7] bg-white p-8 mb-10 ">
            <h2 className="text-lg mb-1">Payment Details</h2>
            <p className="text-sm text-[#8A8A78] mb-6">Shown to residents when they pay their dues.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mb-4">
                <FormField labelChildren="UPI ID" placeholder="society@upi" value={upiId} type="text" onChange={(e) => setUpiId(e.target.value)} />
                <FormField labelChildren="Bank Details" placeholder="Account no, IFSC, bank name" value={bankDetails} type="text" onChange={(e) => setBankDetails(e.target.value)} />
            </div>

            <p className="text-xs tracking-widest uppercase text-[#8A8A78] mb-2">QR Code</p>
            {currentQrUrl && (
                <img src={currentQrUrl} alt="Current QR code" className="w-32 h-32 mb-3 border border-[#D9D6C7]" />
            )}
            <FileInput onChange={(e) => setQrFile(e.target.files?.[0] ?? null)} />

            {message && <p className="text-sm mt-3">{message}</p>}
            <div className="mt-10 ">

                <Button
                    variant="dark"
                    children={isLoading ? "Saving..." : "Save Payment Details"}
                    onClick={handleSubmit}

                />
            </div>
        </div>
    )
}