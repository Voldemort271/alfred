import React, { type ReactNode } from "react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
  title: string;
  children: ReactNode;
  img: StaticImport;
}

const SectionHeader = ({ title, children, img }: Props) => {
  return (
    <div className="relative flex min-h-[60svh] flex-col items-start justify-end gap-5 overflow-clip p-12 text-zinc-100">
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <Image
          src={img}
          alt={"Header Picture"}
          className="bottom-0 h-full w-full object-cover"
        />
      </div>
      <div className="text-6xl font-semibold sm:text-8xl">{title}</div>
      <div className="max-w-screen-sm">{children}</div>
    </div>
  );
};

export default SectionHeader;
