import auth from "./auth/reducer";
import authSaga from "./authsaga/reduser";
// import todo from "./todo/reducer";
import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";

const createReducer = () =>
  combineReducers({
    auth,
    authSaga,
    // todo,
    // router: routerReducer
  });

export default createReducer;
