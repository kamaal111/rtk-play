import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/store";

export const selectTodo = createSelector(
  (todos: RootState["todos"]) => todos,
  (_: RootState["todos"], uuid: string) => uuid,
  (todos, uuid) => {
    return todos.items.find((todo) => todo.uuid === uuid);
  }
);
