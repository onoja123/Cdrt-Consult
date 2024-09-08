"use client";
import { useRouter } from "next/navigation";
import Newsletter from "./newsletter";

const GetStarted = () => {
  const router = useRouter();
  //   const bookCall = () => {
  //     window.open("https://www.calendly.com", "_blank");
  //   };

  return (
    <div className="bg-[#F9F6FF] w-full overflow-hidden pb-10">
      <div className="w-[85%] lg:w-[60%] text-center justify-center text-white mx-auto py-5">
        <div className="text-3xl py-4">
          <h1 className="pt-8 text-[26px] lg:text-[40px] text-black font-semibold">
            Find your next ride today with <br />
            Bazaar
          </h1>
        </div>
        <div className="text-[16px] py-4 text-gray-500">
          <p>
            We are committed to empowering 10 million informal workers in Africa
            bosting economy amd empowering lives and citizens in africa
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center py-7 gap-6">
          <button
            className="cursor-pointer text-white text-sm text-center font-semibold text-white-500 px-8 py-[14px]  rounded-full bg-black hover:opacity-90 motion-reduce:transform-none "
            onClick={() => router.push("/join-waitlist")}
          >
            Get started
          </button>
          <button
            className="cursor-pointer text-black text-sm text-center font-semibold text-white-500 px-8 py-3  rounded-full border-solid border-2 border-black motion-reduce:transform-none hover:bg-black hover:text-white"
            onClick={() => router.push("/")}
          >
            Contact Bazaar africa team
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default GetStarted;
