import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import { SidebarProvider } from "@beamer/ui/components/sidebar";

import { env } from "@/lib/env";
import { Footer, NavBar, Sidebar } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s • Beamer",
    default: "Beamer",
  },
  description:
    "Beamer is a simple, powerful email delivery platform designed for everyday users and marketing teams. Beamer helps you deliver campaigns reliably — no technical expertise required, making bulk email sending simple, reliable, and efficient — without needing to manage complex infrastructure.",
  keywords: [
    "Beamer",
    "Halobyte Technologies",
    "Email",
    "Marketing",
    "Campaigns",
  ],
  applicationName: "Beamer",
  openGraph: {
    title: "Beamer",
    description:
      "Beamer is a simple, powerful email delivery platform designed for everyday users and marketing teams. Beamer helps you deliver campaigns reliably — no technical expertise required, making bulk email sending simple, reliable, and efficient — without needing to manage complex infrastructure.",
    siteName: "Beamer",
    type: "website",
    url: new URL(env.NEXT_PUBLIC_ORIGIN),
    images: [
      {
        alt: "Beamer",
        width: 1200,
        height: 630,
        url: new URL("/images/og.png", env.NEXT_PUBLIC_ORIGIN),
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${geistSans.variable} font-sans antialiased`}>
          <SidebarProvider defaultOpen={false} toggleOnKeypress={false}>
            <Sidebar />
            <main className="min-h-screen w-full">
              <NavBar />
              <div className="min-h-[calc(100vh-3.875rem)]">{children}</div>
              <Footer />
            </main>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
