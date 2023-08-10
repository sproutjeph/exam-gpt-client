import { ISelectedData } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  selectedCBTestData: ISelectedData[];
};

const initialState: ModalsState = {
  selectedCBTestData: [],
};

const CBTestSlice = createSlice({
  name: "CBTest",
  initialState,
  reducers: {
    saveSelectedCBTestData(state, action: PayloadAction<ISelectedData>) {
      state.selectedCBTestData.push(action.payload);
    },
  },
});

export const { saveSelectedCBTestData } = CBTestSlice.actions;

export default CBTestSlice.reducer;
