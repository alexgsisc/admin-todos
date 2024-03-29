import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(req: Request) {
  // Get parameters from URL
  const { searchParams } = new URL(req.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take) || isNaN(skip)) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json(todos);
}

const postShema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().default(false),
});
export async function POST(req: Request) {

  const user = await getUserSessionServer();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  //validate body
  try {
    //const body = await postShema.validate(await req.json());
    //const data = await prisma.todo.create({ data: body });
    const { description, complete } = await postShema.validate(await req.json());
    const todoData = await prisma.todo.create({
      data: {
        description,
        complete,
        userId: user.id,
      }
    })

    return NextResponse.json(todoData);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const deleted = await prisma.todo.deleteMany({ where: { complete: true } });
    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
