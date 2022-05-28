import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER_REQUEST } from "redux/user/actionTypes";
import { loginUserFailure, loginUserSuccess } from "redux/user/userActions";
import { login, UserLoginDataType } from "services/login";

export function* loginUser(action: {
  type: string;
  payload: UserLoginDataType;
}) {
  try {
    const { data } = yield call(() => login(action.payload));
    yield put(loginUserSuccess(data));
  } catch (error: any) {
    yield put(loginUserFailure(error.response.data.message));
  }
}

export function* handleLoginUser() {
  yield takeEvery(LOGIN_USER_REQUEST, loginUser);
}
