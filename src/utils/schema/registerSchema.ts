import * as Yup from "yup";

export const stepOneSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
});

export const stepTwoSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const stepThreeSchema = Yup.object().shape({
  phone_number: Yup.string().required("Phone number is required"),

  agree: Yup.bool().oneOf([true], "Your acknowledgement is required"),
  terms: Yup.bool().oneOf([true], "You must agree to the terms and conditions"),
});

export const stepFourSchema = Yup.object().shape({
  password: Yup.string()
    .min(12, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one digit"),
});

export const otpSchema = Yup.object().shape({
  otp: Yup.string().required("OTP is required"),
});

export const addressScreenSchema = Yup.object().shape({
  address_line_1: Yup.string().required("Address line 1 is required"),
  address_line_2: Yup.string(),
  city: Yup.string().required("City is required"),
  state_or_province: Yup.string().required("State or province is required"),
  zip_code: Yup.string().required("Zip code is required"),
});

export const backgroundScreenSchema = Yup.object().shape({
  ethnicity: Yup.string().required("Ethnicity is required"),
});
export const financialStatusScreenSchema = Yup.object().shape({
  family_income_level: Yup.string(),
  qualify_for_lunch: Yup.bool().oneOf(
    [true, false],
    "Lunch qualification is required"
  ),
});

export const educationBackgroundScreenSchema = Yup.object().shape({
  education_level: Yup.string().required("Education level is required"),
});

export const schoolAttendanceScreenSchema = Yup.object().shape({
  attendance_importance: Yup.string().required(
    "Attendance importance is required"
  ),
});

export const communicationScreenSchema = Yup.object().shape({
  mode_of_communication: Yup.string().required(
    "Mode of communication is required"
  ),
});

export const addParentScreenSchema = Yup.object().shape({
  other_parents: Yup.array().of(
    Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      phone_number: Yup.string().required("Phone number is required"),
    })
  ),
});
