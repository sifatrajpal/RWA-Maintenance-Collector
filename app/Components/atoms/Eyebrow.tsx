const eyebrowVariants = {
    brass: 'text-[#B4863A]',
    ink: 'text-[#16231B]'
}



type EyebrowProps = {
    color?: keyof typeof eyebrowVariants,
    children: React.ReactNode;
}


export default function({color = 'brass', children}: EyebrowProps){
    return(
        <div className={`flex items-center gap-2 text-xs tracking-widest uppercase ${eyebrowVariants[color]}`}>
            <span className={`w-4 h-px ${eyebrowVariants[color]} bg-current`} />
            {children}
        </div>
    )
}


