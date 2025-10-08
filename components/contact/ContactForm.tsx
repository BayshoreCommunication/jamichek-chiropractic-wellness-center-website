"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function ContactForm() {
  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto">
      {/* ===== Header ===== */}
      {/* <div className="text-center mb-12">
        <Reveal y={20} opacityFrom={0}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2a3b47] mb-3">
            Polk County Bully Project Contact Form
          </h2>
        </Reveal>
        <Reveal y={30} opacityFrom={0}>
          <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
            Interested in learning more about our project or one of our awesome
            pups? Contact us here and we’ll respond as soon as we can.
          </p>
        </Reveal>
      </div> */}

      {/* ===== Contact Grid ===== */}
      <div>
        {" "}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 lg:mb-8 items-stretch">
          <Reveal y={20} opacityFrom={0}>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-medium w-full">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
                <FaMapMarkerAlt size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-[#2a3b47] mb-1">Address</h4>
                <p className="text-gray-600 text-sm">
                  5111 Ehrlich Road Ste 128, Tampa, Florida 33624, United States
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal y={25} opacityFrom={0}>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-medium w-full">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
                <FaEnvelope size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-[#2a3b47] mb-1">
                  Email Address
                </h4>
                <p className="text-gray-600 text-sm">
                  support@jachimekchiro.com
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal y={30} opacityFrom={0}>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-medium w-full">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
                <FaPhone size={18} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-[#2a3b47] mb-1">Phone</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <p className="text-gray-600 text-sm">Phone: 813.960.2225 </p>
                  <p className="text-gray-600 text-sm">Fax: 813.968.1784</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="">
        {/* ===== Left Side: Contact Info ===== */}

        {/* ===== Right Side: Form ===== */}
        <form
          action="#"
          method="POST"
          className="md:col-span-7 bg-white p-8 rounded-xl shadow-medium flex flex-col justify-between space-y-6"
        >
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
              />
            </div>
          </div>

          {/* File Attachment */}
          <div>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Attach File
            </label>
            <input
              id="file"
              name="file"
              type="file"
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9F9F9]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-start bg-primary text-white font-semibold py-2 px-6 rounded-full max-w-40 w-full transition duration-200 mt-4"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
