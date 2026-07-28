'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function generateInvoices(amount: number, dueDate: string) {
  const supabase = await createClient()

  const { data: residents, error: fetchError } = await supabase
    .from('profiles')
    .select('id')
    .eq('role', 'resident')

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