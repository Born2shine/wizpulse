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
