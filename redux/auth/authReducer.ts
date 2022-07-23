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
  SAVED_USER_DATA,
} from "./actionTypes";

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

const initialState: AuthStateType = {
  user: null,
  loading: false,
  error: "",
};

const userReducer = (
  state: AuthStateType = initialState,
  action: AuthActionType
) => {
  switch (action.type) {
    case SAVED_USER_DATA: {
      return { loading: false, error: "", user: action.payload?.auth };
    }
    case REGISTER_USER_REQUEST: {
      return { loading: true, error: "", user: null };
    }
    case REGISTER_USER_SUCCESS: {
      localStorage.setItem("ArStoreUser", JSON.stringify(action.payload?.auth));
      return { loading: false, error: "", user: action.payload?.auth };
    }
    case REGISTER_USER_FAILURE: {
      return { loading: false, error: action.payload?.error, user: null };
    }
    case LOGIN_USER_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case LOGIN_USER_SUCCESS: {
      localStorage.setItem("ArStoreUser", JSON.stringify(action.payload?.auth));
      return { loading: false, error: "", user: action.payload?.auth };
    }
    case LOGIN_USER_FAILURE: {
      return { loading: false, error: action.payload?.error, user: null };
    }
    case LOGOUT_USER: {
      localStorage.removeItem("ArStoreUser");
      return { loading: false, error: "", user: null };
    }
    default:
      return state;
  }
};

export default userReducer;
