import { inter } from "@/font";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full relative pt-28 pb-20 px-[13px] md:px-[100px] lg:px-[200px] xl:px-[300px] bg-black overflow-hidden">
      <div className="flex flex-col items-center gap-10 ">
        <p className="bg-[#FF6525] text-[#fff] py-2 z-10 px-10 rounded-full">
          About us
        </p>
        
        <h1 className="text-[24px] md:text-[30px] text-center text-[#FFFFFF] font-bold">
        </h1>

        <p className={`text-left md:text-center w-full sm:w-[85%] text-[14px] lg:text-[24px] text-[#CBCBCC] z-10 ${inter.className}`}>
          We are a registered Human Resource Management and Development Support Services Consultancy firm in Nigeria. Our firm is committed to promoting people-centered development processes through research, training, and capacity building.
        </p>
      </div>
    </div>
  );
};

export default Header;
