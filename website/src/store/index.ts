import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import todosSlice from "@/features/todos/store/slice";
import healthAPI from "@/features/api/health-api";

const reducer = {
  [todosSlice.reducerPath]: todosSlice.reducer,
  [healthAPI.reducerPath]: healthAPI.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(healthAPI.middleware);
  },
});

setupListeners(store.dispatch);

export function loadStateFromLocalStorage() {
  store.dispatch(todosSlice.actions.loadTodosFromLocalStorage());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
