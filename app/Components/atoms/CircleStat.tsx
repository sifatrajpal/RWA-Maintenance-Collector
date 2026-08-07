type CircleStatProps = { lines: string[] }

export default function CircleStat({ lines }: CircleStatProps) {
    return (
        <div className="w-24 h-24 rounded-full border-2 border-[#B8963E] flex flex-col items-center justify-center text-center px-2">
            {lines.map((line, i) => (
                <span key={i} className="text-[10px] tracking-widest uppercase text-[#B8963E] leading-tight">{line}</span>
            ))}
        </div>
    )
}