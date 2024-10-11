import React from "react";
import Shirts from "@/../public/images/promo-shirts.png";
import Image from "next/image";
import Button from "@/components/ui/custom/button";

const MainPromo = () => {
  return (
    <div className="flex min-h-96 flex-col items-stretch justify-between gap-0 md:flex-row">
      <div className="flex w-full flex-col space-y-2.5 px-12 py-24 md:w-1/2 md:py-48">
        <div className="text-6xl font-medium leading-tight tracking-tight">
          Interviews. <br /> Weddings. <br /> Parties.
        </div>
        <div>Classy shirts for every occasion.</div>
        <div className="flex w-full flex-wrap gap-2.5 pt-5">
          <Button variant="dark" constrain={"no"}>
            view shirts
          </Button>
          <Button constrain={"no"}>browse shop</Button>
        </div>
      </div>
      <Image
        src={Shirts}
        alt={"Shirts"}
        className="w-full bg-blue-400 object-cover md:w-1/2"
      />
    </div>
  );
};

export default MainPromo;
