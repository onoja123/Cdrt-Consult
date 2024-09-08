"use client";
import { sora } from "@/font";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Vendors = () => {
  type VendorProps = {
    id: number;
    image: string;
  };

  const VendorsData: VendorProps[] = [
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
    width: "99%",
    perPage: 5,
    autoScroll: {
      speed: 1.4,
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
    <div className=" overflow-hidden flex flex-col items-center gap-1 mt-24 px-10">
      <div className="w-[100%] lg:w-[60%] flex flex-col gap-2 mb-10">
        <h1 className="text-[#221919] text-center font-semibold text-[24px]">
          We've got retail distribution covered
        </h1>
        <p className="text-[#838383] text-center font-medium text-[16px]">
          We aggregate end-to-end retail operators, green houses, farms to you
          at live easy life achieve their business goals and through a seamless
          supply chain framework.
        </p>
      </div>
      {/* <div className=' overflow-hidden flex items-center gap-4'> */}
      <Splide options={options} extensions={{ AutoScroll }}>
        {VendorsData.map((item, index) => (
          <SplideSlide
            key={item.id}
            style={{
              overflow: "hidden",
              // position: "relative",
              margin: "2rem",
            }}
          >
            <Image
              src={item.image}
              alt="Vendors"
              width={0}
              height={0}
              // className="w-[18em] h-[7em] my-2 px-1 shadow-lg"
              className="w-[15em] h-[6em] px-1 object-contain shadow-sm"
            />
          </SplideSlide>
        ))}
      </Splide>
      {/* </div> */}
    </div>
  );
};

export default Vendors;
