import React from "react";
import star from "@/public/icons/svg2.png";
import bg_vector from "@/public/icons/svg2.png";
import Image from "next/image";
import { montserrat } from "@/font";

const RC_About = () => {
  return (
    <section
      className={`relative w-full mt-20 px-[20px] md:px-[100px] ${montserrat.className}`}
    >
      <Image
        className="absolute right-0 top-0"
        width={50}
        src={bg_vector}
        alt=""
      />

      <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row gap-12 w-full">
        <div className="w-full flex flex-col gap-5 items-center">
          <h1 className="text-[26px] md:text-[30px] font-bold text-[#143642] items-center text-center">
            About Us
          </h1>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <p className="text-[16px] text-[#1A1A1A]">
              We are a registered Human Resource Management and Development
              Support Services Consultancy firm in Nigeria. Our firm is committed
              to promoting people-centered development processes through research,
              training, and capacity building.
            </p>
            <p className="text-[16px] text-[#1A1A1A] ml-4">
              <strong>Our Vision:</strong> To promote Participatory, gender-sensitive, and
              Sustainable Development processes.
            </p>
            <p className="text-[16px] text-[#1A1A1A] ml-4">
              <strong>Our Approach:</strong> We use Participatory Learning and Action
              methods to enhance stakeholder participation and ownership.
            </p>
          </div>
      
          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#143642]">
              What We Do
            </h2>
            <p className="text-[16px] text-[#1A1A1A w-full">
              Our services are designed to support organizations and communities
              in achieving their development objectives. We offer the following
              services:
            </p>
            <ul className="list-none text-[16px] text-[#1A1A1A] space-y-4 w-full">
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Core research and surveys</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Organisational Capacity Assessment (OCA)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Evaluation research</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Community mobilization and development</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Training and capacity building</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Project planning and management</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Translation and transcription services</span>
              </li>
            </ul>
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
