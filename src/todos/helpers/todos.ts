import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete };

  const todoResp = await fetch(`/api/v1/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  console.log(`updated todo: ${todoResp}`);

  return todoResp;
};

//create a new todo
export const createTodo = async (description: string): Promise<Todo> => {
  const body = {
    description,
  };

  const todoResp = await fetch("/api/v1/todos", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(`Create new todo: ${todoResp}`);
  return todoResp;
};

export const deleteTodosCompleted = async (): Promise<number> => {
  const todoResp = await fetch("/api/v1/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return todoResp;
};
