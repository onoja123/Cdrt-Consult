import { dm_sans, sora } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SkillUp = () => {
  return (
    <div className="bg-white w-full flex flex-col-reverse md:flex-row justify-center gap-6 md:gap-10 lg:gap-50 mt-32 px-5 sm:px-8 lg:px-16">
      <div className="flex flex-col md:items-start items-center gap-6 md:w-[70%] xl:w-[45%]">
        <h1
          className={`text-[#14183E] text-center text-[18px] md:text-[22px] lg:text-[26px] font-bold mb-4 ${sora.className}`}
        >
          Skill Up with Online & Offline Training
        </h1>
        <div className=" relative md:hidden flex items-center justify-center">
        <Image
          src={"/skillup_girl.svg"}
          alt="skillup"
          width={0}
          height={0}
          priority
          className=" sm:w-[23em] lg:w-[25em] h-[100%] w-[80%] "
        />
         <Image
          src={"/plus5.svg"}
          alt="plus5"
          width={0}
          height={0}
          priority
          className="h-[120px] w-[120px] absolute right-0 bottom-24 animated-element"
        />
        </div>
        <div className="flex flex-col gap-4">
          <p
            className={`text-[#5E6282] text-justify text-[15px] sm:text-[16px] font-normal leading-[1.7] ${dm_sans}`}
          >
            At our vocational and agricultural training programs, we go beyond
            just providing courses. We foster a supportive learning environment
            that empowers you to succeed.
          </p>
          <p
            className={`text-[#5E6282] text-justify text-[15px] sm:text-[16px] font-normal leading-[2] tracking-wide ${dm_sans}`}
          >
            We believe not only in offering the customers with the best
            professional artisans and handymen in the neighborhood, but also to
            empower the well-trained Artisans and handymen by providing them
            with an increased revenue and a larger pool of clients
          </p>
        </div>
        <Link href="artisans-training/register">
          <button
            className={` w-auto  bg-[#ED6810] text-white text-[14px] font-medium py-3 px-14 mt-3 md:mt-4 lg:mt-6 rounded-lg hover:opacity-85 active:scale-95 ${dm_sans}`}
          >
            Apply
          </button>
        </Link>
      </div>
      <div className=" relative">
        <Image
          src={"/skillup_girl.svg"}
          alt="skillup"
          width={0}
          height={0}
          priority
          className=" sm:w-[23em] lg:w-[25em] h-[100%] w-[80%] md:block hidden"
          data-aos="zoom-in" data-aos-duration="600"
        />

        <Image
          src={"/plus5.svg"}
          alt="plus5"
          width={0}
          height={0}
          priority
          className="h-[150px] w-[150px] md:block hidden absolute right-[-10%] bottom-24 animated-element"
        />
      </div>
    </div>
  );
};

export default SkillUp;
