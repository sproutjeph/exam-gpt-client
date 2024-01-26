import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  activationToken: string;
  accessToken: string;
};

const initialState: UserState = {
  activationToken: "",
  accessToken: "",
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
  },
});

export const { saveActivationToken, saveAccessToken } = UserSlice.actions;

export default UserSlice.reducer;
