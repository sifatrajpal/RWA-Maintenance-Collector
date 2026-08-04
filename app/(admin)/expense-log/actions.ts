'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

type NewExpense = {
  amount: number
  type: string
  description: string
  dueDate: string
}

export async function addExpense(expense: NewExpense) {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (!userData || userError) {
    return { success: false, message: userError?.message ?? 'Not authenticated' }
  }

  const userId = userData.user.id

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('society_id')
    .eq('id', userId)
    .single()

  if (!profileData || profileError) {
    return { success: false, message: profileError?.message ?? 'Profile not found' }
  }

  const { error: insertError } = await supabase
    .from('expenses')
    .insert({
      amount: expense.amount,
      type: expense.type,
      description: expense.description,
      due_date: expense.dueDate,
      society_id: profileData.society_id,
    })

  if (insertError) {
    return { success: false, message: insertError.message }
  }

  revalidatePath('/expense-log')
  return { success: true, message: 'Expense logged' }
}

export async function getExpenses() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('expenses')
    .select('id, amount, type, description, due_date, status')

  if (error) {
    console.error(error.message)
    return []
  }

  return data
}