'use client'
import { useState } from "react";
import FormField from "@/app/Components/molecules/FormField";
import SelectField from "@/app/Components/molecules/SelectField";
import { Button } from "@/app/Components/atoms/Button";
import { addExpense } from "@/app/(admin)/expense-log/actions";

export default function AddExpenseForm() {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit() {
        const result = await addExpense({
            type: category,
            amount: Number(amount),
            description,
            dueDate,
        });

        if (result?.success === false) {
            setErrorMsg(result.message ?? "Something went wrong");
        } else {
            setCategory(""); setAmount(""); setDescription(""); setDueDate(""); setErrorMsg("");
        }
    }

    return (
        <div className="border border-[#D9D6C7] bg-white p-8 mb-10">
            <h2 className="text-lg mb-1">Log a new expense</h2>
            <p className="text-sm text-[#8A8A78] mb-6">Visible to every resident in the ledger the moment it's saved.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <SelectField
                    labelChildren="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Select — Security, Repairs, Utilities..."
                    options={[
                        { label: "Security", value: "security" },
                        { label: "Maintenance", value: "maintenance" },
                        { label: "Utilities", value: "utilities" },
                        { label: "Repairs", value: "repairs" },
                    ]}
                />
                <FormField labelChildren="Amount" placeholder="₹ 0.00" value={amount} type="text" onChange={(e) => setAmount(e.target.value)} />
                <FormField labelChildren="Description" placeholder="What was this expense for?" value={description} type="text" onChange={(e) => setDescription(e.target.value)} />
                <FormField labelChildren="Due Date" placeholder="DD/MM/YYYY" value={dueDate} type="text" onChange={(e) => setDueDate(e.target.value)} />
            </div>

            {errorMsg && <p className="text-sm text-red-700 mt-2">{errorMsg}</p>}

            <Button variant="dark" children="Add expense" onClick={handleSubmit}  />
        </div>
    )
}