"use client";
import React, { useState, useEffect } from "react"; // Import useEffect
import axios from "axios";
import { useRouter } from "next/navigation";
import IMG from "@/public/icons/success.png";
import Image from "next/image";

const JoinWaitlistComponent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    occupation: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  interface AxiosError extends Error {
    response?: {
      data?: {
        message?: string;
      };
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/waitlist/adduser`, {
        data,
      });
      setSuccess(true);
      setShowModal(true);
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError;
      setError(
        axiosError.response?.data?.message ||
          "An error occurred. Please try again later."
      );
      // Clear error after 10 seconds
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (success) {
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center pt-24 min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md py-10">
        <h2 className="text-3xl font-bold mb-4 text-center ">Join Waitlist</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={data.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Johndoe@gmail.com"
              value={data.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={data.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Select state"
              value={data.state}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700"
            >
              Occupation:
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="What's your occcupation"
              value={data.occupation}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#ED6810] text-white font-semibold rounded-lg
             hover:bg-[#ED6810] hover:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Join Waitlist"}{" "}
            {/* Conditional rendering */}
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 py-20 backdrop-blur-2xl ">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md h-[20rem]">
              <Image
                src={IMG}
                alt="Success"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold mb-4 text-center">
                Thank you for signing up!!!
              </h1>
              <p className="text-center">
                We will be launching in a couple of weeks. Please check your
                email for launch updates.
              </p>
              <button
                onClick={closeModal}
                className="mt-4 w-full py-2 px-4 bg-[#ED6810] text-white font-semibold rounded-lg hover:bg-[#ED6810] "
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinWaitlistComponent;
