import Todo from "./todo";

import { useAppSelector } from "@/store/hooks";
import { useGetPingQuery } from "@/features/api/store/health-api";

function TodoList() {
  const items = useAppSelector(({ todos }) => todos.items);

  const { data, error, isLoading } = useGetPingQuery();
  console.log("{ data, error, isLoading }", { data, error, isLoading });

  return items.map((todo) => {
    return <Todo key={todo.uuid} todo={todo} />;
  });
}

export default TodoList;
