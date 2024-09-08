"use client";
import Naviagtion from "./navigations/cust-business";

import { useState } from "react";

const Serices = () => {
  const [showComponent, setShowComponent] = useState("services");

  const renderContent = (component: any) => (
    <div className="w-full lg:w-[90%] h-auto rounded-xl py-10 pt-10  relative">
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

};

export default Serices;
