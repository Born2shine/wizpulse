/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { baseApi } from "../baseApi";

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

export const onboardingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: `/auth/registration/`,
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // const { data } = result;
        } catch (error: any) {
          const errors = error?.error?.data;
          toastError(errors);
        }
      },
    }),
    addStudent: builder.mutation({
      query: (payload) => ({
        url: `/wizpulse/wizearly-add-children/`,
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // const { data } = result;
        } catch (error: any) {
          const errors = error?.error?.data;
          console.log(errors)
          toastError(errors);
        }
      },
    }),
    addParentConsent: builder.mutation({
      query: (payload) => ({
        url: `/wizpulse/wizearly-add-parent-consent/`,
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // const { data } = result;
        } catch (error: any) {
          const errors = error?.error?.data;
          console.log(errors)
          toastError(errors);
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useAddStudentMutation,
  useAddParentConsentMutation
} = onboardingApi;
