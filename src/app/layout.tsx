import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Providers from "./Provider";

export const metadata: Metadata = {
  title: "Royce Ng",
  description: "The amazing adventure of Royce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
