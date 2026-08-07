import Sidebar from "@/app/Components/organisms/Sidebar";
import { getSocietyContext } from "@/lib/getSocietyContext";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const { societyName, userName, userRole } = await getSocietyContext();

    return (
        <div className="flex min-h-screen bg-[#F1EFE3]">
            <Sidebar societyName={societyName} userName={userName} userRole={userRole} />
            <main className="flex-1 px-12 py-10">{children}</main>
        </div>
    )
}