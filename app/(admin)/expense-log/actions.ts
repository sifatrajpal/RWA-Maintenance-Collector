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

  const { error } = await supabase
    .from('expenses')
    .insert({
      amount: expense.amount,
      type: expense.type,
      description: expense.description,
      due_date: expense.dueDate,
    })

  if (error) {
    return { success: false, message: error.message }
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