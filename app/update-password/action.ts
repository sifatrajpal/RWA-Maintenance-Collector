'use server'
import { createClient } from '@/lib/supabase/server'

export async function UpdatePassword(password: string) {
    const supabase = await createClient()

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
        return { success: false, message: error.message }
    }

    return { success: true }
}