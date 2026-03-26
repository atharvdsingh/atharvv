import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
    import "../globals.css";
import NavBar from "@/components/NavBar";

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
    
    <div className="max-w-5xl text-primary m-auto">

        {children}
    </div>
  );
}
