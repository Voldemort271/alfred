"use client";

import React from "react";
import Button from "@/components/ui/custom/button";
import type { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

// TODO: Integrate more providers (Google, GitHub, email/password)
// TODO: Customise login/signup page

const LoginButton = ({ session }: { session: Session | null }) => {
  return (
    <div>
      {session && (
        <Button
          clickEvent={() => {
            void signOut();
          }}
        >
          {session.user.name?.split(" ")[0]}
        </Button>
      )}
      {!session && (
        <Button
          clickEvent={() => {
            void signIn();
          }}
        >
          Sign in
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
