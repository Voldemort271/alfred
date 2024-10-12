import React from "react";
import NavSkeleton from "@/components/navbar/nav-skeleton";
import LoginButton from "@/components/navbar/login-button";
import { getServerAuthSession } from "@/server/auth";

const Navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <NavSkeleton>
      <LoginButton session={session} />
    </NavSkeleton>
  );
};

export default Navbar;
