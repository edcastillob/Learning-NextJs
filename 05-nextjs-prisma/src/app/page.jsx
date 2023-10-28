import TaskCard from "@/components/taskCard/TaskCard";
import { prisma } from "@/libs/prisma";


const HomePage = async () => {
  const tasks = await getTaskAll();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
    {
      tasks.map((task) => (
        <TaskCard task ={task} key={task.id}/>
      ))
    }
  </div>
    </section>
  )
};

export default HomePage;

async function getTaskAll() {
  // const res = await fetch("http://localhost:3000/api/task");
  // return await res.json();
  return await prisma.task.findMany();
}
