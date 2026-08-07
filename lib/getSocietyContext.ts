import { createClient } from "@/lib/supabase/server";

export async function getSocietyContext() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const { data: profile } = await supabase
        .from("profiles")
        .select("first_name, last_name, role, societies(society_name)")
        .eq("id", user!.id)
        .single();

    return {
        societyName: profile?.societies?.[0]?.society_name ?? "",
        userName: `${profile?.first_name ?? ""} ${profile?.last_name ?? ""}`.trim(),
        userRole: profile?.role === "admin" ? "Secretary · Admin" : "Resident",
    };
}