import React from "react";

interface headerProps {
  showComponent: string;
  setShowComponent: any;
}

const Navigation = ({ setShowComponent, showComponent }: headerProps) => {
  return (
    <div className="flex justify-center ">
      <ul className="navigation flex items-center bg-[#14213D] text-sm lg:text-ml font-normal text-white cursor-pointer bg-hover p-1 px-auto rounded-full whitespace-nowrap">
        <li
          onClick={() => setShowComponent("services")}
          className={showComponent === "services" ? "active" : ""}
        >
          Service Providers
        </li>
        <li
          onClick={() => setShowComponent("customers")}
          className={showComponent === "customers" ? "active" : ""}
        >
          Customers
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
