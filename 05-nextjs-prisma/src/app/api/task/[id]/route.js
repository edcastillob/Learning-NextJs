import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
   try {
      const taskId = +params.id;
      const task = await prisma.task.findUnique({
         where: {
            id: taskId,
         },
      });

      if (task) {
         return NextResponse.json(task);
      } else {
         return NextResponse.json({ error: `Task with ID ${taskId} does not exist` }, { status: 404 });
      }
   } catch (error) {     
      console.error(error);
      return NextResponse.error("Internal Server Error", { status: 500 });
   }
}


export async function DELETE(request, {params}){
   try {

      const taskId = +params.id;
      const taskDelete = await prisma.task.delete({
         where: {
            id: taskId,
         },
      });
      return NextResponse.json(taskDelete)      
   } catch (error) {
      return NextResponse.json( error.meta.cause)      

   }
}


export async function PUT(request, {params}){
   const taskId = +params.id;
   const data = await request.json();
   const taskUpdate = await prisma.task.update({
      where:{
         id: taskId
      },
      data
   })
   return NextResponse.json(taskUpdate)
}

