import { getFlats } from "../manage-flats/actions";
import { getSocietyContext } from "@/lib/getSocietyContext";
import PageHeader from "@/app/Components/molecules/PageHeader";
import GenerateInvoicesForm from "@/app/Components/organisms/GenerateInvoicesForm";

export default async function GenerateInvoicesPage() {
    const [flats, { societyName }] = await Promise.all([getFlats(), getSocietyContext()]);

    return (
        <div>
            <PageHeader title="Generate Invoices" subtitle="BULK-CREATE THIS MONTH'S MAINTENANCE BILLS" />
            <GenerateInvoicesForm residentCount={flats.length} />
        </div>
    )
}