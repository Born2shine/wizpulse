import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  label?: string;
  labelClass?: string;
  isRequired?: boolean;
  value?: string | E164Number | undefined;
  onChange: (arg: any) => void;
  error?: string;
  placeholder?: string;
  className?: string;
}

export default function CustomPhoneInput({
  label,
  labelClass,
  className,
  isRequired,
  value,
  onChange,
  error,
  placeholder,
}: PhoneInputProps) {
  return (
    <>
      {label && (
        <label
          htmlFor={label}
          className={cn("block font-normal text-[.8rem] pb-1 text-[#616161] md:text-[14px]", labelClass)}
        >
          {" "}
          {label}
          {isRequired && <span className="inline-block text-red-400 text-lg pl-1 mt-">*</span>}{" "}
        </label>
      )}
      <PhoneInput
        defaultCountry="US"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "flex h-10 w-full rounded-[8px] border border-[#E0E0E0] bg-white px-3 py-3 text-[.85rem] ring-offset-background font-normal placeholder:text-muted-foreground/30 focus:border-[red] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:font-normal placeholder:text-[.9rem] placeholder:text-[#9E9E9E] md:text-[.95rem]",
          className,
          error && "border-red-500"
        )}
      />
      <span className={cn("text-xs text-red-500 hidden", error && "block")}>{error && error}</span>
    </>
  );
}
