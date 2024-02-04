import { createSlice } from "@reduxjs/toolkit";
import * as uuid from "uuid";
import { z } from "zod";

import { selectTodoItem } from "./selectors";
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

const todosSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadTodosFromLocalStorage(state) {
      state.items =
        loadValidatedValueFromStorage(localStorageKeys.items, Todos) ?? [];
    },
    todoAdded(state, action: { payload: { text: string } }) {
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
      state,
      action: { payload: { uuid: string; newState: boolean } }
    ) {
      const { uuid, newState } = action.payload;
      const todo = selectTodoItem(state, uuid);
      if (todo == null) return;

      todo.completed = newState;
      storeInLocalStorage(localStorageKeys.items, state.items);
    },
  },
});

export const { todoAdded, todoChanged, loadTodosFromLocalStorage } =
  todosSlice.actions;
export default todosSlice;
