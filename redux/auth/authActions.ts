import { NextRouter } from "next/router";
import { UserLoginDataType } from "services/login";
import { UserSignupDataType } from "services/signup";
import { UserType } from "types/userType";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SAVED_USER_DATA,
} from "./actionTypes";

export function registerUserRequest(payload: {
  auth: UserSignupDataType;
  router: NextRouter;
}) {
  return { type: REGISTER_USER_REQUEST, payload };
}

export function registerUserSuccess(payload: { auth: UserType }) {
  return { type: REGISTER_USER_SUCCESS, payload };
}

export function registerUserFailure(payload: { error: string }) {
  return { type: REGISTER_USER_FAILURE, payload };
}

export function loginUserRequest(payload: {
  auth: UserLoginDataType;
  router: NextRouter;
}) {
  return { type: LOGIN_USER_REQUEST, payload };
}

export function loginUserSuccess(payload: { auth: UserType }) {
  return { type: LOGIN_USER_SUCCESS, payload };
}

export function loginUserFailure(payload: { error: string }) {
  return { type: LOGIN_USER_FAILURE, payload };
}

export function savedUserData(payload: { auth: UserType }) {
  return { type: SAVED_USER_DATA, payload };
}

export function logoutUser() {
  return { type: LOGOUT_USER };
}
