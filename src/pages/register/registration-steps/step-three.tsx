import { Button } from "@/components";
import CheckInput from "@/components/custom-check-input";
import PhoneInput from "@/components/custom-phone-input";
import RegistrationHeader from "@/components/registration/registration-header";
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
          touched={formik?.touched?.phone_number}
          isRequired
        />
        <CheckInput
          value={formik.values.agree}
          onChange={formik.setFieldValue}
          error={formik?.errors?.agree}
          touched={formik?.touched?.agree}
          name="agree"
          label="I agree to receive a one-time-password from Wizpulse to verify my account. Reply STOP to opt out"
        />
        <CheckInput
          value={formik.values.terms}
          onChange={formik.setFieldValue}
          error={formik?.errors?.terms}
          touched={formik?.touched?.terms}
          name="terms"
          label={
            <>
              I have read and agree to Wizpulse’s{" "}
              <span className="text-isPrimary300">Privacy Policy</span> and{" "}
              <span className="text-isPrimary300">Terms of Service</span>
            </>
          }
        />
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

export default StepThree;
