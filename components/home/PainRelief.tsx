// components/HeroSection.js
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

export default function PainRelief() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/images/painrelief/bg.png')" }} // Ensure the file is in /public
    >
      <div className="max-w-[1640px] mx-auto px-8 py-8 md:py-16 text-center text-white">
        <Stagger>
          <Reveal tag="h1" y={16} opacityFrom={0}>
            <h1 className="text-[36px] font-semibold">
              Get <span className="text-primary">Pain Relief</span> Today With
              Tampa Bays Chiropractor
            </h1>
          </Reveal>
          <Reveal tag="p" y={12} opacityFrom={0.1}>
            <p className="text-sm md:text-base mt-4 max-w-2xl mx-auto">
              We’re ready to help you move, heal, and thrive — schedule your
              visit today.
            </p>
          </Reveal>
          <Reveal y={10} opacityFrom={0}>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-green-700 transition"
              >
                Not a Patient Yet? Schedule Today!
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </Reveal>
        </Stagger>
      </div>
    </div>
  );
}
