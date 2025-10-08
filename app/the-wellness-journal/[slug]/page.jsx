import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Top Balance Exercises for Seniors at Home"
        items={[
          { label: "Home", href: "/" },
          { label: "Blog Details" }, // current page (no href)
        ]}
      />
    </>
  );
};

export default page;
