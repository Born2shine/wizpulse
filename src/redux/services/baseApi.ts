import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { authReset } from "../features/auth/authSlice";
import { clearStorageItem } from "@/utils/hooks/useLocalStorage";
import { onboardingReset } from "../features/onboarding/onboardingSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    const accessToken: string =
      Cookies.get("token") || sessionStorage.getItem("token") || "";
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseQueryInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result: any = await baseQuery(args, api, extraOptions);

  // Handle errors or side-effects here
  if (result.error) {
    const res: any = result.error;
    // console.log(res)
    if (res.status === 400) {
      const message = res.data.message;
      // toast.error(message)
    }
    if (res.status === 401) {
      api.dispatch(authReset());
      api.dispatch(onboardingReset());
      Cookies.remove("token");
      clearStorageItem();
      window.location.href = "/";
    }
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryInterceptor,
  endpoints: () => ({}),
  reducerPath: "baseApi",
  tagTypes: [],
});
