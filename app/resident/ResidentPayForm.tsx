'use client'


type MaintenanceDetailsType = {
  id: string
  amount: string
  due_date: string
  status: string
}

type ResidentPayFormProps = {
  MaintananceDetails: MaintenanceDetailsType[]
}
export default function ResidentPayForm({MaintananceDetails}: ResidentPayFormProps){


    return(
        // id, amount, due_date, status
        <div>
            {MaintananceDetails.map((MaintananceDetail) => (
                <div key={MaintananceDetail.id}>
                    <p>{MaintananceDetail.id}</p>
                    <h2>{MaintananceDetail.amount}</h2>
                    <h2>{MaintananceDetail.due_date}</h2>
                    <h2>{MaintananceDetail.status}</h2>
                </div>
            ))}
        </div>
    )
}