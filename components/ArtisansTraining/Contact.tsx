"use client";
import { inter } from "@/font";
import React from "react";
import { useContent } from "@/contexts/ContentContext";

const Contact = () => {
  const { content } = useContent();
  const { title, description } = content.contactPage;

  return (
    <div className="w-full relative pt-28 pb-20 px-[13px] md:px-[100px] lg:px-[200px] xl:px-[300px] bg-black overflow-hidden">
      <div className="flex flex-col items-center gap-5 md:gap-10">
        <p className="bg-[#FF6525] text-white py-3 px-12 rounded-full text-center text-[16px] lg:text-[20px] font-bold">
          {title}
        </p>
        <p
          className={`w-full sm:w-[92%] text-[14px] lg:text-[24px] text-[#CBCBCC] text-left md:text-center ${inter.className}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Contact;
