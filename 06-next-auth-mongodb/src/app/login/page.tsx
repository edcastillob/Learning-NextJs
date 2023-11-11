"use client";
import { FormEvent, useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    
        const respSignIn = await signIn('credentials',{
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      })

      if(respSignIn?.error) {    
        setError(respSignIn.error as string);    
         return error
      }

      if(respSignIn?.ok) {
        router.refresh()
        return router.push('/dashboard')
      }
      // console.log(respSignIn);
   
  
};

  return (
    <div className="container justify-center h-[calc(100vh-4rem)] flex items-center">
      <form onSubmit={handleSubmit} className="bg-neutral-950 px-8 py-10 w-3/12 rounded-md">
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7">SignIn</h1>        
        <input
          type="email"
          placeholder="john-doe@mail.com"
          name="email"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />
        <input
          type="password"
          placeholder="**********"
          name="password"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
        />
        <button className="bg-indigo-500 px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
