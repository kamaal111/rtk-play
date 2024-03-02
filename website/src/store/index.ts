import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  loadTodosFromLocalStorage,
  reducer as todosReducer,
} from "@/features/todos/store/slice";
import {
  reducer as healthAPIReducer,
  reducerPath as healthAPIReducerPath,
  middleware as healthAPIMiddleware,
} from "@/features/api/store/health-api";

const reducer = {
  todos: todosReducer,
  [healthAPIReducerPath]: healthAPIReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(healthAPIMiddleware);
  },
});

setupListeners(store.dispatch);

export function loadStateFromLocalStorage() {
  store.dispatch(loadTodosFromLocalStorage());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
