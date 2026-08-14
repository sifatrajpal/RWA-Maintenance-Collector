'use client'
import DuesSummaryCard from "@/app/Components/molecules/DuesSummaryCard";

import PaymentProofUpload from "@/app/resident/PaymentProofUpload";

type DuesSummaryCardWrapperProps = {
    invoiceId: string;
    billingMonth: string;
    dueDateLabel: string;
    totalAmount: number;
    lineItems: { label: string; amount: number }[];
    upiId: string;
    qrCodeUrl: string;
    bankDetails: string;
}

export default function DuesSummaryCardWrapper(props: DuesSummaryCardWrapperProps) {
    return (
        <DuesSummaryCard
            billingMonth={props.billingMonth}
            dueDateLabel={props.dueDateLabel}
            totalAmount={props.totalAmount}
            lineItems={props.lineItems}
            payButton={
                <PaymentProofUpload
                    invoiceId={props.invoiceId}
                    upiId={props.upiId}
                    qrCodeUrl={props.qrCodeUrl}
                    bankDetails={props.bankDetails}
                />
            }
        />
    )
}