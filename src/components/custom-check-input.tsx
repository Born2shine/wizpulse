import { ReactNode } from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";

const CheckInput = ({
  label,
  name,
  value,
  onChange,
  error,
  touched,
}: {
  name: string;
  label: ReactNode | string;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
  error: string;
  touched: boolean;
}) => {
  const handleCheck = (checked: boolean) => {
    onChange(name, checked);
  };
  return (
    <div>
      <div className="flex space-x-2 mt-6">
        <Checkbox id={name} checked={value} onCheckedChange={handleCheck} />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor={name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      </div>
      <span className={cn("text-xs text-red-500 hidden", error && "block")}>
        {error && touched && error}
      </span>
    </div>
  );
};

export default CheckInput;
