import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../services/baseApi";
import { authSliceReducer } from "./auth/authSlice";
import { onboardingSliceReducer } from "./onboarding/onboardingSlice";


const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSliceReducer,
    onboarding: onboardingSliceReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;