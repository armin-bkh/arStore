import { all } from "redux-saga/effects";
import { handleRegisterUser } from "./user/signupUser";

export function* rootSaga() {
  yield all([handleRegisterUser()]);
}
