import { useAppSelector } from "@/store/hooks";

import type { TodosState } from "../store/slice";

function TodoList() {
  const items = useAppSelector(({ todos }) => todos.items);

  return items.map((todo) => {
    return <Todo key={todo.uuid} todo={todo} />;
  });
}

function Todo({ todo }: { todo: TodosState["items"][number] }) {
  return (
    <>
      <p>{todo.text}</p>
    </>
  );
}

export default TodoList;
