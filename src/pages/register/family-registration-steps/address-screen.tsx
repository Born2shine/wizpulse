import { Button, Input } from "@/components";
import FamilyRegistrationHeader from "@/components/registration/family-registration-header";
import { useSearchParams } from "react-router-dom";

const AddressScreen = ({ formik }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section>
      <FamilyRegistrationHeader
        step={1}
        description="We’d love to get to know you and your household better"
        extraDescription="Just a quick note: Only the student’s parent or legal guardian should fill out this part."
        goBack={() =>
          setSearchParams({
            ...searchParams,
            isRegistration: "true",
            step: "intro",
          })
        }
      />
      <h2>Address</h2>
      <div className="h-[40vh] overflow-auto py-6 pr-4">
        <div className="relative mb-3 w-full">
          <Input
            label="Street address"
            id="address_line_1"
            name="address_line_1"
            value={formik.values.address_line_1}
            onChange={formik.handleChange}
            error={formik?.errors?.address_line_1}
            touched={formik?.touched?.address_line_1}
            isRequired
            placeholder="e.g BLK 4, 23rd street and 54th Avenue"
            className="placeholder:text-isGray400"
          />
        </div>
        <div className="relative mb-3 w-full">
          <Input
            label="Street address"
            id="address_line_2"
            name="address_line_2"
            value={formik.values.address_line_2}
            onChange={formik.handleChange}
            error={formik?.errors?.address_line_2}
            touched={formik?.touched?.address_line_2}
            placeholder="e.g BLK 4, 23rd street and 54th Avenue"
            className="placeholder:text-isGray400"
          />
        </div>
        <div className="relative mb-3 w-full">
          <Input
            label="Full name of city"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik?.errors?.city}
            touched={formik?.touched?.city}
            isRequired
            placeholder="e.g New York"
            className="placeholder:text-isGray400"
          />
        </div>
        <div className="relative mb-3 w-full">
          <Input
            label="Full name of province"
            id="state_or_province"
            name="state_or_province"
            value={formik.values.state_or_province}
            onChange={formik.handleChange}
            error={formik?.errors?.state_or_province}
            touched={formik?.touched?.state_or_province}
            isRequired
            placeholder="e.g New York"
            className="placeholder:text-isGray400"
          />
        </div>
        <div className="relative mb-3 w-full">
          <Input
            label="Zip Code"
            id="zip_code"
            name="zip_code"
            value={formik.values.zip_code}
            onChange={formik.handleChange}
            error={formik?.errors?.zip_code}
            touched={formik?.touched?.zip_code}
            isRequired
            placeholder="e.g 100001"
            className="placeholder:text-isGray400"
          />
        </div>
      </div>
      <Button className="w-full mt-4" onClick={() => formik.handleSubmit()}>
        Proceed
      </Button>
    </section>
  );
};

export default AddressScreen;
