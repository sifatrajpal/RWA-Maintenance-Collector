'use client'
import Script from "next/script";
import { Button } from "@/app/Components/atoms/Button";
import { createRazorpayOrder } from "./actions";

type PayNowButtonProps = { invoiceId: string; amount: number; residentName: string; residentEmail: string }

export default function PayNowButton({ invoiceId, amount, residentName, residentEmail }: PayNowButtonProps) {
    async function handlePay() {
        const result = await createRazorpayOrder(invoiceId, amount);

        if (!result.success || !result.orderId) {
            alert(result.message ?? "Could not start payment");
            return;
        }

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: result.amount * 100,
            currency: "INR",
            name: "Bahi",
            description: "Maintenance dues",
            order_id: result.orderId,
            prefill: { name: residentName, email: residentEmail },
            handler: function () {
                // webhook handles the actual DB update — this just tells the resident it worked
                alert("Payment successful. Your receipt will update shortly.");
                window.location.reload();
            },
        };

        // @ts-ignore — Razorpay attaches itself to window at runtime
        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
            <Button variant="brass" children="Pay now" onClick={handlePay}  />
        </>
    )
}