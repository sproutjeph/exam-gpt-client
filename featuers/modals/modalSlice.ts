import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  isSubscriptionModalOpen: boolean;
  isRegisterUserModalOpen: boolean;
  isLoginModalOpen: boolean;
};

const initialState: ModalsState = {
  isSubscriptionModalOpen: false,
  isRegisterUserModalOpen: false,
  isLoginModalOpen: false,
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
    closeLoginModal(state) {
      state.isRegisterUserModalOpen = false;
    },
    openLoginModal(state) {
      state.isRegisterUserModalOpen = true;
    },
  },
});

export const {
  closeSubscriptionModal,
  openSubscriptionModal,
  openRegisterUserModal,
  closeRegisterUserModal,
  closeLoginModal,
  openLoginModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
