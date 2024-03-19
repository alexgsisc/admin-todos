'use server';

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleep = async( seconds: number = 0 ) => {

    return new Promise( resolve => {
      setTimeout(() => {
        resolve(true);
      },  seconds * 1000 );
    });
  
  }


export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    
    await sleep(3);

    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) {
        throw new Error(`Todo with id ${id} not found`);
    }
    const updateTodo = await prisma.todo.update({
        where: {
            id
        },
        data: {
            complete: complete
        }
    });
    revalidatePath('/dashboard/server-todos');
    return updateTodo;
}

export const addTodo = async (description: string) => {
    const user = await getUserSessionServer();
    try {
        const todo = await prisma.todo.create({
           data: {
               description: description,
               userId: user!.id
           }
        });
        revalidatePath('/dashboard/server-todos');
        return todo;

    } catch (error) {
        return {
            message: 'error al crearte el todo'
        }
    }
}

export const deleteTodoCompleted = async (): Promise<void> => {
    await prisma.todo.deleteMany({
        where: {
            complete: true
        }
    });
    revalidatePath('/dashboard/server-todos');
}