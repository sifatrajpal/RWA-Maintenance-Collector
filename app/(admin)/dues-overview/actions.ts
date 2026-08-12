'use server'

import { createClient } from '@/lib/supabase/server'

export async function getDuesOverview() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  console.log("Dues overview - current user:", user?.id)

  const { data, error } = await supabase
    .from('invoices')
    .select('id, amount, status, due_date, profiles(first_name, last_name, flat_number)')

  console.log("Dues overview - error:", error)
  console.log("Dues overview - data length:", data?.length)

  if (error) {
    console.error(error.message)
    return []
  }

  return data
}