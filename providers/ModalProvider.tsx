"use client";

import ActivateUserModal from "@/components/modals/ActivateUserModal";
import ChangePasswordModal from "@/components/modals/ChangePasswordModal";
import ChangeProfileImageModal from "@/components/modals/ChangeProfileImageModal";
import LoginModal from "@/components/modals/LoginModal";
import ManageProfileModal from "@/components/modals/ManageProfileModal";
import RegisterUserModal from "@/components/modals/RegisterUserModal";
import SubscriptionModal from "@/components/modals/SubscriptionModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      <SubscriptionModal />
      <RegisterUserModal />
      <LoginModal />
      <ActivateUserModal />
      <ManageProfileModal />
      <ChangeProfileImageModal />
      <ChangePasswordModal />
    </main>
  );
};
