"use client";

import { useState } from "react";

export default function Dashboard() {

  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [image,setImage]=useState("");

  async function addProduct(){
    await fetch("/api/products",{
      method:"POST",
      body:JSON.stringify({
        name,
        price:parseFloat(price),
        description:"demo",
        image
      })
    });

    alert("Product Added");
  }

  return(
    <div className="p-10 space-y-4">

      <h1 className="text-2xl font-bold">
        Admin Dashboard
      </h1>

      <input
        placeholder="product name"
        onChange={(e)=>setName(e.target.value)}
        className="border p-2"
      />

      <input
        placeholder="price"
        onChange={(e)=>setPrice(e.target.value)}
        className="border p-2"
      />

      <input
        placeholder="image url"
        onChange={(e)=>setImage(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={addProduct}
        className="bg-black text-white px-4 py-2"
      >
        Add Product
      </button>

    </div>
  )
}