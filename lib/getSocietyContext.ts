import { createClient } from "@/lib/supabase/server";

export async function getSocietyContext() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const { data: profile } = await supabase
        .from("profiles")
        .select("first_name, last_name, role, societies(society_name, upi_id, qr_code_url, bank_details)")
        .eq("id", user!.id)
        .single();

    const society = Array.isArray(profile?.societies) ? profile?.societies[0] : profile?.societies;

    return {
        societyName: society?.society_name ?? "",
        userName: `${profile?.first_name ?? ""} ${profile?.last_name ?? ""}`.trim(),
        userRole: profile?.role === "admin" ? "Secretary · Admin" : "Resident",
        upiId: society?.upi_id ?? "",
        qrCodeUrl: society?.qr_code_url ?? "",
        bankDetails: society?.bank_details ?? "",
    };
}