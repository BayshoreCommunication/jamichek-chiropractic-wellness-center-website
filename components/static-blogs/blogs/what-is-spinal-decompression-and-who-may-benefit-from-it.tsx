import Image from "next/image";
import Link from "next/link";
import { CalendarDays, AlertTriangle, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import type { ReactNode } from "react";

export const whatIsSpinalDecompressionAndWhoMayBenefitFromItBlog = {
  title: "What Is Spinal Decompression and Who May Benefit From It",
  slug: "what-is-spinal-decompression-and-who-may-benefit-from-it",
  category: "Chiropractic Care",
  createdAt: "2026-10-14",
  updatedAt: "2026-10-14",
  date: "2026-10-14",
  published: true,
  metaTitle: "Spinal Decompression - What It Is & Who Benefits",
  metaDescription:
    "Learn how spinal decompression works, who's a candidate, and what research says. Tampa's Jachimek Chiropractic explains it plainly.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/what-is-spinal-decompression-and-who-may-benefit-from-it",
  shortDescription:
    "Learn what spinal decompression is and who may benefit from it with Jachemck Chiropractic & Wellness. Discover how it relieves pressure, supports disc health, helps with chronic pain, and improves mobility.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/what-is-spinal-decompression-and-who-may-benefit-from-it.webp",
    },
    altText:
      "Patient undergoing spinal decompression therapy on a specialized table with a graphic illustration of spine elongation from Jachemck Chiropractic & Wellness.",
    title: "What Is Spinal Decompression and Who May Benefit From It",
    description:
      "Learn what spinal decompression is and who may benefit from it with Jachemck Chiropractic & Wellness. Discover how it relieves pressure, supports disc health, helps with chronic pain, and improves mobility.",
    caption:
      "Understand how non-surgical spinal decompression therapy relieves pressure on the spine and helps manage chronic pain and disc issues.",
  },
  body: "Spinal decompression is a gentle non-surgical treatment for back pain. You lie on a special table while it gently stretches your back. The process takes some pressure off the areas that are causing discomfort. It can be helpful for people dealing with a herniated disc, sciatica, or back pain that keeps coming back.",
};

type RecentBlog = {
  title?: string;
  slug?: string;
  body?: string;
  shortDescription?: string;
  createdAt?: string;
  date?: string;
  published?: boolean;
  featuredImage?: {
    image?: {
      url?: string;
    };
    altText?: string;
    title?: string;
    description?: string;
    caption?: string;
  };
};

type Props = {
  recentBlogs?: RecentBlog[];
};

const keyTakeaways = [
  "Spinal decompression is a non-surgical stretching treatment to ease back and nerve pain.",
  "It mainly helps people with a herniated disc, sciatica, degenerative disc disease, or ongoing lower back pain.",
  "Research on results is mixed overall, but many patients do see real pain relief, especially when paired with rehab exercises.",
  "A typical treatment plan runs several weeks, with sessions on a special table followed by simple exercises",
  "In Florida, treatment should always come from a licensed chiropractic physician regulated by the state",
];

const candidatePoints = [
  "Lumbar or cervical disc herniation with radiating nerve pain, confirmed through a physical exam and imaging.",
  "Chronic sciatica that hasn't resolved with rest, medication, or a short course of physical therapy.",
  "Degenerative disc disease, where discs have thinned and lost hydration over years, common past 40.",
  "Facet syndrome, where the small joints along the spine are irritated rather than the disc itself.",
  "Post car accident spinal compression, a frequent finding in Tampa patients dealing with whiplash.",
];

const beforeProtocolPoints = [
  "Sharp pain radiating down one leg past the knee",
  "Numbness or tingling in the foot or toes",
  "Difficulty sitting through a full work day",
  "Disrupted sleep from nighttime nerve pain",
  "Reliance on daily anti inflammatories",
];

const afterProtocolPoints = [
  "Reduced or resolved radicular leg pain in a majority of responders",
  "Improved sensation as nerve compression eases",
  "Longer pain free sitting and standing tolerance",
  "Fewer nighttime wake ups tied to spinal pressure",
  "Lower dependence on medication for daily function",
];

const treatmentStages = [
  {
    step: "1",
    title: "Initial Exam",
    description:
      "A doctor confirms candidacy and rules out contraindications before scheduling the first session.",
  },
  {
    step: "2",
    title: "Weeks 1 to 2, Active Phase",
    description:
      "Sessions typically run three to five times weekly while pain is at its highest.",
  },
  {
    step: "3",
    title: "Weeks 3 to 4, Rehab Integration",
    description:
      "Core and postural exercises get layered in as pain decreases.",
  },
  {
    step: "4",
    title: "Weeks 5 to 6, Tapering",
    description:
      "Frequency drops and the doctor reassesses function and whether maintenance visits are needed.",
  },
];

const comparisonData = [
  {
    treatment: "Spinal Decompression",
    invasiveness: "Non-invasive",
    timeline: "4 to 6 weeks",
    bestFit: "Disc herniation, sciatica, degenerative disc disease",
    highlight: true,
  },
  {
    treatment: "Standard Chiropractic Adjustment",
    invasiveness: "Non-invasive",
    timeline: "Ongoing, session by session",
    bestFit: "Joint restriction, general spinal misalignment",
    highlight: false,
  },
  {
    treatment: "Physical Therapy Alone",
    invasiveness: "Non-invasive",
    timeline: "6 to 12 weeks",
    bestFit: "Muscular imbalance, post injury strengthening",
    highlight: false,
  },
  {
    treatment: "Epidural Steroid Injection",
    invasiveness: "Minimally invasive",
    timeline: "Days for relief, temporary",
    bestFit: "Acute inflammation flare ups",
    highlight: false,
  },
  {
    treatment: "Discectomy Surgery",
    invasiveness: "Invasive",
    timeline: "Weeks of recovery",
    bestFit: "Severe, progressive, or emergent nerve compression",
    highlight: false,
  },
];

const faqs = [
  {
    question: "Is spinal decompression painful?",
    answer:
      "Patients describe it differently. They say it's a deep and mild stretch rather than pain. Physicians will adjust your sessions to your comfort level and stop immediately if sharp pain occurs.",
  },
  {
    question: "Does insurance cover spinal decompression therapy in Florida?",
    answer:
      "Coverage depends on diagnosis and plan. Jachimek Chiropractic works with most major insurance companies and they can verify your specific benefits before treatment starts.",
  },
  {
    question: "What is the difference between traction and spinal decompression?",
    answer:
      "Traction applies a constant pulling force, while true decompression uses a computer controlled, cyclical pull and release pattern designed to reduce intradiscal pressure more precisely.",
  },
];

function formatDate(date?: string) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(value?: string) {
  if (!value) return "";

  return value
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getRecentDescription(blog: RecentBlog) {
  return (
    blog.shortDescription ||
    stripHtml(blog.body).split(" ").slice(0, 16).join(" ") ||
    "Read the latest wellness insight from Jachimek Chiropractic."
  );
}

function SectionNumber({ value }: { value: string }) {
  return (
    <span className="mr-4 inline-flex h-10 min-w-10 items-center justify-center border-r border-gray-300 pr-4 text-xl font-bold text-[#1b3a6b]">
      {value}
    </span>
  );
}

function ExternalSource({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="font-semibold text-[#1b3a6b] underline decoration-[#c8a04a] underline-offset-4 transition hover:text-[#4E741E] hover:decoration-[#4E741E]"
    >
      {children}
    </a>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.jachimekchiro.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Wellness Journal",
          item: "https://www.jachimekchiro.com/the-wellness-journal",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "What Is Spinal Decompression and Who May Benefit From It",
          item: "https://www.jachimekchiro.com/the-wellness-journal/what-is-spinal-decompression-and-who-may-benefit-from-it",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.jachimekchiro.com/the-wellness-journal/what-is-spinal-decompression-and-who-may-benefit-from-it#article",
      headline: "Spinal Decompression - What It Is & Who Benefits",
      name: "What Is Spinal Decompression and Who May Benefit From It",
      description:
        "Learn how spinal decompression works, who's a candidate, and what research says. Tampa's Jachimek Chiropractic explains it plainly.",
      url: "https://www.jachimekchiro.com/the-wellness-journal/what-is-spinal-decompression-and-who-may-benefit-from-it",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/what-is-spinal-decompression-and-who-may-benefit-from-it",
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.jachimekchiro.com/images/static-blogs/what-is-spinal-decompression-and-who-may-benefit-from-it.webp",
        caption:
          "Understand how non-surgical spinal decompression therapy relieves pressure on the spine and helps manage chronic pain and disc issues.",
      },
      author: {
        "@type": "Organization",
        name: "Jachimek Chiropractic & Wellness",
        url: "https://www.jachimekchiro.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "Jachimek Chiropractic & Wellness",
        url: "https://www.jachimekchiro.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.jachimekchiro.com/images/hero/logo.png",
        },
      },
      datePublished: "2026-10-14",
      dateModified: "2026-10-14",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function WhatIsSpinalDecompressionAndWhoMayBenefitFromIt({
  recentBlogs = [],
}: Props) {
  const blog = whatIsSpinalDecompressionAndWhoMayBenefitFromItBlog;
  const recentPosts = recentBlogs
    .filter(
      (post) => post?.slug && post.slug !== blog.slug && post.published !== false
    )
    .slice(0, 6);

  return (
    <section className="bg-[#f5f6f2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_390px] gap-10 lg:gap-12">
          <article className="min-w-0">
            {/* Featured Image Box */}
            <div className="mb-6 overflow-hidden rounded-[8px] border border-[#dbe4d2] bg-white">
              <Image
                src={blog.featuredImage.image.url}
                alt={blog.featuredImage.altText}
                title={blog.featuredImage.title}
                width={1200}
                height={760}
                priority
                className="h-auto w-full object-cover"
              />
              <p className="px-4 py-3 text-center text-sm leading-6 text-gray-600">
                {blog.featuredImage.caption}
              </p>
            </div>

            {/* Article Container */}
            <div className="bg-white px-6 py-8 shadow-sm sm:px-10 md:px-14 lg:px-[72px] lg:py-[72px]">
              {/* Category, Published & Updated Dates */}
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#4E741E]">
                <span>{blog.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#4E741E]" />
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <CalendarDays className="h-4 w-4 text-[#4E741E]" aria-hidden="true" />
                  Published: {formatDate(blog.createdAt)}
                </span>
                {blog.updatedAt && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#4E741E]" />
                    <span className="inline-flex items-center gap-2 text-gray-600">
                      <CalendarDays className="h-4 w-4 text-[#4E741E]" aria-hidden="true" />
                      Updated: {formatDate(blog.updatedAt)}
                    </span>
                  </>
                )}
              </div>

              {/* Title Header */}
              <h1 className="mt-6 max-w-4xl text-[30px] font-bold leading-[1.25] text-[#202124] sm:text-[38px] lg:text-[44px]">
                {blog.title}
              </h1>

              {/* Body Content */}
              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                {/* Lead Intro Paragraph (Italicized as in document) */}
                <p className="text-[17px] italic leading-[1.8] text-[#1a1a2e] text-justify sm:text-left">
                  Spinal decompression is a gentle non-surgical treatment for
                  back pain. You lie on a special table while it gently stretches
                  your back. The process takes some pressure off the areas that
                  are causing discomfort. It can be helpful for people dealing
                  with a herniated disc, sciatica, or back pain that keeps coming
                  back.
                </p>

                {/* Key Takeaways Box (styled to match doc colors & layout) */}
                <div className="rounded-[8px] border-l-4 border-[#c8a04a] bg-[#f2f4f8] p-6 sm:p-7 shadow-xs">
                  <h2 className="text-[19px] font-bold text-[#1b3a6b]">
                    Key Takeaways
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {keyTakeaways.map((point) => (
                      <li key={point} className="flex items-start text-justify sm:text-left">
                        <span className="mr-3 font-bold text-[#c8a04a] select-none">
                          &bull;
                        </span>
                        <span className="text-[#1a1a2e]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 01 */}
                <section className="pt-2">
                  <h2 className="flex items-center text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="01" />
                    What Spinal Decompression Actually Does to Your Spine
                  </h2>
                  <div className="mt-5 space-y-5 text-justify sm:text-left">
                    <p>
                      Spinal decompression is a controlled, motorized traction
                      technique. A table pulls specific segments apart and eases
                      pressure inside the disc space, so a bulging or herniated
                      disc has room to retract. When a lumbar disc herniates,
                      pressure inside it is often positive. The table creates a
                      temporary negative pressure zone. That drop can pull fluid
                      and nutrients back into the disc and shrink the herniation
                      itself.
                    </p>
                    <p>
                      A retrospective cohort study published through the{" "}
                      <ExternalSource href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2912793/">
                        National Center for Biotechnology Information
                      </ExternalSource>{" "}
                      tracked lumbar disc height with CT imaging before and after a
                      6 week protocol on the DRX9000 system, and found that
                      increases in disc height correlated with drops in
                      discogenic low back pain. That&apos;s not marketing
                      language. That&apos;s a measured structural change tied to
                      a measured symptom change.
                    </p>
                    <p>
                      This is also fundamentally different from spine surgery. A
                      laminectomy or discectomy involves cutting into tissue to
                      remove bone or disc material. The non-surgical version never
                      breaks skin.
                    </p>
                  </div>

                  {/* Navy Blue Stats Cards (from Doc) */}
                  <div className="mt-7 overflow-hidden rounded-[8px] bg-[#1b3a6b] text-white shadow-md">
                    <div className="grid grid-cols-1 divide-y divide-[#2a4d85] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                      <div className="p-6 text-center">
                        <p className="text-[34px] sm:text-[40px] font-extrabold text-white leading-none">
                          80%
                        </p>
                        <p className="mt-3 text-xs sm:text-sm text-gray-200">
                          of adults report low back pain at some point, per NIH
                          data
                        </p>
                      </div>
                      <div className="p-6 text-center">
                        <p className="text-[34px] sm:text-[40px] font-extrabold text-white leading-none">
                          6
                        </p>
                        <p className="mt-3 text-xs sm:text-sm text-gray-200">
                          week course is the typical clinical decompression
                          protocol length
                        </p>
                      </div>
                      <div className="p-6 text-center">
                        <p className="text-[34px] sm:text-[40px] font-extrabold text-white leading-none">
                          94
                        </p>
                        <p className="mt-3 text-xs sm:text-sm text-gray-200">
                          patient chart review found meaningful chronic low back
                          pain relief
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs italic text-gray-500">
                    These figures come from federal health data and published
                    clinical chart reviews, cited below.
                  </p>
                </section>

                {/* Section 02 */}
                <section className="pt-2">
                  <h2 className="flex items-center text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="02" />
                    Who Actually Benefits From Spinal Decompression?
                  </h2>
                  <div className="mt-5 space-y-5 text-justify sm:text-left">
                    <p>
                      For candidacy, the clearest responders tend to fall into a
                      few categories.
                    </p>
                    <ul className="space-y-2.5 pl-2">
                      {candidatePoints.map((point) => (
                        <li key={point} className="flex items-start">
                          <span className="mr-3 font-bold text-[#1b3a6b] select-none">
                            &bull;
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Age alone rarely disqualifies someone. The more relevant
                      factors are vertebral integrity and the absence of severe
                      osteoporosis, which lines up with how most Tampa clinics
                      actually screen patients rather than turning people away
                      based on a birth year. There&apos;s a narrower group too,
                      people whose sleep is wrecked by nighttime pain flare ups.
                      If that&apos;s you, it&apos;s worth reading how{" "}
                      <Link
                        href="/the-wellness-journal/can-chiropractic-care-improve-sleep-quality-and-reduce-nighttime-pain"
                        className="font-bold text-[#1b3a6b] underline decoration-[#c8a04a] underline-offset-4 transition hover:text-[#4E741E] hover:decoration-[#4E741E]"
                      >
                        chiropractic care can improve sleep quality and reduce
                        nighttime pain
                      </Link>
                      , since this is often one piece of that fix, not the whole
                      plan.
                    </p>
                  </div>

                  {/* Before vs After Side-by-Side Comparison Box */}
                  <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Before Decompression */}
                    <div className="rounded-[8px] border border-[#f5c6cb] bg-[#fff3f3] p-5 sm:p-6">
                      <div className="flex items-center gap-2 border-b border-[#f5c6cb] pb-3 text-[#9b2c2c]">
                        <XCircle className="h-5 w-5" />
                        <h3 className="font-bold tracking-wide text-sm sm:text-base uppercase">
                          BEFORE DECOMPRESSION
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-2.5 text-sm sm:text-[15px] leading-6">
                        {beforeProtocolPoints.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="mr-2.5 font-bold text-[#9b2c2c] select-none">
                              &bull;
                            </span>
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After A Full Protocol */}
                    <div className="rounded-[8px] border border-[#c3e6cb] bg-[#f0f7f0] p-5 sm:p-6">
                      <div className="flex items-center gap-2 border-b border-[#c3e6cb] pb-3 text-[#2e7d4f]">
                        <CheckCircle2 className="h-5 w-5" />
                        <h3 className="font-bold tracking-wide text-sm sm:text-base uppercase">
                          AFTER A FULL PROTOCOL
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-2.5 text-sm sm:text-[15px] leading-6">
                        {afterProtocolPoints.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="mr-2.5 font-bold text-[#2e7d4f] select-none">
                              &bull;
                            </span>
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs italic text-gray-500">
                    These are typical outcome patterns drawn from clinical case
                    series, not a promise for any individual patient.
                  </p>
                </section>

                {/* Section 03 */}
                <section className="pt-2">
                  <h2 className="flex items-center text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="03" />
                    Does the Research Actually Support Spinal Decompression?
                  </h2>
                  <div className="mt-5 space-y-5 text-justify sm:text-left">
                    <p>
                      The research is genuinely mixed, not uniformly glowing,
                      and you deserve to know that before committing six weeks to
                      a protocol.
                    </p>
                    <p>
                      A narrative review published through{" "}
                      <ExternalSource href="https://pubmed.ncbi.nlm.nih.gov/38398287/">
                        PubMed
                      </ExternalSource>{" "}
                      on non-surgical approaches to lumbar disc herniation found
                      that traction-based therapies. Those are real findings and
                      we&apos;re not going to bury it.
                    </p>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start">
                        <span className="mr-3 font-bold text-[#1b3a6b] select-none">
                          &bull;
                        </span>
                        <span>
                          A randomized study out of Seoul National University
                          Bundang Hospital, indexed through{" "}
                          <ExternalSource href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9553669/">
                            PMC
                          </ExternalSource>
                          , compared the real treatment against a sham version
                          and tracked both pain scores and MRI-measured
                          herniation volume, not just self-reported comfort.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 font-bold text-[#1b3a6b] select-none">
                          &bull;
                        </span>
                        <span>
                          A separate retrospective chart review of 94 chronic low
                          back pain patients, published in Pain Practice and
                          indexed on{" "}
                          <ExternalSource href="https://pubmed.ncbi.nlm.nih.gov/18211590">
                            PubMed
                          </ExternalSource>
                          , reported meaningful pain reductions. And a case
                          report through PMC documented a patient with a double
                          level disc herniation who had already failed physical
                          therapy, avoided surgery entirely, and showed measurable
                          structural improvement on repeat imaging.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* ACA Guidance Quote Box */}
                  <div className="my-7 rounded-r-[8px] border-l-4 border-[#c8a04a] bg-[#fff8ec] p-6 shadow-xs">
                    <p className="text-[17px] italic leading-[1.8] text-[#1b3a6b]">
                      &ldquo;Non-surgical spinal decompression has become a
                      first line option we consider before recommending invasive
                      intervention, particularly for patients with contained
                      disc herniations who have not responded to standard
                      conservative care.&rdquo;
                    </p>
                    <p className="mt-3 text-sm font-bold text-[#1f4d78]">
                      American Chiropractic Association, clinical practice
                      guidance summary
                    </p>
                  </div>

                  <p className="text-justify sm:text-left">
                    So, This isn&apos;t a guaranteed fix, and any provider who
                    tells you it is hasn&apos;t read the same literature we just
                    did. It&apos;s a reasonable, low risk option to try before
                    surgery, particularly paired with a broader rehab plan
                    rather than sold as a standalone miracle.
                  </p>

                  {/* Pain Reduction Visual Metric */}
                  <div className="my-6 rounded-[8px] border border-gray-200 bg-[#f9fafb] p-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-[#1b3a6b]">
                      Reported Chronic Low Back Pain Reduction Across Published
                      Decompression Studies
                    </h3>
                    <div className="mt-5 mx-auto max-w-xl">
                      <div className="relative h-10 w-full overflow-hidden rounded-full bg-gray-200">
                        {/* 35% to 75% highlighted active bar */}
                        <div
                          className="absolute inset-y-0 bg-gradient-to-r from-[#1b3a6b] via-[#c8a04a] to-[#4E741E] flex items-center justify-center text-xs font-bold text-white shadow-inner"
                          style={{ left: "35%", width: "40%" }}
                        >
                          35% to 75% typical range
                        </div>
                      </div>
                      <div className="mt-2.5 flex justify-between text-xs text-gray-600 font-semibold">
                        <span>0% (no improvement)</span>
                        <span>100% (full resolution)</span>
                      </div>
                    </div>
                  </div>

                  {/* Dr. Glen Gunderson Quote Box */}
                  <div className="my-7 rounded-r-[8px] border-l-4 border-[#c8a04a] bg-[#fff8ec] p-6 shadow-xs">
                    <p className="text-[17px] italic leading-[1.8] text-[#1b3a6b]">
                      &ldquo;Patients come in expecting decompression to be a
                      miracle machine, and I have to reset that expectation
                      honestly. What it actually does is create the mechanical
                      conditions for a disc to heal itself, and that only works
                      if we pair it with the right rehab and give the tissue
                      enough time.&rdquo;
                    </p>
                    <p className="mt-3 text-sm font-bold text-[#1f4d78]">
                      Dr. Glen Gunderson, DC, Jachimek Chiropractic &amp;
                      Wellness, Tampa, FL
                    </p>
                  </div>

                  <p className="text-justify sm:text-left">
                    Patients who add the rehabilitation exercises outlined in
                    our piece on the{" "}
                    <Link
                      href="/the-wellness-journal/benefits-of-regular-chiropractic-care"
                      className="font-bold text-[#1b3a6b] underline decoration-[#c8a04a] underline-offset-4 transition hover:text-[#4E741E] hover:decoration-[#4E741E]"
                    >
                      benefits of regular chiropractic care
                    </Link>{" "}
                    consistently report better, longer lasting outcomes.
                  </p>
                </section>

                {/* Section 04 */}
                <section className="pt-2">
                  <h2 className="flex items-center text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="04" />
                    What a Spinal Decompression Session at Jachimek Chiropractic
                    Looks Like
                  </h2>
                  <div className="mt-5 space-y-5 text-justify sm:text-left">
                    <p>
                      Walk in expecting a table. You lie down fully clothed,
                      face up or face down depending on the segment involved, and
                      a harness secures your pelvis and torso. The system
                      applies a computer controlled pulling force in cycles,
                      alternating stretch and release, over roughly 20 to 30
                      minutes.
                    </p>
                    <p>
                      A full course isn&apos;t one visit. Most protocols run 15
                      to 30 sessions across four to six weeks, several times
                      weekly early on, tapering as symptoms improve. Consistency
                      drives the outcome more than any single visit does.
                    </p>
                  </div>

                  {/* Treatment Protocol Timeline (1 -> 2 -> 3 -> 4) */}
                  <div className="my-7 space-y-3">
                    {treatmentStages.map((stage, idx) => (
                      <div key={stage.step}>
                        <div className="flex items-center gap-4 rounded-[8px] border border-gray-200 bg-[#f2f4f8] p-4 sm:p-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-[#1b3a6b] text-xl font-bold text-white shadow-sm">
                            {stage.step}
                          </div>
                          <div>
                            <h3 className="font-bold text-[#1b3a6b] text-base sm:text-lg">
                              {stage.title}
                            </h3>
                            <p className="mt-1 text-sm text-[#1a1a2e]">
                              {stage.description}
                            </p>
                          </div>
                        </div>
                        {idx < treatmentStages.length - 1 && (
                          <div className="py-1 text-center font-bold text-xl text-[#c8a04a]">
                            &darr;
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Red Warning Box: Who Should Not Use Spinal Decompression */}
                  <div className="my-7 rounded-r-[8px] border-l-4 border-[#9b2c2c] bg-[#fbeaea] p-6 shadow-xs">
                    <div className="flex items-center gap-2 text-[#9b2c2c]">
                      <AlertTriangle className="h-5 w-5 shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold">
                        Who Should Not Use Spinal Decompression
                      </h3>
                    </div>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#1a1a2e] text-justify sm:text-left">
                      Decompression therapy is not appropriate for pregnant
                      patients, individuals with spinal fractures, severe
                      osteoporosis, spinal tumors, abdominal aortic aneurysm,
                      or metal implants and hardware from prior spinal surgery. A
                      qualified chiropractic physician should always screen for
                      these conditions before starting treatment.
                    </p>
                  </div>
                </section>

                {/* Section 05 */}
                <section className="pt-2">
                  <h2 className="flex items-center text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="05" />
                    Spinal Decompression vs. Other Common Back Pain Treatments
                  </h2>
                  <p className="mt-5 text-justify sm:text-left">
                    Every option here has a place. The honest question
                    isn&apos;t which is best in the abstract, it&apos;s which
                    fits your diagnosis and risk tolerance.
                  </p>

                  {/* Responsive Comparison Table */}
                  <div className="mt-7 overflow-x-auto rounded-[8px] border border-gray-200 shadow-xs">
                    <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-6">
                      <thead>
                        <tr className="bg-[#1b3a6b] text-white">
                          <th className="p-3.5 font-bold">Treatment</th>
                          <th className="p-3.5 font-bold">Invasiveness</th>
                          <th className="p-3.5 font-bold">Typical Timeline</th>
                          <th className="p-3.5 font-bold">Best Fit For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {comparisonData.map((row) => (
                          <tr
                            key={row.treatment}
                            className={`transition hover:bg-gray-50 ${
                              row.highlight
                                ? "bg-[#f4f7fc] font-semibold text-[#1b3a6b]"
                                : "bg-white text-[#202124]"
                            }`}
                          >
                            <td className="p-3.5 font-bold">{row.treatment}</td>
                            <td className="p-3.5">{row.invasiveness}</td>
                            <td className="p-3.5">{row.timeline}</td>
                            <td className="p-3.5">{row.bestFit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-6 text-justify sm:text-left">
                    For nerve pain radiating down the leg, our guide on{" "}
                    <Link
                      href="/the-wellness-journal/what-is-the-difference-between-sciatica-and-lower-back-pain"
                      className="font-bold text-[#1b3a6b] underline decoration-[#c8a04a] underline-offset-4 transition hover:text-[#4E741E] hover:decoration-[#4E741E]"
                    >
                      the difference between sciatica and lower back pain
                    </Link>{" "}
                    walks through how a doctor tells the two apart during an
                    exam.
                  </p>
                </section>

                {/* Section 06 */}
                <section className="pt-2">
                  <h2 className="flex items-center text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="06" />
                    Is Spinal Decompression Regulated, and Why Does That Matter
                    in Tampa?
                  </h2>
                  <div className="mt-5 space-y-5 text-justify sm:text-left">
                    <p>
                      Yes. The chiropractic doctors that practice in Florida,
                      and specifically Tampa Bay area, are licensed and
                      regulated by Chapter 460 of the{" "}
                      <ExternalSource href="https://www.flsenate.gov/Laws/Statutes/2025/Chapter460">
                        Florida Statutes
                      </ExternalSource>{" "}
                      through the Florida Board of Chiropractic Medicine. This
                      board exists solely to ensure the person running that
                      table knows what they are doing.
                    </p>
                    <p>
                      It is worth checking whether your provider is licensed by
                      Florida before making appointments in Carrollwood,
                      Westchase, Citrus Park, or anywhere in Tampa.
                    </p>
                    <p>
                      At{" "}
                      <Link
                        href="/the-wellness-journal"
                        className="font-bold text-[#1b3a6b] underline decoration-[#c8a04a] underline-offset-4 transition hover:text-[#4E741E] hover:decoration-[#4E741E]"
                      >
                        Jachimek Chiropractic &amp; Wellness
                      </Link>
                      , treatment programs are developed and supervised by
                      licensed physicians, Dr. Juliet Marvenko (board-certified
                      in three states), and Dr. Donny Morris (Palmer College of
                      Chiropractic graduate).
                    </p>
                  </div>

                  {/* Navy Blue High-Converting CTA Box (from Doc) */}
                  <div className="my-8 rounded-[8px] bg-[#1b3a6b] p-6 sm:p-8 text-center text-white shadow-md">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      Ready to Find Out If Decompression Can Help Your Spine?
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl mx-auto">
                      Call{" "}
                      <a
                        href="tel:8139602225"
                        className="font-bold text-[#c8a04a] underline hover:text-white"
                      >
                        813.960.2225
                      </a>{" "}
                      or book online for a $47 new patient exam at our 5111
                      Ehrlich Road Ste 128, Tampa, FL 33624 location.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-[4px] bg-[#c8a04a] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#b08b3a] shadow-sm"
                      >
                        Schedule Your Exam Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href="tel:8139602225"
                        className="inline-flex items-center rounded-[4px] border border-white/60 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                      >
                        Call 813.960.2225
                      </a>
                    </div>
                  </div>
                </section>

                {/* Frequently Asked Questions */}
                <section className="pt-2">
                  <h2 className="text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-5 space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-[8px] border border-gray-200 bg-[#fbfdf8] p-5 shadow-2xs"
                      >
                        <h3 className="text-base font-bold text-[#1b3a6b]">
                          {faq.question}
                        </h3>
                        <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#1a1a2e] text-justify sm:text-left">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Medical Disclaimer Box */}
                <div className="mt-8 rounded-[6px] border border-gray-200 bg-gray-50 p-4 text-xs italic text-gray-500 text-justify sm:text-left">
                  Disclaimer: This article is provided for informational
                  purposes and does not constitute medical advice. For any
                  spinal decompression candidacy, contact Jachimek Chiropractic
                  &amp; Wellness for a licensed chiropractic physician.
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-[8px] border border-[#d8dfd1] bg-white p-5 shadow-sm">
              <h2 className="border-b border-gray-200 pb-4 text-2xl font-bold text-[#1B2639]">
                Recent Blogs
              </h2>

              <div className="mt-5 grid gap-4">
                {recentPosts.map((post) => {
                  const image =
                    post.featuredImage?.image?.url || "/images/blog/blog1.png";

                  return (
                    <Link
                      key={post.slug}
                      href={`/the-wellness-journal/${post.slug}`}
                      className="group grid grid-cols-[96px_minmax(0,1fr)] gap-4 rounded-[8px] border border-gray-100 bg-[#fbfdf8] p-3 transition hover:border-[#b7caa8] hover:bg-[#f4faee]"
                    >
                      <Image
                        src={image}
                        alt={post.featuredImage?.altText || post.title || ""}
                        width={160}
                        height={120}
                        className="h-24 w-24 rounded-[6px] object-cover"
                      />
                      <div className="min-w-0">
                        <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#1B2639] group-hover:text-[#4E741E]">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-600">
                          {getRecentDescription(post)}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
