// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#F2FFEA] bg-cover bg-center">
      {/* Hero Section */}
      <section className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="">
          <h1 className="text-[36px] md:text-[48px] font-bold leading-tight text-black">
            Get{" "}
            <span className="text-primary inline-flex items-center gap-2 align-middle">
              <span>Pain Relief</span>{" "}
              <Image
                src="/images/hero/hero-line.png"
                alt="Pain Relief"
                width={43}
                height={43}
                className="inline-block align-middle w-auto h-auto hidden md:block"
              />
            </span>{" "}
            Today <br />
            With Tampa Bays <br /> Chiropractor
          </h1>
          <p className="mt-4 text-black">
            Helping Tampa families live healthier, pain-free lives through
            personalized chiropractic
            <br /> chiropractic care and whole-body wellness.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition"
            >
              Not a patient yet? Book Now!
            </a>
            <button className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary">
              ▶
            </button>
          </div>
          {/* Google Reviews */}
          <div className="mt-8 flex items-center space-x-4">
            <Image
              src="/images/hero/g.png"
              alt="Google"
              width={100}
              height={30}
              className="h-full w-auto"
            />
            <div>
              <p className="font-semibold text-black">
                4.9 | <span className="text-gray-500">140 Reviews</span>
              </p>
              <a href="#" className="text-primary underline text-sm">
                View all Google Reviews here
              </a>
            </div>
          </div>
        </div>

        {/* Right (Hero Image) */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero/hero.png"
            alt="Chiropractor"
            width={900}
            height={650}
            className="rounded-lg object-cover w-full h-full"
          />

          {/* Floating Badges - mobile responsive + animation */}
          <div className="absolute top-24 left-4 md:top-26 md:right-16 md:left-auto bg-white/95 backdrop-blur-sm shadow-md px-3 md:px-4 py-1.5 md:py-2 rounded-full flex flex-nowrap items-center space-x-2 text-gray-800 animate-bounce transition-transform duration-300 ease-out hover:scale-105 hidden md:block whitespace-nowrap motion-reduce:animate-none">
            <div className="flex item-center space-x-2">
              <Image
                src="/images/hero/popup1.png"
                alt="Weight Loss"
                width={20}
                height={20}
              />
              <span className="">Weight Loss</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 md:top-16 md:left-16 md:right-auto bg-white/95 backdrop-blur-sm shadow-md px-3 md:px-4 py-1.5 md:py-2 rounded-full flex flex-nowrap items-center space-x-2 text-gray-800 transition-transform duration-300 ease-out hover:scale-105 whitespace-nowrap motion-reduce:animate-none">
            <Image
              src="/images/hero/popup2.png"
              alt="Pain Relief"
              width={20}
              height={20}
              className="animate-spin duration-[2.5s]"
            />
            <span className="leading-none">Pain Relief</span>
          </div>
        </div>
      </section>
    </div>
  );
}
