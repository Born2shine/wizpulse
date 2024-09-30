import { Button } from "@/components";
import RadioGroupInput from "@/components/radio-group-input";
import FamilyRegistrationHeader from "@/components/registration/family-registration-header";
import { useSearchParams } from "react-router-dom";

const BackgroundScreen = ({ formik }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section>
      <FamilyRegistrationHeader
        step={2}
        description="We’d love to learn more about your background"
        goBack={() =>
          setSearchParams({
            ...searchParams,
            isRegistration: "false",
            step: "address",
          })
        }
      />
      <div className="h-[52vh] overflow-auto py-6 pr-4">
        <RadioGroupInput
          label="What is your ethniticity"
          name="ethnicity"
          options={[
            {
              label: "Black or African American",
              value: "BLACK OR AFRICAN AMERICAN",
            },
            {
              label: "Latino or Hispanic",
              value: "LATINO OR HISPANIC",
            },
            {
              label: "Asian",
              value: "ASIAN",
            },
            {
              label: "Native American",
              value: "NATIVE AMERICAN",
            },
            {
              label: "White",
              value: "WHITE",
            },
            {
              label: "Mixed",
              value: "MIXED",
            },
            {
              label: "Others",
              value: "OTHERS",
            },
          ]}
          value={formik.values.ethnicity}
          onChange={formik.setFieldValue}
          error={formik.errors.ethnicity}
        />
      </div>
      <Button className="w-full mt-4" type="button" onClick={() => formik.handleSubmit()}>
        Proceed
      </Button>
    </section>
  );
};

export default BackgroundScreen;
