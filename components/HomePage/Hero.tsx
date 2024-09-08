import { montserrat } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" overflow overflow w-full h-fit md:h-[14em] gap-5 overflow flex md:flex-row flex-col-reverse items-center  justify-between px-5 md:px-20 lg:pl-16 xl:pl-24 mb-12">
      <div  className="max-w-7xl mx-auto items-center md:items-start md:[70%] lg:w-[100%] flex flex-col gap-5">
        <div
          className={`${montserrat.className} w-[100%] hidden md:block font-bold text-[28px] md:text-[50px] leading-[1.3]`}
        >
          <h1 className="text-[#000000] text-center">Welcome to CDRT Consult</h1>
        </div>
        <p
          className="text-[#838383] text-center font-medium text-[18px]">
          Where we empower sustainable development through people-centered solutions.
          We are a Human Resource Management and Development Support Services Consultancy firm registered in Nigeria.
          Our mission is to promote participatory and gender-sensitive development processes that ensure long-term impact and community ownership.
        </p>
      </div>
      <div className=" relative w-fit mt-2 flex flex-col items-center">
        <div
          className={`${montserrat.className} md:hidden block text-center mb-2 font-semibold text-[28px] leading-[1.3]`}
        >
          <h1 className="text-[#000000]">Welcome to CDRT Consult</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
