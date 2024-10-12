import { z } from "zod";
import { signIn } from "next-auth/react";

export const safeSignInEmail = ({
  email,
  callback,
}: {
  email: string;
  callback: string | undefined;
}) => {
  const emailSchema = z.string().email("Please enter a valid email.");
  const parsedEmail = emailSchema.safeParse(email);
  if (parsedEmail.success) {
    void signIn("email", { email: parsedEmail.data, callbackUrl: callback });
  } else {
    console.log(parsedEmail.error);
  }
};
