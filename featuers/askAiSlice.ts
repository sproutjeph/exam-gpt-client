import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  currentQuestion: string;
};

const initialState: ModalsState = {
  currentQuestion: "",
};

const askAiSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    saveCurrentQuestion(state, action: PayloadAction<string>) {
      state.currentQuestion = action.payload;
    },
    clearQuestion(state) {
      state.currentQuestion = "";
    },
  },
});

export const { saveCurrentQuestion, clearQuestion } = askAiSlice.actions;

export default askAiSlice.reducer;
