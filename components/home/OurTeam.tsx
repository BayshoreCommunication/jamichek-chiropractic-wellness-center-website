"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const teamMembers = [
  {
    name: 'Dr. Juliet Marvenko – "Dr. J"',
    role: "Doctor",
    image: "/images/team/team1.png",
    desc: "My team and I provide a safe, whole-body approach to...",
  },
  {
    name: 'Dr. Glen Gunderson – "Dr. G"',
    role: "Doctor",
    image: "/images/team/team2.png",
    desc: "My team and I provide a safe, whole-body approach to...",
  },
  {
    name: 'Dr. Ross Paxia – "Dr. Ross"',
    role: "Doctor",
    image: "/images/team/team3.png",
    desc: "My team and I provide a safe, whole-body approach to...",
  },
  {
    name: "Dana",
    role: "Executive Director",
    image: "/images/team/team4.png",
    desc: "My team and I provide a safe, whole-body approach to...",
  },
];

export default function OurTeam() {
  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <Stagger>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                Our Team
              </h2>
              <p className="text-gray-900 max-w-xl">
                Stop by and meet our amazing team! We are here for you! Our
                friendly staff is dedicated to providing you with the best care
                and service to ensure your comfort throughout your journey.
              </p>
            </div>
          </Reveal>
          <Reveal y={12} opacityFrom={0}>
            <button className="mt-6 md:mt-0 border border-black rounded-full px-6 py-2 transition text-gray-900 hover:bg-black hover:text-white">
              Explore Team Members →
            </button>
          </Reveal>
        </Stagger>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <Reveal y={16} opacityFrom={0}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-full">
                <div className="w-full h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-900 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-900">{member.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex space-x-3 text-gray-900">
                      <a href="">
                        <FaFacebookF />
                      </a>
                      <a href="">
                        <FaInstagram />
                      </a>
                      <a href="">
                        <FaTwitter />
                      </a>
                    </div>
                    <a
                      href=""
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
