import React from "react";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import Button from "@/components/ui/custom/button";

// TODO: Integrate more providers (Google, GitHub, email/password)
// TODO: Customise login/signup page

const LoginButton = async () => {
  const session = await getServerAuthSession();

  return (
    <div>
      {session && (
        <Link href={"/api/auth/signout"}>
          <Button>{session.user.name?.split(" ")[0]}</Button>
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
