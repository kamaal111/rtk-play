import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  uuid: string;
  text: string;
  completed: Boolean;
}

interface TodosState {
  items: Todo[];
}

const name = "todos";

const initialState: TodosState = {
  items: [],
};

const reducers = {
  todoAdded(
    state: TodosState,
    { payload: { uuid, text } }: { payload: { uuid: string; text: string } }
  ) {
    state.items.push({
      uuid,
      text,
      completed: false,
    });
  },
  todoToggled(state: TodosState, { payload }: { payload: string }) {
    const todo = state.items.find((todo) => todo.uuid === payload);
    if (todo == null) return;

    todo.completed = todo.completed;
  },
};

const todosSlice = createSlice({ name, initialState, reducers });

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
