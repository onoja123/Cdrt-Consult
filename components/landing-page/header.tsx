"use client";
import React from "react";
import LabelButtons from "../button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const header = () => {
  const router = useRouter();

  const JoinwaitList = () => {
    router.push("/join-waitlist");
  };
  return (
    <div className="w-full relative pt-36 pb-20 pxx-[30px] md:px-[100px] lg:px-[200px] xl:px-[300px] bg-[#101010] overflow-hidden">
      <Image src="/hero-vector1.png" alt="Hero vector" width={500} height={500} className=" absolute top-0 left-0" />
      <Image src="/hero-vector2.png" alt="Hero vector" width={500} height={500} className=" absolute bottom-0 right-[-60px]" />
      <div className="flex flex-col items-center gap-10 ">
          <p className=" bg-[#fff] text-[12px] md:text-[15px] px-3 z-10 py-1  w-fit mx-auto rounded-xl font-semibold text-[#FF6525]">
            We are empowering 30m Nigerian Youths
          </p>

          <h1 className=" text-[24px] md:text-[30px] text-center text-[#FFFFFF] font-bold z-10">
            Hire Wordclass Vetted Artisan from Bazaar
          </h1>

          <p className="text-center w-[90%] sm:w-[80%] md:w-[60%] text-[14px] lg:text-[16px] text-[#CBCBCC] z-10">
            Find home service providers and/or become a provider to provide
            services to clients in need of your services.
          </p>
 

        <LabelButtons
          btn_text={"Join Waitlist"}
          variant={"outlined"}
          textTransform={"capitalize"}
          fontSize_l={"17px"}
          fontSize_m={"12px"}
          fontWeight={500}
          color={"#FFFFFF"}
          backgroundColor={"#272727"}
          border={"1px solid #272727"}
          padding={"0.8rem"}
          hoverColor={"white"}
          hoverText={"black"}
          onClick={JoinwaitList}
        />
      </div>
    </div>
  );
};

export default header;
