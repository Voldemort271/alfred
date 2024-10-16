import React from "react";
import SectionHeader from "@/components/ui/section-header";
import ShopAll from "../../../../../public/images/shop-all.jpg";
import type { Product } from "@prisma/client";
import { api } from "@/trpc/server";
import dynamic from "next/dynamic";

const ShopList = dynamic(() => import("@/components/shop/shop-list"), {
  ssr: false,
});

const ShopPage = async () => {
  const products: Product[] = await api.product.getAllPaginated({ page: 0 });

  return (
    <div>
      <SectionHeader img={ShopAll} title={"Shop All"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
        aliquid animi culpa cum dolores et facere, magnam nisi quaerat quibusdam
        quisquam ratione saepe temporibus unde vel velit voluptate voluptatum!
      </SectionHeader>
      <ShopList initialData={products} />
    </div>
  );
};

export default ShopPage;
