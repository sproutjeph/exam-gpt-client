import { useAppSelector } from "@/redux-store/hooks";

const useAuth = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
