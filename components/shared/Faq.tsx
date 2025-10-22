"use client";

import Link from "next/link";
import React from "react";

export default function Faq() {
  return (
    <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16 text-center font-[Albert_Sans]">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ Content */}
      <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        <div>
          <p className="font-semibold text-gray-900 mb-2">
            Do you accept insurance?
          </p>
          <p>
            Yes! We work with most insurance companies and accept many payment
            options, such as CareCredit and HSA/FSA.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-2">
            Are you accepting new patients?
          </p>
          <p>
            Yes! Click the <span className="text-primary font-medium">Book Now</span> button and take advantage of our new
            patient special! We also treat Auto Accidents, Workman's Comp, and
            Slip &amp; Fall cases.
          </p>
          <Link href="https://go.carecredit.com/consumer/home?sitecode=CCCALDS2X" target="_blank">
          
            <span className="underline">Credit Link</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
