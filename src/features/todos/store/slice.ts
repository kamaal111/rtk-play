import { createSlice } from "@reduxjs/toolkit";
import * as uuid from "uuid";

import { selectTodo } from "./selectors";

interface Todo {
  uuid: string;
  text: string;
  completed: boolean;
}

export interface TodosState {
  items: Todo[];
}

const name = "todos";

const initialState: TodosState = {
  items: [],
};

const todosSlice = createSlice({
  name,
  initialState,
  reducers: {
    todoAdded(state: TodosState, action: { payload: { text: string } }) {
      const { text } = action.payload;
      state.items.push({
        uuid: uuid.v4(),
        text,
        completed: false,
      });
    },
    todoChanged(
      state: TodosState,
      action: { payload: { uuid: string; newState: boolean } }
    ) {
      const { uuid, newState } = action.payload;
      const todo = selectTodo(state, uuid);
      if (todo == null) return;

      todo.completed = newState;
    },
  },
});

export const { todoAdded, todoChanged } = todosSlice.actions;
export default todosSlice;
