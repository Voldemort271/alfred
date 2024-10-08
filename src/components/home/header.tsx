"use client";

import React from "react";
import Image from "next/image";
import HeaderPic from "../../../public/images/header.png";
import Button from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <div className="relative flex min-h-[90svh] flex-col items-start justify-center gap-5 px-12 py-5 text-zinc-100">
      <motion.div
        className="absolute left-0 top-0 -z-10 w-full"
        style={{ scale, opacity }}
      >
        <Image
          src={HeaderPic}
          alt={"Header Picture"}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="text-4xl font-semibold sm:text-6xl">
        The Luxury Clearance <br />{" "}
        <span className="font-light">Early Access live now</span>
      </div>
      <div className="max-w-screen-sm">
        Enroll in the Alfred Gold membership to avail Luxury Clearance discounts
        as early as two weeks before the sale.
      </div>
      <Button variant={"transparent"}>see plans</Button>
    </div>
  );
};

export default Header;
