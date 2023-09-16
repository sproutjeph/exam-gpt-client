import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  activationToken: string;
  accessToken: string;
  user: IUser | null;
  apiUseageCount: number;
};

const initialState: UserState = {
  activationToken: "",
  accessToken: "",
  user: null,
  apiUseageCount: 0,
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
    updateApiUseageCount(state) {
      state.apiUseageCount = Number(state.user?.apiUseageCount);
    },
  },
});

export const {
  saveActivationToken,
  saveUser,
  saveAccessToken,
  clearUser,
  updateApiUseageCount,
} = UserSlice.actions;

export default UserSlice.reducer;
