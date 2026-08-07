type QuoteBlockProps = {
    quote: string;
    author: string;
    role: string;
}

export default function QuoteBlock({ quote, author, role }: QuoteBlockProps) {
    return (
        <div>
            <p className="text-white text-xl sm:text-2xl font-serif leading-snug mb-4">
                "{quote}"
            </p>
            <p className="text-sm text-[#B8B8A8]">{author} — {role}</p>
        </div>
    )
}