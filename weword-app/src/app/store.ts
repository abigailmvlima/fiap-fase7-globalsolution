import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { historyRootReducers } from "@stores/store.history";

const rootReducer = combineReducers({
  ...historyRootReducers,
});

export function* rootSaga() {
  yield all([]);
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const logMiddleware =
  (store: { getState: () => any }) =>
  (next: (arg0: any) => any) =>
  (action: any) => {
    const result = next(action);
    return result;
  };

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logMiddleware, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export type TAppState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
