import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

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
      {/*TODO: Form by add new todo*/}
      <h1>Page Rest Todos</h1>
      <TodosGrid todos={todos} />
    </div>
  );
}
