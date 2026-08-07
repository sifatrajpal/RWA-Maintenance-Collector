'use client'
import DuesSummaryCard from "@/app/Components/molecules/DuesSummaryCard";
import PayNowButton from "@/app/resident/PayNowButton";

type DuesSummaryCardWrapperProps = {
    invoiceId: string;
    billingMonth: string;
    dueDateLabel: string;
    totalAmount: number;
    lineItems: { label: string; amount: number }[];
    residentName: string;
    residentEmail: string;
}

export default function DuesSummaryCardWrapper(props: DuesSummaryCardWrapperProps) {
    return (
        <DuesSummaryCard
            billingMonth={props.billingMonth}
            dueDateLabel={props.dueDateLabel}
            totalAmount={props.totalAmount}
            lineItems={props.lineItems}
            payButton={
                <PayNowButton
                    invoiceId={props.invoiceId}
                    amount={props.totalAmount}
                    residentName={props.residentName}
                    residentEmail={props.residentEmail}
                />
            }
        />
    )
}