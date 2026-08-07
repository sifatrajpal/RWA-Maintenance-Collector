type AvatarProps = { initials: string }

export default function Avatar({ initials }: AvatarProps) {
    return (
        <div className="w-9 h-9 rounded-full bg-[#B8963E] text-[#1C2317] flex items-center justify-center text-sm font-semibold shrink-0">
            {initials}
        </div>
    )
}