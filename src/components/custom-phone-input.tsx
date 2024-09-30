import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

export default function PhoneInput({
  value,
  onChange,
  name,
  label,
  isRequired,
  error,
  touched,
}: {
  value: string;
  onChange: (name: string, value: string) => void;
  name: string;
  label: string;
  isRequired: boolean;
  error: string;
  touched: boolean;
}) {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    // const formattedInput = formatPhoneNumber(input);
    onChange(name, input);
  };

  // const formatPhoneNumber = (input: string) => {
  //   if (input.length <= 3) return input;
  //   if (input.length <= 6) return `(${input.slice(0, 3)}) ${input.slice(3)}`;
  //   return `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
  // };

  return (
    <div className="w-full max-w-md mx-auto">
      {label && (
        <label
          htmlFor={label}
          className="block font-normal text-[.8rem] pb-1 text-[#616161] md:text-[14px]"
        >
          {" "}
          {label}
          {isRequired && (
            <span className="inline-block text-red-400 text-lg pl-1 mt-">
              *
            </span>
          )}{" "}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex h-10 items-center pl-3 pointer-events-none">
          <div className="flex items-center">
            <img
              loading="lazy"
              src={`https://flagcdn.com/w20/us.png`}
              srcSet={`https://flagcdn.com/w40/us.png 2x`}
              alt="phone"
              width={22}
              height={16}
            />
            <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-400" />
          </div>
        </div>
        <input
          type="text"
          id={name}
          className="block w-full h-10 pl-16 pr-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md outline-none text-[.85rem] "
          placeholder="(41) 345-897-21"
          value={value}
          onChange={handlePhoneChange}
        />
      </div>
      <span className={cn("text-xs text-red-500 hidden", error && "block")}>
        {error && touched && error}
      </span>
    </div>
  );
}
