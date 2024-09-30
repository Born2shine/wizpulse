import { useSearchParams } from "react-router-dom";

import StepOne from "../registration-steps/step-one";
import { Formik } from "formik";
import StepTwo from "../registration-steps/step-two";
import StepThree from "../registration-steps/step-three";
import StepFour from "../registration-steps/step-four";
import VerificationCodeStatus from "../registration-steps/verification-code-status";
import OtpScreen from "../registration-steps/otp-screen";
import {
  stepFourSchema,
  stepOneSchema,
  stepThreeSchema,
  stepTwoSchema,
} from "@/utils/schema/registerSchema";
import { useRegisterMutation } from "@/redux/services/onboarding/onboardingApi";
import { useAppDispatch } from "@/redux/store";
import { setRegisteredUser } from "@/redux/features/auth/authSlice";
import IntroScreen from "./intro-screen";

interface RegistrationFormValues {
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  job_title: string;
  phone_number: string;
  password: string;
  user_type: string;
  agree: boolean;
  terms: boolean;
}
const RegisterLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    isRegistration: "true",
  });

  const [registerUser, { isLoading: isRegistering }] = useRegisterMutation();

  const dispatch = useAppDispatch();

  const getValidationSchema = () => {
    if (
      searchParams.get("isRegistration") === "true" &&
      searchParams.get("step") === "one"
    ) {
      return stepOneSchema;
    } else if (
      searchParams.get("isRegistration") === "true" &&
      searchParams.get("step") === "two"
    ) {
      return stepTwoSchema;
    } else if (
      searchParams.get("isRegistration") === "true" &&
      searchParams.get("step") === "three"
    ) {
      return stepThreeSchema;
    } else if (
      searchParams.get("isRegistration") === "true" &&
      searchParams.get("step") === "four"
    ) {
      return stepFourSchema;
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          first_name: "",
          last_name: "",
          middle_name: "",
          job_title: "string",
          phone_number: "",
          password: "",
          user_type: "PARENT",
          agree: false,
          terms: false,
        }}
        onSubmit={async (values: RegistrationFormValues, resetForm: any) => {
          if (searchParams.get("step") === "one") {
            setSearchParams({ isRegistration: "true", step: "two" });
          } else if (searchParams.get("step") === "two") {
            setSearchParams({ isRegistration: "true", step: "three" });
          } else if (searchParams.get("step") === "three") {
            setSearchParams({ isRegistration: "true", step: "four" });
          } else if (searchParams.get("step") === "four") {
            const payload: any = { ...values, middle_name: values?.middle_name ? values?.middle_name : null };
            delete payload.agree;
            delete payload.terms;
            const response = await registerUser(payload);
            // console.log("response", response);
            if (Object.keys(response?.data)?.includes("email")) {
              const res = {...response?.data, phone_number: values?.phone_number}
              dispatch(setRegisteredUser(res));
              sessionStorage.setItem("user", JSON.stringify(res));
              setSearchParams({ isRegistration: "true", step: "verifying" });
              resetForm();
            }
          }
        }}
        validationSchema={getValidationSchema()}
      >
        {(formikProps: any) => {
          return (
            <>
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "one" && (
                  <StepOne formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "two" && (
                  <StepTwo formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "three" && (
                  <StepThree formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "four" && (
                  <StepFour formik={formikProps} isLoading={isRegistering} />
                )}
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "verifying" && (
                  <VerificationCodeStatus status="sent" />
                )}
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "otp" && <OtpScreen />}
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "verification-successful" && (
                  <VerificationCodeStatus status="successful" />
                )}
              {searchParams.get("isRegistration") === "true" &&
                searchParams.get("step") === "intro" && (
                  <IntroScreen />
                )}
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterLayout;
