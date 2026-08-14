'use client'
import { useState } from "react";

import FileInput from "../Components/atoms/FileInput";
import { Button } from "../Components/atoms/Button";
import { uploadPaymentProof } from "@/app/resident/actions";

type PaymentProofUploadProps = {
    invoiceId: string;
    upiId: string;
    qrCodeUrl: string;
    bankDetails: string;
}

export default function PaymentProofUpload({ invoiceId, upiId, qrCodeUrl, bankDetails }: PaymentProofUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit() {
        if (!file) {
            setMessage("Please select a screenshot first");
            return;
        }
        setIsLoading(true);
        const formData = new FormData();
        formData.set('proof', file);
        const result = await uploadPaymentProof(invoiceId, formData);
        setIsLoading(false);

        if (result?.success === false) {
            setMessage(result.message ?? "Upload failed");
        } else {
            window.location.reload();
        }
    }

    return (
        <div className="border border-[#D9D6C7] bg-white p-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A8A78] mb-3">Pay via UPI or Bank Transfer</p>

            {qrCodeUrl && (
                <img src={qrCodeUrl} alt="Payment QR code" className="w-40 h-40 mb-4 border border-[#D9D6C7]" />
            )}

            <p className="text-sm mb-1"><span className="text-[#8A8A78]">UPI ID:</span> {upiId}</p>
            <p className="text-sm mb-4"><span className="text-[#8A8A78]">Bank details:</span> {bankDetails}</p>

            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A8A78] mb-2">Upload payment screenshot</p>
            <FileInput onChange={(e) => setFile(e.target.files?.[0] ?? null)} />

            {message && <p className="text-sm text-red-700 mt-2">{message}</p>}
            <div className="my-3">

                <Button
                    variant="dark"
                    children={isLoading ? "Uploading..." : "Submit Proof"}
                    onClick={handleSubmit}

                />
            </div>
        </div>
    )
}