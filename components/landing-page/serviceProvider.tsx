import * as React from "react";
import Image from "next/image";
import Icon1 from "@/public/icons/icon1.png";
import Icon2 from "@/public/icons/icon2.png";
import Icon3 from "@/public/icons/iocn3.png";
import Frame1 from "@/public/icons/frame1.png";
import LabelButtons from "../button";
import { useRouter } from "next/navigation";

const data = [
  {
    icon: Icon1,
    title: "Register as an Artisan",
    content:
      "Create your account. Then download the Bazaar app to continue registration.",
  },
  {
    icon: Icon2,
    title: "Get Verified",
    content:
      "Select what services you want to offer and where. Confirm your identity and submit business verifications, as required.",
  },
  {
    icon: Icon3,
    title: "Start Providing Service",
    content:
      "Set your weekly availability and opt in to receive same-day jobs.",
  },
];

export default function ServiceProvider() {
  const router = useRouter();
  return (
    <div className="w-full px-[20px] md:px-[30px] xl:px-[100px]"
    >
      <div className="flex flex-col lg:flex-row gap-20 md:gap-10 w-full items-center lg:items-start justify-between">

        <div className="flex flex-col w-full">

          <div className="w-full flex flex-col gap-6">
            <h1 className="text-[24px] lg:text-[30px] text-[#14183E] font-bold">
              Make Money with your Skill in 3 steps
            </h1>
            <div className="flex flex-col gap-7 ">

              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 "
                  // style={{border: "1px red solid"}}
                >
                    <Image src={item.icon} alt="Icon" width={400} height={400} className="w-[50px] h-[3em]" />

                  <div className="w-full md:w-[80%] lg:w-[60%]">
                    <h4 className="text-xl font-semibold text-[#5E6282]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#5E6282]">{item.content}</p>
                  </div>
                </div>
              ))}
              
              <div className=" w-[50%] md:w-[30%] lg:mx-0 mx-auto pt-3">
                <LabelButtons
                  btn_text={"Join Waitlist"}
                  variant={"outlined"}
                  textTransform={"capitalize"}
                  fontSize_l={"17px"}
                  fontSize_m={"12px"}
                  fontWeight={500}
                  color={"#FFFFFF"}
                  backgroundColor={"#272727"}
                  border={"1px solid #272727"}
                  padding={"0.8rem"}
                  hoverColor={"#FFFFF"}
                  hoverText={"#0000000"}
                  width={"100%"}
                  onClick={() => router.push("/join-waitlist")}
                />
              </div>
            </div>
          </div>
        </div>

          <Image
            src={Frame1}
            width={500}
            height={400}
            className=" w-[300px] sm:w-[400px] xl:w-[480px]"
            alt=""
          />

      </div>

    </div>
  );
}
