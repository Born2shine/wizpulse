import Cookies from "js-cookie";
import { authReset, setAuthUser } from "../../features/auth/authSlice";
import { baseApi } from "../baseApi";
import { onboardingReset } from "../../features/onboarding/onboardingSlice";
import { toast } from "sonner";

const toastError = (errors: any) => {
  const errorKeys = Object.keys(errors);
  if (Array.isArray(errors[errorKeys[0]])) {
    const message = errors[errorKeys[0]][0];
    toast.error(message);
    return;
  } else {
    const message = errors[errorKeys[0]];
    toast.error(message);
  }
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: `/auth/login/`,
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { data } = result;
          Cookies.set("token", data);
          sessionStorage.setItem("token", data);
          dispatch(setAuthUser(data));
        } catch (error: any) {
          const errors = error?.error?.data;
          toastError(errors);
        }
      },
    }),
    register: builder.mutation({
      query: (user) => ({
        url: `/auth/registration/`,
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          const errors = error?.error?.data;
          toastError(errors);
        }
      },
    }),
    verifyOtp: builder.mutation({
      query: (user) => ({
        url: `/auth/registration/verify-email-otp/`,
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          const errors = error?.error?.data;
          toastError(errors);
        }
      },
    }),
    resendEmailOtp: builder.mutation({
      query: (user) => ({
        url: `/auth/registration/resend-email-otp/`,
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          const errors = error?.error?.data;
          toastError(errors);
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout/`,
        method: "POST",
        // credentials: "include" as const
      }),
      async onQueryStarted(_, { dispatch }) {
        try {
          dispatch(onboardingReset());
          dispatch(authReset());
          Cookies.remove("token");
          window.location.href = "/login";
        } catch (error: any) {
          console.log("Error:", error);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useVerifyOtpMutation,
  useResendEmailOtpMutation,
} = authApi;
