'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function generateInvoices(amount: number, dueDate: string) {
  const supabase = await createClient()


  const {data: userData, error: userError} = await supabase.auth.getUser();


  if(!userData || userError){
    return { success: false, message: userError?.message ?? 'Not authenticated' };
  }

  const userId = userData.user.id;

  const { data: profileData, error: profileError } = await supabase
  .from('profiles')
  .select('society_id')
  .eq('id', userId)
  .single()

  if (!profileData || profileError) {
    return { success: false, message: profileError?.message ?? 'Profile not found' }
  }




  const { data: residents, error: fetchError } = await supabase
    .from('profiles')
    .select('id')
    .eq('role', 'resident')
    .eq('society_id', profileData.society_id)

  if (fetchError) {
    return { success: false, message: fetchError.message }
  }

  if (!residents || residents.length === 0) {
    return { success: false, message: 'No residents found' }
  }

  const invoiceRows = residents.map((resident) => ({
    profile_id: resident.id,
    amount: amount,
    due_date: dueDate,  
    society_id: profileData.society_id,
  }))

  const { error: insertError } = await supabase
    .from('invoices')
    .insert(invoiceRows)

  if (insertError) {
    return { success: false, message: insertError.message }
  }

  revalidatePath('/generate-invoices')
  return { success: true, message: `${invoiceRows.length} invoices created` }
}