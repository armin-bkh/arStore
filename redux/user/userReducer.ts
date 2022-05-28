import { UserType } from "types/userType";
import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SAVED_USER_DATA,
} from "./actionTypes";

interface userStateType {
  user: UserType | null;
  loading: boolean;
  error: string;
}

interface actionType {
  type: string;
  payload: UserType | string;
}

const initialState: userStateType = {
  user: null,
  loading: false,
  error: "",
};

const userReducer = (
  state: userStateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case SAVED_USER_DATA: {
      return { loading: false, error: "", user: action.payload };
    }
    case REGISTER_USER_REQUEST: {
      return { loading: true, error: "", user: null };
    }
    case REGISTER_USER_SUCCESS: {
      localStorage.setItem("ArStoreUser", JSON.stringify(action.payload));
      return { loading: false, error: "", user: action.payload };
    }
    case REGISTER_USER_FAILURE: {
      return { loading: false, error: action.payload, user: null };
    }
    default:
      return state;
  }
};

export default userReducer;
