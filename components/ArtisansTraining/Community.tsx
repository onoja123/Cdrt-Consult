import { dm_sans, inter, sora } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div className="w-full flex items-center">
      <div className=" w-full h-[18em] mx-5 md:mx-24 px-4 rounded-tl-[50px] sm:rounded-tl-[90px] rounded-tr-2xl rounded-b-2xl flex flex-col gap-4 items-center justify-center pt-10 pb-4 mt-24 relative bg-[#F2B574]">
        <h1
          className={`text-[#000000] font-bold text-center md:text-[20px] lg:text-[26px] text-[18px] ${sora.className}`}
        >
          Join our fast growing community of over 1000+ Artisans{" "}
        </h1>
        <p
          className={`text-[#5E6282] twz text-center font-medium sm:text-[16px] text-[14px]  ${inter.className}`}
        >
          We are committed to empowering 10 million informal workers in Africa
          boosting economy{" "}
        </p>
        <Link href="artisans-training/register">
          <button
            className={` w-auto  bg-[#ED6810] text-white text-[14px] font-medium py-3 px-14 mt-10 rounded-lg hover:opacity-85 active:scale-95  ${dm_sans}`}
          >
            Get Started
          </button>
        </Link>
        <Link href="artisans-training/register">
          <Image
            src={"/sendIcon.svg"}
            alt="sendicon"
            width={50}
            height={50}
            className=" absolute top-[-6%] right-[-1%]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Community;
