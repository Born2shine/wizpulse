import { cn } from "@/lib/utils";
import { Calendar } from "iconsax-react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css"


interface CustomDateInputProps {
    label?: string,
    id: string,
    name?: string,
    labelClass?: string,
    className?: string,
    onOpenPickNewDate?: boolean,
    isRequired?: boolean,
    handleChange: (arg: any) =>  void
    selected?: Date,
    error: string,
    touched?: boolean,
    showIcon?: boolean
}

export default function CustomDateInput({ label, id, name, className, labelClass, onOpenPickNewDate = false, isRequired, handleChange, selected, error, touched, showIcon = true }: CustomDateInputProps) {
    return (
        <div className="relative">
            {label && <label htmlFor={label} className={cn(
                "block font-normal text-[.8rem] pb-1 text-[#616161] md:text-[15px]",
                labelClass
            )}> {label}{isRequired && <span className="inline-block text-red-400 text-lg pl-1 mt-">*</span>} </label>}
            <DatePicker
                id={id}
                name={name}
                placeholder='MM/DD/YY'
                inputClass={cn(
                    'border rounded-[8px] bg-white px-3 py-2.5 text-[.85rem] w-full focus:outline-none',
                    error && touched && "border-red-500"
                )}
                containerClassName='w-full'
                onOpenPickNewDate={onOpenPickNewDate}
                onChange={(date) => handleChange(date)}
                value={selected}
                mobileButtons={[]}
                className={className}
            />
           {showIcon && <Calendar size={16} className="absolute right-3 top-11 text-isGray400"/>}
             <span className={cn(
              "text-xs text-red-500 hidden",
              error &&  'block'
            )}>{error && touched && error}</span>
        </div>
    )
}
