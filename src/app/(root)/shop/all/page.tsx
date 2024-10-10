import React from "react";
import SectionHeader from "@/components/ui/section-header";
import ShopAll from "../../../../../public/images/shop-all.jpg";
import type { Product } from "@prisma/client";
import { api } from "@/trpc/server";
import dynamic from "next/dynamic";

const ShopAllList = dynamic(() => import("@/components/shop/shop-all-list"), {
  ssr: false,
});

const ShopPage = async () => {
  const products: Product[] = await api.product.getAllPaginated({ page: 0 });
  const count = await api.product.getLength();

  return (
    <div>
      <SectionHeader img={ShopAll} title={"Shop All"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
        aliquid animi culpa cum dolores et facere, magnam nisi quaerat quibusdam
        quisquam ratione saepe temporibus unde vel velit voluptate voluptatum!
      </SectionHeader>
      <ShopAllList data={products} count={count} />
    </div>
  );
};

export default ShopPage;
