"use client";
import moment from "moment/moment";
import { footerLinks, socialMedia } from "@/ultils/constants";
import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  return (
    <div>
      <section className="py-10  sm:pt-16 lg:pt-24 bg-black">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              {/* <div className=" h-auto flex items-start flex-col gap-5 justify-center"> */}
              <Link href={"/"}>
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/cdrt-logo.png"
                    alt="Cdrd Logo"
                    width={40.68}
                    height={25.69}
                  />
                  <div className="font-bold text-3xl leading-27 text-[#ED6810]">
                    Cdrt Consult
                  </div>
                </div>
              </Link>
              {/* </div> */}
            </div>

            {footerLinks.map((section, index) => (
              <div key={index}>
                <p className="text-sm font-semibold tracking-widest text-[#FFFF] uppercase">
                  {section.title}
                </p>

                <ul className="mt-6 space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.url.startsWith("http") ||
                      link.url.startsWith("https") ? (
                        <a
                          href={link.url}
                          title={link.text}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex text-base text-[#E6E6E6] transition-all duration-200 cursor-pointer hover:text-colorOrange focus:text-colorOrange"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <a
                          onClick={() => router.push(link?.url)}
                          title={link.text}
                          className="flex text-base text-[#E6E6E6] transition-all duration-200 cursor-pointer hover:text-colorOrange focus:text-colorOrange"
                        >
                          {link.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <div className="">
                <p className="text-white">
                  Email:{" "}
                  <span className="text-[#E6E6E6]">
                    cdrt@cdrtconcult.ng
                  </span>
                </p>
                <br />
                <p className="text-white flex items-center gap-2">
                  <FaLocationDot />
                  <span className="text-[#E6E6E6]">
                    21B Copper Road, Ikoyi Lagos
                  </span>
                </p>
                <br />
                {/* <p className="text-white">
                  USA:{" "}
                  <span className="text-[#E6E6E6]">
                    130, 447 Broadway, 2nd Floor New York, NY 10013
                  </span>
                </p> */}
              </div>
              <ul className="flex items-center space-x-3 mt-9">
                {socialMedia.map((socialItem) => (
                  <li key={socialItem.id}>
                    <a
                      href={socialItem.link}
                      title=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-colorOrange focus:bg-colorOrange"
                    >
                      <socialItem.icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm text-center text-[#E6E6E6]">
              Copyright © {moment().format("YYYY")}, Cdrt Consult.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
