import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  isSubscriptionModalOpen: boolean;
  isRegisterUserModalOpen: boolean;
  isLoginModalOpen: boolean;
  isActivateUserModalOpen: boolean;
  isProfileModalOpen: boolean;
  isChangeProfileImageModalOpen: boolean;
  isChangePasswordModalOpen: boolean;
};

const initialState: ModalsState = {
  isSubscriptionModalOpen: false,
  isRegisterUserModalOpen: false,
  isLoginModalOpen: false,
  isActivateUserModalOpen: false,
  isProfileModalOpen: false,
  isChangeProfileImageModalOpen: false,
  isChangePasswordModalOpen: false,
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
      state.isLoginModalOpen = false;
    },
    openLoginModal(state) {
      state.isLoginModalOpen = true;
    },
    closeActivateUserModal(state) {
      state.isActivateUserModalOpen = false;
    },
    openActivateUserModal(state) {
      state.isActivateUserModalOpen = true;
    },
    closeProfileModal(state) {
      state.isProfileModalOpen = false;
    },
    openProfileModal(state) {
      state.isProfileModalOpen = true;
    },
    closeChangeProfileImageModal(state) {
      state.isChangeProfileImageModalOpen = false;
    },
    openChangeProfileImageModal(state) {
      state.isChangeProfileImageModalOpen = true;
    },
    closeChangePasswordModal(state) {
      state.isChangePasswordModalOpen = false;
    },
    openChangePasswordModal(state) {
      state.isChangePasswordModalOpen = true;
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
  openActivateUserModal,
  closeActivateUserModal,
  openProfileModal,
  closeProfileModal,
  openChangeProfileImageModal,
  closeChangeProfileImageModal,
  openChangePasswordModal,
  closeChangePasswordModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
