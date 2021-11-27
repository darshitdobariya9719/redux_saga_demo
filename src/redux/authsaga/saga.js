import { all, takeEvery, put, fork } from "redux-saga/effects"; // You can import select
import actions from "./action";
import { loginApiHandler } from "../../services/index";

export function* loginRequest() {
  yield takeEvery("LOGIN_REQUEST", function*() {
    yield put({
      type:actions.LODER_ON,
    })
    const response = yield loginApiHandler({
      Email: "darshit@gmail.com",
      Password: "123"
    });
    console.log("login api response", response);

    if (response.data[0]) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: response.token,
        profile: "Profile"
      });

           
    } else {
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export default function* authSagas() {
  yield all([fork(loginRequest), fork(loginError)]);
}