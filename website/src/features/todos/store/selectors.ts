import { createSelector } from "@reduxjs/toolkit";

import type { TodosState } from "./slice";

export const selectTodoItem = createSelector(
  (todos: TodosState) => todos,
  (_: TodosState, uuid: string) => uuid,
  (todos, uuid) => {
    return todos.items.find((todo) => todo.uuid === uuid);
  }
);
