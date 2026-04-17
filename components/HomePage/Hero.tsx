"use client";
import { montserrat } from "@/font";
import React from "react";
import { useContent } from "@/contexts/ContentContext";

const Hero = () => {
  const { content } = useContent();
  const { title, description1, description2 } = content.hero;

  return (
    <div className="overflow w-full h-fit md:h-[14em] gap-5 overflow flex md:flex-row flex-col-reverse items-center justify-between px-5 md:px-20 lg:pl-16 xl:pl-24 mb-12">
      <div className="max-w-7xl mx-auto items-center md:items-start md:[70%] lg:w-[100%] flex flex-col gap-5">
        <div
          className={`${montserrat.className} w-[100%] hidden md:block font-bold text-[28px] md:text-[50px] leading-[1.3]`}
        >
          <h1 className="text-[var(--cdrt-heading)] text-center">{title}</h1>
        </div>
        <p className="text-[14px] md:text-[18px] w-[100%] md:w-[60%] lg:w-[100%] text-[var(--cdrt-body)]">
          {description1}
        </p>
        <p className="text-[14px] md:text-[18px] w-[100%] md:w-[60%] lg:w-[100%] text-[var(--cdrt-body)]">
          <strong>CDRT CONSULT</strong>{" "}
          {description2.replace(/^CDRT CONSULT\s*/i, "")}
        </p>
      </div>

      <div className="relative w-fit mt-2 flex flex-col items-center">
        <div
          className={`${montserrat.className} md:hidden block text-center mb-2 font-semibold text-[28px] leading-[1.3]`}
        >
          <h1 className="text-[var(--cdrt-heading)] text-center">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
