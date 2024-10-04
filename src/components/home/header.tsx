import React from "react";
import Image from "next/image";
import HeaderPic from "../../../public/header.png";
import Button from "@/components/ui/button";

const Header = () => {
  return (
    <div className="relative flex min-h-[90dvh] flex-col items-start justify-center gap-5 px-12 py-5 text-zinc-100">
      <Image
        src={HeaderPic}
        alt={"Header Picture"}
        className="absolute left-0 top-0 -z-10 h-full w-screen object-cover"
      />
      <div className="text-4xl font-semibold sm:text-6xl">
        The Luxury Clearance <br />{" "}
        <span className="font-light">Early Access live now</span>
      </div>
      <div className="max-w-screen-sm">
        Enrol in the Alfred Gold membership to avail Luxury Clearance discounts
        as early as two weeks before the sale.
      </div>
      <Button variant={"transparent"}>see plans</Button>
    </div>
  );
};

export default Header;
