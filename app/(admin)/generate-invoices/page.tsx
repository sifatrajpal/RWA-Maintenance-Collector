import { getFlats } from "../manage-flats/actions";
import { getSocietyContext } from "@/lib/getSocietyContext";
import { createClient } from "@/lib/supabase/server";
import PageHeader from "@/app/Components/molecules/PageHeader";
import GenerateInvoicesForm from "@/app/Components/organisms/GenerateInvoicesForm";
import PaymentDetailsForm from "@/app/Components/organisms/PaymentDetailsForm";

export default async function GenerateInvoicesPage() {
    const [flats, societyContext] = await Promise.all([getFlats(), getSocietyContext()]);
    const { upiId, qrCodeUrl, bankDetails } = societyContext;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const { data: profile } = await supabase.from('profiles').select('society_id').eq('id', user!.id).single();

    return (
        <div>
            <PageHeader title="Generate Invoices" subtitle="BULK-CREATE THIS MONTH'S MAINTENANCE BILLS" />

            <PaymentDetailsForm
                societyId={profile?.society_id ?? ""}
                currentUpiId={upiId}
                currentBankDetails={bankDetails}
                currentQrUrl={qrCodeUrl}
            />

            <GenerateInvoicesForm residentCount={flats.length} />
        </div>
    )
}