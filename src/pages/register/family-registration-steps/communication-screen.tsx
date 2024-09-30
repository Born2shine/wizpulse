import { Button } from "@/components";
import RadioGroupInput from "@/components/radio-group-input";
import FamilyRegistrationHeader from "@/components/registration/family-registration-header";
import { useSearchParams } from "react-router-dom";

const CommunicationScreen = ({ formik }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section>
      <FamilyRegistrationHeader
        step={6}
        description="Quick and effective communication is very important to us"
        goBack={() =>
          setSearchParams({
            ...searchParams,
            isRegistration: "false",
            step: "attendance",
          })
        }
      />
      <div className="h-[52vh] overflow-auto py-6 pr-4">
        <div>
          <RadioGroupInput
            label="What is the best way to reach you?"
            name="mode_of_communication"
            options={[
              {
                label: "Text",
                value: "TEXT",
              },
              {
                label: "Email",
                value: "EMAIL",
              },
              {
                label: "Phone call",
                value: "PHONE_NUMBER",
              },
            ]}
            value={formik.values.mode_of_communication}
            onChange={formik.setFieldValue}
            error={formik.errors.mode_of_communication}
          />
        </div>
      </div>

      <Button className="w-full mt-4" onClick={() => formik.handleSubmit()}>
        Proceed
      </Button>
    </section>
  );
};

export default CommunicationScreen;
