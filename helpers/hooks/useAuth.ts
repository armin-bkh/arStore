import { useAppDispatch, useAppSelector } from "helpers/hooks/useStore";
import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  loginUserRequest,
  logoutUser,
  registerUserRequest,
} from "redux/auth/authActions";
import { UserLoginDataType } from "services/login";
import { UserSignupDataType } from "services/signup";

export const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = useCallback(
    (data: UserLoginDataType) => {
      dispatch(loginUserRequest({ auth: data, router }));
    },
    [auth]
  );

  const handleRegister = useCallback(
    (data: UserSignupDataType) => {
      dispatch(registerUserRequest({ auth: data, router }));
    },
    [auth]
  );

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [auth]);

  return {
    ...auth,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
