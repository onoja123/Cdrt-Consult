import { dm_sans, sora } from "@/font";
import Image from "next/image";
import React from "react";

interface Info {
  image: string;
  title: string;
  description: string;
}

const info: Info[] = [
  {
    image: "/Ellipse.svg",
    title: "Flexible Learning",
    description:
      "Learn modern farming techniques and sustainable practices in agriculture, or choose from vocational trades like carpentry, tailoring, welding, and more!",
  },
  {
    image: "/Ellipse.svg",
    title: "Market-Driven Focus",
    description:
      "We work with local partners, including vocational schools, cooperatives, and police, to onboard and vet workers at scale.",
  },
  {
    image: "/Ellipse.svg",
    title: "Financial Aid Available",
    description:
      "We work with partner organizations to offer financial aid programs that make training more affordable. These programs may offer flexible payment plans, grants, or loan options designed to ease the financial burden.",
  },
];

const LearnSkill = () => {
  return (
    <div className="flex flex-col items-center pt-16 relative">
        <Image
        src="/plus4.svg"
        alt="plus4"
        width={0}
        height={0}
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] -z-10 absolute right-[8%]"
        />
      <h1
        className={`text-[#14183E] text-[20px] sm:text-[30px] mx-3 font-bold text-center ${sora.className}`}
      >
        Bridging the Skills Gap, Building Your Future
      </h1>
      <div className="flex flex-wrap justify-center w-[100%] gap-5 px-8 sm:px-4 mt-10 sm:mt-16">
        {info.map((item, index) => (
            <div key={index} className="flex flex-col w-full sm:w-[35rem] md:w-[40rem] lg:w-[25rem] sm:h-[17rem] gap-4 items-center text-justify bg-white shadow-[1px_1px_6px_rgb(0,0,0,0.1)] p-5" >
                <Image
                src={item.image}
                alt="Ellipse"
                width={0}
                height={0}
                className="w-[70px] h-[70px]"
                />
                <h3 className={` text-[#1E1D4C] text-[18px] font-medium ${sora.className}`}>{item.title}</h3>
                <p className={`text-[#5E6282] text-[15px] font-normal ${dm_sans.className}`}>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LearnSkill;
