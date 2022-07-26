import { deleteCookie, setCookie } from "cookies-next";
import { NextRouter } from "next/router";
import { UserType } from "types/userType";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_ERROR,
  SAVED_USER_DATA,
} from "./actionTypes";

export const AUTH_COOKIE = "ARSTORE_AUTH_COOKIE";
export interface AuthStateType {
  user: UserType | null;
  loading: boolean;
  error: string;
}

export interface AuthActionType {
  type: string;
  payload?: {
    auth?: UserType;
    error?: string;
    router?: NextRouter;
  };
}

export const initialState: AuthStateType = {
  user: null,
  loading: false,
  error: "",
};

export const userReducer = (
  state: AuthStateType = initialState,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case SAVED_USER_DATA: {
      return { loading: false, error: "", user: action.payload?.auth || null };
    }
    case REGISTER_USER_REQUEST: {
      return { loading: true, error: "", user: null };
    }
    case REGISTER_USER_SUCCESS: {
      return { loading: false, error: "", user: action.payload?.auth || null };
    }
    case REGISTER_USER_FAILURE: {
      return { loading: false, error: action.payload?.error || "", user: null };
    }
    case LOGIN_USER_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case LOGIN_USER_SUCCESS: {
      return { loading: false, error: "", user: action.payload?.auth || null };
    }
    case LOGIN_USER_FAILURE: {
      return { loading: false, error: action.payload?.error || "", user: null };
    }
    case LOGOUT_USER: {
      return { loading: false, error: "", user: null };
    }
    case RESET_ERROR: {
      return {
        ...state,
        error: "",
      };
    }
    default:
      return state;
  }
};
