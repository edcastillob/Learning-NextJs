"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewTask = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      // const id = +params.id
      fetch(`/api/task/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const handleDelete = async () => {
    try {
      await fetch(`/api/task/${params.id}`, {
        method: "DELETE",
      });
      toast.success(`task ${params.id} has been deleted`, {
        position: 'top-right',
        autoClose: 3000,
      });
      setTimeout(() => {
        router.refresh();
        router.push("/");
      }, 2000); 
    } catch (error) {
      toast.error('Error al eliminar la tarea', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
      <form
        className=" bg-slate-800 p-10 lg:w-1/3 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Title Task
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="insert title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Description Task
        </label>
        <textarea
          name=""
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="insert description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewTask;
