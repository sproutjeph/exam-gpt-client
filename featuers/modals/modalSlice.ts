import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  isSubscriptionModalOpen: boolean;
};

const initialState: ModalsState = {
  isSubscriptionModalOpen: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    closeSubscriptionModal(state) {
      state.isSubscriptionModalOpen = false;
    },
    openSubscriptionModal(state) {
      state.isSubscriptionModalOpen = true;
    },
  },
});

export const { closeSubscriptionModal, openSubscriptionModal } =
  modalsSlice.actions;

export default modalsSlice.reducer;
