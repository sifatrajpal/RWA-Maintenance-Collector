    'use server'

    import { createClient } from "@/lib/supabase/server"
    import Razorpay from "razorpay";


    export async function getMyInvoices(){
        const supabase =  await createClient();


        const {data: {user}} = await supabase.auth.getUser();

        if(!user){
            return []
        }

        const { data, error } = await supabase
        .from('invoices')
        .select('id, amount, due_date, status')
        .eq('profile_id', user.id)


        if(error){
            console.log(error.message);
            return []
            
        }
        return data;
    }

export async function getMyPaymentHistory(){
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return []
    }

    const { data, error } = await supabase
    .from('invoices')
    .select('id, amount, due_date, payment_proof_url, payments(id, amount_paid, payment_mode, created_at)')
    .eq('profile_id', user.id)

    if (error) {
        console.error(error.message)
        return []
    }
    
    return data
}



    

export async function createRazorpayOrder(invoiceId: string, amount: number) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { success: false, message: "Not authenticated" };
    }

    // confirm this invoice actually belongs to the caller — don't trust the client's amount blindly
    const { data: invoice, error } = await supabase
        .from('invoices')
        .select('id, amount, profile_id')
        .eq('id', invoiceId)
        .eq('profile_id', user.id)
        .single();

    if (error || !invoice) {
        return { success: false, message: "Invoice not found" };
    }

    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
        amount: invoice.amount * 100, // Razorpay expects paise, not rupees
        currency: "INR",
        receipt: invoice.id,
        notes: { invoiceId: invoice.id }
    });

    return { success: true, orderId: order.id, amount: invoice.amount };
}
export async function uploadPaymentProof(invoiceId: string, file: FormData) {
    console.log("uploadPaymentProof called, invoiceId:", invoiceId);

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: "Not authenticated" };

    console.log("user:", user.id);

    const proofFile = file.get('proof') as File;
    if (!proofFile) return { success: false, message: "No file provided" };

    console.log("proofFile name:", proofFile.name, "size:", proofFile.size);

    const fileName = `${invoiceId}-${Date.now()}.${proofFile.name.split('.').pop()}`;

    const { error: uploadError } = await supabase.storage
        .from('payment-proofs')
        .upload(fileName, proofFile);

    console.log("uploadError:", uploadError);

    if (uploadError) return { success: false, message: uploadError.message };

    const { data: urlData } = supabase.storage.from('payment-proofs').getPublicUrl(fileName);

    console.log("public URL:", urlData.publicUrl);

    const { data: updateResult, error: updateError } = await supabase
        .from('invoices')
        .update({ status: 'pending_verification', payment_proof_url: urlData.publicUrl })
        .eq('id', invoiceId)
        .eq('profile_id', user.id)
        .select();

    console.log("updateResult:", updateResult);
    console.log("updateError:", updateError);

    if (updateError) return { success: false, message: updateError.message };

    return { success: true };
}



