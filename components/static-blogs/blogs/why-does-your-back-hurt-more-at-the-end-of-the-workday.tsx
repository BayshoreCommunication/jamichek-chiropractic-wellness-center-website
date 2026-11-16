import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

export const whyDoesYourBackHurtMoreAtTheEndOfTheWorkdayBlog = {
  title: "Why Does Your Back Hurt More at the End of the Workday?",
  slug: "why-does-your-back-hurt-more-at-the-end-of-the-workday",
  category: "Chiropractic Care",
  createdAt: "2026-11-16",
  updatedAt: "2026-11-16",
  date: "2026-11-16",
  published: true,
  metaTitle: "Why Back Pain Worsens by Day's End?",
  metaDescription:
    "A Tampa chiropractor explains the spinal science behind end of day back pain and what the evidence says actually helps.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/why-does-your-back-hurt-more-at-the-end-of-the-workday",
  shortDescription:
    "Learn why your back hurts more at the end of the workday due to prolonged sitting, poor posture, muscle fatigue, and spinal stress, plus tips for relief.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/why-does-your-back-hurt-more-at-end-of-workday.webp",
    },
    altText:
      "Office worker holding his lower back in pain at a desk with a glowing spine graphic showing spinal stress.",
    title: "Why Does Your Back Hurt More at the End of the Workday?",
    description:
      "Learn why your back hurts more at the end of the workday due to prolonged sitting, poor posture, muscle fatigue, and spinal stress, plus tips for relief.",
    caption:
      "Discover common workday triggers behind evening back pain and learn how to support your spine.",
  },
  body: "Your spine loses fluid under sustained load. Lab studies show spinal discs lose close to 18% of their water content after six hours of steady compression. That changes disc height and shock absorption. Add fatigued muscles and hours of static posture; the pain by quitting time is mechanical.",
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
  "Spinal discs lose water and height under a full day of load, research confirms.",
  "Sitting puts more pressure on lumbar discs than standing does.",
  "More than 1 in 4 working adults report low back pain, according to federal NIOSH data.",
  "Mostly desk workers feel worse by the end of the day.",
  "More willpower can’t fix it. It is usually a mechanical problem with a mechanical answer.",
];

const spineStats = [
  {
    value: "18%",
    label: "Average disc fluid loss after six hours of load",
  },
  {
    value: "70%",
    label: "Of desk workers report worse back pain by evening",
  },
  {
    value: "1 in 4",
    label: "Working adults report low back pain, per NIOSH",
  },
];

const redFlagSymptoms = [
  "Pain spreading below the knee, not just across the lower back",
  "Stiffness in the morning that used to disappear by nine now stays past noon",
  "Numbness, tingling or weakness in either leg and foot",
  "When pain interrupts sleep along with the desk work",
];

const beforePoints = [
  "Pain builds steadily from noon onward",
  "Stiffness lingers past the first hour of sleep",
  "Desk breaks feel pointless, pain returns in minutes",
  "Over the counter medication barely touches it by Friday",
];

const afterPoints = [
  "Mechanical cause identified through a real exam",
  "Spinal alignment and disc pressure addressed directly",
  "Movement and posture corrections that actually hold",
  "A plan built around your job, not a generic handout",
];

const treatmentComparisonRows = [
  {
    approach: "Over the counter medication",
    targets: "Pain signal, temporarily",
    limitation: "Does not change disc mechanics",
    striped: false,
  },
  {
    approach: "General stretching",
    targets: "Surrounding muscle tension",
    limitation: "Does not correct misalignment",
    striped: true,
  },
  {
    approach: "Massage therapy",
    targets: "Soft tissue, circulation",
    limitation: "Short term relief only",
    striped: false,
  },
  {
    approach: "KDT spinal decompression",
    targets: "Disc pressure and hydration directly",
    limitation: "Requires a certified provider",
    striped: true,
  },
  {
    approach: "Chiropractic adjustment",
    targets: "Joint alignment and nerve pressure",
    limitation: "Works best paired with decompression",
    striped: false,
  },
];

const faqs = [
  {
    question: "Can poor posture cause back pain with an ergonomic chair?",
    answer:
      "Yes. A good chair reduces risk but it doesn’t eliminate static loading. Posture habits matter regardless of the equipment.",
  },
  {
    question: "How long does it take spinal discs to rehydrate overnight?",
    answer:
      "Most studies show the bulk of disc height recovery happens within the first few hours of lying down. And continuing through a full night's sleep.",
  },
  {
    question: "Is end of day back pain more common after age 40?",
    answer:
      "Disc hydration naturally declines with age. So recovery overnight is slower and the end of day effect becomes more noticeable.",
  },
  {
    question: "Does standing all day prevent this problem?",
    answer:
      "No. Prolonged standing creates its own load pattern and fatigue in different muscle groups, though the mechanism differs from seated compression.",
  },
  {
    question: "Should I see a chiropractor or a primary care doctor first?",
    answer:
      "If pain is mechanical and job-related without radiating symptoms, a chiropractic evaluation is a reasonable first step for an accurate structural assessment.",
  },
];

function formatDate(date?: string) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
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

function ExternalSource({
  href,
  children,
  tone = "navyBlue",
}: {
  href: string;
  children: ReactNode;
  tone?: "navyBlue" | "linkBlue";
}) {
  const toneClasses =
    tone === "linkBlue"
      ? "font-medium text-[#1155cc] underline decoration-[#1155cc]/60 underline-offset-4 transition hover:text-[#0c2340] hover:decoration-[#0c2340]"
      : "font-medium text-[#0c4c8a] underline decoration-[#0c4c8a]/60 underline-offset-4 transition hover:text-[#0c2340] hover:decoration-[#0c2340]";

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={toneClasses}
    >
      {children}
    </a>
  );
}

function InternalLink({
  href,
  children,
  tone = "navyBlue",
}: {
  href: string;
  children: ReactNode;
  tone?: "navyBlue" | "linkBlue";
}) {
  const toneClasses =
    tone === "linkBlue"
      ? "font-medium text-[#1155cc] underline decoration-[#1155cc]/60 underline-offset-4 transition hover:text-[#0c2340] hover:decoration-[#0c2340]"
      : "font-medium text-[#0c4c8a] underline decoration-[#0c4c8a]/60 underline-offset-4 transition hover:text-[#0c2340] hover:decoration-[#0c2340]";

  return (
    <Link href={href} className={toneClasses}>
      {children}
    </Link>
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
          name: "Why Does Your Back Hurt More at the End of the Workday?",
          item: "https://www.jachimekchiro.com/the-wellness-journal/why-does-your-back-hurt-more-at-the-end-of-the-workday",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.jachimekchiro.com/the-wellness-journal/why-does-your-back-hurt-more-at-the-end-of-the-workday#article",
      headline: "Why Back Pain Worsens by Day's End?",
      name: "Why Does Your Back Hurt More at the End of the Workday?",
      description:
        "A Tampa chiropractor explains the spinal science behind end of day back pain and what the evidence says actually helps.",
      url: "https://www.jachimekchiro.com/the-wellness-journal/why-does-your-back-hurt-more-at-the-end-of-the-workday",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/why-does-your-back-hurt-more-at-the-end-of-the-workday",
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.jachimekchiro.com/images/static-blogs/why-does-your-back-hurt-more-at-end-of-workday.webp",
        caption:
          "Discover common workday triggers behind evening back pain and learn how to support your spine.",
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
      datePublished: "2026-11-16",
      dateModified: "2026-11-16",
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

export default function WhyDoesYourBackHurtMoreAtTheEndOfTheWorkday({
  recentBlogs = [],
}: Props) {
  const blog = whyDoesYourBackHurtMoreAtTheEndOfTheWorkdayBlog;
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
                width={1000}
                height={510}
                priority
                className="h-auto w-full object-cover"
              />
              <p className="px-4 py-3 text-center text-sm leading-6 text-[#5b6770]">
                {blog.featuredImage.caption}
              </p>
            </div>

            {/* Article Container */}
            <div className="bg-white px-5 py-8 shadow-sm sm:px-10 md:px-14 lg:px-[72px] lg:py-[72px]">
              {/* Category, Published & Updated Dates (American format) */}
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#0c2340]">
                <span className="text-[#b08d57]">{blog.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#b08d57]" />
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <CalendarDays
                    className="h-4 w-4 text-[#b08d57]"
                    aria-hidden="true"
                  />
                  Published: {formatDate(blog.createdAt)}
                </span>
                {blog.updatedAt && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#b08d57]" />
                    <span className="inline-flex items-center gap-2 text-gray-600">
                      <CalendarDays
                        className="h-4 w-4 text-[#b08d57]"
                        aria-hidden="true"
                      />
                      Updated: {formatDate(blog.updatedAt)}
                    </span>
                  </>
                )}
              </div>

              {/* Title Header (justified as in doc) */}
              <h1 className="mt-6 max-w-4xl text-justify text-[28px] font-bold leading-[1.25] text-[#0c2340] sm:text-[36px] lg:text-[42px]">
                {blog.title}
              </h1>

              {/* Body Content */}
              <div className="mt-6 space-y-6 text-[16px] leading-[1.8] text-[#1a1a1a]">
                {/* Intro Paragraph (justified as in doc) */}
                <p className="text-justify text-[16.5px] leading-[1.8] text-[#1a1a1a]">
                  Your spine loses fluid under sustained load. Lab studies show
                  spinal discs lose close to 18% of their water content after
                  six hours of steady compression. That changes disc height and
                  shock absorption. Add fatigued muscles and hours of static
                  posture; the pain by quitting time is mechanical.
                </p>

                {/* KEY TAKEAWAYS Box (#f3ece0 bg, #b08d57 border with 4px left accent) */}
                <div className="rounded-[6px] border border-[#b08d57] border-l-[4px] bg-[#f3ece0] px-5 py-5 sm:px-6 sm:py-6">
                  <h2 className="text-justify text-[16px] font-bold tracking-wide text-[#0c2340]">
                    KEY TAKEAWAYS
                  </h2>
                  <ul className="mt-3.5 space-y-2 text-justify text-[15.5px] leading-[1.65] text-[#1a1a1a]">
                    {keyTakeaways.map((point) => (
                      <li key={point} className="flex items-start">
                        <span className="mr-3 select-none font-bold text-[#0c2340]">
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 1 */}
                <section className="pt-2 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[24px] font-bold leading-snug text-[#0c2340]">
                    Why Does Back Pain Worsen at the End of the Workday for Desk
                    Workers Specifically?
                  </h2>
                  <p className="text-justify text-[#1a1a1a]">
                    Sitting is not neutral for your spine. It loads lumbar discs
                    more than standing does, a finding spine researchers have
                    confirmed for decades. Add a forward head posture toward a
                    monitor, and the load shifts further onto the lower back.
                  </p>
                  <p className="text-justify text-[#1a1a1a]">
                    An industry poll run through Spine-health.com, reported by
                    the{" "}
                    <ExternalSource href="https://ergoweb.com/office-chairs-low-back-pain-and-ergonomics/">
                      Ergoweb Learning Center
                    </ExternalSource>
                    , surveyed over eleven hundred desk workers. 17% said their
                    backs felt worse by day&apos;s end, 52% called it
                    significantly worse and only 15% felt better.
                  </p>
                  <p className="text-justify text-[#1a1a1a]">
                    Our own intake data at Jachimek Chiropractic tells a nearly
                    identical story. Most new patients booking for lower back
                    pain report it building through the afternoon, not flaring
                    in the morning. That timing is a clue, not a coincidence.
                  </p>

                  {/* 3-Card Navy Stat Box (#0c2340 bg, #b08d57 figures, white copy) */}
                  <div className="mt-4 overflow-hidden rounded-[6px] border border-[#0c2340] bg-[#0c2340] text-white shadow-sm">
                    <div className="grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                      {spineStats.map((stat) => (
                        <div key={stat.value} className="p-5 sm:p-6">
                          <p className="text-justify text-[28px] sm:text-[32px] font-bold leading-none text-[#b08d57]">
                            {stat.value}
                          </p>
                          <p className="mt-2.5 text-justify text-[13px] leading-[1.45] text-white">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[24px] font-bold leading-snug text-[#0c2340]">
                    What Actually Happens Inside Your Spine During an 8 Hour
                    Shift?
                  </h2>
                  <p className="text-justify text-[#1a1a1a]">
                    Your intervertebral discs are mostly water. They absorb
                    shock like a water balloon resists a squeeze. If you put
                    load on the spine for hours, that fluid slowly moves out.
                  </p>
                  <p className="text-justify text-[#1a1a1a]">
                    A study published through the{" "}
                    <ExternalSource href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1010338">
                      National Center for Biotechnology Information
                    </ExternalSource>{" "}
                    compressed human lumbar discs for 6 hours to simulate a
                    working day. Discs lost an average of 18% of their fluid,
                    with the posterior disc wall losing closer to 30%. That is a
                    structural change you are carrying by five o&apos;clock.
                  </p>
                  <p className="text-justify text-[#1a1a1a]">
                    Lower fluid content means a stiffer, shorter and less
                    forgiving disc. It transmits more force into surrounding
                    ligaments and joints. This is the mechanical reason back
                    pain worsens through the day, even for otherwise healthy
                    spines doing ordinary desk or counter work.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[24px] font-bold leading-snug text-[#0c2340]">
                    Is Florida&apos;s Workforce More at Risk for This Than Other
                    States?
                  </h2>
                  <p className="text-justify text-[#1a1a1a]">
                    Tampa Bay is home to desk based healthcare administration,
                    logistics coordination, hospitality management, and long
                    retail shifts. Each of these professions have one thing in
                    common, long stretches in one posture with limited movement
                    breaks.
                  </p>
                  <p className="text-justify text-[#1a1a1a]">
                    The{" "}
                    <ExternalSource href="https://www.bls.gov/iif/">
                      U.S. Bureau of Labor Statistics
                    </ExternalSource>{" "}
                    tracks occupational injury patterns nationally. And
                    musculoskeletal strain remains one of the most consistently
                    reported categories in Florida. Heat and humidity add a
                    secondary factor, since workers here sit in air conditioning
                    for longer time than colder climate states allow.
                  </p>
                  <p className="text-justify text-[#1a1a1a]">
                    <ExternalSource
                      href="https://hcfl.gov/government/leadership/county-administrator"
                      tone="linkBlue"
                    >
                      Hillsborough County employs tens of thousands in
                      administrative
                    </ExternalSource>
                    , medical and logistics roles. These are the exact job
                    categories most linked to static posture and lumbar strain.
                    That is the patient base walking through clinic doors across
                    Tampa, Carrollwood, and Northdale every week.
                  </p>

                  {/* Quote Box 1 (#f2f2f0 bg, #1a1a1a quote, #0c2340 attribution) */}
                  <div className="my-5 rounded-[6px] border border-[#1a1a1a] bg-[#f2f2f0] px-5 py-5 sm:px-6 sm:py-6">
                    <p className="text-justify text-[17px] italic leading-[1.7] text-[#1a1a1a]">
                      &ldquo;Sitting adds large amounts of pressure to the back
                      muscles and spinal discs, even more than standing. People
                      with desk jobs often do not move around much, or they
                      slouch, causing more strain.&rdquo;
                    </p>
                    <p className="mt-3 text-justify text-[13px] font-bold text-[#0c2340]">
                      John Triano, DC, PhD, chiropractic researcher and
                      Spine-health.com contributor
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[24px] font-bold leading-snug text-[#0c2340]">
                    What Is the Difference Between Normal End of Day Soreness
                    and a Real Problem?
                  </h2>
                  <p className="text-justify text-[#1a1a1a]">
                    Normal mechanical fatigue eases with rest. You lie down,
                    discs rehydrate overnight, and you wake closer to baseline.
                    That cycle is expected and not, by itself, a diagnosis. A
                    real problem looks different.
                  </p>
                  <ul className="space-y-2 pl-4 sm:pl-6 text-justify text-[#1a1a1a]">
                    {redFlagSymptoms.map((symptom) => (
                      <li key={symptom} className="flex items-start">
                        <span className="mr-3 select-none font-bold text-[#0c2340]">
                          &bull;
                        </span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-justify text-[#1a1a1a]">
                    Any one of those deserves an actual evaluation. Another over
                    the counter pain reliever is not going to help. In our
                    Chiropractic &amp; Wellness Center, every{" "}
                    <InternalLink href="/contact">new patient exam</InternalLink>{" "}
                    starts with sorting out which category applies before any
                    treatment plan is built. Masking a symptom without finding
                    the cause is simply bad practice.
                  </p>

                  {/* BEFORE vs AFTER Comparison Grid (#f7ebe8 / #eaf1ec, #9c4a3c / #2e6b4f, #1a1a1a border) */}
                  <div className="mt-4 grid grid-cols-1 divide-y divide-[#1a1a1a] overflow-hidden rounded-[6px] border border-[#1a1a1a] md:grid-cols-2 md:divide-x md:divide-y-0">
                    <div className="bg-[#f7ebe8] p-5 sm:p-6">
                      <h3 className="text-justify text-xs font-bold tracking-wider text-[#9c4a3c] uppercase">
                        BEFORE
                      </h3>
                      <ul className="mt-3 space-y-2 text-justify text-[15px] leading-[1.6] text-[#1a1a1a]">
                        {beforePoints.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#eaf1ec] p-5 sm:p-6">
                      <h3 className="text-justify text-xs font-bold tracking-wider text-[#2e6b4f] uppercase">
                        AFTER
                      </h3>
                      <ul className="mt-3 space-y-2 text-justify text-[15px] leading-[1.6] text-[#1a1a1a]">
                        {afterPoints.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[24px] font-bold leading-snug text-[#0c2340]">
                    What Actually Reduces End of Workday Back Pain, Based on the
                    Evidence?
                  </h2>
                  <p className="text-justify text-[#1a1a1a]">
                    Spinal decompression therapy takes an alternative approach
                    as it aims at creating a negative pressure in the disc to
                    draw the fluids and nutrients back in; thus, counteracting
                    the physiology of the daily routine mentioned above.
                  </p>
                  <p className="text-justify text-[#1a1a1a]">
                    Dr. Glen Gunderson, a chiropractic physician with almost 40
                    years of experience in Tampa, describes the services offered
                    by{" "}
                    <InternalLink href="/help" tone="linkBlue">
                      Jachimek Chiropractic
                    </InternalLink>{" "}
                    on their website. The clinic&apos;s certified KDT spinal
                    decompression program effectively treats herniated discs,
                    sciatica, and degenerative conditions without medication or
                    surgery.
                  </p>

                  {/* Quote Box 2 (#0c2340 bg, white italic quote, #b08d57 attribution) */}
                  <div className="my-5 rounded-[6px] border border-[#000000] bg-[#0c2340] px-5 py-5 sm:px-6 sm:py-6 text-white shadow-sm">
                    <p className="text-justify text-[17px] italic leading-[1.7] text-white">
                      &ldquo;Most people assume their back pain is just part of
                      the job. It rarely is. When we actually assess the spine,
                      the cause is almost always mechanical, and mechanical
                      problems respond to mechanical correction, not just
                      rest.&rdquo;
                    </p>
                    <p className="mt-3 text-justify text-[13px] font-bold text-[#b08d57]">
                      Dr. Glen Gunderson, DC, Jachimek Chiropractic &amp;
                      Wellness Center, Tampa, FL
                    </p>
                  </div>
                </section>

                {/* Section 6: Comparison Table */}
                <section className="pt-2 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[24px] font-bold leading-snug text-[#0c2340]">
                    How Does Spinal Decompression Compare to Other Common
                    Treatments?
                  </h2>
                  <p className="text-justify text-[#1a1a1a]">
                    Every approach doesn&rsquo;t address the same mechanism. The
                    table represents what each common option actually does to
                    the spine and it&rsquo;s not just what it claims to relieve.
                  </p>

                  {/* Responsive Comparison Table (#0c2340 header, white / #f2f2f0 rows, #1a1a1a border) */}
                  <div className="overflow-x-auto rounded-[6px] border border-[#1a1a1a]">
                    <table className="w-full min-w-[560px] border-collapse text-justify text-sm leading-6">
                      <thead>
                        <tr className="bg-[#0c2340] text-white">
                          <th className="border border-[#1a1a1a] px-3.5 py-2.5 font-bold">
                            Approach
                          </th>
                          <th className="border border-[#1a1a1a] px-3.5 py-2.5 font-bold">
                            What It Targets
                          </th>
                          <th className="border border-[#1a1a1a] px-3.5 py-2.5 font-bold">
                            Limitation
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {treatmentComparisonRows.map((row) => (
                          <tr
                            key={row.approach}
                            className={
                              row.striped ? "bg-[#f2f2f0]" : "bg-white"
                            }
                          >
                            <td className="border border-[#1a1a1a] px-3.5 py-2.5 font-medium text-[#1a1a1a]">
                              {row.approach}
                            </td>
                            <td className="border border-[#1a1a1a] px-3.5 py-2.5 text-[#1a1a1a]">
                              {row.targets}
                            </td>
                            <td className="border border-[#1a1a1a] px-3.5 py-2.5 text-[#1a1a1a]">
                              {row.limitation}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="pt-1 text-justify text-[#1a1a1a]">
                    These are guidance from{" "}
                    <ExternalSource href="https://www.cdc.gov/niosh/bulletin/2019/low-back-pain.html">
                      NIOSH
                    </ExternalSource>
                    . It reports more than 1 in 4 working adults experience low
                    back pain and that addressing underlying structural factors
                    prevents the problem from worsening. We, at Jachimek
                    Wellness Center on Ehrlich Road in Tampa, offer a{" "}
                    <InternalLink href="/services">
                      full range of services
                    </InternalLink>{" "}
                    that pairs decompression with targeted adjustments. That
                    pairing is the difference between temporary relief and
                    resolution.
                  </p>
                </section>

                {/* FAQ Section */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[24px] font-bold leading-snug text-[#0c2340]">
                    FAQ
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-[8px] border border-[#d6d9de] bg-[#fbfdf8] p-5 shadow-2xs"
                      >
                        <h3 className="text-justify text-[16.5px] font-bold text-[#0c2340]">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-justify text-[15px] leading-relaxed text-[#1a1a1a]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA Box (#0c2340 bg, white heading, #b08d57 accents, centered as in doc) */}
                <div className="mt-6 rounded-[8px] border border-[#000000] bg-[#0c2340] px-6 py-7 text-center text-white shadow-md">
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-white">
                    Your back is supposed to support you.
                  </h2>
                  <p className="mt-2 text-sm sm:text-base">
                    <Link
                      href="/"
                      className="font-medium text-[#b08d57] underline decoration-[#b08d57]/80 underline-offset-4 transition hover:text-white"
                    >
                      Jachimek Chiropractic &amp; Wellness Center
                    </Link>
                  </p>
                  <p className="mt-3 text-base font-bold text-[#b08d57]">
                    Schedule your $47 new patient exam. Call{" "}
                    <a
                      href="tel:8139602225"
                      className="underline decoration-[#b08d57]/80 underline-offset-4 transition hover:text-white"
                    >
                      813.960.2225
                    </a>
                    .
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-[4px] bg-[#b08d57] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#997846]"
                    >
                      Schedule Your Exam
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a
                      href="tel:8139602225"
                      className="inline-flex items-center gap-2 rounded-[4px] border border-white/60 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call 813.960.2225
                    </a>
                  </div>
                </div>

                {/* Medical Disclaimer Box */}
                <div className="mt-6 rounded-[6px] border border-gray-200 bg-gray-50 p-4 text-justify text-xs italic text-gray-500">
                  Disclaimer: This article is provided for informational
                  purposes and does not constitute medical advice. For persistent
                  workday back pain, radiating symptoms, or spinal evaluation,
                  contact Jachimek Chiropractic &amp; Wellness to consult a
                  licensed chiropractic physician.
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
