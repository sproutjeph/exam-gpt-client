"use client";

import ActivateUserModal from "@/components/modals/ActivateUserModal";
import ChangeProfileImageModal from "@/components/modals/ChangeProfileImageModal";
import LoginModal from "@/components/modals/LoginModal";
import ProfileModal from "@/components/modals/ProfileModal";
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
      <ProfileModal />
      <ChangeProfileImageModal />
    </main>
  );
};
