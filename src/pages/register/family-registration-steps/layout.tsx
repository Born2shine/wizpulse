import { Formik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddressScreen from "./address-screen";
import BackgroundScreen from "./background-screen";
import FinancialStatusScreen from "./financial-status-screen";
import EducationalBackgroundScreen from "./education-background-screen";
import SchoolAttendanceScreen from "./school-attendance-screen";
import CommunicationScreen from "./communication-screen";
import AddParentScreen from "./add-parent-screen";
import {
  addParentScreenSchema,
  addressScreenSchema,
  backgroundScreenSchema,
  communicationScreenSchema,
  educationBackgroundScreenSchema,
  financialStatusScreenSchema,
  schoolAttendanceScreenSchema,
} from "@/utils/schema/registerSchema";
import { useSetupParentMutation } from "@/redux/services/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/store";
import { setParentInfo } from "@/redux/features/auth/authSlice";

const FamilyRegistrationLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [setupParent, { isLoading: settingUpParent }] =
    useSetupParentMutation();

  const getFamiyValidationSchema = () => {
    if (
      searchParams.get("isRegistration") === "false" &&
      searchParams.get("step") === "address"
    ) {
      return addressScreenSchema;
    } else if (
      searchParams.get("isRegistration") === "false" &&
      searchParams.get("step") === "ethnicity"
    ) {
      return backgroundScreenSchema;
    } else if (
      searchParams.get("isRegistration") === "false" &&
      searchParams.get("step") === "financial-status"
    ) {
      return financialStatusScreenSchema;
    } else if (
      searchParams.get("isRegistration") === "false" &&
      searchParams.get("step") === "education-background"
    ) {
      return educationBackgroundScreenSchema;
    } else if (
      searchParams.get("isRegistration") === "false" &&
      searchParams.get("step") === "attendance"
    ) {
      return schoolAttendanceScreenSchema;
    } else if (
      searchParams.get("isRegistration") === "false" &&
      searchParams.get("step") === "communication"
    ) {
      return communicationScreenSchema;
    } else if (
      searchParams.get("isRegistration") === "false" &&
      searchParams.get("step") === "add-parent"
    ) {
      return addParentScreenSchema;
    }
  };

  return (
    <section className="h-full overflow-hidden">
      <Formik
        initialValues={{
          address_line_1: "",
          address_line_2: "",
          city: "",
          state_or_province: "",
          zip_code: "",
          other_parents: [
            {
              email: "",
              first_name: "",
              last_name: "",
              phone_number: "",
            },
          ],
          ethnicity: "",
          family_income_level: "",
          qualify_for_lunch: false,
          education_level: "",
          trade_certificate_name: "",
          attendance_importance: "",
          mode_of_communication: "",
          profile_image_url: "",
          verified: false,
          streak_count: 0,
          total_points: 0,
        }}
        validationSchema={getFamiyValidationSchema()}
        onSubmit={async (values) => {
          if (searchParams.get("step") === "address") {
            setSearchParams({ isRegistration: "false", step: "ethnicity" });
          } else if (searchParams.get("step") === "ethnicity") {
            setSearchParams({
              isRegistration: "false",
              step: "financial-status",
            });
          } else if (searchParams.get("step") === "financial-status") {
            setSearchParams({
              isRegistration: "false",
              step: "education-background",
            });
          } else if (searchParams.get("step") === "education-background") {
            setSearchParams({
              isRegistration: "false",
              step: "attendance",
            });
          } else if (searchParams.get("step") === "attendance") {
            setSearchParams({
              isRegistration: "false",
              step: "communication",
            });
          } else if (searchParams.get("step") === "communication") {
            setSearchParams({
              isRegistration: "false",
              step: "add-parent",
            });
          } else if (searchParams.get("step") === "add-parent") {
            const payload = {
              address: {
                address_line_1: values?.address_line_1,
                address_line_2: values?.address_line_2,
                city: values?.city,
                state_or_province: values?.state_or_province,
                zip_code: values?.zip_code,
              },
              other_parents: values?.other_parents,
              ethnicity: values?.ethnicity,
              family_income_level: values?.family_income_level,
              qualify_for_lunch: values?.qualify_for_lunch,
              education_level: values?.education_level,
              trade_certificate_name: "string",
              attendance_importance: values?.attendance_importance,
              mode_of_communication: values?.mode_of_communication,
              profile_image_url: "",
              verified: true,
              streak_count: 0,
              total_points: 0,
            };
            const response = await setupParent(payload);
            if (Object.keys(response?.data?.data)?.includes("id")) {
              sessionStorage.setItem(
                "parentInfo",
                JSON.stringify(response?.data?.data)
              );
              dispatch(setParentInfo(response?.data?.data));
              toast.success("Account setup successful");
              navigate("/onboarding?ui=information");
            }
          }
        }}
      >
        {(formikProps) => {
          return (
            <>
              {searchParams.get("isRegistration") === "false" &&
                searchParams.get("step") === "address" && (
                  <AddressScreen formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "false" &&
                searchParams.get("step") === "ethnicity" && (
                  <BackgroundScreen formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "false" &&
                searchParams.get("step") === "financial-status" && (
                  <FinancialStatusScreen formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "false" &&
                searchParams.get("step") === "education-background" && (
                  <EducationalBackgroundScreen formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "false" &&
                searchParams.get("step") === "attendance" && (
                  <SchoolAttendanceScreen formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "false" &&
                searchParams.get("step") === "communication" && (
                  <CommunicationScreen formik={formikProps} />
                )}
              {searchParams.get("isRegistration") === "false" &&
                searchParams.get("step") === "add-parent" && (
                  <AddParentScreen
                    formik={formikProps}
                    loading={settingUpParent}
                  />
                )}
            </>
          );
        }}
      </Formik>
    </section>
  );
};

export default FamilyRegistrationLayout;
