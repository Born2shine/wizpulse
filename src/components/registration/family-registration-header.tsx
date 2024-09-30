import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import WelcomeAvatar from "../../assets/images/avatar.png";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const FamilyRegistrationHeader = ({
  goBack,
  step = 1,
  description,
  descriptionWidth,
  extraDescription,
}: {
  goBack?: () => void;
  step: number;
  description?: string;
  descriptionWidth?: string;
  extraDescription?: ReactNode | string;
}) => {
  return (
    <header className="pt-14">
      <div className="flex items-center gap-3 justify-between w-full">
        <Button
          className="bg-transparent px-0 text-[#292D32] hover:bg-transparent"
          onClick={goBack}
        >
          <ChevronLeft />
        </Button>
        <Progress value={step * 14.28} />
      </div>
      <div className="flex flex-col gap-3 items-center pt-7">
        <img
          src={WelcomeAvatar}
          alt="welcome-avatar"
          className="h-[80px] w-[80px]"
        />
        {description && (
          <h2
            className={cn(
              "text-isGray900 text-xl font-semibold text-center",
              descriptionWidth && descriptionWidth
            )}
          >
            {description}
          </h2>
        )}
        {extraDescription && (
          <p className="text-xs text-center font-normal text-isGray700 mb-9">
            {extraDescription}
          </p>
        )}
      </div>
    </header>
  );
};

export default FamilyRegistrationHeader;
