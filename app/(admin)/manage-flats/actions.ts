'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { createAdminClient } from '@/lib/supabase/admin'

type NewFlat = {
  firstName: string
  lastName: string
  phoneNumber: string
  flatNumber: string
}

export async function addFlat(flat: NewFlat, email: string) {
  const supabase = await createClient()
  const { data, error: inviteError } = await createAdminClient().auth.admin.inviteUserByEmail(email)

  if (inviteError || !data.user) {
    console.error("Invitation failed:", inviteError?.message)
    return { success: false, message: inviteError?.message ?? 'Invite failed' }
  }

  const invitedUserId = data.user.id




  const { error } = await supabase
    .from('profiles')
    .insert({
      id: invitedUserId,
      first_name: flat.firstName,
      last_name: flat.lastName,
      phone_number: flat.phoneNumber,
      flat_number: flat.flatNumber,
      role: 'resident',
    })

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath('/manage-flats')
  return { success: true, message: 'Flat added' }
}



export async function getFlats() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .select('id, first_name, last_name, flat_number, phone_number')
    .eq('role', 'resident')

  if (error) {
    console.error(error.message)
    return []
  }

  return data
}