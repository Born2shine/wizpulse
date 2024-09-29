import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      Object.assign(state, initialState);
    },
    setAuthUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      // state.token = action.payload.token
    },
    setRegisteredUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuthUser, setRegisteredUser } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
export const authReset = authSlice.actions.reset;
