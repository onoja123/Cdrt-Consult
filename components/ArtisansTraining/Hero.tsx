import { dm_sans, inter, sora } from "@/font";
import { Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 pt-28">
      <h3
        className={`text-[#FF6525] text-center text-[16px] font-semibold ${inter.className}`}
      >
        We are empowering 30m Nigerian Youths
      </h3>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-10 lg:gap-50 pt-10 px-5 md:px-20">
        <div className="flex flex-col md:items-start items-center gap-6 md:w-[65%] xl:w-[45%]">
          <h1
            className={`text-[#14183E] text-[19px] md:text-[22px] lg:text-[35px] font-bold ${sora.className}`}
          >
            Get trained in agricultural and Vocational skills
          </h1>
          <p
            className={`text-[#5E6282] text-justify text-[16px] font-normal leading-[1.7] ${dm_sans}`}
          >
            Join growing community of artisans and farmers learning and building
            skillsets that will power the innovation of the future{" "}
          </p>
          <Link href="artisans-training/register">
            <button
              className={` w-auto  bg-[#ED6810] text-white text-[14px] font-medium py-2 px-3 mt-3 md:mt-4 lg:mt-6 rounded-lg hover:opacity-85 active:scale-95  ${dm_sans}`}
            >
              Apply for our program
            </button>
          </Link>
        </div>
        <Image
          src={"/hero_image.svg"}
          alt="Hero Image"
          width={0}
          height={0}
          priority
          className="md:w-[35%] h-[100%] w-[80%] animated-element"
        />
      </div>
    </div>
  );
};

export default Hero;
