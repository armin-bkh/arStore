import { deleteCookie, setCookie } from "cookies-next";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStore";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import {
  loginUserRequest,
  logoutUser,
  registerUserRequest,
  resetError,
} from "redux/auth/authActions";
import { AUTH_COOKIE } from "redux/auth/authReducer";
import { UserLoginDataType } from "services/login";
import { UserSignupDataType } from "services/signup";

export const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    handleResetError();
  }, [router.pathname]);

  useEffect(() => {
    setCookie(AUTH_COOKIE, JSON.stringify(auth.user));
  }, [auth.user]);

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
    deleteCookie(AUTH_COOKIE);
  }, [auth]);

  const handleResetError = useCallback(() => {
    dispatch(resetError());
  }, []);

  return {
    ...auth,
    handleLogin,
    handleRegister,
    handleLogout,
    handleResetError,
  };
};
