const stampColors = {
    brass: 'text-[#B4863A]',
    ink: 'text-[#16231B]',
    light: 'text-[#E7C989]',
}

 const stampSizes = {
    sm: 'w-14 h-14 text-[8px]',
    md: 'w-24 h-24 text-[10.5px]',
    lg: 'w-36 h-36 text-xs',
}



type stampBadgeProps = {
    color: keyof typeof stampColors,
    size: keyof typeof stampSizes,
    children: React.ReactNode
}



export default function StampBadge({color = 'brass', size, children}: stampBadgeProps){
    return (
        <div className={` rounded-full border flex items-center justify-center text-center font-mono uppercase tracking-wider relative ${stampColors[color]} ${stampSizes[size]}`} style={{ borderColor: 'currentColor' }}>
            <div className="absolute inset-1.5 rounded-full border opacity-55" style={{ borderColor: 'currentColor' }}/>
            <span>{children}</span> 
        </div>
    )
}



