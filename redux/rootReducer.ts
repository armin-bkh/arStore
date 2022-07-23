import { combineReducers } from "redux";
import userReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  auth: userReducer,
});

export default rootReducer;
