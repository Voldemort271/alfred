"use client";

import React, { type ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Denim from "@/../public/images/denim.png";
import Shirt from "@/../public/images/shirt.png";
import Jacket from "@/../public/images/jacket.jpg";

import { motion } from "framer-motion";

interface Props {
  img: StaticImport;
  link: string;
  children: ReactNode;
}

const CategoryCard = ({ img, link, children }: Props) => {
  return (
    <div className="relative flex min-h-96 w-full flex-col items-start justify-end gap-1 overflow-clip p-5 text-zinc-100 md:w-1/3 lg:p-12">
      <motion.div
        className="absolute left-0 top-0 h-full w-full"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.15 }}
      >
        <Image
          src={img}
          alt={children?.toLocaleString() ?? "Pic"}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="z-10 text-4xl font-semibold uppercase tracking-tight lg:text-5xl">
        {children}
      </div>
      <Link href={link} className="z-10">
        <Button variant="transparent">shop</Button>
      </Link>
    </div>
  );
};

const CategoryCards = () => {
  return (
    <div className="m-0 flex min-h-[500px] flex-col items-stretch gap-0 p-0 md:flex-row">
      <CategoryCard img={Denim} link={"/"}>
        Denim
      </CategoryCard>
      <CategoryCard img={Shirt} link={"/"}>
        Shirts
      </CategoryCard>
      <CategoryCard img={Jacket} link={"/"}>
        Jackets
      </CategoryCard>
    </div>
  );
};

export default CategoryCards;
