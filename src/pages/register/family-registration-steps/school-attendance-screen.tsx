import { Button } from "@/components";
import RadioGroupInput from "@/components/radio-group-input";
import FamilyRegistrationHeader from "@/components/registration/family-registration-header";
import { useSearchParams } from "react-router-dom";

const SchoolAttendanceScreen = ({ formik }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section>
      <FamilyRegistrationHeader
        step={5}
        description="We’d love to understand more about your views on school attendance"
        goBack={() =>
          setSearchParams({
            ...searchParams,
            isRegistration: "false",
            step: "education-background",
          })
        }
      />
      <div className="h-[52vh] overflow-auto py-6 pr-4">
        <div>
          <RadioGroupInput
            label="How important is regular school attendance to your family?"
            name="attendance_importance"
            options={[
              {
                label: "Very Important",
                value: "VERY ImPORTANT",
              },
              {
                label: "Somewhat Important",
                value: "SOMEWHAT IMPORTANT",
              },
              {
                label: "Not Important",
                value: "NOT IMPORTANT",
              },
            ]}
            value={formik.values.attendance_importance}
            onChange={formik.setFieldValue}
            error={formik.errors.attendance_importance}
          />
        </div>
      </div>

      <Button className="w-full mt-4" onClick={() => formik.handleSubmit()}>
        Proceed
      </Button>
    </section>
  );
};

export default SchoolAttendanceScreen;
