"use client";
import Naviagtion from "./navigations/shop";
import Foods from "./shopping/foods";
import Drinks from "./shopping/drinks";
import Fruits from "./shopping/fruits";
import Cereals from "./shopping/cereals";
import Image from "next/image";

import { useState } from "react";

const Shopping = () => {
  const [showComponent, setShowComponent] = useState("foods");

  const renderContent = (component: any) => (
    <div className="w-full  h-auto mx-auto   py-32 bg-black text-center   relative">
      <h1 className="text-[#FAFAFF] text-4xl">
        Shop from local stores and market{" "}
      </h1>
      <div
        className={` mx-auto justify-center place-items-center pb-10  rounded-lg overflow-x-auto`}
      >
        <p className="text-[#FAFAFF] text-sm py-5">
          Discover a diverse marketplace of exceptional vendors offering a wide
          range of unique services to cater to all your needs.
        </p>
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

  return renderContent(
    showComponent === "foods" ? (
      <Foods />
    ) : showComponent === "drinks" ? (
      <Drinks />
    ) : showComponent === "fruits" ? (
      <Fruits />
    ) : showComponent === "cereals" ? (
      <Cereals />
    ) : (
      <Foods />
    )
  );
};

export default Shopping;
