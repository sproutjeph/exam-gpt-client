import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string;
  user: string;
};

const initialState: AuthState = {
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
    },
    userLogin(state, action: PayloadAction<any>) {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut(state) {
      state.token = "";
      state.user = "";
    },
  },
});

export const { userRegistration, userLoggedOut, userLogin } = authSlice.actions;

export default authSlice.reducer;
