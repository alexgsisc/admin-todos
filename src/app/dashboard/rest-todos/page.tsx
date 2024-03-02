import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";


export const metadata = {
  title: "Rest Todos",
  description: "Get data for Rest Todos",
}

export default async function RestTodosPage() {
  // Use primas
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  //use efect
  // useEffect(() => {
  //   fetch('/api/todos')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])

  return (
    <div>
      {/*Form by add new todo*/}
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <h1>Page Rest Todos</h1>
      <TodosGrid todos={todos} />
    </div>
  );
}
