"use client";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Footer from "./Footer";


interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/artisans-training/register" ? (
        <>{ children }</>
      ) : (
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Wrapper;
