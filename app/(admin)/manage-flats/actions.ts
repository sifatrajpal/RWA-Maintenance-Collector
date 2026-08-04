'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { createAdminClient } from '@/lib/supabase/admin'

type NewFlat = {
  firstName: string
  lastName: string
  phoneNumber: string
  flatNumber: string
  email: string
}

export async function addFlat(flat: NewFlat) {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    return { success: false, message: userError?.message ?? 'Not authenticated' }
  }

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('society_id')
    .eq('id', userData.user.id)
    .single()

  if (!profileData || profileError) {
    return { success: false, message: profileError?.message ?? 'Could not find admin society' }
  }

  const { data, error: inviteError } = await createAdminClient().auth.admin.inviteUserByEmail(flat.email)

if (inviteError || !data.user) {
  console.error("Invitation failed FULL:", JSON.stringify(inviteError, null, 2))
  console.error("Invitation failed status:", inviteError?.status)
  console.error("Invitation failed name:", inviteError?.name)
  return { success: false, message: inviteError?.message ?? 'Invite failed' }
}

  const invitedUserId = data.user.id

  const { error } = await supabase
    .from('profiles')
    .insert({
      id: invitedUserId,
      society_id: profileData.society_id,
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