import Todo from "./todo";

import { useAppSelector } from "@/store/hooks";

function TodoList() {
  const items = useAppSelector(({ todos }) => todos.items);

  return items.map((todo) => {
    return <Todo key={todo.uuid} todo={todo} />;
  });
}

export default TodoList;
