type TextLinkProps = { children: string; onClick?: () => void; href?: string }

export default function TextLink({ children, onClick, href }: TextLinkProps) {
    const classes = "text-sm text-[#1C2317] underline underline-offset-2";
    if (href) return <a href={href} className={classes}>{children}</a>;
    return <button onClick={onClick} className={classes}>{children}</button>;
}