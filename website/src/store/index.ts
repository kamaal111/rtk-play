import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import todosSlice from "@/features/todos/store/slice";
import healthAPI from "@/features/api/health-api";
import usersAPI from "@/features/users/api/users-api";

const reducer = {
  [todosSlice.reducerPath]: todosSlice.reducer,
  [healthAPI.reducerPath]: healthAPI.reducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(healthAPI.middleware)
      .concat(usersAPI.middleware);
  },
});

setupListeners(store.dispatch);

export function loadStateFromLocalStorage() {
  store.dispatch(todosSlice.actions.loadTodosFromLocalStorage());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
