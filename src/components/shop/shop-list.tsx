"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ui/product-card";
import type { Product } from "@prisma/client";
import Button from "@/components/ui/button";
import { debounce } from "../../../utils/debounce";
import { motion } from "framer-motion";
import {
  getLengthServer,
  getPaginatedServer,
} from "../../../utils/server-actions";
import FilterBar from "@/components/shop/filter-bar";
import type { Filters } from "@/../utils/flattened-filters";
import Loading from "@/components/ui/loading";

interface Props {
  initialData: Product[];
}

const ShopList = ({ initialData }: Props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<Product[]>(initialData);
  const [count, setCount] = useState(0);

  const [filters, setFilters] = useState<Filters>({
    category: [],
    fit: [],
    size: [],
  });

  const loadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;

      const nextPageProducts = await getPaginatedServer({
        page: nextPage,
        filters,
      });

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

  useEffect(() => {
    const func = async () => {
      setLoading(true);
      const num = await getLengthServer(filters);
      const filteredProducts = await getPaginatedServer({ page: 0, filters });
      setProducts(filteredProducts);
      setCount(num);
      setLoading(false);
    };
    void func();
  }, [filters]);

  return (
    <div className="relative">
      <FilterBar filters={filters} setFilters={setFilters} />
      {loading ? (
        <div className="flex w-screen flex-col items-center justify-center gap-2.5 border-t border-t-zinc-200 p-12">
          <Loading />
        </div>
      ) : (
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
      )}
      {count > products.length ? (
        <div>
          <div>
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

export default ShopList;
