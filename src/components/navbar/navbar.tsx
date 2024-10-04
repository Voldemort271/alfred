import React from "react";
import NavSkeleton from "@/components/navbar/nav-skeleton";
import LoginButton from "@/components/navbar/login-button";

const Navbar = () => {
  return (
    <NavSkeleton>
      <LoginButton />
    </NavSkeleton>
  );
};

export default Navbar;
