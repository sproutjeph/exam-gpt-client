import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  cuurentQuestion: string;
};

const initialState: ModalsState = {
  cuurentQuestion: "",
};

const askAiSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    saveCurrentQuestion(state, action: PayloadAction<string>) {
      state.cuurentQuestion = action.payload;
    },
    clearQuestion(state) {
      state.cuurentQuestion = "";
    },
  },
});

export const { saveCurrentQuestion, clearQuestion } = askAiSlice.actions;

export default askAiSlice.reducer;
