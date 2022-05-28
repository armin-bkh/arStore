import { all } from "redux-saga/effects";
import { handleLoginUser } from "./user/loginUser";
import { handleRegisterUser } from "./user/signupUser";

export function* rootSaga() {
  yield all([handleRegisterUser(), handleLoginUser()]);
}
