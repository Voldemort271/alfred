"use client";
import React from "react";
import SigninPic from "../../../public/images/sign-in.jpg";
import Image from "next/image";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative flex h-screen w-screen flex-col-reverse items-stretch overflow-clip md:flex-row">
      <Image
        src={SigninPic}
        alt={"Sign in pic"}
        className="h-full w-full border-r-2 border-r-zinc-200 object-cover md:w-1/3 lg:w-1/2"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
