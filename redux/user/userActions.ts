import { UserSignupDataType } from "services/signup";
import { UserType } from "types/userType";
import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SAVED_USER_DATA,
} from "./actionTypes";

export function registerUserRequest(user: UserSignupDataType) {
  return { type: REGISTER_USER_REQUEST, payload: user };
}

export function registerUserSuccess(user: UserType) {
  return { type: REGISTER_USER_SUCCESS, payload: user };
}

export function registerUserFailure(error: string) {
  return { type: REGISTER_USER_FAILURE, payload: error };
}

export function savedUserData(user: UserType) {
  return { type: SAVED_USER_DATA, payload: user };
}
