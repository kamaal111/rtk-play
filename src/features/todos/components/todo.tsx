import React from "react";

import { useAppDispatch } from "@/store/hooks";
import { todoChanged } from "../store/slice";
import type { TodosState } from "../store/slice";

function Todo({ todo }: { todo: TodosState["items"][number] }) {
  const dispatch = useAppDispatch();

  const handleCheck = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      dispatch(todoChanged({ uuid: todo.uuid, newState: checked }));
    },
    [dispatch, todo.uuid]
  );

  return (
    <div>
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={handleCheck}
      />
      <label htmlFor="completed">{todo.text}</label>
    </div>
  );
}

export default Todo;
