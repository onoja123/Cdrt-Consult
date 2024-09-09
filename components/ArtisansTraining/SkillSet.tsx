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
  width: "100%",
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
      <Splide options={options} extensions={{ AutoScroll }}>
        {skillImages.map((item, index) => (
          <SplideSlide
            key={index}
            style={{
              overflow: "hidden",
              margin: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="relative w-[300px] h-[300px]">
              <Image
                src={item}
                alt="Skill"
                layout="responsive" 
                width={300}
                height={300}
                className="object-cover rounded-[10px]"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SkillSet;
