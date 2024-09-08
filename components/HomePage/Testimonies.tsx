"use client";
import { inter, montserrat } from "@/font";
import React from "react";

const Testimonies: React.FC = () => {
  interface ContactProps {
    title: string;
    description: string;
  }

  const advisors: ContactProps[] = [
    {
      title: "Prof. Emmanuel Gyong",
      description:
        "Department of Sociology, Ahmadu Bello University, Zaria\nPhone: +234 8034533701",
    },
    {
      title: "Dr. Sunday Emmanuel Ologunla",
      description:
        "Department of Economics, Bingham University, Auta Balefi, Nasarawa State\nPhone: +234 8037870578\nEmail: ologunlaemma@yahoo.com",
    },
  ];

  const partners: ContactProps[] = [
    {
      title: "Theatre for Development Centre",
      description:
        "Ahmadu Bello University Zaria\nContact Person: Prof. Oga Steve Abah, Executive Director\nPhone: +234 8037037441\nEmail: aba.ogah@gmail.com",
    },
    {
      title: "MambaPoint DevServices",
      description:
        "FCT Abuja\nContact Person: Dr. Dauda Garuba, Executive Director\nPhone: +234 8034261150\nEmail: daudagaruz@yahoo.com",
    },
  ];

  return (
    <div className={`${montserrat.className} w-full bg-[#FAFAFA] py-24 flex flex-col gap-16 items-center`}>
      <div className="w-full max-w-7xl px-4">
        {/* Research Advisors Section */}
        <h1 className="text-[#000000] text-[24px] lg:text-[30px] font-bold text-center mb-10">
          Research Advisors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md shadow-md p-6 flex flex-col"
            >
              <h2 className="text-[#0C0632] text-[18px] font-semibold mb-2">
                {advisor.title}
              </h2>
              <p className="text-[14px] text-[#838383] font-medium whitespace-pre-line">
                {advisor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl px-4">
        {/* Partners Section */}
        <h1 className="text-[#000000] text-[24px] lg:text-[30px] font-bold text-center mb-10">
          Partners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#E5E5E5] border border-gray-300 rounded-md shadow-md p-6 flex flex-col"
            >
              <h2 className="text-[#0C0632] text-[18px] font-semibold mb-2">
                {partner.title}
              </h2>
              <p className="text-[14px] text-[#838383] font-medium whitespace-pre-line">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
