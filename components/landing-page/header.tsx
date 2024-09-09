"use client";
import { inter } from "@/font";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full relative pt-36 pb-20 px-[13px] md:px-[100px] lg:px-[200px] xl:px-[300px] bg-black overflow-hidden">
      <div className="flex flex-col items-center gap-10">
      <p className="bg-[#FF6525] text-[#fff] py-2 z-10 px-10 rounded-full">
          Meet Our Team
        </p>

        <h1 className="text-[24px] md:text-[30px] text-left md:text-center text-[#FFFFFF] font-bold">
          Meet the Team Behind Our Exceptional Services
        </h1>
        <p className={`text-left md:text-center w-full sm:w-[85%] text-[14px] lg:text-[24px] text-[#CBCBCC] z-10 ${inter.className}`}>
          We carry out a variety of services including Core research and surveys, 
          Organisational Capacity assessment (OCA), Evaluation research, Community 
          mobilization and development, Training and capacity building, Project 
          planning and management, Translation and transcription services.
        </p>


      </div>
    </div>
  );
};

export default Header;
