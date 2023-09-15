import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  activationToken: string;
  user: any;
};

const initialState: UserState = {
  activationToken: "",
  user: {},
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    saveActivationToken(state, action: PayloadAction<string>) {
      state.activationToken = action.payload;
    },
  },
});

export const { saveActivationToken } = UserSlice.actions;

export default UserSlice.reducer;
