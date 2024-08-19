"use client";
import Navbar from "@/components/navbar/navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Closing from "@/components/closing/closing";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Durasi animasi
      easing: "ease-in-out", // Jenis easing animasi
      once: false,
      offset: 200,
    });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Closing />
      </body>
    </html>
  );
}
