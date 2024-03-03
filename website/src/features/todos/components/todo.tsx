import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { useAppDispatch } from "@/store/hooks";
import { todoChanged } from "../store/slice";
import type { TodosState } from "../store/slice";

function Todo({ todo }: { todo: TodosState["items"][number] }) {
  const dispatch = useAppDispatch();

  const handleCheck = React.useCallback(
    (checkState: boolean) => {
      dispatch(todoChanged({ uuid: todo.uuid, newState: checkState }));
    },
    [dispatch, todo.uuid]
  );

  return (
    <div className="flex my-2">
      <Checkbox
        checked={todo.completed}
        id="completed"
        onCheckedChange={handleCheck}
      />
      <Label htmlFor="completed" className="pl-1">
        {todo.text}
      </Label>
    </div>
  );
}

export default Todo;
