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
  title: "Cdrt Consult",
  description: "The Centre for Developmental Research and Training (CDRT) is a nonprofit organization established in 2018, dedicated to fostering people-centered development through research and training. Registered with the Corporate Affairs Commission under Registration No. CAC/IT/NO 111099, CDRT is committed to sustainable, participatory, and gender-sensitive development practices.",
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
