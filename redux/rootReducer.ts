import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
export type RootStateType = ReturnType<typeof rootReducer>;