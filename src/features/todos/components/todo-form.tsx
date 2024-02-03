import React from "react";
import stylex from "@stylexjs/stylex";

import Input from "@/components/input";

import { useAppDispatch } from "@/store/hooks";
import { todoAdded } from "../store/slice";

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
    <form onSubmit={submitTodo} {...stylex.props(styles.form)}>
      <Input
        name="todo"
        label="Todo: "
        placeholder="Fill in todo"
        value={currentTodo}
        minLength={currentTodoMinimumLength}
        required
        onChange={(value) => setCurrentTodo(value)}
      />
      <button
        type="submit"
        disabled={!currentTodoIsValid}
        {...stylex.props(styles.formButton)}
      >
        Submit
      </button>
    </form>
  );
}

const styles = stylex.create({
  form: {
    display: "flex",
    flexDirection: "row",
  },
  formButton: {
    marginHorizontal: "10px",
    marginVertical: "12px",
    height: "20px",
  },
});

export default TodoForm;
