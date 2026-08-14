'use server'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updatePaymentDetails(societyId: string, upiId: string, bankDetails: string, qrFile: FormData) {
    console.log("updatePaymentDetails called with societyId:", societyId, "upiId:", upiId, "bankDetails:", bankDetails);

    const supabase = await createClient();
    let qrUrl: string | undefined;

    const qr = qrFile.get('qr') as File;
    if (qr && qr.size > 0) {
        const fileName = `${societyId}-qr-${Date.now()}.${qr.name.split('.').pop()}`;
        const { error: uploadError } = await supabase.storage.from('payment-proofs').upload(fileName, qr);
        if (uploadError) return { success: false, message: uploadError.message };
        const { data } = supabase.storage.from('payment-proofs').getPublicUrl(fileName);
        qrUrl = data.publicUrl;
    }

    const updatePayload: any = { upi_id: upiId, bank_details: bankDetails };
    if (qrUrl) updatePayload.qr_code_url = qrUrl;

    const { data: updateResult, error } = await supabase
        .from('societies')
        .update(updatePayload)
        .eq('id', societyId)
        .select();

    console.log("Update result:", updateResult);
    console.log("Update error:", error);

    if (error) return { success: false, message: error.message };

    revalidatePath('/generate-invoices');
    return { success: true };
}