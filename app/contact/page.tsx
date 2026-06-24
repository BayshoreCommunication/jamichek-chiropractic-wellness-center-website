import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ServicesPage from "@/components/help/ServicesPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import CallToAction from "@/components/shared/CallToAction";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Jachimek Chiropractic",
  description: "Contact Jachimek Chiropractic & Wellness Center in Tampa, FL. Get in touch with our team, find our address, phone number, and office hours.",
  alternates: {
    canonical: "/contact",
  },
};

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Drop us a line!"
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }, // current page (no href)
        ]}
      />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default page;
