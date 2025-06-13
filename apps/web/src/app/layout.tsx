import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import { SidebarProvider } from "@beamer/ui/components/sidebar";

import { Footer, NavBar, Sidebar } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beamer",
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
