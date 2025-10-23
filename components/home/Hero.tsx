"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

// Set your YouTube link here (supports youtu.be and youtube.com links)
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=uKxF2MNFf9g";

function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.replace("/", "");
    }
    if (parsed.hostname.includes("youtube.com")) {
      const v = parsed.searchParams.get("v");
      if (v) return v;
      // Handle /embed/{id}
      const parts = parsed.pathname.split("/").filter(Boolean);
      const embedIndex = parts.findIndex((p) => p === "embed");
      if (embedIndex !== -1 && parts[embedIndex + 1])
        return parts[embedIndex + 1];
    }
  } catch {
    return null;
  }
  return null;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoId = extractYouTubeId(YOUTUBE_VIDEO_URL) ?? "uKxF2MNFf9g";

  return (
    <div className="bg-[#F2FFEA] bg-cover bg-center overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="">
          <Stagger>
            <Reveal tag="h1" y={24} opacityFrom={0}>
              <h1 className="text-[36px] md:text-[48px] font-bold leading-tight text-black">
                Get{" "}
                <span className="text-primary inline-flex items-center gap-2 align-middle">
                  <span>Pain Relief</span>{" "}
                  <Image
                    src="/images/hero/hero-line.png"
                    alt="Pain Relief"
                    width={43}
                    height={43}
                    className="hidden md:inline-block align-middle w-auto h-auto"
                  />
                </span>{" "}
                Today <br />
                With Tampa Bays <br /> Chiropractor
              </h1>
            </Reveal>
            <Reveal tag="p" y={16} opacityFrom={0.1}>
              <p className="mt-4 text-black">
                Helping Tampa Families live healthier, pain-free lives through
                personalized chiropractic
                <br />
                chiropractic care and whole-body wellness
              </p>
            </Reveal>
            <Reveal y={16} opacityFrom={0.1}>
              <div className="mt-6 flex space-x-4 gap-4 md:gap-6">
                <Link
                  href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                  target="_blank"
                  className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition"
                >
                  Not a patient yet? Book Now!
                </Link>
                <button
                  onClick={() => setShowVideo(true)}
                  aria-label="Play introduction video"
                  className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:scale-105 transition"
                >
                  ▶
                </button>
              </div>
            </Reveal>
            {/* Google Reviews */}
            <Reveal y={16} opacityFrom={0.1}>
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
                  <Link
                    href="https://www.google.com/maps?cid=15818987750581458581"
                    className="text-primary underline text-sm"
                  >
                    View all Google Reviews here
                  </Link>
                </div>
              </div>
            </Reveal>
          </Stagger>
        </div>

        {/* Right (Hero Image) */}
        <div className="relative flex justify-center">
          <Stagger>
            <Reveal y={20} opacityFrom={0}>
              <Image
                src="/images/hero/hero.png"
                alt="Chiropractor"
                width={900}
                height={650}
                className="rounded-lg object-cover w-full h-full"
              />
            </Reveal>

            {/* Floating Badges - mobile responsive + animation */}
            <Reveal x={-16} y={0} opacityFrom={0}>
              <div className="absolute top-24 left-4 md:top-26 md:right-16 md:left-auto bg-white/95 backdrop-blur-sm shadow-md px-3 md:px-4 py-1.5 md:py-2 rounded-full hidden md:flex flex-nowrap items-center space-x-2 text-gray-800 animate-bounce transition-transform duration-300 ease-out hover:scale-105 whitespace-nowrap motion-reduce:animate-none">
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
            </Reveal>
            <Reveal x={16} y={0} opacityFrom={0}>
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
            </Reveal>
          </Stagger>
        </div>
      </section>
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close video"
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white/90 hover:text-white"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
