import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {

  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="max-w-7xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {products.map((p:any) => (

          <Link
            key={p.id}
            href={`/product/${p.id}`}
          >

            <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">

              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded"
              />

              <h2 className="text-xl font-semibold mt-3">
                {p.name}
              </h2>

              <p className="text-gray-500">
                {p.description}
              </p>

              <p className="text-lg font-bold mt-2">
                ${p.price}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}