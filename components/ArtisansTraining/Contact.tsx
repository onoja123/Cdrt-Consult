import { dm_sans, inter, sora } from "@/font";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full relative pt-28 pb-20 px-[20px] md:px-[100px] lg:px-[200px] xl:px-[300px] bg-black overflow-hidden">
      <div className="flex flex-col items-center gap-10 ">
        <p className="bg-[#FF6525] text-[#fff] py-2 px-10 rounded-full text-center">
          Contact us
        </p>
        <p className={`w-[90%] sm:w-[85%] text-[14px] lg:text-[24px] text-[#CBCBCC] text-center ${inter.className}`}>
          We're here to help! If you have any questions or need further information 
          about our Human Resource Management and Development Support Services, 
          feel free to reach out. Our team in Nigeria is dedicated to supporting 
          you through every step of your journey.
        </p>
      </div>
    </div>
  );
};

export default Contact;
