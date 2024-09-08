"use client";
import { inter, poppins, sora } from "@/font";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

type Skill = string;

const skillImages: Skill[] = [
  "/Picture1.png",
  "/Picture2.png",
  "/Picture3.png",
  "/Picture4.png",
];

const options = {
  type: "loop",
  drag: "free",
  focus: "center",
  arrows: false,
  width: "98%",
  perPage: 4,
  autoScroll: {
    speed: 2,
  },
  breakpoints: {
    400: {
      perPage: 2,
    },
    600: {
      perPage: 3,
    },
    850: {
      perPage: 4,
    },
    1024: {
      perPage: 4,
    },
  },
};

const SkillSet = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-16 md:pt-20 gap-16">
      {/* <div className="flex flex-col gap-3 items-start w-full md:w-[90%] lg:w-[70%] px-5 md:pl-20">
        <h5
          className={`bg-[#F5FBF6] rounded-md font-semibold text-[13px] text-[#FF6525] py-1 mx-auto sm:mx-0 sm:ml-24 px-4 ${inter.className}`}
        >
          Why Cdrt?
        </h5>
        <h1
          className={` text-[#14183E] font-bold text-[19px] mx-auto text-center sm:text-left sm:mx-0 sm:text-[28px] ${sora.className}`}
        >
          Reimagining the African Dream
        </h1>
        <p
          className={`text-[#5E6282] leading-[1.7] font-normal text-[15px] sm:text-[16px] ${poppins.className}`}
        >
          The skills gap in agriculture and vocational trades is a real barrier
          to both individual success and economic growth. That&apos;s why we&apos;re here:
          to bridge that gap and empower you to achieve a fulfilling career in a
          field you&apos;re passionate about. Here&apos;s how we make a difference:
        </p>
      </div> */}

      <Splide options={options} extensions={{ AutoScroll }}>
        {skillImages.map((item, index) => (
           <SplideSlide
           key={index}
           style={{
             overflow: "hidden",
             margin: "2rem",
           }}
         >
          <Image
            key={index}
            src={item}
            alt="Skill"
            width={500}
            height={500}
            className="lg:w-full h-[500px] rounded-[10px]"
          />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SkillSet;
