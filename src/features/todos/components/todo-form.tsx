import React from "react";

import Input from "@/components/input";

import { useAppDispatch } from "@/store/hooks";
import { todoAdded } from "../store/slice";

import styles from "./todo-form.module.css";

const currentTodoMinimumLength = 1;

function TodoForm() {
  const [currentTodo, setCurrentTodo] = React.useState("");
  const dispatch = useAppDispatch();

  const currentTodoIsValid = currentTodo.length >= currentTodoMinimumLength;

  const submitTodo = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!currentTodoIsValid) return;

      dispatch(todoAdded({ text: currentTodo }));
      setCurrentTodo("");
    },
    [currentTodo, currentTodoIsValid, dispatch]
  );

  return (
    <form className={styles["form"]} onSubmit={submitTodo}>
      <Input
        name="todo"
        label="Todo: "
        placeholder="Fill in todo"
        value={currentTodo}
        minLength={currentTodoMinimumLength}
        required
        onChange={(value) => setCurrentTodo(value)}
      />
      <button type="submit" disabled={!currentTodoIsValid}>
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
