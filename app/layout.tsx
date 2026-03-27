import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {ViewTransitions} from "next-view-transitions"
const inter=Inter({

  weight:["400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "Atharv",
  description: "portfolio website of atharv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className}  antialiased`}
    >
      <body suppressHydrationWarning >
        <ViewTransitions>

        <NavBar  />
        {children}
        </ViewTransitions>
        </body>
    </html>
  );
}
