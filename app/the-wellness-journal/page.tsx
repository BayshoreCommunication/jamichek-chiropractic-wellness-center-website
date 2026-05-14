import BlogSection from "@/components/shared/Blog";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import PainRelief from "@/components/shared/CallToAction";
import GetAllPostData from "@/lib/GetPostData";
import React from "react";
import { theRoleOfChiropracticCareBlog } from "@/components/static-blogs/blogs/the-role-of-chiropractic-care";
import { whatCausesSciaticNervePainBlog } from "@/components/static-blogs/blogs/what-causes-sciatic-nerve-pain";

const page = async () => {
  const blogPostData = await GetAllPostData();
  const allPosts = [
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
