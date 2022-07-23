import { NextRouter } from "next/router";
import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER_REQUEST } from "redux/auth/actionTypes";
import { loginUserFailure, loginUserSuccess } from "redux/auth/authActions";
import { login, UserLoginDataType } from "services/login";

export function* loginUser(action: {
  type: string;
  payload: { auth: UserLoginDataType; router: NextRouter };
}) {
  const { auth, router } = action.payload;
  try {
    const { data } = yield call(() => login(auth));
    router.replace("/");
    yield put(loginUserSuccess({ auth: data }));
  } catch (error: any) {
    yield put(loginUserFailure({ error: error.response.data.message }));
  }
}

export function* handleLoginUser() {
  yield takeEvery(LOGIN_USER_REQUEST, loginUser);
}
