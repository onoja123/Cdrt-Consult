"use client";
import { sora } from "@/font";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";



const Partners = () => {
  type PartnerProps = {
    id: number;
    image: string;
  };

  const PartnersData: PartnerProps[] = [
    {
      id: 1,
      image: "/vendor1.svg",
    },
    {
      id: 2,
      image: "/vendor2.svg",
    },
    {
      id: 3,
      image: "/vendor3.svg",
    },
    {
      id: 4,
      image: "/vendor4.svg",
    },
    {
      id: 5,
      image: "/vendor5.svg",
    },
  ];

  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    // fixedWidth : '30rem',
    // fixedHeight: '15rem',
    width: "98%",
    perPage: 5,
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
        perPage: 5,
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-5 bg-[#FAFAFF]">
      <div className="w-full overflow-hidden flex flex-col items-center gap-6 px-10  py-20">
        <h1
          className={`w-full lg:w-[60%] text-[22px] text-wrap md:text-[40px] text-center text-[#000000] font-bold ${sora.className}`}
        >
          Building Strong Alliance, here are our partners
        </h1>

        <Splide options={options} extensions={{ AutoScroll }}>
          {PartnersData.map((item, index) => (
            <SplideSlide
              key={item.id}
              style={{
                overflow: "hidden",
                margin: "2rem",
              }}
            >
              <Image
                src={item.image}
                alt="Partners"
                width={500}
                height={500}
                className="w-[15em] h-[6em] px-1 object-contain shadow-sm"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

    </div>
  );
};

export default Partners;
