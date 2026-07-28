import { getExpenses } from './actions'
import ExpenseForm from './ExpenseForm'

export default async function ExpenseLogPage() {
  const expenses = await getExpenses()

  return (
    <div>
      <ExpenseForm />
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.type} — ₹{expense.amount} — {expense.status}
          </li>
        ))}
      </ul>
    </div>
  )
}