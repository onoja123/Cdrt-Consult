"use client";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const LocalStores = () => {
  interface Item {
    image: string;
    title: string;
  }

  const Items: Item[] = [
    {
      image: "/grocery.jpeg",
      title: "Grocery",
    },
    {
      image: "/beverages.jpeg",
      title: "Beverages",
    },
    {
      image: "/green-house.png",
      title: "Green House",
    },
    {
      image: "/food.jpeg",
      title: "Food",
    },
  ];

  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    width: "99%",
    perPage: 4,
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
        perPage: 4,
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 items-center py-10 px-5 md:px-10 mt-5 bg-[#FF652533]">
      <div className="w-[100%] lg:w-[60%] flex flex-col gap-2 mb-10">
        <h1 className="text-[#221919] text-center font-semibold text-[24px]">
          Shop from local stores and market{" "}
        </h1>
        <p className="text-[#838383] text-center font-medium text-[16px]">
          Discover a diverse marketplace of exceptional vendors offering a wide
          range of unique services to cater to all your needs.
        </p>
      </div>
        <Splide options={options} extensions={{ AutoScroll }}
        >
          {Items.map((item, index) => (
            <SplideSlide
              key={index}
              style={{
                overflow: "hidden",
                margin: "2rem",
              }}
            >
              <div key={index} className="flex flex-col gap-1 items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className=" rounded-full w-[70%] border-2 border-[#2FB01A] border-solid"
                />
                <h3 className="text-[#141011] font-semibold text-[24px]">
                  {item.title}
                </h3>
              </div>
            </SplideSlide>
          ))}
        </Splide>
    </div>
  );
};

export default LocalStores;
