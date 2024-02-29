'use client';
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import * as apiTodo from "@/todos/helpers/todos";

interface TodosGridProps {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={apiTodo.updateTodo} />
      ))}
    </div>
  );
};
