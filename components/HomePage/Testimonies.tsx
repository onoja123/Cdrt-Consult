"use client";
import { inter, montserrat } from "@/font";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { dot } from "node:test/reporters";
// import { FaRegStar, FaStar } from "react-icons/fa";

const Testimonies = () => {
  interface TestimonyProps {
    title: string;
    description: string;
    image: string;
    name: string;
    status: string;
    rating: Array<string>;
  }

  const Testimonies: TestimonyProps[] = [
    {
      title: "Got my Order within 30 mins",
      description:
        "I was amazed at how fast my order was delivered. I will definitely be ordering again",
      image: "/Person1.svg",
      name: "Adeola Ogunyemi",
      status: "Satified Customer",
      //   rating: [<FaStar />, <FaStar />,<FaStar />,<FaStar />, <FaRegStar />],
      rating: [
        "star.svg",
        "star.svg",
        "star.svg",
        "star.svg",
        "star-nofill.svg",
      ],
    },
    {
      title: "Received quality product",
      description:
        "The quality of the products is consistently high, and the app partners with reputable local stores and restaurants to ensure freshness and quality.",
      image: "/t1.svg",
      name: "Sarah Johnson",
      status: "Satified Customer",
      rating: [
        "star.svg",
        "star.svg",
        "star.svg",
        "star.svg",
        "star-nofill.svg",
      ],
      //   rating: [<FaStar />, <FaStar />,<FaStar />,<FaStar />, <FaRegStar />],
    },
    {
      title: "Transformed My Financial Life",
      description:
        "I recently started using the Bazaar for my food and grocery shopping needs, and I have been thoroughly impressed with its features and functionality. 😄👍✌️",
      image: "/t2.svg",
      name: "Amara Nwachukwu",
      status: "Satified Customer",
      rating: [
        "star.svg",
        "star.svg",
        "star.svg",
        "star.svg",
        "star-nofill.svg",
      ],
      //   rating: [<FaStar />, <FaStar />,<FaStar />,<FaStar />, <FaRegStar />],
    },
  ];

  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    fixedWidth: "30rem",
    fixedHeight: "15rem",
    width: "98%",
    perPage: 3,
    autoScroll: {
      speed: 1.4,
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
      850: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
  };

  return (
    <div
      className={`${montserrat.className} overflow-hidden w-full bg-[#FAFAFA] py-24 flex flex-col gap-14 items-center `}
    >
      <h1 className="text-[#000000] text-[24px] lg:text-[30px] font-bold">
        Our Customer Says
      </h1>
      <Splide options={options} extensions={{ AutoScroll }}>
        {Testimonies.map((testimony, index) => (
            <SplideSlide
            style={{
                overflow: "hidden",
                position: "relative",
                margin: "2rem",
                // border: "1px red solid",
              }}
            key={index}
            className="shadow-md"
            >
              <div
                className="flex flex-col gap-4 w-[30em] h-[15em] py-8 px-5 rounded-md "
                // style={{ border: "1px red solid" }}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#0C0632] text-[18px] font-semibold ">
                    {testimony.title}
                  </h2>
                  <p className="text-[14px] text-[#838383] font-medium">
                    {testimony.description}
                  </p>
                </div>
    
                <div className="border-t-2 border-[#9A9797]/60 border-solid" />
    
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimony.image}
                      alt={testimony.name}
                      width={500}
                      height={500}
                      className="w-[60px] rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <h1
                        className={`${inter.className} text-[#6A6A6A] text-[16px]`}
                      >
                        {testimony.name}
                      </h1>
                      <p className="text-[#9A9797] text-[14px]">
                        {testimony.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {testimony.rating.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="rating"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonies;
