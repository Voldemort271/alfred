"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/components/ui/custom/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const SignUp = () => {
  const [page, setPage] = useState(0);
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
        Sign up
      </div>
      <div className="text-base font-medium text-zinc-500">
        Already have an account?{" "}
        <Link href={"/sign-in"} className="text-blue-600 underline">
          Sign in
        </Link>
      </div>
      <div className="my-5 h-[2px] w-full bg-zinc-200"></div>

      {page === 0 && (
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <div className="text-2xl font-medium text-zinc-500">
            Login credentials
          </div>
          <div className="w-full max-w-screen-sm text-sm text-zinc-500">
            Any provider accounts (Google, GitHub, etc) you sign in with using
            the same email will be automatically linked to this account.
          </div>
          <div className="flex items-stretch gap-2.5 py-5">
            <div className="w-full max-w-[600px] space-y-1">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" placeholder={"Enter email here"} />
            </div>
          </div>
        </motion.div>
      )}

      {page === 1 && (
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <div className="text-2xl font-medium text-zinc-500">
            Address details
          </div>
          <div className="w-full max-w-screen-sm text-sm text-zinc-500">
            We do not deliver any goods. This is just a showcase website. Please
            don&apos;t enter any real addresses.
          </div>
          <div className="flex flex-wrap items-stretch gap-2.5 py-5">
            <div className="w-full max-w-[700px] space-y-1">
              <Label htmlFor="line1">Address line 1</Label>
              <Input id="line1" placeholder={"Line 1"} />
            </div>
            <div className="w-full max-w-[700px] space-y-1">
              <Label htmlFor="line2">Address line 2</Label>
              <Input id="line2" placeholder={"Line 2"} />
            </div>
            <div className="w-full space-y-1 sm:max-w-[200px]">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder={"City name"} />
            </div>
            <div className="w-full space-y-1 sm:max-w-[200px]">
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder={"State name"} />
            </div>
            <div className="w-full space-y-1 sm:max-w-[200px]">
              <Label htmlFor="postalCode">Postal code</Label>
              <Input id="postalCode" placeholder={"Postal code"} />
            </div>
          </div>
        </motion.div>
      )}

      {page === 2 && (
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <div className="text-2xl font-medium text-zinc-500">
            Payment details
          </div>
          <div className="w-full max-w-screen-sm text-sm text-zinc-500">
            Again, this is not a real e-commerce website. Please don&apos;t
            enter any real credit card information.
          </div>
          <div className="flex flex-wrap items-stretch gap-2.5 py-5">
            <div className="w-full max-w-[700px] space-y-1">
              <Label htmlFor="accno">Account number</Label>
              <Input
                id="accno"
                type="number"
                placeholder={"Enter account number here"}
              />
            </div>
            <div className="w-full max-w-[200px] space-y-1">
              <Label htmlFor="provider">Provider</Label>
              <Select name="provider">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visa">VISA</SelectItem>
                  <SelectItem value="mastercard">Mastercard</SelectItem>
                  <SelectItem value="ae">American Express</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full max-w-[200px] space-y-1">
              <Label htmlFor="expiry">Expiry</Label>
              <Input
                id="expiry"
                type="date"
                placeholder={"Enter expiry date here"}
              />
            </div>
          </div>
        </motion.div>
      )}

      {page <= 1 ? (
        <Button
          constrain="no"
          variant="dark"
          clickEvent={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      ) : (
        <Button
          constrain="no"
          variant="dark"
          // clickEvent={() => setPage((p) => p + 1)}
        >
          Submit
        </Button>
      )}
    </motion.div>
  );
};

export default SignUp;
