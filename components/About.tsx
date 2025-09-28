import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gray-50">
      <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-6">
          {/* Left Image */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/about/about.png"
              alt="Our Team"
              className="w-auto h-auto object-cover rounded-xl"
              width={630}
              height={470}
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              About Us
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              At Jachimek Wellness Center, we believe that the body has the
              ability to heal itself. Our goal is to remove any interference in
              the nervous system and allow the body to function at its best.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Stop by and meet our amazing team! We are here for you! Our
              friendly staff is dedicated to providing you with the best care
              and service to ensure your comfort throughout your journey. 
            </p>

            {/* Explore More button */}
            <button className="bg-black text-white px-6 py-3 rounded-full w-fit hover:bg-gray-800 transition mb-8 hover:bg-white hover:border hover:border-black hover:text-black">
              Explore More
            </button>

            {/* Google Reviews */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="/images/about/google.png"
                  alt="Google"
                  className="h-5"
                />
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
              </div>
              <div className="text-black text-sm">
                <span className="font-semibold">4.9</span> | 140 Reviews
                <div>
                  <Link
                    href="https://www.google.com/maps?cid=15818987750581458581"
                    className="text-primary underline hover:text-green-700"
                  >
                    View all Google Reviews here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
