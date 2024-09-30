import { Button } from "@/components";
import IntroWelcomeImage from "../../../assets/images/intro-welcome.svg";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const IntroScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  return (
    <section className="flex flex-col justify-center items-center h-full">
      <img src={IntroWelcomeImage} alt="welcome image" />
      <h2 className="text-xl text-isGray-900 mt-4 font-bold mb-4">{`Hi ${user?.first_name}, You're almost there`}</h2>
      <p className="text-center text-isGray700 text-sm leading-[19.6px]">
        We just need some more insights to help you personalize your experience.
        You earn some points for answering these questions.
      </p>
      <Button
        className="w-full flex gap-2 mt-8"
        onClick={() =>
          setSearchParams({
            ...searchParams,
            isRegistration: "false",
            step: "address",
          })
        }
      >
        Let's Go <ArrowRight size={16} />
      </Button>
    </section>
  );
};

export default IntroScreen;
