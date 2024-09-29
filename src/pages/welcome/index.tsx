import { Button } from "@/components";
import WelcomeAvatar from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
    const navigate = useNavigate();
  return (
    <section className="w-screen h-[95vh] overflow-hidden px-8 md:m-5 md:rounded-3xl md:border md:w-[30rem] md:mx-auto">
      <section className="flex flex-col items-center h-full mt-20">
        <img src={WelcomeAvatar} alt="welcome-avatar" />
        <h2 className="text-isGray900 text-xl font-semibold text-center">
          Hello! I'm Erin, your virtual account manager. Let's get you started!
        </h2>
        <p className="text-isGray700 mt-2 text-sm">
          Click the button below to get started.
        </p>
        <Button className="w-full mt-[17rem]" onClick={() => navigate("/register?isRegistration=true&step=one")}>Get Started</Button>
      </section>
    </section>
  );
};

export default Welcome;
