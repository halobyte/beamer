import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign in | Beamer",
};

export default function SignupPage() {
  return <SignUp />;
}
