import { Button, Input } from "@/components";
import RegistrationHeader from "@/components/registration/registration-header";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StepTwo = ({ formik }: any) => {
  const navigate = useNavigate();
  return (
    <section className="w-full">
      <RegistrationHeader
        totalSteps={4}
        activeStep={2}
        description="Great! Now what is the email address that is on the file with your child’s school?"
        goBack={() => {
          navigate("/register?isRegistration=true&step=one");
        }}
      />

      <div className="flex flex-col items-center w-full justify-center h-full mt-8">
        <div className="relative mb-3 w-full">
          <Input
            label="Email Address"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik?.errors?.email}
            touched={formik?.touched?.email}
            isRequired
            placeholder="email id with your child’s school record"
            className="pl-8 placeholder:text-isGray400"
          />
          <Mail size="16" className="absolute left-3 top-11 text-isGray400" />
        </div>
        <Button
          className="w-full mt-[3rem]"
          onClick={() => formik.handleSubmit()}
          type="button"
        >
          Next Step
        </Button>
      </div>
    </section>
  );
};

export default StepTwo;
