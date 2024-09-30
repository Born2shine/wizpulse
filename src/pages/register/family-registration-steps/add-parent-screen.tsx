import { Button, Input } from "@/components";
import PhoneInput from "@/components/custom-phone-input";
import FamilyRegistrationHeader from "@/components/registration/family-registration-header";
import { FieldArray, useFormikContext } from "formik";
import { CircleMinus, Mail, Plus, User } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const AddParentScreen = ({ formik, loading, setSkip }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { submitForm } = useFormikContext();

  console.log("searchParams", searchParams);
  return (
    <section>
      <FamilyRegistrationHeader
        step={7}
        description="Add another parent"
        goBack={() =>
          setSearchParams({
            isRegistration: "false",
            step: "communication",
          })
        }
      />
      <h2 className="text-sm font-semibold text-center text-isGray900 pt-4 ">
        Add additional Parent (Not applicable? Skip).
      </h2>
      <div className="h-[46vh] overflow-auto my-4 pr-4">
        <FieldArray
          name="other_parents"
          render={({ push, remove }) => (
            <div>
              {formik.values.other_parents.map((entry: any, index: number) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[.85rem] md:text-base font-bold text-black">
                      Parent Details
                    </h2>
                    {formik.values.other_parents?.length > 1 && (
                      <Button
                        className="text-isDanger p-0 bg-transparent hover:bg-transparent"
                        onClick={() => remove(index)}
                      >
                        <CircleMinus />
                      </Button>
                    )}
                  </div>
                  <div className="relative mb-3 w-full">
                    <Input
                      label="First Name"
                      id="first_name"
                      name={`other_parents.${index}.first_name`}
                      value={formik?.values?.other_parents?.[index]?.first_name}
                      onChange={formik.handleChange}
                      error={formik?.errors?.other_parents?.[index]?.first_name}
                      touched={
                        formik?.touched?.other_parents?.[index]?.first_name
                      }
                      isRequired
                      placeholder="First Name"
                      className="pl-8 placeholder:text-isGray400"
                    />
                    <User
                      size="16"
                      className="absolute left-3 top-11 text-isGray400"
                    />
                  </div>
                  <div className="relative mb-3 w-full">
                    <Input
                      label="Last Name"
                      id="last_name"
                      name={`other_parents.${index}.last_name`}
                      value={formik?.values?.other_parents?.[index]?.last_name}
                      onChange={formik.handleChange}
                      error={formik?.errors?.other_parents?.[index]?.last_name}
                      touched={
                        formik?.touched?.other_parents?.[index]?.last_name
                      }
                      isRequired
                      placeholder="Legal Last Name"
                      className="pl-8 placeholder:text-isGray400"
                    />
                    <User
                      size="16"
                      className="absolute left-3 top-11 text-isGray400"
                    />
                  </div>
                  <div className="relative mb-3 w-full">
                    <Input
                      label="Email Address"
                      id="email"
                      name={`other_parents.${index}.email`}
                      value={formik?.values?.other_parents?.[index]?.email}
                      onChange={formik.handleChange}
                      error={formik?.errors?.other_parents?.[index]?.email}
                      touched={formik?.touched?.other_parents?.[index]?.email}
                      isRequired
                      placeholder="enter parent email"
                      className="pl-8 placeholder:text-isGray400"
                    />
                    <Mail
                      size="16"
                      className="absolute left-3 top-11 text-isGray400"
                    />
                  </div>
                  <div>
                    <PhoneInput
                      label="Phone Number"
                      value={
                        formik?.values?.other_parents?.[index]?.phone_number
                      }
                      onChange={formik.setFieldValue}
                      error={
                        formik?.errors?.other_parents?.[index]?.phone_number
                      }
                      name={`other_parents.${index}.phone_number`}
                      touched={
                        formik?.errors?.other_parents?.[index]?.phone_number
                      }
                      isRequired
                    />
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                className="mt-4 flex gap-2 text-isPrimary500 border border-isPrimary500"
                onClick={() =>
                  push({
                    email: "",
                    first_name: "",
                    last_name: "",
                    phone_number: "",
                  })
                }
              >
                <Plus size={19} /> Add Parent
              </Button>
            </div>
          )}
        />
      </div>
      <Button
        className="w-full mt-4"
        onClick={() => {
          formik.handleSubmit();
        }}
        loading={loading}
      >
        Done
      </Button>
      <Button
        className="w-full bg-transparent mt-2 text-isPrimary500 hover:bg-transparent"
        onClick={() => {
          setSkip(true);
          formik.handleSubmit();
        }}
      >
        Skip for now
      </Button>
    </section>
  );
};

export default AddParentScreen;
