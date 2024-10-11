import React from "react";
import Button from "@/components/ui/custom/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex min-h-96 w-screen flex-row flex-wrap gap-0">
      <div className="flex w-full flex-col items-start justify-center bg-neutral-950 px-12 py-24 text-zinc-100 sm:w-1/2">
        <div className="mb-12 max-w-screen-md text-4xl font-medium leading-tight tracking-tight lg:text-6xl lg:leading-tight lg:tracking-tight">
          Alfred Gold. <br /> The membership you definitely need.
        </div>
        <Button variant="transparent" constrain="no">
          enter your details
        </Button>
        <span className="mt-2.5 text-sm">
          By signing up, you agree to the Alfred Privacy Policy and our T&Cs.
        </span>
        <div className="mt-12 grid w-full gap-5 text-xl sm:grid-cols-2">
          <div>20-year warranty</div>
          <div>Membership goodies</div>
          <div>70% off first order</div>
          <div>Exclusive sales</div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start justify-start bg-zinc-100 px-12 py-24 text-zinc-900 sm:w-1/2">
        <div className="text-3xl font-semibold uppercase">Alfred&reg;</div>
        <div className="mt-2.5 max-w-screen-md text-sm">
          Established in 1990, this is a really silly piece of text that
          I&apos;m sure no one will read, but it&apos;s gotta be there for
          design purposes. It sure does look good, but will look even better
          once I&apos;m older.
        </div>
        <div className="grid w-full max-w-screen-sm gap-5 py-12 md:grid-cols-2">
          <div className="text-xl font-medium md:col-span-2">Support</div>
          <div>Help Center</div>
          <div>Privacy Policy</div>
          <div>FAQs</div>
          <div>Terms and Conditions</div>
          <div>Customer Care</div>
          <div>Accessibility Statement</div>
        </div>
        <div className="flex gap-2.5 pb-24">
          <Instagram />
          <Youtube />
          <Linkedin />
          <Facebook />
        </div>
        <div className="absolute bottom-24 left-12 text-sm">
          Copyright &copy;2024 Alfred. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
