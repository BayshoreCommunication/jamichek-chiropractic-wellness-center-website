"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Armen Sargsyan",
    time: "месяц назад",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    image: "",
  },
  {
    name: "Armen Sargsyan",
    time: "6 дней назад",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    image: "",
  },
  {
    name: "Armen Sargsyan",
    time: "месяц назад",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    image: "",
  },
  {
    name: "Armen Sargsyan",
    time: "месяц назад",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    image: "",
  },
  {
    name: "Armen Sargsyan",
    time: "месяц назад",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    image: "",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-gray-50">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Our expert doctor will tailor a treatment program to address your
            unique needs, ensuring you achieve peak wellness.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-primary font-medium hover:underline"
          >
            View all Google Reviews here
          </a>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[ Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100 h-full flex flex-col">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.time}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        

      </div>
    </section>
  );
}
