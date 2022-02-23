import {
  configureStore,
  combineReducers
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const appReducer = combineReducers({
  user: userReducer
});

/**
 * root Reducer
 *
 * This enables logout
 * @param state
 * @param action
 * @returns {EmptyObject & {cart: {error: boolean}, user: {currentUser: boolean, isFetching: boolean, error: boolean}}}
 */
const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {

    // this applies to all keys defined in persistConfig(s)
    storage.removeItem('persist:root');
  }
  return appReducer(state, action)
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      }
    }
  )
});

export const persistor = persistStore(store);

