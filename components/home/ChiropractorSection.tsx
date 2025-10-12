import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

export default function ChiropractorSection() {
  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      <div className="grid lg:grid-cols-3 gap-10 md:gap-6">
        {/* Left Cards */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 items-stretch">
          {/* Pain Relief */}
          <Reveal y={16} opacityFrom={0}>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col text-center h-full">
              {/* Image */}
              <div className="w-full bg-gray-100 rounded-t-2xl overflow-hidden">
                <Image
                  src="/images/chiropractor/pain.png"
                  alt="Pain Relief"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Pain Relief
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From back pain to headaches, our chiropractic care targets
                    the root cause — not just the symptoms — so you can move
                    freely and live without limits.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Weight Loss */}
          <Reveal y={16} opacityFrom={0}>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col text-center h-full">
              {/* Image */}
              <div className="w-full bg-gray-100 rounded-t-2xl overflow-hidden">
                <Image
                  src="/images/chiropractor/weight.png"
                  alt="Weight Loss"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Weight Loss
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our chiropractors offer various services, including
                    chiropractic adjustments, spinal decompression therapy,
                    rehabilitation exercises, and weight loss, to help our
                    patients achieve optimal health.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-[36px] font-bold leading-snug text-black">
                Get <span className="text-primary">Pain Relief</span> Today
                <br />
                With Tampa Bays Chiropractor
              </h2>
            </Reveal>
            <Reveal tag="p" y={12} opacityFrom={0.1}>
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Our expert doctor will tailor a treatment program to address
                your unique needs, ensuring you achieve peak wellness.
              </p>
            </Reveal>
            <Reveal y={10} opacityFrom={0}>
              <Link
                href="/contact"
                className="mt-6 self-center lg:self-start inline-block"
              >
                <span className="bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:border hover:border-black hover:text-black transition">
                  Explore More
                </span>
              </Link>
            </Reveal>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
