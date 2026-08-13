'use client'
import Logo from "../atoms/Logo";
import Avatar from "../atoms/Avatar";
import { signOut } from "@/lib/auth-actions";

type ResidentTopBarProps = { flatNumber: string; societyName: string; userName: string }

export default function ResidentTopBar({ flatNumber, societyName, userName }: ResidentTopBarProps) {
    const initials = userName.trim().split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

    return (
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#D9D6C7]">
            <Logo />
            <div className="flex items-center gap-4">
                <span className="text-xs tracking-widest uppercase border border-[#D9D6C7] px-3 py-1.5">
                    FLAT {flatNumber} · {societyName.toUpperCase()}
                </span>
                <button
                    onClick={() => signOut()}
                    className="text-sm text-[#1C2317] border border-[#D9D6C7] rounded-full px-4 py-1.5 hover:bg-[#1C2317] hover:text-white transition-colors"
                >
                    Sign out
                </button>
                <Avatar initials={initials} />
            </div>
        </div>
    )
}