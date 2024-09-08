"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Arrow from "@/public/icons/Navigation.png";
import Artisan from "@/public/images/artisan.png";
import Image1 from "@/public/images/image11.png";
import Image2 from "@/public/images/image12.png";
import Image3 from "@/public/images/image13.png";
import Image4 from "@/public/images/image14.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const data = [
  {
    src: Artisan,
    name: "Blossom Chidi",
    proffession: "Mechanical Engineer",
    location: "Ikeja, Lagos",
  },
  {
    src: Image1,
    name: "Jake Obi",
    proffession: "Electrician",
    location: "Ojodu, Lagos",
  },
  {
    src: Image2,
    name: "Oluwaseun Bolaji",
    proffession: "Stylist",
    location: "Lekki, Lagos",
  },
  {
    src: Image3,
    name: "Johnson Chidi",
    proffession: "Carpenter",
    location: "Ikeja, Lagos",
  },
  {
    src: Image4,
    name: "Blossom Chidi",
    proffession: "Mechanical Engineer",
    location: "Ikeja, Lagos",
  },
  {
    src: Artisan,
    name: "Blossom Chidi",
    proffession: "Mechanical Engineer",
    location: "Ikeja, Lagos",
  },
  {
    src: Image1,
    name: "Jake Obi",
    proffession: "Electrician",
    location: "Ojodu, Lagos",
  },
  {
    src: Image2,
    name: "Oluwaseun Bolaji",
    proffession: "Stylist",
    location: "Lekki, Lagos",
  },
  {
    src: Image3,
    name: "Johnson Chidi",
    proffession: "Carpenter",
    location: "Ikeja, Lagos",
  },
  {
    src: Image4,
    name: "Blossom Chidi",
    proffession: "Mechanical Engineer",
    location: "Ikeja, Lagos",
  },
  {
    src: Artisan,
    name: "Micheal Francis",
    proffession: "Plumber",
    location: "Ikeja, Lagos",
  },
  // Additional items...
];

export default function Slider() {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        arrows: false,
        perPage: 4,
        width: "98%",
        autoScroll: {
          speed: 1.5,
        },
        breakpoints: {
          640: {
            perPage: 2,
          },
          1024: {
            perPage: 4,
          },
        },
      }}
      extensions={{ AutoScroll }}
    >
      {data.map((item, index) => (
        <SplideSlide
          key={index}
          style={{
            overflow: "hidden",
            position: "relative",
            margin: "2rem",
            marginBottom: "3rem",
          }}
        >
          <Image
            src={item.src}
            alt={`Image ${index + 1}`}
            width={350}
            height={500}
            className="w-full object-cover rounded-xl"
          />
          <div className="justify-start item-start text-start w-full p-3 absolute bottom-0 rounded-b-xl card-text">
            <p className="whitespace-nowrap text-[17px] sm:text-[20px] md:text-[24px] font-semibold text-white">
              {item.name}
            </p>
            <p className="flex justify-start item-start text-start whitespace-nowrap text-[15px] sm:text-[20px] md:text-[24px] p-1 text-white tracking-widest">
              {item.proffession}
            </p>
            <div className="flex justify-start items-center text-center">
              <p>
                <Image src={Arrow} alt="arrow" />
              </p>
              <p className="flex justify-start item-start text-start whitespace-nowrap text-[13px] p-1 font-normal text-white">
                {item.location}
              </p>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
