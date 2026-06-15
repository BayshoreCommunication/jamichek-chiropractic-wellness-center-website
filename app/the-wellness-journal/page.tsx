import BlogSection from "@/components/shared/Blog";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import PainRelief from "@/components/shared/CallToAction";
import GetAllPostData from "@/lib/GetPostData";
import React from "react";
import { benefitsOfRegularChiropracticCareBlog } from "@/components/static-blogs/blogs/benefits-of-regular-chiropractic-care";
import { theRoleOfChiropracticCareBlog } from "@/components/static-blogs/blogs/the-role-of-chiropractic-care";
import { whatCausesSciaticNervePainBlog } from "@/components/static-blogs/blogs/what-causes-sciatic-nerve-pain";
import { howChiropracticTreatmentHelpsReduceInflammationAndImproveMobilityBlog } from "@/components/static-blogs/blogs/how-chiropractic-treatment-helps-reduce-inflammation-and-improve-mobility";
import { canChiropracticCareImproveSleepQualityAndReduceNighttimePainBlog } from "@/components/static-blogs/blogs/can-chiropractic-care-improve-sleep-quality-and-reduce-nighttime-pain";

const page = async () => {
  const blogPostData = await GetAllPostData();
  const allPosts = [
    canChiropracticCareImproveSleepQualityAndReduceNighttimePainBlog,
    howChiropracticTreatmentHelpsReduceInflammationAndImproveMobilityBlog,
    benefitsOfRegularChiropracticCareBlog,
    whatCausesSciaticNervePainBlog,
    theRoleOfChiropracticCareBlog,
    ...(blogPostData?.data || []),
  ];

  return (
    <div>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="My Blog"
        items={[
          { label: "Home", href: "/" },
          { label: "My Blog" }, // current page (no href)
        ]}
      />
      <BlogSection blogPost={allPosts} />
      <PainRelief />
    </div>
  );
};

export default page;
