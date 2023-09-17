import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type apiLimitCountState = {
  apiLimitCount: number;
};

const initialState: apiLimitCountState = {
  apiLimitCount: 0,
};

const apiLimitCountSlice = createSlice({
  name: "apiLimitCount",
  initialState,
  reducers: {
    saveApiUseageCount(state, action: PayloadAction<number>) {
      state.apiLimitCount = action.payload;
    },
  },
});

export const { saveApiUseageCount } = apiLimitCountSlice.actions;

export default apiLimitCountSlice.reducer;
