import React from "react";
import about_img from "@/public/images/bg-about2.png";
import Image from "next/image";
import { montserrat } from "@/font";

const RC_About2 = () => {
  return (
    <section
      className={`relative w-full mt-20 px-[20px] md:px-[100px] ${montserrat.className}`}
    >
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-12 w-full">
        <div className="w-full flex flex-col gap-5 lg:items-start items-center">
          <h1 className="text-[26px] md:text-[30px] font-bold text-[#143642]">
            Exceptional Customer Support
          </h1>
            <p className="text-[16px] text-[#1A1A1A]">
              Our dedicated customer support team is always here to help.
              Whether you have a question about your order or need assistance
              with the app, we are committed to providing prompt and friendly
              support.
            </p>
        </div>

        <Image
          className="w-[400px] rounded-md"
          src={about_img}
          width={500}
          height={500}
          alt="about image"
        />
      </div>
    </section>
  );
};

export default RC_About2;
