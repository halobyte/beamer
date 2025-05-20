import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign in | Beamer",
};

export default function SigninPage() {
  return <SignIn />;
}
