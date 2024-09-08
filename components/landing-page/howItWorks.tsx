import React from "react";
import Image from "next/image";
import svg from "@/public/icons/svg1.png";

const teamMembers = [
  {
    title: "Executive Director",
    name: "Mary Okpe",
  },
  {
    title: "Research Officer",
    name: "Margaret Dankaro",
  },
  {
    title: "Data Analyst",
    name: "Binta Hassan",
  },
  {
    title: "Finance Officer",
    name: "Gauje Benjamin",
  },
  {
    title: "Admin Assistant",
    name: "Olaide Olasupo",
  },
];

const zonalCoordinators = [
  {
    zone: "Northwest Zone",
    coordinator: "Prof. Rafiu O. Yusuf",
    department: "Department of Geography",
    institution: "Ahmadu Bello University, Zaria",
  },
  {
    zone: "Northeast Zone",
    coordinator: "Dr. Talatu Adiwu",
    department: "Department of Fine Arts",
    institution: "University of Maiduguri, Borno",
  },
  {
    zone: "Southeast Zone",
    coordinator: "Dr. Ndubisi Isaac",
    department: "Department of Political Science",
    institution: "University of Nigeria, Nsukka",
  },
  {
    zone: "Southsouth Zone",
    coordinator: "Prof. Pauline Esoka",
    department: "Department of Geography",
    institution: "University of Calabar, Calabar",
  },
  {
    zone: "Southwest Zone",
    coordinator: "Dr. Deborah Yakubu",
    department: "Department of Urban and Regional Planning",
    institution: "Osun State University, Oshogbo",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-10 bg-white sm:py-16 lg:py-24">
      <Image className="absolute right-0 top-24" src={svg} width={90} alt="" />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#14183E] sm:text-4xl lg:text-5xl">
            Meet Our Team & Zonal Coordinators
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#D7C4C4] border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#14183E] md:mt-10">
                  {member.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {member.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-20">
            <h3 className="text-2xl font-bold text-[#14183E] text-center">
              Zonal Coordinators
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {zonalCoordinators.map((coordinator, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-[#14183E]">
                    {coordinator.zone}
                  </h4>
                  <p className="mt-2 text-base font-medium text-[#14183E]">
                    {coordinator.coordinator}
                  </p>
                  <p className="text-sm text-gray-600">
                    {coordinator.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    {coordinator.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
