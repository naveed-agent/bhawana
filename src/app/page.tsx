import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const products = await prisma.product.findMany();

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-3 gap-6 p-10">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <img src={p.image} className="h-40 w-full object-cover"/>
            <h2 className="font-bold">{p.name}</h2>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}