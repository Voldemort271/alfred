import React from "react";

import { db } from "@/server/db";
import type { Product } from "@prisma/client";
import ProductCard from "@/components/ui/product-card";

const Recommended = async () => {
  const products: Product[] = await db.product.findMany({
    take: 4,
    orderBy: { id: "asc" },
  });
  return (
    <div className="pt-12">
      <div className="px-5 py-5 text-4xl font-medium leading-tight tracking-tight sm:px-12 sm:text-6xl">
        You might be interested in
      </div>
      <div className="flex flex-row flex-wrap items-stretch border-y-2 border-y-zinc-200">
        {products.map((product, index) => (
          <div className="w-1/2 lg:w-1/4" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
