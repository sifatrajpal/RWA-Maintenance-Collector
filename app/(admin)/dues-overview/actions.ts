

'use server'

import { revalidatePath } from 'next/cache'

import { createClient } from '@/lib/supabase/server'

export async function getDuesOverview() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('invoices')
    .select('id, amount, status, due_date, payment_proof_url, profiles(first_name, last_name, flat_number)')

  if (error) {
    console.error(error.message)
    return []
  }

  return data
}


export async function confirmPayment(invoiceId: string) {
    const supabase = await createClient();
    const { error } = await supabase
        .from('invoices')
        .update({ status: 'success' })
        .eq('id', invoiceId);

    if (error) return { success: false, message: error.message };
    revalidatePath('/dues-overview');
    return { success: true };
}

export async function rejectPayment(invoiceId: string) {
    const supabase = await createClient();
    const { error } = await supabase
        .from('invoices')
        .update({ status: 'pending', payment_proof_url: null })
        .eq('id', invoiceId);

    if (error) return { success: false, message: error.message };
    revalidatePath('/dues-overview');
    return { success: true };
}