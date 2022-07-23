import { NextRouter } from "next/router";
import { call, put, takeEvery } from "redux-saga/effects";
import { REGISTER_USER_REQUEST } from "redux/auth/actionTypes";
import {
  registerUserFailure,
  registerUserSuccess,
} from "redux/auth/authActions";
import { signup, UserSignupDataType } from "services/signup";

export function* registerUser(action: {
  type: string;
  payload: { auth: UserSignupDataType; router: NextRouter };
}) {
  const { auth, router } = action.payload;
  try {
    const { data } = yield call(() => signup(auth));
    router.replace("/");
    yield put(registerUserSuccess({ auth: data }));
  } catch (error: any) {
    console.log(error);
    yield put(registerUserFailure({ error: error.response.data.message }));
  }
}

export function* handleRegisterUser() {
  yield takeEvery(REGISTER_USER_REQUEST, registerUser);
}
