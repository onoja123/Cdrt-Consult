"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Image from "next/image";
import Image1 from "@/public/images/image11.png";
import Image2 from "@/public/images/image12.png";
import Image3 from "@/public/images/image13.png";
import Image4 from "@/public/images/image14.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const data = [
  {
    src: Image1,
  },
  {
    src: Image2,
  },
  {
    src: Image3,
  },
  {
    src: Image1,
  },
  {
    src: Image4,
  },
  {
    src: Image4,
  },
  {
    src: Image4,
  },
  {
    src: Image1,
  },
  {
    src: Image2,
  },
  {
    src: Image3,
  },
  {
    src: Image1,
  },
  {
    src: Image4,
  },
  {
    src: Image3,
  },
  {
    src: Image4,
  },
  {
    src: Image2,
  },
];

export default function Gallery() {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 4,
        autoScroll: {
          speed: 2,
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
        <SplideSlide key={index} style={{ margin: "1rem" }}>
          <Image
            src={item.src}
            alt={`Image ${index + 1}`}
            width={350}
            height={500}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
