"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const blogs = [
  {
    title: "Top Balance Exercises for Seniors at Home",
    slug: "top-balance-exercises-for-seniors-at-home",
    date: "May 24, 2022",
    image: "/images/blog/blog1.png",
  },
  {
    title: "Stroke (CVA) Rehab: What to Expect in Physical Therapy",
    slug: "stroke-cva-rehab-what-to-expect-in-physical-therapy",
    date: "May 24, 2022",
    image: "/images/blog/blog2.png",
  },
  {
    title: "How to Relieve Lower Back Pain Without Surgery",
    slug: "how-to-relieve-lower-back-pain-without-surgery",
    date: "May 24, 2022",
    image: "/images/blog/blog3.png",
  },
  {
    title: "Top Balance Exercises for Seniors at Home",
    slug: "top-balance-exercises-for-seniors-at-home",
    date: "May 24, 2022",
    image: "/images/blog/blog1.png",
  },
  {
    title: "Stroke (CVA) Rehab: What to Expect in Physical Therapy",
    slug: "stroke-cva-rehab-what-to-expect-in-physical-therapy",
    date: "May 24, 2022",
    image: "/images/blog/blog2.png",
  },
  {
    title: "How to Relieve Lower Back Pain Without Surgery",
    slug: "how-to-relieve-lower-back-pain-without-surgery",
    date: "May 24, 2022",
    image: "/images/blog/blog3.png",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      {/* Header */}
      <Reveal tag="div" y={16} opacityFrom={0}>
        <div className="text-center  mb-8">
          <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900">
            Our Team
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-4xl mx-auto">
            Stop by and meet our amazing team! We are here for you! Our friendly
            staff is dedicated to providing you with the best care and service
            to ensure your comfort throughout your journey.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/the-wellness-journal/${blog.slug}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow"
          >
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
                  {blog.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {blog.title}
                </h3>
              </div>

              <span className="text-primary text-sm font-medium hover:underline mt-4">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
