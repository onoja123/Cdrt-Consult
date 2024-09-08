import { montserrat } from "@/font";
import Image from "next/image";
import React from "react";

const Courses = () => {
  interface CourseProp {
    title: string;
    description: string;
    price: string;
    image: string;
  }

  const Courses: CourseProp[] = [
    {
      title: "Agronomical Pratical",
      description: "Introduction to mordern Agriculture ",
      price: "25,000.00",
      image: "/farmers.png",
    },
    {
      title: "Agronomical Pratical",
      description: "Introduction to mordern Agriculture ",
      price: "25,000.00",
      image: "/tractor.png",
    },
  ];

  return (
    <div className={`w-full flex flex-col gap-8 pt-20  px-[20px] sm:px-[50px] lg:px-[100px] xl:px-[200px] ${montserrat.className}`}>
      <h1 className=" lg:text-left text-center text-[#14183E] font-bold text-[20px] md:text-[26px]">Available courses </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {Courses.map((course, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={500}
              className="w-[400px]"
            />
            <h2 className="text-[#252B42] font-bold text-[16px]">
              {course.title}
            </h2>
            <p className="text-[#737373] font-medium text-[15px]">
              {course.description}
            </p>
            <p className="text-[#23856D] font-semibold text-[15px]">
            &#8358;{course.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
