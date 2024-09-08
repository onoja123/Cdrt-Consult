"use client";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import classname from "classnames";
import { poppins } from "@/font";
import { states } from "@/allstate";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import PaymentModal from "@/components/PaymentModal";

const Page = () => {
  const [titleDropDown, setTitleDropDown] = useState(false);
  const [stateDropDown, setStateDropDown] = useState(false);
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [state, setState] = useState("Select State");
  const genderArray = ["Male", "Female"];
  const [gender, setGender] = useState("Select");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [paymentUrl, setPaymentUrl] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reference, setReference] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const form = new FormData(e.currentTarget);
      const userData = {
        firstName: form.get("firstName") as string,
        lastName: form.get("lastName") as string,
        email: form.get("email") as string,
        phone: form.get("phone") as string,
        gender: gender,
        city: form.get("city") as string,
        state: state,
      };

      if (gender === "Select" || state === "Select State") {
        toast.error("Please select all required fields");
        return;
      } else {
        setFormData(userData);
        setLoading(true);
        console.log("userData", userData);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/waitlist/adduser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        const res = await response.json();

        if (response.ok) {
          sessionStorage.setItem("userData", JSON.stringify(userData));
          setPaymentUrl(res.data.paymentUrl);
          setReference(res.data.reference);
          setModalIsOpen(true); // Open the modal

          setGender("Select");
          setState("Select State");
          setLoading(false);

          // toast.success(res.message);
          console.log("Form submission successful", res.message);
        } else {
          if (response.status === 400) {
            setLoading(false);
            toast.error(res.message || res.error);
            console.log("Form submission failed", res.message || res.error);
          }
        }
        return res;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentVerification = async (reference: string) => {
    try {
      const userDataString = sessionStorage.getItem("userData");
      const userData = userDataString ? JSON.parse(userDataString) : null;

      const data = { userData };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/waitlist/verify/${reference}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const res = await response.json();
      console.log("Payment verification response:", res);

      if (response.ok) {
        toast.success(res.message || res.error);
        router.push("/artisans-training");
        sessionStorage.removeItem("userData");
      } else {
        toast.error("Payment verification failed");
        // toast.error(res.message || res.error);
        setModalIsOpen(false);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      toast.error("Error verifying payment");
    }
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    if (reference) {
      handlePaymentVerification(reference);
    }
  };

  const titleIcon = classname(
    "text-[14px] transition-all duration-300 ease-in-out",
    {
      "rotate-360": !titleDropDown,
      "rotate-180": titleDropDown,
    }
  );

  return (
    <div className="flex flex-col gap-10 pb-5 w-full">
      <div className="flex flex-col gap-7 w-[80%] sm:w-[50%] py-10 mx-auto">
        <h1
          className={`text-center text-[20px] text-[#ED6810] font-normal ${poppins.className}`}
        >
          BaazarHQ
        </h1>
        <div className="flex  items-center justify-between">
          <Link href="/artisans-training">
            <span className="flex items-center gap-2 text-[#0F0F0F] hover:text-[#ED6810]">
              <FaAngleLeft className="  text-[12px]" />
              <h5 className="text-[15px]  font-medium">Back</h5>
            </span>
          </Link>
          <h5 className="text-[15px] text-[#0F0F0F] font-medium">
            Registration Info
          </h5>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] sm:text-[20px] text-[#0F0F0F] font-semibold">
            Registration Info
          </h2>
          <p className="text-[#333333] text-[14px] sm:text-[15px] font-medium">
            Fill in your personal details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex items-center gap-3 md:flex-row flex-col">
            {/* <div className="flex flex-col w-full md:w-[30%]">
              <label
                htmlFor="title"
                className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
              >
                Title <span className="text-[red] ">*</span>
              </label>
              <div className="relative">
                <div
                  onClick={() => setTitleDropDown(!titleDropDown)}
                  className="flex items-center cursor-pointer justify-between border border-solid border-[#E6E6E6] rounded-lg py-[7px] px-[10px] text-[#999999]"
                >
                  <p className="text-[14px] ">{title}</p>
                  <FaAngleDown className={titleIcon} />
                </div>
                {titleDropDown && (
                  <div className="absolute bg-white border border-solid w-full mt-1 py-3 px-2 rounded-[4px]">
                    {titleArray.map((title, index) => (
                      <p
                        key={index}
                        className="hover:text-white hover:bg-[#ED6810] text-[14px] rounded pl-2 py-[2px] cursor-pointer"
                        onClick={() => {
                          setTitleDropDown(false);
                          setTitle(title);
                        }}
                      >
                        {title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div> */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
              >
                First Name <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#FF6525] focus:border-transparent rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="lastName"
              className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
            >
              Last Name <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#FF6525] focus:border-transparent rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
            >
              Email Address <span className="text-[red]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#FF6525] focus:border-transparent rounded-lg"
            />
          </div>

          <div className="flex gap-4 lg:flex-row flex-col">
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
              >
                Phone Number <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+234"
                required
                className=" text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#FF6525] focus:border-transparent rounded-lg"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="text"
                className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
              >
                Gender <span className="text-[red]">*</span>
              </label>

              <div className=" relative">
                <div
                  onClick={() => setGenderDropDown(!genderDropDown)}
                  className="flex items-center cursor-pointer justify-between border border-solid border-[#E6E6E6] rounded-lg py-[7px] px-[10px] text-[#999999]"
                >
                  <p className="text-[14px] ">{gender}</p>
                  <FaAngleDown className={titleIcon} />
                </div>
                {genderDropDown && (
                  <div className="absolute z-10 bg-white mb-2 border border-solid w-full mt-1 py-3 px-2 rounded-[4px]">
                    {genderArray.map((gender, index) => (
                      <p
                        key={index}
                        className="hover:text-white hover:bg-[#ED6810] text-[14px] rounded pl-2 py-[2px] cursor-pointer"
                        onClick={() => {
                          setGenderDropDown(false);
                          setGender(gender);
                        }}
                      >
                        {gender}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-4 lg:flex-row flex-col w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="cityTown"
                className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
              >
                City/Town <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                id="cityTown"
                name="city"
                required
                className=" text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#FF6525] focus:border-transparent rounded-lg"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="text"
                className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
              >
                State <span className="text-[red]">*</span>
              </label>

              <div className=" relative">
                <div
                  onClick={() => setStateDropDown(!stateDropDown)}
                  className="flex items-center cursor-pointer justify-between border border-solid border-[#E6E6E6] rounded-lg py-[7px] px-[10px] text-[#999999]"
                >
                  <p className="text-[14px] ">{state}</p>
                  <FaAngleDown className={titleIcon} />
                </div>
                {stateDropDown && (
                  <div className="absolute bg-white h-[15rem]  mb-2 overflow-x-hidden overflow-scroll border border-solid w-full mt-1 py-3 px-2 rounded-[4px]">
                    {states.map((state, index) => (
                      <p
                        key={index}
                        className="hover:text-white hover:bg-[#ED6810] text-[14px] rounded pl-2 py-[2px] cursor-pointer"
                        onClick={() => {
                          setStateDropDown(false);
                          setState(state);
                        }}
                      >
                        {state}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-10">
            <button
              type="submit"
              className="flex items-center justify-center w-full md:w-[60%] text-white font-medium text-[15px] bg-[#ED6810] rounded py-2 mx-auto active:scale-95 hover:opacity-90"
            >
              {loading ? "Loading..." : "Pay"}
            </button>
            <p className="text-[12px] text-[#999999]">
              You will be charged &#8358;25,000 for our training
            </p>
          </div>
        </form>
        <PaymentModal
          isOpen={modalIsOpen}
          onRequestClose={handleModalClose}
          paymentUrl={paymentUrl}
        />
      </div>
      <p className="text-center text-[14px] text-[#333333] font-normal">
        Copyright © 2024 Bazaar Africa
      </p>
    </div>
  );
};

export default Page;
