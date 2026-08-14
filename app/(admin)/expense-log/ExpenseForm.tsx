'use client'

import React, { useState } from 'react'
import { addExpense } from './actions'

export default function ExpenseForm() {



  type ExpenseType = {
    amount: number
    type: string
    description: string
    dueDate: string
  }

  const [expenses, setExpenses] = useState<ExpenseType>({amount: 0, type: '', description: '', dueDate: ''});

  function handleExpense(e: React.ChangeEvent<HTMLInputElement>){
    setExpenses({...expenses, [e.target.name]: e.target.value})
  }



  return (

    
    <div>
      <input type="number" placeholder='Enter amount' name='amount' value={expenses.amount} onChange={handleExpense}/>
      <input type="text" placeholder='Enter type' name='type' value={expenses.type} onChange={handleExpense}/>
      <input type="text" placeholder='Enter description'  name= 'description' value={expenses.description}onChange={handleExpense}/>
      <input type="text" placeholder='Enter dueDate' name= 'dueDate' value={expenses.dueDate} onChange={handleExpense}/>
      <button onClick={() => {addExpense(expenses)}}>Log Expense</button>
    </div>

  )
}