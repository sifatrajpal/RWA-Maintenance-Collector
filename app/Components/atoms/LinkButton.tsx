import Link from "next/link";

type LinkButtonProps = { href: string; children: string }

export default function LinkButton({ href, children }: LinkButtonProps) {
    return (
        <Link href={href} className="inline-flex items-center justify-center rounded-full bg-[#1C2317] text-white px-6 py-3 text-sm font-medium">
            {children}
        </Link>
    )
}