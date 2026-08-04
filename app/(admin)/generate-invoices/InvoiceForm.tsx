'use client'
import { useState } from "react";
import { generateInvoices } from "./actions";

export default function InvoiceForm(){

    const [amount, setAmount] = useState(0);
    const [dueDate, setDueDate] = useState('');

    return(
        <div>
            <input type="number" value={amount} onChange={(e) => {setAmount(+e.target.value)}} />
            <input type="text" value={dueDate} onChange={(e) => {setDueDate(e.target.value)}}/>
            <button onClick={async () => {
                const result = await generateInvoices(amount, dueDate)
                console.log(result)
            }}>Submit</button>
        </div>
    )
}