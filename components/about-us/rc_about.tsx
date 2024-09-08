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
        <Image
          className="w-[400px] rounded-md"
          src="/grocery.png"
          width={500}
          height={500}
          alt="about image"
        />

        <div className="w-full flex flex-col gap-5 lg:items-start items-center">
          <h1 className="text-[26px] md:text-[30px] font-bold text-[#143642]">
          We are bringing best quality farm-fresh food items closer to the people
          </h1>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[16px] text-[#1A1A1A]">
              Our mission is to simplify everyday shopping by providing a
              user-friendly platform that connects you with the best local
              stores and restaurants. We aim to save you time and effort,
              ensuring that you can get everything you need, from fresh produce
              to delicious meals, delivered quickly and reliably.
            </p>
            <p className="text-[16px] text-[#1A1A1A]">
              We work with local partners, including manufacturers, Greenhouses,
              retailers, and artisans
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[16px] text-[#1A1A1A]">
              Bazaar is more than just an app; it's a community-driven
              initiative. It empowers local grocery stores by giving them a
              platform to reach more customers. It also provides artisans with a
              steady stream of job opportunities, allowing them to showcase
              their skills and earn a living doing what they love.
            </p>
            <p className="text-[16px] text-[#1A1A1A]">
              Download Bazaar today and embark on a journey of convenience,
              quality, and community. Whether you need fresh groceries or a
              skilled artisan, we've got you covered.
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
