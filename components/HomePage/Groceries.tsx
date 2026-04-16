"use client";
import { montserrat } from "@/font";
import Image from "next/image";
import React from "react";
import { useContent } from "@/contexts/ContentContext";

const Groceries = () => {
  const { content } = useContent();
  const { sectionTitle, sectionDescription, mainImage, items } = content.services;

  return (
    <div
      className={`px-[20px] md:px-[60px] flex flex-col items-center w-full ${montserrat.className} mb-40`}
    >
      <div className="w-[100%] lg:w-[60%] flex flex-col gap-3 mb-20">
        <h1 className="text-[#221919] text-center font-bold text-[30px]">
          {sectionTitle}
        </h1>
        <p className="text-[#838383] text-left font-medium text-[14px] md:text-[18px] p-4">
          {sectionDescription}
        </p>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center lg:items-start justify-between xl:justify-center gap-6 xl:gap-20">
        <img
          src={mainImage}
          alt="services"
          className="lg:w-[540px] md:w-[480px] w-[400px] rounded-lg object-cover"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              data-aos-duration="500"
              data-aos-delay="200"
              className="bg-[#1F7B1033] rounded-2xl flex flex-col items-center md:py-10 py-6 px-4 md:px-12 gap-6 max-w-[25rem] md:max-w-[34rem]"
            >
              <div className="flex flex-col gap-3">
                <p className="text-[15px] text-[#4F4F4F] font-medium">
                  {item.name}
                </p>
              </div>
              <img src="/icon_g.svg" alt="" className="ml-auto w-[70px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groceries;
