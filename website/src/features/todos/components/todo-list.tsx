import { useAppSelector } from "@/store/hooks";

import Todo from "./todo";

function TodoList() {
  const items = useAppSelector(({ todos }) => todos.items);

  return items.map((todo) => {
    return <Todo key={todo.uuid} todo={todo} />;
  });
}

export default TodoList;
