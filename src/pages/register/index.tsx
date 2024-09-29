import { useSearchParams } from "react-router-dom";

import StepOne from "./registration-steps/step-one";
import { useFormik } from "formik";
import StepTwo from "./registration-steps/step-two";
import StepThree from "./registration-steps/step-three";
import StepFour from "./registration-steps/step-four";

const Register = () => {
  const [searchParams] = useSearchParams({
    isRegistration: "true",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      job_title: "string",
      phone_number: "",
      password: "",
      user_type: "PARENT",
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  console.log(searchParams.get("isRegistration"));

  return (
    <section className="w-screen h-[95vh] overflow-hidden px-8 md:m-5 md:rounded-3xl md:border md:w-[30rem] md:mx-auto">
      {searchParams.get("isRegistration") === "true" &&
        searchParams.get("step") === "one" && <StepOne formik={formik} />}
      {searchParams.get("isRegistration") === "true" &&
        searchParams.get("step") === "two" && <StepTwo formik={formik} />}
      {searchParams.get("isRegistration") === "true" &&
        searchParams.get("step") === "three" && <StepThree formik={formik} />}
      {searchParams.get("isRegistration") === "true" &&
        searchParams.get("step") === "four" && <StepFour formik={formik} />}
    </section>
  );
};

export default Register;
