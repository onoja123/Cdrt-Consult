import React from "react";
import Image from "next/image";
import { montserrat } from "@/font";
import star from "@/public/icons/svg2.png";
import bg_vector from "@/public/icons/svg2.png";

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
            About CDRT
          </h1>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <p className="text-[16px] text-[#1A1A1A]">
              The Centre for Developmental Research and Training is a nonprofit
              organization founded in 2018 with the mandate to promote people-centered
              development processes. It is registered as a non-governmental incorporated
              trustee with the Corporate Affairs Commission, Registration No. CAC/IT/NO 111099.
              Its training and development services are tailored to the specific needs of client organizations.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mt-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#143642]">
              Vision
            </h2>
            <p className="text-[16px] text-[#1A1A1A]">
              A world in which development processes place emphasis on people's participation in identifying, planning, and execution of programs.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mt-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#143642]">
              Mission
            </h2>
            <p className="text-[16px] text-[#1A1A1A]">
              To promote participatory, gender-sensitive, and sustainable development through research and training.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mt-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#143642]">
              Development Services
            </h2>
            <ul className="list-none text-[16px] text-[#1A1A1A] space-y-4 w-full">
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Research and Data Analysis: We have a team of multidisciplinary researchers conducting studies across Nigeria. We also perform qualitative and quantitative data analysis and interpretation.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Community Mobilization/Development: Using participatory learning and action tools, we engage communities from the preparatory stages of a program to ensure sustained community interest throughout the project lifecycle.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Project Implementation and Management: We handle project activities and can partner or sub-grant with your organization to implement various projects and programs.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Monitoring and Evaluation: We conduct situation analysis, baseline surveys, midline, and end-line evaluations. We also design M&E tools that serve as performance indicators throughout the project cycle.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block text-[#ED6810] text-2xl mr-3">
                  &#x2713;
                </span>
                <span>Training & Workshop Facilitation: We facilitate and manage training sessions and workshops, handling both technical aspects and logistics.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mt-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#143642]">
              Our Approach
            </h2>
            <p className="text-[16px] text-[#1A1A1A]">
              The Centre employs skills and methods that enhance stakeholder participation through the use of Participatory Learning and Action (PLA) tools.
            </p>
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
