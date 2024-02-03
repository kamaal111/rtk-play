import { configureStore } from "@reduxjs/toolkit";

import todosSlice, {
  loadTodosFromLocalStorage,
} from "@/features/todos/store/slice";

const store = configureStore({ reducer: { todos: todosSlice.reducer } });

export function loadStateFromLocalStorage() {
  store.dispatch(loadTodosFromLocalStorage());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
