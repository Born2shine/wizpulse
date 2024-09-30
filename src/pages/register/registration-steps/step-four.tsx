import { Button, Input } from "@/components";
import RegistrationHeader from "@/components/registration/registration-header";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StepFour = ({ formik, isLoading }: any) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="w-full">
      <RegistrationHeader
        totalSteps={4}
        activeStep={4}
        description="To ensure security of your account, please create a strong password."
        goBack={() => {
          navigate("/register?isRegistration=true&step=three");
        }}
      />
      <div className="flex flex-col items-center w-full justify-center h-full mt-8">
        <div className="relative mb-3 w-full">
          <Input
            label="Create Password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik?.errors?.password}
            touched={formik?.touched?.password}
            isRequired
            placeholder="e.g. example123&_"
            className="pl-8 placeholder:text-isGray400"
            type={showPassword ? "text" : "password"}
          />
          <LockKeyhole
            size="16"
            className="absolute left-3 top-11 text-isGray400"
          />
          <span 
            className="absolute right-2 top-10 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          > {showPassword ? <EyeIcon width={20}/> : <EyeOff width={20}/>} </span>
        </div>
        <div className="mt-2">
          <h4 className="text-isPrimary900 text-xs tracking-[0.2px] font-bold mb-2">
            Password criteria
          </h4>
          <ul className="flex flex-wrap gap-4 text-[#1C1C1C] font-medium">
            <li
              className={cn(
                "py-1 text-[10px] whitespace-nowrap border border-isPrimary100 bg-white p-2 rounded-[120px]",
                Boolean(formik.values?.password?.length) &&
                  /\d/g.test(formik.values?.password)
                  ? "bg-green-200"
                  : ""
              )}
            >
              One number
            </li>
            <li
              className={cn(
                "py-1 text-[10px] whitespace-nowrap border border-isPrimary100 bg-white p-2 rounded-[120px]",
                Boolean(formik.values?.password?.length) &&
                  /[A-Z]/g.test(formik.values?.password)
                  ? "bg-green-200"
                  : ""
              )}
            >
              One uppercase character
            </li>
            <li
              className={cn(
                "py-1 text-[10px] whitespace-nowrap border border-isPrimary100 bg-white p-2 rounded-[120px]",
                Boolean(formik.values?.password?.length) &&
                  /[a-z]/g.test(formik.values?.password)
                  ? "bg-green-200"
                  : ""
              )}
            >
              One lowercase character
            </li>
            <li
              className={cn(
                "py-1 text-[10px] whitespace-nowrap border border-isPrimary100 bg-white p-2 rounded-[120px]",
                Boolean(formik.values?.password?.length) &&
                  formik.values?.password?.length >= 8
                  ? "bg-green-200"
                  : ""
              )}
            >
              8 characters minimum
            </li>
          </ul>
        </div>
        <Button
          className="w-full mt-[3rem]"
          type="button"
          loading={isLoading}
          onClick={() => formik.handleSubmit()}
        >
          Sign Up
        </Button>
      </div>
    </section>
  );
};

export default StepFour;
