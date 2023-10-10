import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string;
  user: IUser | null;
};

const initialState: AuthState = {
  token: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    userLoggedIn(
      state,
      action: PayloadAction<{ accessToken: string; user: IUser }>
    ) {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut(state) {
      state.token = "";
      state.user = null;
    },
  },
});

export const { userRegistration, userLoggedOut, userLoggedIn } =
  authSlice.actions;

export default authSlice.reducer;
