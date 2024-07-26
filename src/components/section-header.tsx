import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string | React.ReactNode,
    titleClass?: string,
    subStitle: string,
    className?: string
}

export default function SectionHeader({title, titleClass, subStitle, className}: SectionHeaderProps) {
    return (
        <div className={cn(
            "mb-4 text-center",
            className
        )}>
            <h2 className={cn(
                "text-xl font-semibold leading-6 font-aileron",
                titleClass
            )}>{title}</h2>
            <p className="pb-3 pt-2 text-sm text-isGray500 font-extralight">{subStitle}</p>
        </div>
    )
}
