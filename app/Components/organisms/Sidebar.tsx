'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../atoms/Logo";
import Avatar from "../atoms/Avatar";
import { signOut } from "@/lib/auth-actions";

const navItems = [
    { number: "01", label: "Dues Overview", href: "/dues-overview" },
    { number: "02", label: "Expense Log", href: "/expense-log" },
    { number: "03", label: "Manage Flats", href: "/manage-flats" },
    { number: "04", label: "Generate Invoices", href: "/generate-invoices" },
]

type SidebarProps = { societyName: string; userName: string; userRole: string }

export default function Sidebar({ societyName, userName, userRole }: SidebarProps) {
    const pathname = usePathname();
    const initials = userName.trim().split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

    return (
        <aside className="w-64 shrink-0 bg-[#1C2317] text-white min-h-screen flex flex-col justify-between px-6 py-8">
            <div>
                <Logo variant="light" />
                <p className="text-xs tracking-widest uppercase text-[#8A8A78] mb-8 mt-1 ml-8">{societyName}</p>

                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                                    active ? "bg-[#2A3324] text-white" : "text-[#B8B8A8] hover:text-white"
                                }`}
                            >
                                <span className="text-xs text-[#8A8A78]">{item.number}</span>
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <div className="border-t border-[#33402D] pt-5">
                <div className="flex items-center gap-3 mb-4">
                    <Avatar initials={initials} />
                    <div>
                        <p className="text-sm">{userName}</p>
                        <p className="text-xs text-[#8A8A78]">{userRole}</p>
                    </div>
                </div>
                <button
                    onClick={() => signOut()}
                    className="w-full text-sm  text-[#B8B8A8] hover:text-white hover:border-white border border-[#33402D] rounded-full px-4 py-2 transition-colors"
                >
                    Sign out
                </button>
            </div>
        </aside>
    )
}