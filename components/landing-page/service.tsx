"use client";
import Naviagtion from "./navigations/cust-business";
import Customers from "./customers";
import ServiceProvider from "./serviceProvider";
import Image from "next/image";
import svg2 from "@/public/icons/svg2.png";
import svg3 from "@/public/icons/svg3.png";

import { useState } from "react";

const Serices = () => {
  const [showComponent, setShowComponent] = useState("services");

  const renderContent = (component: any) => (
    <div className="w-full lg:w-[90%] h-auto rounded-xl py-10 pt-10  relative">
      {/* <Image
        src={svg3}
        width={200}
        className="absolute left-0 top-20 z-0 opacity-5"
        alt=""
      />
      <Image
        src={svg3}
        width={200}
        className="absolute right-0 top-20 z-0 opacity-5"
        alt=""
      /> */}
      {/* <Image
        src={svg2}
        width={100}
        className="absolute right-0 bottom-10  "
        alt=""
        style={{ zIndex: "999" }}
      /> */}
      <div
        className={` mx-auto justify-center place-items-center pb-10  rounded-lg overflow-x-auto`}
      >
        <div className=" navbar overflow-x-auto mx-auto  ">
          <Naviagtion
            showComponent={showComponent}
            setShowComponent={setShowComponent}
          />
        </div>
      </div>

      {/* Render the selected component */}
      {component}
    </div>
  );

  // return renderContent(
  //   showComponent === "services" ? (
  //     <ServiceProvider />
  //   ) : showComponent === "customers" ? (
  //     <Customers />
  //   ) : (
  //     <ServiceProvider />
  //   )
  // );
};

export default Serices;
