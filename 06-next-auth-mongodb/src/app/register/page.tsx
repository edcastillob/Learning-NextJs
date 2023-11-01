"use client";
import axios, {AxiosError} from "axios";
import { FormEvent, useState } from "react";

const RegisterPage = () => {
  const [error, setError] = useState();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const resp = await axios.post("api/auth/signup", {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        password: formData.get("password"),
      });
      console.log(resp);
    } catch (error) {
      console.log(error);
      if(error instanceof AxiosError) setError( error.response?.data.message)
    }
  };

  return (
    <div>
      <form className="container mx-auto" onSubmit={handleSubmit}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="John Doe"
          name="fullname"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
        <input
          type="email"
          placeholder="john-doe@mail.com"
          name="email"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
        <input
          type="password"
          placeholder="**********"
          name="password"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
        <button className="bg-indigo-500 px-4 py-2">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
