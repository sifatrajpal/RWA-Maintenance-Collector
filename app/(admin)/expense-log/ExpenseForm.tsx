'use client'

import { useState } from 'react'
import { addExpense } from './actions'

export default function ExpenseForm() {
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  async function handleAddExpense() {
    const result = await addExpense({
      amount,
      type,
      description,
      dueDate,
    })

    if (!result.success) {
      // show result.message
    }
  }

  return (
    <button onClick={handleAddExpense}>Log Expense</button>
  )
}