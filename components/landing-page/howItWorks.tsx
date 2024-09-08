import React from "react";
import Image from "next/image";
import svg from "@/public/icons/svg1.png";

const data = [
  {
    number: 1,
    title: "Find Customers",
    description:
      "Find local jobs that fit your skills and schedule. With Bazaarpro, you have the freedom and support to earn more ",
  },
  {
    number: 2,
    title: "Get Matched ",
    description:
      "Our AI algorithm matches you with opportunities that fit your profile",
  },
  {
    number: 3,
    title: "Personalized career growth support",
    description:
      "Stay ahead of the curve with Bazaar pro extensive library of on-demand courses, webinars, and workshops to learn new skills, improve, and stand out.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-10 bg-white sm:py-16 lg:py-24">
      <Image className="absolute right-0 top-24" src={svg} width={90} alt="" />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#14183E] sm:text-4xl lg:text-5xl">
            Flexible work, at your fingertips
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-20">
          {/* <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div> */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#D7C4C4] border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700 ">
                    {/* {item.number} */}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#14183E] md:mt-10">
                  {item.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
