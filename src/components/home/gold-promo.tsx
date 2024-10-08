import React from "react";
import Button from "@/components/ui/button";

const GoldPromo = () => {
  return (
    <div className="space-y-5 bg-neutral-950 px-12 py-24 text-zinc-100">
      <div className="max-w-screen-md text-6xl font-medium leading-tight tracking-tight">
        Enjoy a 20-year warranty, available for a limited time.
      </div>
      <div className="max-w-screen-sm pb-12">
        Join Alfred Gold to get many more benefits. The rest of this line is
        just to get this paragraph to exceed a single line, cause that ruins the
        design.
      </div>
      <Button variant={"transparent"} size={"large"}>
        sign up
      </Button>
    </div>
  );
};

export default GoldPromo;
