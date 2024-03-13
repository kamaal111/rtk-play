import React from "react";

import Input from "@/components/input";

import { useAppDispatch } from "@/store/hooks";
import todosSlice from "../store/slice";
import { Button } from "@/components/ui/button";

const currentTodoMinimumLength = 1;

function TodoForm() {
  const [currentTodo, setCurrentTodo] = React.useState("");
  const dispatch = useAppDispatch();

  const currentTodoIsValid = currentTodo.length >= currentTodoMinimumLength;

  const submitTodo = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!currentTodoIsValid) return;

      dispatch(todosSlice.actions.todoAdded({ text: currentTodo }));
      setCurrentTodo("");
    },
    [currentTodo, currentTodoIsValid, dispatch]
  );

  return (
    <form onSubmit={submitTodo} className="flex">
      <Input
        name="todo"
        label="Todo: "
        placeholder="Fill in todo"
        value={currentTodo}
        minLength={currentTodoMinimumLength}
        required
        onChange={(value) => setCurrentTodo(value)}
      />
      <Button
        disabled={!currentTodoIsValid}
        type="submit"
        className="h-9 mx-3 my-9"
      >
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
