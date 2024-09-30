import FamilyRegistrationLayout from "./family-registration-steps/layout";
import RegisterLayout from "./registration-steps/layout";

const Register = () => {
  return (
    <section className="w-screen h-[95vh] overflow-hidden px-8 md:m-5 md:rounded-3xl md:border md:w-[30rem] md:mx-auto">
      {/* register layout */}
      <RegisterLayout />

      {/* family registration layout */}
      <FamilyRegistrationLayout />
    </section>
  );
};

export default Register;
