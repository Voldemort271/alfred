"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ui/product-card";
import type { Product } from "@prisma/client";
import Button from "@/components/ui/button";
import { debounce } from "../../../utils/debounce";
import { motion } from "framer-motion";
import Loading from "@/components/ui/loading";

interface Props {
  data: Product[];
  count: number;
}

// TODO: Try making component more general to use in different category pages as well

const ShopAllList = ({ data, count }: Props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<Product[]>(data);

  const loadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const res = await fetch(`/api/products?page=${nextPage}`);

      const nextPageProducts = (await res.json()) as Product[];

      if (nextPageProducts.length > 0) {
        setProducts((prevProducts: Product[]): Product[] => [
          ...prevProducts,
          ...nextPageProducts,
        ]);
        setPage(nextPage);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error loading more products:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {products.map((product: Product) => {
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          );
        })}
      </div>
      {count > products.length ? (
        <div>
          <div>
            {loading ? (
              <div className="flex w-screen flex-col items-center justify-center gap-2.5 border-t border-t-zinc-200 p-12">
                <Loading />
              </div>
            ) : (
              <motion.div
                className="flex w-screen flex-col items-center justify-center gap-2.5 border-t border-t-zinc-200 p-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        <motion.div
          className="flex w-screen flex-col items-center justify-center gap-2.5 border-t border-t-zinc-200 p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl text-zinc-400">
            You have reached the end.
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default ShopAllList;
