import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const RadioGroupInput = ({
  options,
  label,
  name,
  error,
  value,
  onChange,
  labelClass,
}: {
  labelClass?: string;
  name: string;
  label: string;
  error: string;
  options: { label: string; value: string | boolean }[];
  onChange: (name: string, value: string) => void;
  value: string;
}) => {
  const handleOptionSelect = (value: string) => {
    onChange(name, value);
  };
  return (
    <div>
      {label && (
        <label
          htmlFor={label}
          className={cn(
            "block text-[.85rem] font-bold pb-1 text-[#616161] md:text-[15px]",
            labelClass
          )}
        >
          {" "}
          {label}
        </label>
      )}
      <RadioGroup
        className="mt-4"
        onValueChange={handleOptionSelect}
        value={value}
      >
        {options?.map((option, index) => {
          return (
            <div
              className="flex items-center py-3 cursor-pointer px-4 justify-between space-y-2 bg-[#F7FAFF]"
              key={index}
              onClick={() => handleOptionSelect(String(option?.value))}
            >
              <label
                className="text-isGray900 font-semibold text-[.85rem] md:text-[15px]"
                htmlFor={name}
              >
                {option?.label}
              </label>
              <RadioGroupItem value={String(option?.value)} id={name} />
            </div>
          );
        })}
      </RadioGroup>
      <span
        className={cn("text-xs text-red-500 hidden", error && "block pt-4")}
      >
        {error && error}
      </span>
    </div>
  );
};

export default RadioGroupInput;
