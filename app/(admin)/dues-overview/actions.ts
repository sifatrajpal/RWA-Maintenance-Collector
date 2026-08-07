'use server'

import { createClient } from '@/lib/supabase/server'

export async function getDuesOverview() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('invoices')
    .select('id, amount, status, due_date, profiles(first_name, last_name, flat_number)')

  if (error) {
    console.error(error.message)
    return []
  }

  return data
}