import { CheckIcon, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

type CustomSelectType = {
  options: Record<string, any>[];
  selected: string;
  id?: string;
  label?: string;
  name?: string;
  labelClass?: string;
  className?: string;
  disabled?: boolean;
  isRequired?: boolean;
  setSelected: (event: any) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  touched?: any;
  error?: any;
};

export default function CustomSelect({
  options,
  id,
  selected,
  disabled,
  label,
  name,
  labelClass,
  setSelected,
  onBlur,
  className,
  touched,
  error,
  isRequired,
}: CustomSelectType) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mt-1">
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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            id={id}
            name={name}
            className={cn(
              "w-full justify-between p-3 rounded-[8px] border text-gray-600 bg-background hover:bg-white hover:text-gray-600 focus:border-[#A7BDD3] relative",
              className,
              error && touched && "border-red-500"
            )}
            ref={buttonRef}
            disabled={disabled}
            onBlur={onBlur}
          >
            {options && options[0]?.label === options[0]?.value
              ? selected
                ? options?.filter(
                    (option) => option?.value?.toString().toLowerCase() === selected?.toString().toLowerCase()
                  )[0]?.label
                : "Select..."
              : selected
              ? options?.filter(
                  (option) => option?.label?.toString().toLowerCase() === selected?.toString().toLowerCase()
                )[0]?.label
              : "Select..."}
            {/* {
                            selected ? options?.filter((option) => (option?.value?.toString().toLowerCase() || option?.label?.toString().toLowerCase()) === selected?.toString().toLowerCase())[0]?.label : "Select..."
                        } */}
            <ChevronDown className="absolute right-2 ml-2 h-6 w-6 text-[#8F8F8F] shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" style={{ width: `${buttonRef?.current?.offsetWidth}px` }}>
          <Command className="">
            <CommandInput placeholder={`Search`} className="h-9" />
            <CommandEmpty>No Record Found.</CommandEmpty>
            <CommandGroup className="h-56 overflow-y-scroll" style={{ overflowY: "scroll" }}>
              <CommandList>
                {options?.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setSelected(currentValue);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                    <CheckIcon
                      className={cn("ml-auto h-4 w-4", selected === option.value ? "opacity-100" : "opacity-0")}
                    />
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <span className={cn("text-xs text-red-500 hidden", error && "block")}>{error && touched && error}</span>
    </div>
  );
}
