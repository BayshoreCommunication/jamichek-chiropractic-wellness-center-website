import Image from "next/image";

export default function ChiropractorSection() {
  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      <div className="grid lg:grid-cols-3 gap-10 md:gap-6">
        {/* Left Cards */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {/* Pain Relief */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center border border-gray-100">
            <div className="w-full h-60 bg-gray-100 rounded-xl">
              <Image
                src="/images/chiropractor/pain.png"
                alt="Pain Relief"
                width={640}
                height={240}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                Pain Relief
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From back pain to headaches, our chiropractic care targets the
                root cause — not just the symptoms — so you can move freely and
                live without limits.
              </p>
            </div>
          </div>

          {/* Weight Loss */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center border border-gray-100">
            <div className="w-full h-60 bg-gray-100 rounded-xl">
              <Image
                src="/images/chiropractor/weight.png"
                alt="Weight Loss"
                width={640}
                height={240}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                Weight Loss
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our chiropractors offer various services, including chiropractic
                adjustments, spinal decompression therapy, rehabilitation
                exercises, and weight loss, to help our patients achieve optimal
                health.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-[36px] font-bold leading-snug text-black">
            Get <span className="text-primary">Pain Relief</span> Today
            <br />
            With Tampa Bays Chiropractor
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Our expert doctor will tailor a treatment program to address your
            unique needs, ensuring you achieve peak wellness.
          </p>
          <button className="mt-6 self-center lg:self-start bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:border hover:border-black hover:text-black transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
