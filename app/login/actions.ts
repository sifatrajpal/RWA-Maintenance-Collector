'use server'
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function LoginWithEmailAndPassword(email: string, password: string) {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return { success: false, message: error.message };
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profileError || !profile) {
      return { success: false, message: "Could not find user profile" };
    }

    if (profile.role === "admin") {
      redirect("/dues-overview");
    } else {
      redirect("/resident");
    }
  } catch (err) {
    console.error("LOGIN CRASH:", err);
    return { success: false, message: "Something went wrong. Check server logs." };
  }
}