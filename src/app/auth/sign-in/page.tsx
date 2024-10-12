import React, { Suspense } from "react";
import SignInPage from "./sign-in-page";

const SignIn = () => {
  return (
    <Suspense>
      <SignInPage />
    </Suspense>
  );
};

export default SignIn;
