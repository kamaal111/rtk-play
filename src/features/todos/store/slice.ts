import { createSlice } from "@reduxjs/toolkit";
import * as uuid from "uuid";

import { selectTodo } from "./selectors";

interface Todo {
  uuid: string;
  text: string;
  completed: Boolean;
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
    todoAdded(
      state: TodosState,
      { payload: { text } }: { payload: { text: string } }
    ) {
      state.items.push({
        uuid: uuid.v4(),
        text,
        completed: false,
      });
    },
    todoToggled(
      state: TodosState,
      { payload: { uuid } }: { payload: { uuid: string } }
    ) {
      const todo = selectTodo(state, uuid);
      // const todo = state.items.find((todo) => todo.uuid === payload);
      if (todo == null) return;

      todo.completed = todo.completed;
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice;
