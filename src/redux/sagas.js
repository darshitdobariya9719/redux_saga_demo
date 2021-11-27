import { all } from "redux-saga/effects";
// import todoSagas from "./todo/saga";
import authSagas from "./authsaga/saga";

export default function* rootSaga() {
  yield all([ authSagas()]);
}

                             