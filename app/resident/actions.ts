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
        .select('id, amount, due_date, payments(id, amount_paid, payment_mode, payment_status, created_at)')
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



