import { Button, Input } from "@/components";
import RegistrationHeader from "@/components/registration/registration-header";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StepOne = ({ formik }: any) => {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <RegistrationHeader
        totalSteps={4}
        activeStep={1}
        description="Could you please tell us your full name?"
        goBack={() => {
          navigate("/");
        }}
      />

      <div className="flex flex-col items-center w-full justify-center h-full mt-8">
        <div className="relative mb-3 w-full">
          <Input
            label="Legal First Name"
            id="first_name"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik?.errors?.first_name}
            touched={formik?.touched?.first_name}
            isRequired
            placeholder="Legal First Name"
            className="pl-8 placeholder:text-isGray400"
          />
          <User size="16" className="absolute left-3 top-11 text-isGray400" />
        </div>
        <div className="relative mb-3 w-full">
          <Input
            label="Middle Name"
            id="middle_name"
            name="middle_name"
            value={formik.values.middle_name}
            onChange={formik.handleChange}
            error={formik?.errors?.middle_name}
            touched={formik?.touched?.middle_name}
            placeholder="Your Middle Name"
            className="pl-8 placeholder:text-isGray400"
          />
          <User size="16" className="absolute left-3 top-[34px] text-isGray400" />
        </div>
        <div className="relative mb-3 w-full">
          <Input
            label="Legal Last Name"
            id="last_name"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik?.errors?.last_name}
            touched={formik?.touched?.last_name}
            isRequired
            placeholder="Legal Last Name"
            className="pl-8 placeholder:text-isGray400"
          />
          <User size="16" className="absolute left-3 top-11 text-isGray400" />
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

export default StepOne;
