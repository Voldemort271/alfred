"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ui/product-card";
import type { Product } from "@prisma/client";
import Button from "@/components/ui/button";
import { debounce } from "../../../utils/debounce";

interface Props {
  data: Product[];
  count: number;
}

const ShopAllList = ({ data, count }: Props) => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<Product[]>(data);

  const loadMore = async () => {
    try {
      const nextPage = page + 1;
      const res = await fetch(`/api/products?page=${nextPage}`);

      const nextPageProducts = (await res.json()) as Product[];

      if (nextPageProducts.length > 0) {
        setProducts((prevProducts: Product[]): Product[] => [
          ...prevProducts,
          ...nextPageProducts,
        ]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error loading more products:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {products.map((product: Product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
      <div className="flex w-screen flex-col items-center justify-center gap-2.5 border-y-2 border-y-zinc-200 p-12">
        <span className="text-2xl">
          Viewing 0 - {products.length} of {count} results
        </span>
        <Button
          clickEvent={debounce(async () => {
            await loadMore();
          })}
          variant="dark"
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default ShopAllList;
