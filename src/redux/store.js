import { createStore,compose, applyMiddleware  } from "redux";
import createReducer from "./redusers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();


const customMiddleware = store => next => action => {
    // Our middleware
    console.log(`Redux Custom Middleware Log:`, action);
    // call the next function
    next(action);
  };
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "authSaga"]
  };

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(
    persistedReducer,
  compose(
    applyMiddleware(logger, customMiddleware, sagaMiddleware),
    composeEnhancer()
  )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

