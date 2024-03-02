
import { Todo } from "@prisma/client";

import { TodoItemWithAction } from './TodoItemWithAction';
import { toggleTodo } from "@/todos/actions/todo-actions";

interface TodosGridWithActionProps {
  todos?: Todo[];
}

export const TodosGridWithAction = ({ todos = [] }: TodosGridWithActionProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItemWithAction key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};