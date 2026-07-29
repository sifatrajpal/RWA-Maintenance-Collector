import { getDuesOverview } from './actions'


export default async function DuesOverviewPage() {
  const invoices = await getDuesOverview()

  return (
    <ul>
      {invoices.map((invoice) => (
        <li key={invoice.id}>
          {invoice.profiles?.[0]?.flat_number} — ₹{invoice.amount} — {invoice.status}
        </li>
      ))}
    </ul>
  )
}