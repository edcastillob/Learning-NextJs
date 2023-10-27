import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const { title, description } = await request.json()

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(newTask);
  } catch (error) {
    console.error(error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
