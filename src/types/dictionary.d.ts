/* eslint-disable @typescript-eslint/no-explicit-any */
export type Dictionary = {
  [key: string]: any;
};

type SetCurrentStepType = (step: number) => void;
export interface UpdateStepProps {
  setCurrentStep: SetCurrentStepType;
}
