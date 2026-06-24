import OurServices from '@/components/shared/OurServices'
import Testimonials from '@/components/shared/Testimonials'
import CallToAction from '@/components/shared/CallToAction'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Services | Jachimek Chiropractic",
  description: "Discover the specialized chiropractic services, pain relief treatments, and wellness care options offered at Jachimek Chiropractic.",
  alternates: {
    canonical: "/services",
  },
};

const page = () => {
  return (
    <>
        <OurServices/>
        <Testimonials/>
        <CallToAction/>
    </>
  )
}

export default page