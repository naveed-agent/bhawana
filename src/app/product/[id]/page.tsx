import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-10 grid grid-cols-2 gap-10">

      <div>
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          width={500}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-gray-600">
          {product.description}
        </p>

        <p className="text-2xl font-semibold">
          ${product.price}
        </p>

        <button className="bg-black text-white px-6 py-3 rounded">
          Add To Cart
        </button>
      </div>

    </div>
  );
}