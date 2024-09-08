"use client";
import { sora } from '@/font'
import Image from 'next/image'
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


const Partners = () => {

  type PartnerProps = {
    id: number;
    image: string;
  }

const PartnersData: PartnerProps[] = [
    {
      id: 1,
      image: "/partner1.svg",
    },
    {
      id: 2,
      image: "/partner2.svg",
    },
    {
      id: 3,
      image: "/partner3.svg",
    },
    {
      id: 4,
      image: "/partner4.svg",
    },
    {
      id: 5,
      image: "/partner5.svg",
    },
  ]

  const  options ={
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    // fixedWidth : '30rem',
    // fixedHeight: '15rem',
    width: '99%',
    perPage: 4,
    autoScroll: {
      speed: 2,
    },
    breakpoints: {
      400: {
        perPage: 1,
      },
      600: {
        perPage: 2,
      },
      850: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
    },
  }


  return (
    <div className=' overflow-hidden flex flex-col items-center gap-20 mt-24 px-10'>
      <h1 className={` text-[19px] md:text-[28px] text-center text-[#000000] font-bold ${sora.className}`}>Building Strong Alliance, here are our partners</h1>
      {/* <div className=' overflow-hidden flex items-center gap-4'> */}
        <Splide options={options} extensions={{ AutoScroll }}>
        {PartnersData.map((item, index) => (
          <SplideSlide
          key={item.id}
          style={{
            overflow: "hidden",
            // position: "relative",
            margin: "2rem",
          }}>
            <Image
            src={item.image}
            alt='Partners'
            width={0}
            height={0}
            className='w-[18em] h-[7em] my-2 px-1 shadow-lg'
            />
            </SplideSlide>
        ))}
          </Splide>
      {/* </div> */}
    </div>
  )
}

export default Partners
