import React from "react";
import type { Product } from "@prisma/client";
import ProductCard from "@/components/ui/product-card";

import { api } from "@/trpc/server";

const Recommended = async () => {
  const feed: Product[] = await api.product.getFeed();

  return (
    <div className="pt-12">
      <div className="px-5 py-5 text-4xl font-medium leading-tight tracking-tight sm:px-12 sm:text-6xl">
        You might be interested in
      </div>
      <div className="flex flex-row flex-wrap items-stretch border-y-2 border-y-zinc-200">
        {feed.map((product, index) => (
          <div className="w-1/2 lg:w-1/4" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
