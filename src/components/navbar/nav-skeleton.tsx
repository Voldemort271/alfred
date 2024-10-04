"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const NavSkeleton = ({ children }: Props) => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        )
          return true;

        if (
          isShrunk &&
          document.body.scrollTop < 5 &&
          document.documentElement.scrollTop < 5
        )
          return false;
        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`flex flex-row items-center justify-between border-b-2 border-b-zinc-200 px-12 ${isShrunk ? "py-2" : "py-5"} text-base transition-all`}
    >
      <div
        className={`transition-all ${isShrunk ? "text-2xl" : "text-3xl"} font-semibold uppercase`}
      >
        <Link href={"/public"}>Alfred&reg;</Link>
      </div>
      <div className="flex flex-row items-center gap-8 font-medium uppercase">
        <Link href={"/public"}>men</Link>
        <Link href={"/public"}>women</Link>
        <Link href={"/public"}>kids</Link>
        {children}
      </div>
    </nav>
  );
};

export default NavSkeleton;
