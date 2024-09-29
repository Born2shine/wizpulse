import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import WelcomeAvatar from "../../assets/images/avatar.png";
import CustomStepper from "../custom-stepper";
import { cn } from "@/lib/utils";
const RegistrationHeader = ({
  activeStep,
  totalSteps,
  goBack,
  description,
  descriptionWidth,
}: {
  activeStep: number;
  totalSteps: number;
  goBack: () => void;
  description: string;
  descriptionWidth?: string;
}) => {
  return (
    <header className="mt-20">
      <div className="flex items-center justify-between w-3/5">
        <Button
          className="bg-transparent px-0 text-[#292D32] hover:bg-transparent"
          onClick={goBack}
        >
          <ChevronLeft />
        </Button>
        <CustomStepper activeStep={activeStep} totalSteps={totalSteps} />
      </div>

      <div className="flex flex-col gap-3 items-center mt-10">
        <img
          src={WelcomeAvatar}
          alt="welcome-avatar"
          className="h-[80px] w-[80px]"
        />
        <h2
          className={cn(
            "text-isGray900 text-xl font-semibold text-center",
            descriptionWidth && descriptionWidth
          )}
        >
          {description}
        </h2>
      </div>
    </header>
  );
};

export default RegistrationHeader;
