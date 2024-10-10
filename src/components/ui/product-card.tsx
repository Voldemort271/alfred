import React from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

import type { Product } from "@prisma/client";

const ProductCard = (props: Product) => {
  return (
    <div key={props.id} className="w-full border-x border-x-zinc-200">
      <Image
        src={props.img ?? ""}
        width={400}
        height={600}
        alt={props.name}
        className="aspect-[5/6] w-full object-cover"
      />
      <div className="p-5">
        <div className="track w-full truncate text-xl font-medium leading-normal">
          {props.name}
        </div>
        <div>{`$${props.price}`}</div>
        <div className="my-5 flex flex-row flex-wrap items-center gap-1">
          <Star size={20} />
          <Star size={20} />
          <Star size={20} />
          <Star size={20} />
          {Math.round(Math.random()) === 0 ? (
            <StarHalf size={20} />
          ) : (
            <Star size={20} />
          )}
          <span className="text-sm">
            ({Math.floor(Math.random() * 100) * 10 + 100} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
