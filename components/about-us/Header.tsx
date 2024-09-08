import { inter } from "@/font";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full relative pt-28 pb-20 px-[20px] md:px-[100px] lg:px-[200px] xl:px-[300px] bg-[#101010] overflow-hidden">
      <Image
        src="/hero-vector1.png"
        alt="Hero vector"
        width={500}
        height={500}
        className=" absolute top-0 left-0"
      />
      <Image
        src="/hero-vector2.png"
        alt="Hero vector"
        width={500}
        height={500}
        className=" absolute bottom-0 right-[-60px]"
      />
      <div className="flex flex-col items-center gap-10 ">
        <p className="bg-[#FF6525] text-[#fff] py-2 z-10 px-10 rounded-full">About us</p>
        <h1 className=" text-[24px] md:text-[35px] text-center text-[#FFFFFF] font-bold z-10">
          we are transforming the way you shop for groceries and meals
        </h1>

        <p className={`text-center w-[90%] sm:w-[80%] text-[14px] lg:text-[16px] text-[#CBCBCC] z-10 ${inter.className}`}>
          Welcome to Bazaar Africa, your one-stop solution for convenient and
          efficient food and grocery shopping and delivery. At Bazaar, we are
          dedicated to transforming the way you shop for groceries and meals,
          bringing a seamless and enjoyable experience right to your fingertips.
        </p>
      </div>
    </div>
  );
};

export default Header;
