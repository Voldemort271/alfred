"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Category, Fit, Size } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import {
  type Filters,
  getFlattenedFilters,
} from "@/../utils/flattened-filters";

const FilterBar = () => {
  const [toggle, setToggle] = useState(false);

  const [filters, setFilters] = useState<Filters>({
    category: [],
    fit: [],
    size: [],
  });

  const handleChange = (
    checked: boolean | string,
    name: keyof Filters,
    value: string,
  ) => {
    const changedFilter = filters[name];

    if (checked) {
      setFilters({ ...filters, [name]: [...changedFilter, value] });
    } else {
      const newFilter = changedFilter.filter((filter) => filter !== value);
      setFilters({ ...filters, [name]: newFilter });
    }
  };

  return (
    <div className="sticky top-16 z-20 border-b-2 border-b-zinc-200 bg-zinc-100 px-5 sm:px-12">
      <div
        className="flex cursor-pointer flex-row items-center justify-between gap-12 py-5 text-xl font-medium"
        onClick={() => setToggle(!toggle)}
      >
        <div className="flex min-w-32 items-center justify-between">
          <span>Filters</span>
          {toggle ? <Minus /> : <Plus />}
        </div>
        <div className="hidden gap-2.5 sm:flex">
          {getFlattenedFilters(filters).map((filter) => (
            <Badge key={filter}>{filter}</Badge>
          ))}
          {getFlattenedFilters(filters).length == 4 && <Badge>...</Badge>}
        </div>
      </div>
      {toggle && (
        <motion.form
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, paddingTop: 0, paddingBottom: 0 }}
          animate={{ opacity: 1, paddingTop: 0, paddingBottom: 10 }}
        >
          <div className="flex flex-col gap-2.5 pb-5">
            <div className="border-b border-b-zinc-200 text-lg font-medium">
              Category
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="denim"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "category", Category.Denim);
                  }}
                />
                <Label htmlFor="denim">Denim</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="shirt"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "category", Category.Shirt);
                  }}
                />
                <Label htmlFor="shirt">Shirts</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="jacket"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "category", Category.Jacket);
                  }}
                />
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
                <Checkbox
                  id="kids"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "fit", Fit.Kids);
                  }}
                />
                <Label htmlFor="denim">Kids</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="men"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "fit", Fit.Men);
                  }}
                />
                <Label htmlFor="denim">Men</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="women"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "fit", Fit.Women);
                  }}
                />
                <Label htmlFor="denim">Women</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="unisex"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "fit", Fit.Unisex);
                  }}
                />
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
                <Checkbox
                  id="xs"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "size", Size.XS);
                  }}
                />
                <Label htmlFor="xs">XS</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="s"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "size", Size.S);
                  }}
                />
                <Label htmlFor="s">S</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="m"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "size", Size.M);
                  }}
                />
                <Label htmlFor="m">M</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="l"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "size", Size.L);
                  }}
                />
                <Label htmlFor="l">L</Label>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Checkbox
                  id="xl"
                  onCheckedChange={(checked) => {
                    handleChange(checked, "size", Size.XL);
                  }}
                />
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
