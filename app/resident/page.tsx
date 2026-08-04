import { getMyInvoices, getMyPaymentHistory } from "./actions"
import ResidentPayForm from "./ResidentPayForm"

type MaintenanceDetailsType = {
  id: string
  amount: string
  due_date: string
  status: string
}

type PaymentType = {
  id: string
  amount_paid: string
  payment_mode: string
  created_at: string
}

type MaintenanceHistoryType = {
  id: string
  amount: string
  due_date: string
  payments: PaymentType[]
}

export default async function ResidentPage() {
  const maintenanceDetails: MaintenanceDetailsType[] = await getMyInvoices()
  const maintenanceHistory: MaintenanceHistoryType[] = await getMyPaymentHistory()

  return (
    <div>
      <ResidentPayForm MaintananceDetails={maintenanceDetails} />

      <div>
        {maintenanceHistory.map((invoice) => (
          <div key={invoice.id}>
            <h2>Invoice: ₹{invoice.amount} — Due {invoice.due_date}</h2>
            <ul>
              {invoice.payments.map((payment) => (
                <li key={payment.id}>
                  ₹{payment.amount_paid} via {payment.payment_mode} on {payment.created_at}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}