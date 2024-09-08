"use client"; // Ensure this component is a client component

import { dm_sans, sora } from "@/font";
import Image from "next/image";
import React, { useState } from "react";

const LearnSkill = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center pt-8 relative">
      <Image
        src="/plus4.svg"
        alt="plus4"
        width={0}
        height={0}
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] -z-10 absolute right-[8%]"
      />
      <div className="mt-8 w-full px-8 sm:px-4 lg:w-[60%] bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-[#14183E] text-[22px] font-bold mb-6 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 border border-[#D1D1D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6525] transition duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 border border-[#D1D1D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6525] transition duration-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="p-4 border border-[#D1D1D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6525] transition duration-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#FF6525] text-white p-4 rounded-lg font-semibold hover:bg-[#e65a19] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default LearnSkill;
