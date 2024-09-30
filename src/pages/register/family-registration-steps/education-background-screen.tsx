import { Button } from "@/components";
import RadioGroupInput from "@/components/radio-group-input";
import FamilyRegistrationHeader from "@/components/registration/family-registration-header";
import { useSearchParams } from "react-router-dom";

const EducationalBackgroundScreen = ({ formik }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section>
      <FamilyRegistrationHeader
        step={4}
        description="We’d love to learn more about your educational background"
        goBack={() =>
          setSearchParams({
            ...searchParams,
            isRegistration: "false",
            step: "financial-status",
          })
        }
      />
      <div className="h-[52vh] overflow-auto py-6 pr-4">
        <div>
          <RadioGroupInput
            label="What is your highest level of education?"
            name="education_level"
            options={[
              {
                label: "Did not finish high school",
                value: "DID NOT FINISH HIGH SCHOOL",
              },
              {
                label: "High School/GED",
                value: "HIGH SCHOOL/GED",
              },
              {
                label: "Some College (but didn’t finish)",
                value: "SOME COLLEGE (BUT DIDN'T FINISH)",
              },
              {
                label: "BA/BS Degree",
                value: "BA/BS DEGREE",
              },
              {
                label: "MA/MS or higher",
                value: "MA/MS OR HIGHER",
              },
              {
                label: "Trade or License Certificate",
                value: "TRADE OR LICENSE CERTIFICATE",
              },
            ]}
            value={formik.values.education_level}
            onChange={formik.setFieldValue}
            error={formik.errors.education_level}
          />
        </div>
      </div>

      <Button
        className="w-full mt-4"
        type="button"
        onClick={() => formik.handleSubmit()}
      >
        Proceed
      </Button>
    </section>
  );
};

export default EducationalBackgroundScreen;
