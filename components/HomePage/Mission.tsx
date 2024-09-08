import { montserrat } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mission = () => {
  return (
    <div
      className={`${montserrat.className} flex md:flex-row flex-col w-full relative items-center gap-20 px-[20px] md:px-[100px] lg:px-[200px] xl:px-[250px] py-16`}
    >
      <img
        src="/side-frame2.png"
        alt=""
        className=" absolute top-0 left-0 w-[100px] lg:w-[200px]"
      />

      <Image
        src="/bazaar-phone.png"
        alt="bazaar"
        width={500}
        height={500}
        className=" w-[200px]"
        data-aos="zoom-in" data-aos-duration="600"
      />
      <div className="flex flex-col gap-3 items-center ">
        <h1 className="text-[#221919] text-center text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[1.3] font-bold">
          We value your trust and security
        </h1>
        <p className="text-[15px] text-center text-[#4F4F4F] font-medium">
          Our mission is to make finance more accessible, transparent, and
          secure for everyone. With cutting.
        </p>

        <Link href="#">
          <button className=" mt-8 relative bg-[black] w-fit px-8 py-[10px] rounded-3xl">
            <span className="text-[#FF6525] font-semibold text-[15px]">
              Get Started
            </span>
            <img
              src="/right-icon.png"
              alt="right icon"
              className=" w-[38px] absolute top-0 right-[-20px]"
            />
          </button>
        </Link>
      </div>
      <img
        src="/side-frame1.png"
        alt="side frame"
        className=" absolute bottom-0 right-0 w-[100px] lg:w-[200px]"
      />
    </div>
  );
};

export default Mission;
