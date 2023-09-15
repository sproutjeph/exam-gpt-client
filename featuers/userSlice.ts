import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  activationToken: string;
  accessToken: string;
  user: IUser | null;
};

const initialState: UserState = {
  activationToken: "",
  accessToken: "",
  user: null,
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    saveActivationToken(state, action: PayloadAction<string>) {
      state.activationToken = action.payload;
    },
    saveAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    saveUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.accessToken = "";
      state.activationToken = "";
    },
  },
});

export const { saveActivationToken, saveUser, saveAccessToken, clearUser } =
  UserSlice.actions;

export default UserSlice.reducer;
