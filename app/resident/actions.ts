'use client'

import { createClient } from "@/lib/supabase/server"


export async function getMyInvoice(){
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
    .select('id, amount, due_date, payments(id, amount_paid, payment_mode, created_at)')
    .eq('profile_id', user.id)

    if (error) {
        console.error(error.message)
        return []
    }
    
    return data

}



