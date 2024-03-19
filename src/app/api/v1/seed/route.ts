import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs';
import { create } from "domain";

export async function GET(request: Request) {
  //prepare insert
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const users = await prisma.user.create({
    data: {
      email: "test1@example.com",
      password: bcrypt.hashSync("test123"),
      roles: ["admin", "user"],
      todos: {
        create: [
          { description: 'Piedra del alma', complete: true },
          { description: 'Piedra del poder' },
          { description: 'Piedra del tiempo' },
          { description: 'Piedra del espacio' },
          { description: 'Piedra del realidad' },
        ]
      }
    }
  });



  //TODO insert a new todo
  // const todo = await prisma.todo.create({
  //   data: {
  //     description: "Learn Next.js",
  //   },
  // });
  // console.log(todo);

  //TODO create many todos

  // const todos = await prisma.todo.createMany({
  //   data: [
  //     {
  //       description: "Data Fisrts",
  //       complete: true,
  //     },
  //     {
  //       description: "Data Second",
  //     },
  //     {
  //       description: "Data Third",
  //     },
  //     {
  //       description: "Data Fourth",
  //     },
  //   ],
  // });

  return NextResponse.json({ message: "Success"});
}
