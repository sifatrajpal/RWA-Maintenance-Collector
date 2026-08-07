import { createAdminClient } from "@/lib/supabase/admin";
import crypto from "crypto";

export async function POST(request: Request) {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature")!;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
        .update(body)
        .digest("hex");

    if (expectedSignature !== signature) {
        return new Response("Invalid signature", { status: 400 });
    }

    const event = JSON.parse(body);

    if (event.event === "payment.captured") {
        const payment = event.payload.payment.entity;
       const invoiceId = payment.notes?.invoiceId; // adjust based on what you stored as receipt
        

        if (!invoiceId) {
            console.error("No invoiceId in webhook payload notes");
            return new Response("Missing invoiceId", { status: 400 });
        }


        const supabase = createAdminClient(); // service role — bypasses RLS, correct for webhook context

        await supabase.from('payments').insert({
            invoice_id: invoiceId,
            amount_paid: payment.amount / 100,
            payment_mode: payment.method,
            payment_status: 'success',
            razorpay_id: payment.id,
        });

        await supabase.from('invoices').update({ status: 'success' }).eq('id', invoiceId);
    }

    return new Response("OK", { status: 200 });
}