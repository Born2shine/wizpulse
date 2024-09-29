import { Button } from "@/components";
import PhoneInput from "@/components/custom-phone-input";
import RegistrationHeader from "@/components/registration/registration-header";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const StepThree = ({ formik }: any) => {
  const navigate = useNavigate();
  return (
    <section className="w-full">
      <RegistrationHeader
        totalSteps={4}
        activeStep={3}
        description="Kindly provide your cell phone number"
        goBack={() => {
          navigate("/register?isRegistration=true&step=two");
        }}
      />

      <div className="flex flex-col items-center w-full justify-center h-full mt-8">
        <PhoneInput
          label="Phone Number"
          value={formik.values.phone_number}
          onChange={formik.setFieldValue}
          error={formik?.errors?.phone_number}
          name="phone_number"
          //   touched={formik?.touched?.phone}
          isRequired
        />
        <div className="flex space-x-2 mt-6">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to receive a one-time-password from Wizpulse to verify my
              account. Reply STOP to opt out
            </label>
          </div>
        </div>
        <div className="flex space-x-2 mt-6">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none text-isGray900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have read and agree to Wizpulse’s{" "}
              <span className="text-isPrimary300">Privacy Policy</span> and{" "}
              <span className="text-isPrimary300">Terms of Service</span>
            </label>
          </div>
        </div>
        <Button
          className="w-full mt-[3rem]"
          onClick={() => navigate("/register?isRegistration=true&step=four")}
        >
          Next Step
        </Button>
      </div>
    </section>
  );
};

export default StepThree;
