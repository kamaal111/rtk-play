import { createSlice } from "@reduxjs/toolkit";
import * as uuid from "uuid";
import { z } from "zod";

import {
  storeInLocalStorage,
  loadValidatedValueFromStorage,
} from "@/utils/local-storage";

const Todo = z.object({
  uuid: z.string().uuid(),
  text: z.string().min(1),
  completed: z.boolean(),
});

const Todos = z.array(Todo);

export interface TodosState {
  items: z.infer<typeof Todos>;
}

const name = "todos";

const initialState: TodosState = {
  items: [],
};

const localStorageKeys = (
  Object.keys(initialState) as (keyof TodosState)[]
).reduce((acc, key) => {
  return {
    ...acc,
    [key]: `${name}/${key}`,
  };
}, {} as Record<keyof TodosState, string>);

const selectors = {};

const reducers = {
  loadTodosFromLocalStorage(state: TodosState) {
    state.items =
      loadValidatedValueFromStorage(localStorageKeys.items, Todos) ?? [];
  },
  todoAdded(state: TodosState, action: { payload: { text: string } }) {
    const { text } = action.payload;
    const newTodo = {
      uuid: uuid.v4(),
      text,
      completed: false,
    };
    const newItems = state.items.concat([newTodo]);
    state.items = newItems;
    storeInLocalStorage(localStorageKeys.items, newItems);
  },
  todoChanged(
    state: TodosState,
    action: { payload: { uuid: string; newState: boolean } }
  ) {
    const { uuid, newState } = action.payload;
    const todo = state.items.find((todo) => todo.uuid === uuid);
    if (todo == null) return;

    todo.completed = newState;
    storeInLocalStorage(localStorageKeys.items, state.items);
  },
};

const todosSlice = createSlice({ name, initialState, selectors, reducers });

export const { todoAdded, todoChanged, loadTodosFromLocalStorage } =
  todosSlice.actions;
export const {} = todosSlice.selectors;
export const reducer = todosSlice.reducer;

export default todosSlice;
