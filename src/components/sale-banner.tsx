import React from "react";
import Link from "next/link";

const SaleBanner = () => {
  return (
    <Link href={"/"}>
      <div className="w-full bg-zinc-900 px-12 text-center text-xs font-semibold uppercase leading-6 text-zinc-100 sm:text-sm sm:leading-8">
        get flat 60% off on select products.{" "}
        <span className="hidden sm:inline"> limited-time sale.</span>
      </div>
    </Link>
  );
};

export default SaleBanner;
