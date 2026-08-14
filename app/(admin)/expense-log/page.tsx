import { getExpenses } from "./actions";
import { getSocietyContext } from "@/lib/getSocietyContext";
import PageHeader from "@/app/Components/molecules/PageHeader";
import DuesStatsBar from "@/app/Components/organisms/DuesStatsBar";
import AddExpenseForm from "@/app/Components/organisms/AddExpenseForm";
import ExpenseTable from "@/app/Components/organisms/ExpenseTable";

export default async function ExpenseLogPage() {
    const [expenses, { societyName }] = await Promise.all([getExpenses(), getSocietyContext()]);

    const rows = expenses.map((e) => ({
        id: e.id,
        date: e.due_date,
        category: e.type,
        description: e.description,
        amount: e.amount,
        status: e.status,
    }));

    const logged = rows.reduce((s, r) => s + r.amount, 0);
    const settled = rows.filter(r => r.status === "success").reduce((s, r) => s + r.amount, 0);
    const awaiting = rows.filter(r => r.status !== "success").reduce((s, r) => s + r.amount, 0);

    return (
        <div>
            <PageHeader title="Expense Log" subtitle={`${societyName.toUpperCase()} · TRACKED SOCIETY SPEND`} />
            <DuesStatsBar totalBilled={logged} collected={settled} pending={awaiting} failed={0} />
            <AddExpenseForm />
            <ExpenseTable rows={rows} />
        </div>
    )
}