import { Button } from "@/components";
import RadioGroupInput from "@/components/radio-group-input";
import FamilyRegistrationHeader from "@/components/registration/family-registration-header";
import { useSearchParams } from "react-router-dom";

const FinancialStatusScreen = ({ formik }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section>
      <FamilyRegistrationHeader
        step={3}
        description="Tell us about your financial status"
        goBack={() =>
          setSearchParams({
            ...searchParams,
            isRegistration: "false",
            step: "ethnicity",
          })
        }
      />
      <div className="h-[55vh] overflow-auto py-6 pr-4">
        <div className="mb-6">
          <RadioGroupInput
            label="What is your family income level?"
            name="family_income_level"
            options={[
              {
                label: "$80,000 and above",
                value: "80,000 AND ABOVE",
              },
              {
                label: "$60,000 to $79,999",
                value: "60,000 TO $79,999",
              },
              {
                label: "$40,000 to $59,999",
                value: "40,000 TO $59,999",
              },
              {
                label: "$25,000 to $39,999",
                value: "25,000 TO $39,999",
              },
              {
                label: "$24,999 and below",
                value: "24,999 AND BELOW",
              },
            ]}
            value={formik.values.family_income_level}
            onChange={formik.setFieldValue}
            error={formik.errors.family_income_level}
          />
        </div>
        <RadioGroupInput
          label="Does your family qualify for free or reduced lunch?"
          name="qualify_for_lunch"
          options={[
            {
              label: "Yes",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ]}
          value={formik.values.qualify_for_lunch}
          onChange={formik.setFieldValue}
          error={formik.errors.qualify_for_lunch}
        />
      </div>

      <Button className="w-full mt-4" onClick={() => formik.handleSubmit()}>
        Proceed
      </Button>
    </section>
  );
};

export default FinancialStatusScreen;
