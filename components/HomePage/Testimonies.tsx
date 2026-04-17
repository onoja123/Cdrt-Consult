"use client";
import { montserrat } from "@/font";
import React from "react";
import { useContent } from "@/contexts/ContentContext";

const Testimonies: React.FC = () => {
  const { content } = useContent();
  const { advisors, partners } = content;

  return (
    <div className={`${montserrat.className} w-full bg-[var(--cdrt-section-bg)] py-24 flex flex-col gap-16 items-center`}>
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-[var(--cdrt-heading)] text-[24px] lg:text-[30px] font-bold text-center mb-10">
          Research Advisors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.items.map((advisor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md shadow-md p-6 flex flex-col"
            >
              <h2 className="text-[#0C0632] text-[18px] font-semibold mb-2">
                {advisor.title}
              </h2>
              <p className="text-[14px] text-[#838383] font-medium">
                {advisor.institution}
              </p>
              {advisor.phone && (
                <p className="text-[14px] text-[#838383] font-medium mt-1">
                  Phone:{" "}
                  <a href={`tel:${advisor.phone}`} className="text-blue-600 underline">
                    {advisor.phone}
                  </a>
                </p>
              )}
              {advisor.email && (
                <p className="text-[14px] text-[#838383] font-medium mt-1">
                  Email:{" "}
                  <a href={`mailto:${advisor.email}`} className="text-blue-600 underline">
                    {advisor.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl px-4">
        <h1 className="text-[var(--cdrt-heading)] text-[24px] lg:text-[30px] font-bold text-center mb-10">
          Partners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.items.map((partner, index) => (
            <div
              key={index}
              className="bg-[#E5E5E5] border border-gray-300 rounded-md shadow-md p-6 flex flex-col"
            >
              <h2 className="text-[#0C0632] text-[18px] font-semibold mb-2">
                {partner.title}
              </h2>
              <p className="text-[14px] text-[#838383] font-medium">
                {partner.location}
              </p>
              <p className="text-[14px] text-[#838383] font-medium mt-1">
                Contact Person: {partner.contactPerson}
              </p>
              {partner.phone && (
                <p className="text-[14px] text-[#838383] font-medium mt-1">
                  Phone:{" "}
                  <a href={`tel:${partner.phone}`} className="text-blue-600 underline">
                    {partner.phone}
                  </a>
                </p>
              )}
              {partner.email && (
                <p className="text-[14px] text-[#838383] font-medium mt-1">
                  Email:{" "}
                  <a href={`mailto:${partner.email}`} className="text-blue-600 underline">
                    {partner.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
