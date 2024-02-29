"use client";
import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import * as apiTodo from "@/todos/helpers/todos";

interface TodosGridProps {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updateTodo = await apiTodo.updateTodo(id, complete);
    router.refresh();
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
