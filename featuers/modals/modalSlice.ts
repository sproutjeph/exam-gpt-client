import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  isSubscriptionModalOpen: boolean;
  isRegisterUserModalOpen: boolean;
};

const initialState: ModalsState = {
  isSubscriptionModalOpen: false,
  isRegisterUserModalOpen: false,
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
    closeRegisterUserModal(state) {
      state.isRegisterUserModalOpen = false;
    },
    openRegisterUserModal(state) {
      state.isRegisterUserModalOpen = true;
    },
  },
});

export const {
  closeSubscriptionModal,
  openSubscriptionModal,
  openRegisterUserModal,
  closeRegisterUserModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
