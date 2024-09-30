// import { Button } from "@/components";
import { Button } from "@/components";
import RegistrationHeader from "@/components/registration/registration-header";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import {
  useResendEmailOtpMutation,
  useVerifyOtpMutation,
} from "@/redux/services/auth/authApi";
import { otpSchema } from "@/utils/schema/registerSchema";
import { useFormik } from "formik";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const OtpScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    isRegistration: "true",
  });

  const [verifyOtp, { isLoading: verifyOtpLoading }] = useVerifyOtpMutation();
  const [resendEmailOtp, { isLoading: resendEmailOtpLoading }] =
    useResendEmailOtpMutation();

  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  const { values, setFieldValue, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpSchema,
    onSubmit: async (values) => {
      const payload = {
        otp_code: values.otp,
        email: user?.email,
      };
      const response = await verifyOtp(payload);
      if (response?.data?.detail === "Email verified successfully") {
        Cookies.set("token", response?.data?.data?.access);
        sessionStorage.setItem("token", response?.data?.data?.access);
        setSearchParams({
          ...searchParams,
          isRegistration: "true",
          step: "verification-successful",
        });
      } else {
        toast.error(
          "An error occured while trying to verify your account, please click the resend button to get another code."
        );
      }
    },
  });

  const handleOtpInput = (value: string) => {
    setFieldValue("otp", value);
  };

  const handleResendEmailOtp = async () => {
    const response = await resendEmailOtp({ email: user?.email });
    if (response?.data?.detail === "OTP sent to Email") {
      toast.success("Code resent successfully");
    } else {
      toast.error(
        "An error occured while trying to resend the code, please try again."
      );
    }
  };
  return (
    <section>
      <RegistrationHeader
        description="Phone Number Verification"
        extraDescription={
          <>
            Please enter the code sent to{" "}
            <span className="text-isPrimary300">+{user?.phone_number}</span>
          </>
        }
      />
      <div className="flex items-center justify-center">
        <InputOTP
          maxLength={6}
          value={values?.otp}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          onChange={(value) => handleOtpInput(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p
        className={cn(
          "pl-10 pt-2 text-xs text-red-500 hidden",
          errors.otp && touched.otp && "block"
        )}
      >
        {errors.otp && touched.otp && errors.otp}
      </p>
      <Button
        className="w-full mt-[3rem] disabled:bg-isGray400 disabled:text-white disabled:cursor-not-allowed"
        disabled={!values?.otp?.length}
        onClick={() => handleSubmit()}
        loading={verifyOtpLoading}
        // onClick={() => navigate("/register?isRegistration=true&step=verifying")}
      >
        Verify
      </Button>
      <p className="text-isGray700 flex items-center justify-center gap-2 text-sm text-center mt-4">
        Didn’t receive the code?{" "}
        <Button
          className="bg-transparent text-isPrimary500 hover:bg-transparent p-0"
          onClick={handleResendEmailOtp}
          loading={resendEmailOtpLoading}
          loadingText="Resending..."
        >
          Click to Resend
        </Button>
      </p>
    </section>
  );
};

export default OtpScreen;
