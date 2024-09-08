"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import open_navbar from "@/public/icons/hamburger.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillCloseSquare } from "react-icons/ai";
import classNames from "classnames";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const path = usePathname();
  const [mobileView, setMobileView] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  const handleToggleNavbar = () => {
    setMobileView(!mobileView);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About us" },
    { path: "/artisans", label: "Our Team" },
    { path: "/artisans-training", label: "Contact us" },
    // { path: "/", label: "Features" },
    // { path: "/", label: "Contact us" },
  ];

  useEffect(() => {
    if (mobileView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileView]);

  const openNavTransitions = classNames({
    "transition-transform duration-700 ease-in-out transform": true,
    "-translate-y-[120%]": !mobileView,
    "translate-y-[8%]": mobileView,
  });

  return (
    <header className=" w-full py-4 fixed z-50 bg-white shadow-[1px_1px_6px_rgb(0,0,0,0.1)] ">
      <nav className="flex justify-between items-center px-[20px] sm:px-[80px] xl:px-[100px] relative z-10">
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/cdrt-logo.png"
              alt="Cdrd Logo"
              width={95.68}
              height={75.69}
            />
            <div className="font-bold text-3xl leading-27 text-[#ED6810]">
              Cdrt Consult
            </div>
          </div>
        </Link>

        <div className="hidden items-center lg:flex">
          <ul className="list-none flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={
                  path === item.path ? "text-[#ED6810]" : "text-[#838383]"
                }
              >
                <Link
                  href={item.path}
                  className="font-medium text-base leading-24 no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-5">
        
        </div>

        <div className=" lg:hidden flex items-center text-[#051f4e] text-[24px]">
          <GiHamburgerMenu
            onClick={() => setMobileView(true)}
            className={`${mobileView === true ? "hidden" : "block"}`}
          />
          <FaRegWindowClose
            onClick={() => setMobileView(false)}
            className={`${mobileView === false ? "hidden" : "block"}`}
          />
        </div>
      </nav>

      <div className={`${openNavTransitions} bg-[#272727] overflow-hidden z-50 absolute w-full top-0 h-screen  py-10 px-5 sm:px-20 lg:hidden`}>
        {mobileView && (
          <div
            className=" flex flex-col items-center gap-12"
          >
            <div className="flex flex-col gap-12 pt-20">
              <ul className="list-none flex flex-col items-start gap-5">
                {navItems.map((item) => (
                  <li
                    key={item.path}
                    className={
                      path === item.path ? "text-[#ED6810]" : "text-[#dadada]"
                    }
                    onClick={() => setMobileView(false)}
                  >
                    <Link
                      href={item.path}
                      className="font-medium text-base leading-24 no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
