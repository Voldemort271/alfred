"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";
import { MenuIcon, X } from "lucide-react";

interface Props {
  children: ReactNode;
}

const NavSkeleton = ({ children }: Props) => {
  const [isShrunk, setShrunk] = useState(false);
  const [toggle, setToggle] = useState(false);

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
    <>
      <nav
        className={`flex flex-row items-center justify-between border-b-2 border-b-zinc-200 bg-zinc-100 px-5 sm:px-12 ${isShrunk ? "py-5 sm:py-2" : "py-5"} text-base transition-all`}
      >
        <div
          className={`transition-all ${isShrunk ? "text-2xl" : "text-2xl sm:text-3xl"} font-semibold uppercase`}
        >
          <Link href={"/public"}>Alfred&reg;</Link>
        </div>
        <div className="hidden flex-row items-center gap-8 font-medium uppercase sm:flex">
          <Link href={"/public"}>men</Link>
          <Link href={"/public"}>women</Link>
          <Link href={"/public"}>kids</Link>
          {children}
        </div>
        <div
          className="flex h-full cursor-pointer items-center justify-center text-xl sm:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <X size={32} /> : <MenuIcon size={32} />}
        </div>
      </nav>
      <div
        className={`flex w-full flex-col gap-5 overflow-y-clip bg-zinc-100 px-5 font-medium uppercase transition-all ${
          toggle ? "border-b-2 border-zinc-200 py-5" : "h-0"
        }`}
      >
        <Link href={"/public"}>men</Link>
        <Link href={"/public"}>women</Link>
        <Link href={"/public"}>kids</Link>
        {children}
      </div>
    </>
  );
};

export default NavSkeleton;
