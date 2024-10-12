"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/custom/button";
import Link from "next/link";

const SignIn = () => {
  const router = useRouter();

  return (
    <motion.div
      className="h-full w-full px-12 py-24 md:w-2/3 lg:w-1/2 lg:py-32"
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <div
        className="absolute right-12 top-24 flex cursor-pointer items-center justify-center border border-zinc-900 bg-zinc-100 p-2.5"
        onClick={() => {
          router.back();
        }}
      >
        <ArrowLeft size={24} />
      </div>
      <div className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl sm:leading-tight sm:tracking-tight">
        Verify Email
      </div>
      <div className="mb-5 max-w-screen-sm text-base font-medium text-zinc-500">
        A verification email has been sent to your registered email address.
        Please click the link in the email to sign in.
      </div>
      <Link href={"/"}>
        <Button constrain="no" variant="dark">
          Continue browsing
        </Button>
      </Link>
    </motion.div>
  );
};

export default SignIn;
