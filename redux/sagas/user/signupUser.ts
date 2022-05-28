import { call, put, takeEvery } from "redux-saga/effects";
import { REGISTER_USER_REQUEST } from "redux/user/actionTypes";
import {
  registerUserFailure,
  registerUserSuccess,
} from "redux/user/userActions";
import { signup, UserSignupDataType } from "services/signup";

export function* registerUser(action: {
  type: string;
  payload: UserSignupDataType;
}) {
  try {
    const { data } = yield call(() => signup(action.payload));
    console.log(data);
    yield put(registerUserSuccess(data));
  } catch (error: any) {
    yield put(registerUserFailure(error.response.data.message));
  }
}

export function* handleRegisterUser() {
  yield takeEvery(REGISTER_USER_REQUEST, registerUser);
}
