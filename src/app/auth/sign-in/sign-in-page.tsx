"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/custom/button";
import GooglePic from "../../../../public/logos/google.png";
import GithubPic from "../../../../public/logos/github.png";
import DiscordPic from "../../../../public/logos/discord.png";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "../../../../utils/debounce";
import { safeSignInEmail } from "../../../../utils/actions";

const SignInPage = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const router = useRouter();
  const [email, setEmail] = useState<string>("Enter your email");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [email]);

  return (
    <motion.div
      className="h-full w-full overflow-scroll px-12 py-24 md:w-2/3 lg:w-1/2 lg:py-32"
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
        Sign in
      </div>
      <div className="max-w-screen-sm text-base font-medium text-zinc-500">
        Don&apos;t have an account? It&apos;s okay, you will be redirected to a
        separate page for additional details after signing in.
      </div>
      <div className="flex flex-wrap items-stretch gap-2.5 pt-5 md:flex-nowrap">
        <div className="w-full max-w-96">
          <Input
            placeholder={"Enter email here"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <Button
          variant="dark"
          disabled={loading}
          clickEvent={() => {
            setLoading(true);
            debounce(() => {
              safeSignInEmail({ email, callback: callbackUrl });
              setEmail("");
            })();
          }}
        >
          Submit
        </Button>
      </div>
      <div className='relative my-5 text-center after:relative after:-top-3 after:z-0 after:block after:h-[2px] after:w-full after:bg-zinc-300 after:content-[""]'>
        <span className="relative z-10 bg-zinc-100 px-4 text-sm text-zinc-400">
          or
        </span>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-5">
        <Button
          constrain={"no"}
          clickEvent={debounce(() => {
            void signIn("google", { callbackUrl });
          })}
        >
          <div className="flex items-center gap-2.5">
            <Image src={GooglePic} alt={"Google"} className="h-6 w-auto" />
            Google
          </div>
        </Button>
        <Button
          constrain={"no"}
          clickEvent={debounce(() => {
            void signIn("github", { callbackUrl });
          })}
        >
          <div className="flex items-center gap-2.5">
            <Image src={GithubPic} alt={"GitHub"} className="h-6 w-auto" />
            GitHub
          </div>
        </Button>
        <Button
          constrain={"no"}
          clickEvent={debounce(() => {
            void signIn("discord", { callbackUrl });
          })}
        >
          <div className="flex items-center gap-2.5">
            <Image src={DiscordPic} alt={"Discord"} className="h-6 w-auto" />
            Discord
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default SignInPage;
