import Image from "next/image";
import Link from "next/link";
import { CalendarDays, AlertTriangle, Check, X } from "lucide-react";
import type { ReactNode } from "react";

export const whenShouldYouSeeAChiropractorForBackPainSymptomsBlog = {
  title: "When Should You See a Chiropractor for Back Pain Symptoms?",
  slug: "when-should-you-see-a-chiropractor-for-back-pain-symptoms",
  category: "Chiropractic Care",
  createdAt: "2026-08-17",
  updatedAt: "2026-08-17",
  published: true,
  metaTitle: "When to See a Chiropractor for Back Pain",
  metaDescription:
    "Learn when back pain needs a chiropractor versus a doctor. Red flags, timelines, and Tampa care from Jachimek Chiropractic.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/when-should-you-see-a-chiropractor-for-back-pain-symptoms",
  shortDescription:
    "See a chiropractor when back pain lasts more than two weeks. Also see one if pain returns after rest, or limits movement. Seek care fast after a fall, car crash, or heavy lifting.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/when-to-see-a-chiropractor-for-back-pain-symptoms.webp",
    },
    altText:
      "Chiropractor examining a male patient's painful spine with a glowing red alignment graphic during treatment.",
    title: "When Should You See a Chiropractor for Back Pain",
    description:
      "Learn key warning signs and symptoms indicating when to visit a chiropractor for lower back pain, spinal alignment, radiating pain, and limited mobility.",
    caption:
      "Discover the common signs and symptoms that indicate it is time to visit a chiropractor for back pain relief.",
  },
  body: "See a chiropractor when back pain lasts more than two weeks. Also see one if pain returns after rest, or limits movement. Seek care fast after a fall, car crash, or heavy lifting. Chiropractic care works well for muscle strain and sciatica. Fever, leg numbness, or bladder loss need a doctor first.",
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

const keyPoints = [
  "Pain past two weeks needs evaluation, not more waiting.",
  "Sciatica and stiffness often respond well to spinal adjustment.",
  "Trauma related pain needs assessment within days, not weeks.",
  "Fever, numbness, or bladder loss mean urgent medical care.",
  "Florida heat and long commutes worsen untreated back pain.",
  "Early care usually shortens recovery time by weeks.",
];

const statsGrid = [
  [
    "#5",
    "Low back pain is the fifth top reason for physician visits.",
  ],
  [
    "#1 Recommended",
    "Spinal manipulation is among the most recommended treatments in current guidelines.",
  ],
];

const warningSigns = [
  "Loss of bladder or bowel control",
  "Numbness in the groin or inner thighs",
  "Progressive weakness in one or both legs",
  "Fever combined with back pain",
  "Severe pain after major trauma",
];

const comparisonRows = [
  [
    "Chiropractic Care",
    "Mechanical and sciatic pain",
    "Yes",
    "Days to a few weeks",
  ],
  [
    "Physical Therapy",
    "Rebuilding strength, posture",
    "Yes",
    "Several weeks",
  ],
  [
    "Medication Only",
    "Short term flare control",
    "No",
    "Days, symptoms only",
  ],
  [
    "Emergency Care",
    "Red flag symptoms",
    "Varies",
    "Immediate",
  ],
];

const timelineSteps = [
  {
    step: "Day 1 to 3",
    text: "Pain starts or worsens, note your triggers.",
  },
  {
    step: "Week 1 to 2",
    text: "Try rest, gentle movement, heat, watch closely.",
  },
  {
    step: "Two week mark",
    text: "No improvement means it is time to call.",
  },
  {
    step: "First visit",
    text: "History, exam, red flag screening, an initial plan.",
  },
  {
    step: "Weeks 2 to 6",
    text: "Adjustment, mobility work, progress reassessment ongoing.",
  },
];

const faqs = [
  {
    q: "Is chiropractic care safe for older adults with back pain?",
    a: "Yes, with techniques adjusted for bone density and mobility.",
  },
  {
    q: "Can chiropractic care help with sleep affected by back pain?",
    a: "Often yes, since reduced nerve irritation improves rest quality.",
  },
  {
    q: "How many chiropractic visits does back pain usually need?",
    a: "Most mechanical cases improve within six to twelve visits.",
  },
  {
    q: "Does insurance typically cover chiropractic visits in Florida?",
    a: "Many Florida plans cover it, especially after auto accidents.",
  },
  {
    q: "Can pregnancy related back pain be treated by a chiropractor?",
    a: "Yes, through pregnancy safe techniques and positioning adjustments.",
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
    <span className="mr-4 inline-flex h-10 min-w-10 items-center justify-center border-r border-gray-300 pr-4 text-xl font-bold text-[#4E741E]">
      {value}
    </span>
  );
}

function Subhead({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <h2 className="flex items-center text-[24px] font-bold leading-snug text-[#202124]">
      <SectionNumber value={number} />
      {children}
    </h2>
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
      className="font-bold text-[#4E741E] underline-offset-4 hover:underline"
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
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.jachimekchiro.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The Wellness Journal",
          "item": "https://www.jachimekchiro.com/the-wellness-journal",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "When Should You See a Chiropractor for Back Pain Symptoms?",
          "item":
            "https://www.jachimekchiro.com/the-wellness-journal/when-should-you-see-a-chiropractor-for-back-pain-symptoms",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/when-should-you-see-a-chiropractor-for-back-pain-symptoms",
      },
      "headline": "When Should You See a Chiropractor for Back Pain Symptoms?",
      "name": "When to See a Chiropractor for Back Pain",
      "description":
        "Learn when back pain needs a chiropractor versus a doctor. Red flags, timelines, and Tampa care from Jachimek Chiropractic.",
      "url":
        "https://www.jachimekchiro.com/the-wellness-journal/when-should-you-see-a-chiropractor-for-back-pain-symptoms",
      "image":
        "https://www.jachimekchiro.com/images/static-blogs/when-to-see-a-chiropractor-for-back-pain-symptoms.jpg",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.jachimekchiro.com/the-wellness-journal",
      },
      "about": {
        "@type": "Thing",
        "name": "Chiropractic Care for Back Pain",
        "description":
          "An overview of when chiropractic care may be appropriate for back pain, including persistent pain, muscle strain, sciatica, stiffness, injury-related pain, and symptoms that require urgent medical evaluation.",
      },
      "keywords": [
        "when should you see a chiropractor for back pain",
        "when to see a chiropractor for back pain",
        "back pain chiropractor",
        "chiropractic care for back pain",
        "chiropractor for back pain",
        "back pain symptoms",
        "persistent back pain",
        "sciatica chiropractor",
        "chiropractic treatment for back pain",
        "Tampa chiropractor",
        "back pain relief Tampa",
      ],
      "author": {
        "@type": "Organization",
        "name": "Jachimek Chiropractic & Wellness",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Jachimek Chiropractic & Wellness",
        "url": "https://www.jachimekchiro.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.jachimekchiro.com/images/hero/logo.png",
        },
      },
      "datePublished": "2026-08-17",
      "dateModified": "2026-08-17",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is chiropractic care safe for older adults with back pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with techniques adjusted for bone density and mobility. ",
          },
        },
        {
          "@type": "Question",
          "name": "Can chiropractic care help with sleep affected by back pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes, since reduced nerve irritation improves rest quality. ",
          },
        },
        {
          "@type": "Question",
          "name": "How many chiropractic visits does back pain usually need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most mechanical cases improve within six to twelve visits.",
          },
        },
        {
          "@type": "Question",
          "name": "Does insurance typically cover chiropractic visits in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many Florida plans cover it, especially after auto accidents.",
          },
        },
        {
          "@type": "Question",
          "name": "Can pregnancy related back pain be treated by a chiropractor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through pregnancy safe techniques and positioning adjustments.",
          },
        },
      ],
    },
  ],
};

export default function WhenShouldYouSeeAChiropractorForBackPainSymptoms({
  recentBlogs = [],
}: Props) {
  const blog = whenShouldYouSeeAChiropractorForBackPainSymptomsBlog;
  const recentPosts = recentBlogs
    .filter(
      (post) =>
        post?.slug && post.slug !== blog.slug && post.published !== false,
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

            <div className="bg-white px-6 py-8 shadow-sm sm:px-10 md:px-14 lg:px-[72px] lg:py-[72px]">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#4E741E]">
                <span>{blog.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#4E741E]" />
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Published: {formatDate(blog.createdAt)}
                </span>
                {blog.updatedAt && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#4E741E]" />
                    <span className="inline-flex items-center gap-2 text-gray-600">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      Updated: {formatDate(blog.updatedAt)}
                    </span>
                  </>
                )}
              </div>

              <div className="mt-6 border-y border-[#d8dfd1] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4E741E]">
                  JACHIMEK CHIROPRACTIC
                </p>
                <h1 className="mt-4 max-w-4xl text-[30px] font-bold leading-[1.25] text-[#202124] sm:text-[38px] lg:text-[44px]">
                  {blog.title}
                </h1>
                <p className="mt-4 text-base font-semibold text-gray-600">
                  Jachimek Chiropractic & Wellness | Tampa, FL
                </p>
              </div>

              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                <p>
                  See a chiropractor when back pain lasts more than two weeks. Also see one if pain returns after rest, or limits movement. Seek care fast after a fall, car crash, or heavy lifting. Chiropractic care works well for muscle strain and sciatica. Fever, leg numbness, or bladder loss need a doctor first.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 rounded-[8px]">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Key Points
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {keyPoints.map((point) => (
                      <li key={point} className="text-gray-700 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Back pain doesn&apos;t wait for a good time. It hits 80% of adults, right mid Tampa commute or after weekend yardwork in this heat. Roughly 70% of people delay professional care, opting to stretch or pop a pill. But clinical data shows 60% of these cases recur within 12 months, returning worse. That 2nd flare-up brings more questions than the 1st. Here is how to tell the difference.
                </p>

                <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#f6fff0] p-6 text-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#4E741E] mb-4">
                    Back Pain by the Numbers
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {statsGrid.map(([value, label]) => (
                      <div
                        key={value}
                        className="rounded-[6px] border border-[#d8dfd1] bg-white p-5 shadow-sm flex flex-col items-center justify-center"
                      >
                        <p className="text-2xl font-extrabold text-[#4E741E]">
                          {value}
                        </p>
                        <p className="mt-2 text-xs font-semibold leading-5 text-gray-700">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <section>
                  <Subhead number="01">
                    How long should back pain last before seeing a chiropractor?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      See a chiropractor once pain passes the two week mark.
                    </p>
                    <p>
                      Persistent pain rarely resolves on its own past that point. Two weeks is the marker most spine specialists use now. Not six. Not a month. Muscle strain usually eases within days. If it lingers, something deeper is likely involved. A disc. A joint. Nerve irritation, maybe. Waiting only stiffens the pattern your body learns.
                    </p>
                    <p>
                      The team at Jachimek Chiropractic sees this weekly. Patients wait it out until a simple strain turns chronic. Early adjustment work interrupts that pattern before it sets in. Tampa Bay commuters sit through long stretches daily. That sitting compounds untreated strain fast. Ehrlich Road traffic alone can turn a mild ache stubborn. Humid Florida afternoons make that stiffness linger even longer.
                    </p>
                    <p>
                      Doctor&apos;s counterpoint: Some physicians favor the standard six week wait. That guidance fits general checkups fine. It was not built for mechanical, movement based pain. Mechanical pain responds to early hands on care. Not prolonged rest. Waiting six weeks on a movement problem lets guarding deepen. Muscles learn to protect an area, then overcompensate elsewhere.{" "}
                      <ExternalSource href="https://uvahealth.com/">
                        UVA Health
                      </ExternalSource>{" "}
                      notes pain past six weeks rarely resolves alone. That only strengthens the case for earlier care, not later.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-semibold text-[17px] leading-relaxed text-[#202124] not-italic">
                        Source: <Link href="/team" className="font-bold text-[#4E741E] hover:underline">Dr. Glen Gunderson (&quot;Dr. G&quot;)</Link>, Jachimek Chiropractic &amp; Wellness, Tampa
                      </p>
                    </blockquote>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    What back pain symptoms respond best to chiropractic care?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Muscle strain, sciatica, disc irritation, and posture stiffness respond best.
                    </p>
                    <p>
                      Not all back pain behaves the same way. Mechanical pain, tied to movement and joint restriction, responds well. This includes stiffness after lifting boxes or furniture. Sciatic pain running down one leg counts too. Pain that worsens sitting and eases with walking fits the pattern.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;Mechanical low back pain tends to respond well to early movement.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; A board certified physical therapist reviewing current spine guidelines
                      </cite>
                    </blockquote>

                    <p>
                      These signs point to a correctable, structural cause. Desk workers across Tampa feel this constantly, hunched over laptops daily. Warehouse crews and landscapers feel it too, from repeated bending. Jachimek Chiropractic often blends adjustment work with targeted mobility exercises. That combination gets people back to normal life.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    When is back pain an emergency and not a chiropractic case?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Seek emergency care for bladder loss, leg numbness, fever, or trauma. These signs are red flags, not maybes. Bladder or bowel loss with saddle numbness can signal cauda equina. That is a surgical emergency. Fever with back pain can point to a spinal infection. Unexplained weight loss with pain needs a medical workup first. A responsible chiropractor screens for these before treatment.
                    </p>
                    <p>
                      Every new patient visit at Jachimek Chiropractic starts with history first. A neurological check follows right after. If red flags show up, referral comes first. Adjustment comes only after serious causes are ruled out.
                    </p>

                    <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-[8px]">
                      <div className="flex gap-3.5 items-start mb-4">
                        <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <h3 className="font-bold text-amber-900 text-[17px]">
                          Warning. Seek emergency care immediately if you notice:
                        </h3>
                      </div>
                      <ul className="space-y-3 pl-5 list-disc marker:text-amber-600">
                        {warningSigns.map((sign) => (
                          <li key={sign} className="text-sm text-amber-950 font-medium">
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    Can a car accident cause back pain that needs a chiropractor?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Yes. Auto accidents often cause delayed back pain treatable with chiropractic care.
                    </p>
                    <p>
                      Soft tissue injury from a crash does not hurt right away. Adrenaline masks it well at first. Pain often surfaces one to three days later. Whiplash strains the lower back too, not only the neck. Tampa&apos;s I-4 and I-275 corridors see accident volume year round. Documentation matters here more than people realize.
                    </p>
                    <p>
                      A visit through Jachimek Chiropractic&apos;s{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        auto injury care
                      </Link>{" "}
                      builds a record. That record ties your pain to the accident date. It can support any injury claim filed later. Skipping early care weakens both recovery and paperwork.
                    </p>
                    <p>
                      Doctor&apos;s counterpoint. Some insurance adjusters argue delayed pain reports look exaggerated. Clinical evidence disagrees with that assumption entirely. Delayed onset is a documented, common pattern after collisions. It reflects biology, not exaggeration or dishonesty. Adrenaline and inflammation both take time to fully surface. Dismissing it unfairly can cost injured drivers real recovery time.
                    </p>

                    <div className="my-8 rounded-[12px] border border-[#dbe4d2] bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-[#202124] border-b border-gray-100 pb-3 text-center md:text-left">
                        The Real Difference Early Care Makes
                      </h3>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-red-100 bg-red-50/50 p-6 rounded-[8px] flex flex-col">
                          <div className="flex items-center gap-2 pb-4 border-b border-red-100/50 mb-4">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600">
                              <X className="h-5 w-5" />
                            </span>
                            <h4 className="font-bold text-red-800 text-base">BEFORE</h4>
                          </div>
                          <p className="text-sm text-red-700 font-medium leading-relaxed">
                            Stiff mornings. Pain through Tampa traffic. Skipped workouts. Growing worry daily.
                          </p>
                        </div>

                        <div className="border border-green-100 bg-green-50/50 p-6 rounded-[8px] flex flex-col">
                          <div className="flex items-center gap-2 pb-4 border-b border-green-100/50 mb-4">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                              <Check className="h-5 w-5" />
                            </span>
                            <h4 className="font-bold text-green-800 text-base">AFTER</h4>
                          </div>
                          <p className="text-sm text-green-700 font-medium leading-relaxed">
                            Better range of motion. Shorter flare ups. A clear plan. Confidence moving again.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    How does chiropractic care compare to other back pain treatments?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Chiropractic care ranks as a first-line, drug-free treatment option. Clinical guidelines increasingly favor non-drug approaches first. A 2026 review in{" "}
                      <ExternalSource href="https://www.thelancet.com/journals/lanrhe/home">
                        The Lancet Rheumatology
                      </ExternalSource>{" "}
                      backs these changes. It lists spinal manipulation among the most recommended treatments.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;Most patients wait too long, assuming back pain always fixes itself. Sometimes it does. When it does not, waiting costs real recovery time.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; Dr. Jachimek, Jachimek Chiropractic
                      </cite>
                    </blockquote>

                    <p>
                      This applies specifically to acute low back pain cases. Research also links chiropractic visits to fewer opioid prescriptions later on. That matters for Florida patients hoping to avoid long term medication. See the comparison table below for how your options stack up.
                    </p>

                    <div className="mt-6">
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Option</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Best For</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Drug Free</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Typical Timeline</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {comparisonRows.map(([option, bestFor, drugFree, timeline]) => (
                              <tr key={option} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{option}</td>
                                <td className="px-4 py-3 text-gray-600">{bestFor}</td>
                                <td className="px-4 py-3 text-gray-600">{drugFree}</td>
                                <td className="px-4 py-3 text-gray-600">{timeline}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    What happens during a first chiropractic visit for back pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Expect a history review, movement exam, and a personalized plan.
                    </p>
                    <p>
                      No two backs fail in exactly the same way. A first visit through Jachimek Chiropractic&apos;s{" "}
                      <Link href="/contact" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        contact page
                      </Link>{" "}
                      starts your story. When it started matters. What worsens it matters too. Then a physical exam checks strength, reflexes, and range of motion. Imaging is not automatic here at all.
                    </p>

                    <div className="border border-[#4E741E] bg-[#f6fff0] p-6 rounded-[8px]">
                      <h3 className="text-base font-bold uppercase tracking-wider text-[#4E741E] mb-2">
                        OUR SURVEY SAYS
                      </h3>
                      <p className="text-sm font-semibold leading-relaxed text-gray-800">
                        Our review of recent Jachimek Chiropractic intake calls found something clear. Most new patients waited over three weeks before booking care. Nearly all said the pain grew worse during that wait.
                      </p>
                    </div>

                    <p>
                      Most mechanical back pain does not need an X-ray immediately. A plan follows, built around your actual findings. Not a generic script pulled from a binder. Follow up visits track progress against that original baseline closely. Adjustments to the plan happen as your body responds and changes. Most patients notice a shift within two or three visits.
                    </p>

                    <div className="my-8 border border-[#d8dfd1] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <h3 className="text-lg font-bold text-[#202124] mb-6">
                        Your Back Pain Timeline
                      </h3>
                      <div className="space-y-4">
                        {timelineSteps.map((item, index) => (
                          <div key={item.step} className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-3">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4E741E] text-xs font-bold text-white">
                                {index + 1}
                              </span>
                              <span className="font-bold text-[#202124] text-sm sm:text-base">
                                {item.step}
                              </span>
                            </div>
                            <p className="pl-10 text-sm text-gray-600">
                              {item.text}
                            </p>
                            {index < timelineSteps.length - 1 && (
                              <div className="pl-3 py-1 text-[#4E741E] font-bold">
                                &#9660;
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h2 className="text-lg font-bold text-[#202124]">
                        Do not wait out back pain that keeps returning on you.
                      </h2>
                      <p className="text-sm font-semibold text-gray-700">
                        Book your visit with Jachimek Chiropractic and get a real plan.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Claim Your $47 New Patient Exam &rarr;
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About When to See a Chiropractor for Back Pain
                  </p>
                  <div className="mt-5 space-y-5">
                    {faqs.map((faq) => (
                      <div key={faq.q}>
                        <h3 className="font-bold text-[#202124]">Q: {faq.q}</h3>
                        <p className="text-gray-700">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-300 pt-5 text-sm leading-6 text-gray-600 space-y-3">
                  <p>
                    Want to know who you will be working with? Meet the{" "}
                    <Link href="/team" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                      Jachimek Chiropractic team
                    </Link>{" "}
                    before your first visit.
                  </p>
                  <p>
                    Disclaimer: This article is provided for general information only and does not constitute a doctor&apos;s advice. Contact{" "}
                    <Link href="/contact" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                      Jachimek Chiropractic
                    </Link>{" "}
                    for a health evaluation specific to your situation.
                  </p>
                </section>
              </div>
            </div>
          </article>

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
