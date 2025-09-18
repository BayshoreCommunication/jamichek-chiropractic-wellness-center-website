"use client";

import Image from "next/image";

const services = [
  {
    title: "Back Pain",
    description:
      "Treatment for joint, bone, and muscle injuries to restore mobility and strength.",
    image: "/images/services/back-pain.png",
  },
  {
    title: "Neck pain",
    description:
      "Customized recovery plans to help athletes return to peak performance safely.",
    image: "/images/services/neck-pain.png",
  },
  {
    title: "Spinal decompression",
    description:
      "Guided therapy programs for faster, safer recovery after surgery.",
    image: "/images/services/spinal-decompression.png",
  },
  {
    title: "Car Accidents",
    description:
      "Care for patients with stroke, spinal cord, or nerve-related conditions.",
    image: "/images/services/car-accidents.png",
  },
  {
    title: "Sciatic Relief",
    description:
      "Hands-on techniques to relieve chronic pain, stiffness, and tension.",
    image: "/images/services/sciatic-relief.png",
  },
  {
    title: "Headaches",
    description:
      "Specialized care for children's development needs and elderly mobility support.",
    image: "/images/services/headaches.png",
  },
];

export default function Services() {
  return (
    <section className="w-full px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Our expert doctor will tailor a treatment program to address your
              unique needs, ensuring you achieve peak wellness.
            </p>
          </div>
          <button className="mt-6 md:mt-0 inline-flex items-center gap-2 border border-black rounded-full px-5 py-2  font-medium hover:text-white hover:bg-black transition text-black">
            Explore More Services →
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center border border-gray-100"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={224}
                className="w-full h-52 object-cover object-top rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
