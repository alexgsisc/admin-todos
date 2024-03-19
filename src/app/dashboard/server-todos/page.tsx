//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodoWithAction, TodosGridWithAction } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Server Todos",
  description: "Get data for Server Todos",
}

export default async function ServerTodoPage() {

  const user = await getUserSessionServer();

  if (!user) {
    redirect('/api/auth/signin');
  }

  // Use primas
  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" }
  });

  console.log('construido');

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