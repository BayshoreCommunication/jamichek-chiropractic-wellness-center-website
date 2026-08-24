import BlogSection from "@/components/shared/Blog";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import PainRelief from "@/components/shared/CallToAction";
import GetAllPostData from "@/lib/GetPostData";
import React from "react";
import type { Metadata } from "next";
import { benefitsOfRegularChiropracticCareBlog } from "@/components/static-blogs/blogs/benefits-of-regular-chiropractic-care";
import { theRoleOfChiropracticCareBlog } from "@/components/static-blogs/blogs/the-role-of-chiropractic-care";
import { whatCausesSciaticNervePainBlog } from "@/components/static-blogs/blogs/what-causes-sciatic-nerve-pain";
import { howChiropracticTreatmentHelpsReduceInflammationAndImproveMobilityBlog } from "@/components/static-blogs/blogs/how-chiropractic-treatment-helps-reduce-inflammation-and-improve-mobility";
import { canChiropracticCareImproveSleepQualityAndReduceNighttimePainBlog } from "@/components/static-blogs/blogs/can-chiropractic-care-improve-sleep-quality-and-reduce-nighttime-pain";
import { whatSupplementsHelpWithWeightLossBlog } from "@/components/static-blogs/blogs/what-supplements-help-with-weight-loss";
import { chiropracticTherapySlipFallRecoveryBlog } from "@/components/static-blogs/blogs/How Chiropractic Therapy Supports Recovery After Slip and Fall Injuries";
import { chiropracticCareMythsDebunkedBlog } from "@/components/static-blogs/blogs/Myths About Chiropractic Care Debunked";
import { chiropracticCareDeskWorkersBlog } from "@/components/static-blogs/blogs/is-chiropractic-care-effective-for-desk-workers-with-back-and-neck-pain";
import { whatIsTheDifferenceBetweenSciaticaAndLowerBackPainBlog } from "@/components/static-blogs/blogs/what-is-the-difference-between-sciatica-and-lower-back-pain";
import { whenShouldYouSeeAChiropractorForBackPainSymptomsBlog } from "@/components/static-blogs/blogs/when-should-you-see-a-chiropractor-for-back-pain-symptoms";
import { whatIsTheBestSleepingPositionToReduceLowerBackPainAtNightBlog } from "@/components/static-blogs/blogs/what-is-the-best-sleeping-position-to-reduce-lower-back-pain-at-night";



export const metadata: Metadata = {
  title: "The Wellness Journal - Blog | Jachimek Chiropractic",
  description: "Read the latest articles, health insights, and wellness tips from the chiropractic team at Jachimek Chiropractic & Wellness Center.",
  alternates: {
    canonical: "/the-wellness-journal",
  },
};

const page = async () => {
  const blogPostData = await GetAllPostData();
  const rawPosts = [
    whatIsTheBestSleepingPositionToReduceLowerBackPainAtNightBlog,
    whenShouldYouSeeAChiropractorForBackPainSymptomsBlog,
    whatSupplementsHelpWithWeightLossBlog,
    canChiropracticCareImproveSleepQualityAndReduceNighttimePainBlog,
    howChiropracticTreatmentHelpsReduceInflammationAndImproveMobilityBlog,
    benefitsOfRegularChiropracticCareBlog,
    whatCausesSciaticNervePainBlog,
    theRoleOfChiropracticCareBlog,
    chiropracticTherapySlipFallRecoveryBlog,
    chiropracticCareMythsDebunkedBlog,
    chiropracticCareDeskWorkersBlog,
    whatIsTheDifferenceBetweenSciaticaAndLowerBackPainBlog,
    ...(blogPostData?.data || []),
  ];

  const getBlogDate = (blog: any) => {
    const raw = blog?.date || blog?.createdAt || blog?.publishedAt || blog?.created_at || blog?.published_at;
    if (!raw) return 0;
    return new Date(raw).getTime() || 0;
  };

  const allPosts = [...rawPosts].sort((a, b) => getBlogDate(b) - getBlogDate(a));

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
