import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Wrapper from "@/components/Wrapper";
import { Toaster } from "react-hot-toast";
import AOSInitializer from "@/components/AOSInitializer";

// Dynamically import Navbar with no SSR
const Navbar = dynamic(() => import("@/components/Navbar"), {
  suspense: true,
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  suspense: true,
  ssr: false,
});

export const metadata: Metadata = {
  title: "Bazaar",
  description: "Artisan's app",
};

// set toast position
interface ToasterProps {
  position: "top-right" | "bottom-right" | "top-left" | "bottom-left"; 
  reverseOrder?: boolean; 
  duration?: number; 
}

const toastProps: ToasterProps = {
  position: "top-right",
  reverseOrder: true,
  duration: 4000,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <AOSInitializer/>
        <Wrapper>{children}</Wrapper>
        <Toaster {...toastProps}/>
      </body>
    </html>
  );
}
