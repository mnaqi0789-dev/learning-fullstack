import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./provider"; 
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Blogz",
  description: "whatever you want to write",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          {children}
        </Providers> 
      </body> 
    </html>
  );
}