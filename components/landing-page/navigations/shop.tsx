import React from "react";

interface headerProps {
  showComponent: string;
  setShowComponent: any;
}

const Navigation = ({ setShowComponent, showComponent }: headerProps) => {
  return (
    <div className="flex justify-center   ">
      <ul className="navigation flex items-center bg-black text-sm lg:text-ml font-normal text-white cursor-pointer bg-hover p-1 px-auto rounded-full whitespace-nowrap">
        <li
          onClick={() => setShowComponent("foods")}
          className={showComponent === "foods" ? "active" : ""}
        >
          Foods
        </li>
        <li
          onClick={() => setShowComponent("drinks")}
          className={showComponent === "drinks" ? "active" : ""}
        >
          Drinks
        </li>
        <li
          onClick={() => setShowComponent("fruits")}
          className={showComponent === "fruits" ? "active" : ""}
        >
          Fruits
        </li>
        <li
          onClick={() => setShowComponent("cereals")}
          className={showComponent === "cereals" ? "active" : ""}
        >
          Cereals
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
