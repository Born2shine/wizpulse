import * as React from "react"
import { cn } from "./utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    labelClass?: string,
    isRequired?: boolean,
    id: string,
    name: string,
    value?: string,
    handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    touched?: boolean,
    error?: string
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, labelClass, id, name, isRequired, onChange, error, value, touched, handleBlur, ...props }, ref) => {
    return (
      <div>
      {label && <label htmlFor={label} className={cn(
        "block font-normal text-[.8rem] pb-1 text-[#616161] md:text-[14px]",
        labelClass
      )}> {label}{isRequired && <span className="inline-block text-red-400 text-lg pl-1 mt-">*</span>} </label>}
      <input
        type={type}
        onBlur={handleBlur}
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        className={cn(
          "flex h-10 w-full rounded-[8px] border border-[#E0E0E0] bg-white px-3 py-3 text-[.85rem] ring-offset-background font-normal file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/30 focus:border-[#A7BDD3] file:focus:border focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:font-normal placeholder:text-[.9rem] placeholder:text-[#9E9E9E] md:text-[.95rem]",
          className,
          error && touched && 'border-red-500',
        )}
        ref={ref}
        {...props}
      />
      <span className={cn(
              "text-xs text-red-500 hidden",
              error &&  'block'
            )}>{error && touched && error}</span>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
