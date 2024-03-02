import prisma from "@/lib/prisma";
import { NewTodo, NewTodoWithAction, TodosGrid, TodosGridWithAction } from "@/todos";

export const metadata = {
    title: "Server Todos",
    description: "Get data for Server Todos",
  }

export default async function ServerTodoPage() {
    // Use primas
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });


  return (
    <>
    <span className="text-3xl mb-10">Server Actions</span>
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodoWithAction />
      </div>

      <h1>Page Server Todos</h1>
      <TodosGridWithAction todos={todos} />
    </div>
    </>
  );
}