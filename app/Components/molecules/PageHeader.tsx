import LinkButton from "../atoms/LinkButton";

type PageHeaderProps = { title: string; subtitle: string; actionLabel?: string; actionHref?: string }

export default function PageHeader({ title, subtitle, actionLabel, actionHref }: PageHeaderProps) {
    return (
        <div className="flex items-start justify-between mb-8">
            <div>
                <h1 className="font-serif text-3xl text-[#1C2317] mb-2">{title}</h1>
                <p className="text-xs tracking-widest uppercase text-[#8A8A78]">{subtitle}</p>
            </div>
            {actionLabel && actionHref && <LinkButton href={actionHref}>{actionLabel}</LinkButton>}
        </div>
    )
}