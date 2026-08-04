

type PainPointCardProps = {
    number: string,
    title: string,
    description: string
}


export default function PainPointCard({number, title, description}: PainPointCardProps){
    return (
        <div className="border border-[#DED2AE] bg-[#F5F1E6] p-7">
            <div className="font-mono text-xs text-[#B4863A] mb-3.5">{number}</div>
            <h3 className="text-lg mb-2.5">{title}</h3>
            <p className="text-sm leading-relaxed opacity-75">{description}</p>
        </div>
    )
}