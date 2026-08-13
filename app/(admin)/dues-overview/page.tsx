import { getDuesOverview } from "./actions";
import { getSocietyContext } from "@/lib/getSocietyContext";
import PageHeader from "@/app/Components/molecules/PageHeader";
import DuesStatsBar from "@/app/Components/organisms/DuesStatsBar";
import DuesTable from "@/app/Components/organisms/DuesTable";






export default async function DuesOverviewPage() {

    const [dues, { societyName }] = await Promise.all([getDuesOverview(), getSocietyContext()]);

const rows = dues
    .filter((d) => d.profiles)
    .map((d) => {
        const profile = Array.isArray(d.profiles) ? d.profiles[0] : d.profiles;
        return {
            id: d.id,
            flat: profile.flat_number,
            resident: `${profile.first_name} ${profile.last_name}`,
            amount: d.amount,
            status: d.status,
            dueDate: d.due_date,
        };
    });

    const totalBilled = rows.reduce((s, r) => s + r.amount, 0);
    const collected = rows.filter(r => r.status === "success").reduce((s, r) => s + r.amount, 0);
    const pending = rows.filter(r => r.status === "pending").reduce((s, r) => s + r.amount, 0);
    const failed = rows.filter(r => r.status === "failed").reduce((s, r) => s + r.amount, 0);

    return (
        <div>
            <PageHeader
                title="Dues Overview"
                subtitle={`${societyName.toUpperCase()} · CURRENT BILLING CYCLE`}
                actionLabel="Generate invoices"
                actionHref="/generate-invoices"
            />
            <DuesStatsBar totalBilled={totalBilled} collected={collected} pending={pending} failed={failed} />
            <DuesTable rows={rows} />
        </div>
    )
}