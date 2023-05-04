import { historyApi } from "../Services/historyApi";
import { launchesApi } from "../Services/launchesApi";
import { rocketsApi } from "../Services/rocketsApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import UtilReducer from "./Reducers/UtilReducer";

const reducers = combineReducers({
  [historyApi.reducerPath]: historyApi.reducer,
  [launchesApi.reducerPath]: launchesApi.reducer,
  [rocketsApi.reducerPath]: rocketsApi.reducer,
  util: UtilReducer
});

const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false })
      .concat(historyApi.middleware)
      .concat(launchesApi.middleware)
      .concat(rocketsApi.middleware);

    return middlewares;
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof reducers>;
export { store };