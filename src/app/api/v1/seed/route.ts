import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  //prepare insert
  await prisma.todo.deleteMany();

  //TODO insert a new todo
  // const todo = await prisma.todo.create({
  //   data: {
  //     description: "Learn Next.js",
  //   },
  // });
  // console.log(todo);

  //TODO create many todos

  const todos = await prisma.todo.createMany({
    data: [
      {
        description: "Data Fisrts",
        complete: true,
      },
      {
        description: "Data Second",
      },
      {
        description: "Data Third",
      },
      {
        description: "Data Fourth",
      },
    ],
  });

  return NextResponse.json({ message: "Success", objects: todos });
}
