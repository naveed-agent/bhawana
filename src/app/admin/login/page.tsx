"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  function handleLogin(e:any){
    e.preventDefault();

    if(email==="admin@gmail.com" && password==="123456"){
      router.push("/admin/dashboard");
    }else{
      alert("Invalid login");
    }
  }

  return (
    <form onSubmit={handleLogin} className="p-10 space-y-4">
      <input
        placeholder="email"
        onChange={(e)=>setEmail(e.target.value)}
        className="border p-2"
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}
        className="border p-2"
      />

      <button className="bg-black text-white px-4 py-2">
        Login
      </button>
    </form>
  );
}