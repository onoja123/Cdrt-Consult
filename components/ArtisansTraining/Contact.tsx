import { inter } from "@/font"; // Import font (adjust based on your configuration)
import React from "react";

const Contact = () => {
  return (
    <div className="w-full relative pt-28 pb-20 px-[13px] md:px-[100px] lg:px-[200px] xl:px-[300px] bg-black overflow-hidden">
      <div className="flex flex-col items-center gap-5 md:gap-10">
        {/* Button-like title */}
        <p className="bg-[#FF6525] text-white py-3 px-12 rounded-full text-center text-[16px] lg:text-[20px] font-bold">
          Contact us
        </p>

        {/* Supporting text */}
        <p className={`w-full sm:w-[92%] text-[14px] lg:text-[24px] text-[#CBCBCC] text-left md:text-center ${inter.className}`}>
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
