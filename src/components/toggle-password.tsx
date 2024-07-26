import { LucideEye, LucideEyeOff } from "lucide-react";
import { cn } from "../lib/utils";

interface TogglePasswordProps {
  showPassword: boolean;
  setShowPassword: (arg: boolean) => void;
  className?: string;
}

export default function TogglePassword({ showPassword = false, setShowPassword, className }: TogglePasswordProps) {
  return (
    <span
      className={cn("absolute right-4 top-10 cursor-pointer", className)}
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <LucideEye width={20} height={20} className="text-isGray400" />
      ) : (
        <LucideEyeOff width={20} height={20} className="text-isGray400" />
      )}
    </span>
  );
}
