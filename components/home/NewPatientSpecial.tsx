"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function NewPatientSpecial() {
  return (
    <section className="bg-primary/10 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          $47 New Patient Special Offer
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          Experience a complete chiropractic consultation, examination, and
          personalized treatment plan for only{" "}
          <span className="font-semibold text-primary">$47</span>. Discover how
          we can help you feel better, move better, and live pain-free.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white font-medium text-base md:text-lg px-6 py-3 rounded-full shadow-md hover:bg-primary/90 transition-all duration-300"
        >
          Claim Your Offer <FaArrowRight className="text-white" />
        </Link>

        <p className="text-gray-500 text-sm mt-4">
          *Offer valid for new patients only. Restrictions may apply.
        </p>
      </div>
    </section>
  );
}
