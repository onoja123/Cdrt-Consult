"use client";
import React from "react";
import { mulish, poppins, sora } from "@/font";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


const Testimony = () => {

  type InfoProps = {
    id: number;
    image: string;
    name: string;
    work: string;
    rating: Array<string>;
    testimony: string;
  }[];

  const Info: InfoProps = [
    {
      id: 1,
      image: "Person1.svg",
      name: "Miracle John",
      work: "Agroconomy graduate",
      rating: ["star.svg", "star.svg", "star.svg", "star.svg", "star.svg"],
      testimony:
        "I was a microbiology graduate with no prior knowledge of anything farming when I started, I now and have been working as a agroconomy engineer grow 10,000 fruits thanks to the training I got in the academy.",
    },
    {
      id: 2,
      image: "Person2.svg",
      name: "David B.",
      work: "Plumber  @Creative",
      rating: ["star.svg", "star.svg", "star.svg", "star.svg", "star.svg"],
      testimony:
        "“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”",
    },
    {
      id: 3,
      image: "Person2.svg",
      name: "David B.",
      work: "Lead Designer @Creative",
      rating: ["star.svg", "star.svg", "star.svg", "star.svg", "star.svg"],
      testimony:
        "“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”",
    },
  ];


  const  options ={
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    fixedWidth : '30rem',
    fixedHeight: '15rem',
    width: '99%',
    perPage: 3,
    autoScroll: {
      speed: 2,
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
  }


  return (
    <div
      className=" overflow-hidden flex flex-col items-center gap-16 mb-7 mt-24 px-10"
    >
      <h1
        className={` w-[95%] md:w-[80%] lg:w-[50%] text-[19px] md:text-[28px] text-center text-[#000000] font-bold ${sora.className}`}
      >
        Here is what some of our beneficiaries are saying 
      </h1>
      
  
  <Splide options={options} extensions={{ AutoScroll }} >
        {Info.map((item, index) => (
          <SplideSlide  
          style={{
            overflow: "hidden",
            position: "relative",
            margin: "2rem",
          }}
          key={item.id} 
          className="flex items-center overflow-hidden  rounded-xl gap-10 w-[30em] h-[14em] px-5 pt-2 shadow-lg">
            <div className="flex flex-col items-center gap-2">
              <Image src={item.image} alt="Person1" width={0} height={0} className="w-[7em] h-[7em]" />
              <h1 className={`text-nowrap text-[#111827] font-bold text-[18px] ${poppins.className}`}>{item.name}</h1>
              <p className={`text-nowrap text-[15px] text-[#374151] font-normal ${mulish.className}`}>{item.work}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                {item.rating.map((item, index) => (
                  <Image key={index} src={item} alt="Person1" width={20} height={20} />
                ))}
              </div>
              <p className="text-[14px] text-[#2D2D2D] font-normal leading-[1.6]">{item.testimony}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimony;
