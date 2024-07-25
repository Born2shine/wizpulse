import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string | React.ReactNode,
    subStitle: string,
    className?: string
}

export default function SectionHeader({title, subStitle, className}: SectionHeaderProps) {
    return (
        <div className={cn(
            "mb-4 text-center",
            className
        )}>
            <h2 className="text-xl font-semibold leading-6 font-aileron">{title}</h2>
            <p className="pb-3 pt-2 text-sm text-isGray500 font-extralight">{subStitle}</p>
        </div>
    )
}
