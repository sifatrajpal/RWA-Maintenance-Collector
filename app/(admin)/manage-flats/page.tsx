import { getFlats } from "./actions";
import { getSocietyContext } from "@/lib/getSocietyContext";
import PageHeader from "@/app/Components/molecules/PageHeader";
import AddResidentForm from "@/app/Components/organisms/AddResidentForm";
import ResidentsTable from "@/app/Components/organisms/ResidentsTable";

export default async function ManageFlatsPage() {
    const [flats, { societyName }] = await Promise.all([getFlats(), getSocietyContext()]);

    const rows = flats.map((f) => ({
        flat: f.flat_number,
        resident: `${f.first_name} ${f.last_name}`,
        phone: f.phone_number,
        role: f.role,
    }));

    return (
        <div>
            <PageHeader title="Manage Flats" subtitle={`${societyName.toUpperCase()} · ${rows.length} FLATS REGISTERED`} />
            <AddResidentForm />
            <ResidentsTable rows={rows} />
        </div>
    )
}