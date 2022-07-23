import { all } from "redux-saga/effects";
import { handleLoginUser } from "./auth/loginUser";
import { handleRegisterUser } from "./auth/signupUser";

export function* rootSaga() {
  yield all([handleRegisterUser(), handleLoginUser()]);
}
