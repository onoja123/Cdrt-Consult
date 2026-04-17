"use client";
import React from "react";
import Image from "next/image";
import { montserrat } from "@/font";
import star from "@/public/icons/svg2.png";
import { useContent } from "@/contexts/ContentContext";

const RC_About = () => {
  const { content } = useContent();
  const { title, description, services, approachText } = content.about;

  return (
    <section
      className={`relative w-full mt-20 px-[20px] md:px-[100px] ${montserrat.className}`}
    >
      <Image
        className="absolute right-0 top-0"
        width={50}
        src={star}
        alt=""
      />

      <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row gap-12 w-full">
        <div className="w-full flex flex-col gap-5 items-center">
          <h1 className="text-[26px] md:text-[30px] font-bold text-[var(--cdrt-heading)] items-center text-center">
            {title}
          </h1>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <p className="text-[16px] text-[var(--cdrt-body)]">{description}</p>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mt-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[var(--cdrt-heading)]">
              Development Services
            </h2>
            <ul className="list-none text-[16px] text-[var(--cdrt-body)] space-y-4 w-full">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block text-[var(--cdrt-primary)] text-2xl mr-3">
                    &#x2713;
                  </span>
                  <span>{service.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mt-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[var(--cdrt-heading)]">
              Our Approach
            </h2>
            <p className="text-[16px] text-[var(--cdrt-body)]">{approachText}</p>
          </div>
        </div>
      </div>

      <Image
        className="absolute right-7 bottom-0"
        width={60}
        src={star}
        alt=""
      />
    </section>
  );
};

export default RC_About;
