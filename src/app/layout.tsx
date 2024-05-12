import * as React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "./Provider";
import { volkhov } from "@/constants/fonts";

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
      <body className={`${volkhov.className }`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
