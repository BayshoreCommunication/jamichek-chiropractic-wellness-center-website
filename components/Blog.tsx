"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const blogs = [
  {
    title: "Top Balance Exercises for Seniors at Home",
    category: "UI DESIGN",
    date: "May 24, 2022",
    image: "/images/blog/blog1.png",
  },
  {
    title: "Stroke (CVA) Rehab: What to Expect in Physical Therapy",
    category: "UI DESIGN",
    date: "May 24, 2022",
    image: "/images/blog/blog2.png",
  },
  {
    title: "How to Relieve Lower Back Pain Without Surgery",
    category: "UI DESIGN",
    date: "May 24, 2022",
    image: "/images/blog/blog3.png",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-black">
          Latest From the{" "}
          <span className="text-primary">Blog</span>
        </h2>
        <button className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition text-gray-900">
          Explore Blogs →
        </button>
      </div>

      {/* Swiper Blog Cards */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-full">
              {/* Blog Image */}
              <div className="w-full h-56 relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                    {blog.category}
                    <span className="text-red-500">•</span>
                    {blog.date}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {blog.title}
                  </h3>
                </div>

                <a
                  href="#"
                  className="text-primary text-sm font-medium hover:underline mt-4"
                >
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
