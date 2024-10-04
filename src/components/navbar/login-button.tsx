import React from "react";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import Button from "@/components/ui/button";

const LoginButton = async () => {
  const session = await getServerAuthSession();

  return (
    <div>
      {session && (
        <Link href={"/api/auth/signout"}>
          <Button>{session.user.name}</Button>
        </Link>
      )}
      {!session && (
        <Link href={"/api/auth/signin"}>
          <Button>Sign in</Button>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
