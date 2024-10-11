"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Category, Fit, Size } from "@prisma/client";

interface Filters {
  category: Category[];
  fit: Fit[];
  size: Size[];
}

const FilterBar = () => {
  const [toggle, setToggle] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    category: [],
    fit: [],
    size: [],
  });

  return (
    <div className="sticky top-16 z-20 border-b-2 border-b-zinc-200 bg-zinc-100 px-12">
      <div className="flex flex-row gap-12 py-5 text-xl font-medium">
        <div
          className="flex min-w-32 items-center justify-between"
          onClick={() => setToggle(!toggle)}
        >
          <span>Filters</span>
          {toggle ? <Minus /> : <Plus />}
        </div>
      </div>
      {toggle && (
        <motion.form
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, paddingTop: 0, paddingBottom: 0 }}
          animate={{ opacity: 1, paddingTop: 0, paddingBottom: 10 }}
          onChange={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col gap-2.5 pb-5">
            <div className="border-b border-b-zinc-200 text-lg font-medium">
              Category
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="category" id="denim" value={Category.Denim} />
                <Label htmlFor="denim">Denim</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="category" id="shirt" value={Category.Shirt} />
                <Label htmlFor="shirt">Shirts</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="category" id="jacket" value={Category.Jacket} />
                <Label htmlFor="jacket">Jackets</Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 pb-5">
            <div className="border-b border-b-zinc-200 text-lg font-medium">
              Fit
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="fit" id="kids" value={Fit.Kids} />
                <Label htmlFor="denim">Kids</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="fit" id="men" value={Fit.Men} />
                <Label htmlFor="denim">Men</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="fit" id="women" value={Fit.Women} />
                <Label htmlFor="denim">Women</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="fit" id="unisex" value={Fit.Unisex} />
                <Label htmlFor="denim">Unisex</Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 pb-5">
            <div className="w-full border-b border-b-zinc-200 text-lg font-medium">
              Size
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="size" id="xs" value={Size.XS} />
                <Label htmlFor="xs">XS</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="size" id="s" value={Size.S} />
                <Label htmlFor="s">S</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="size" id="m" value={Size.M} />
                <Label htmlFor="m">M</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="size" id="l" value={Size.L} />
                <Label htmlFor="l">L</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox name="size" id="xl" value={Size.XL} />
                <Label htmlFor="xl">XL</Label>
              </div>
            </div>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default FilterBar;
