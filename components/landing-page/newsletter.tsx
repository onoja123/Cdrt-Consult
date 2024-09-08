import React from "react";
import Send from "@/public/icons/send.png";
import Svg from "@/public/icons/svg4.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const newsletter = () => {
  return (
    <div className=" text-center w-full ">
      <div className="w-full lg:w-[80%] mx-auto bg-[#FF6525]/20 px-5 sm:px-20  py-28 lg:rounded-tr-[2rem] lg:rounded-tl-[10.9rem] h-fit relative">
        <Image
          src={Send}
          className="absolute right-0 top-0 hidden lg:block"
          alt=""
        />
        <Image src={Svg} className="absolute right-0" alt="" />
        <h1 className="text-[20px] md:text-[30px] text-[#5E6282] font-semibold ">
          Subscribe to get information, latest news and other interesting
          offers about Cdrt Consult
        </h1>
        <form className="flex flex-col md:flex-row items-center md:items-start  w-full  mx-auto  lg:py-10 justify-center pt-5  gap-4">
          <div className="relative w-full lg:w-[50%] ">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full  py-3 mb-2 md:mb-0 md:mr-2 border rounded-md outline-none focus:outline-none border-none pl-14 z-10 "
            />
            <MdEmail className="absolute left-4 top-[16px] text-[20px] text-gray-500" />{" "}
          </div>
          <button
            type="submit"
            className="p-2 py-3 px-12 lg:px-4  bg-[#272727] text-white font-bold rounded-md hover:text-gray-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default newsletter;
