import { useSearchParams } from "react-router-dom";
import VerificationCodeSentImage from "../../../assets/images/verification-code.svg";
import VerificationSuccessfulImage from "../../../assets/images/verification-successful.svg";
import { useEffect } from "react";
const VerificationCodeStatus = ({
  status,
}: {
  status: "sent" | "successful";
}) => {
  const [searchParams, setSearchParams] = useSearchParams({
    isRegistration: "true",
  });

  useEffect(() => {
    if (searchParams.get("step") === "verifying") {
      setTimeout(() => {
        setSearchParams({
          isRegistration: "true",
          step: "otp",
        });
      }, 2000);
    } else if (searchParams.get("step") === "verification-successful") {
      setTimeout(() => {
        setSearchParams({
          isRegistration: "true",
          step: "intro",
        });
      }, 2000);
    }
  }, [searchParams, setSearchParams]);
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <img
        src={
          status === "sent"
            ? VerificationCodeSentImage
            : VerificationSuccessfulImage
        }
        className="w-[90%] h-[240px]"
        alt="verification success"
      />
      <h4 className="text-lg font-bold mb-2">
        {status === "sent"
          ? "Verification code sent"
          : "Verification successful"}
      </h4>
      <p className="text-center text-isGray700 text-sm">
        {status === "sent"
          ? "We sent a verification code to the phone number you provided. Please, open your message to copy the code and paste it here"
          : "Your verification is complete"}
      </p>
    </section>
  );
};

export default VerificationCodeStatus;
