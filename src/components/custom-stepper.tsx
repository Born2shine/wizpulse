const CustomStepper = ({
  activeStep,
  totalSteps,
}: {
  activeStep: number;
  totalSteps: number;
}) => {
  return (
    <p className="text-isGray900 text-xs font-normal tracking-[0.2px]">
      Step {activeStep} of {totalSteps}
    </p>
  );
};

export default CustomStepper;
