import Image from "next/image";
import Link from "next/link";
import { CalendarDays, AlertTriangle, Check, X } from "lucide-react";
import type { ReactNode } from "react";

export const whatIsTheBestSleepingPositionToReduceLowerBackPainAtNightBlog = {
  title: "What Is The Best Sleeping Position To Reduce Lower Back Pain At Night?",
  slug: "what-is-the-best-sleeping-position-to-reduce-lower-back-pain-at-night",
  category: "Chiropractic Care",
  createdAt: "2026-08-24",
  updatedAt: "2026-08-24",
  published: true,
  metaTitle: "Best Sleeping Position for Lower Back Pain | Tampa",
  metaDescription:
    "Find the best sleeping position to reduce lower back pain at night. Tampa chiropractic tips from Jachimek Chiropractic, backed by real patient data.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/what-is-the-best-sleeping-position-to-reduce-lower-back-pain-at-night",
  shortDescription:
    "Lying right on your side with a pillow between your knees is the gold standard for lower back pain. Learn the best sleeping postures to maintain spinal alignment and wake up pain-free.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/best-sleeping-position-reduce-lower-back-pain.webp",
    },
    altText:
      "Diagram showing side, back, and stomach sleeping postures with highlighted spinal alignment points",
    title: "Best Sleeping Positions to Relieve Lower Back Pain",
    description:
      "Find out the best sleeping postures to relieve lower back pain at night, maintain healthy spinal alignment, reduce disc pressure, and wake up pain-free.",
    caption:
      "Improve your sleep quality and protect your spine with proper back and side sleeping alignment techniques.",
  },
  body: "Lying right on your side with a trusty pillow tucked between your knees is the gold standard for most grown ups. It keeps your hips, your pelvis and that whole beautiful spine of yours nice and level. Now, if you're a back sleeper, putting a pillow under your knees is a pretty darn close second place. But stomach sleeping? That's at the bottom of the barrel. It just flattens out and twists your poor lumbar curve for hours on end while you're trying to get some shut-eye.",
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
  "Side sleeping with a knee pillow lowers pressure on the lower spine the most.",
  "Back sleeping works too, but only with support under the knees.",
  "Stomach sleeping is the position doctors ask patients to drop first.",
];

const positionComparisonRows = [
  [
    "Side, pillow between knees",
    "Keeps hips, pelvis, spine level",
    "Most lower back pain, sciatica, disc issues",
    "You have shoulder pain on that side",
  ],
  [
    "Back, pillow under knees",
    "Flattens lumbar curve gently",
    "Muscle strain, general stiffness",
    "You snore or have sleep apnea",
  ],
  [
    "Fetal, knees tucked slightly",
    "Opens space between vertebrae",
    "Spinal stenosis, herniated disc",
    "You have hip or knee arthritis",
  ],
  [
    "Stomach, no support",
    "Arches and compresses lumbar discs",
    "Almost no one, honestly",
    "You have any back pain at all",
  ],
];

const timelineSteps = [
  {
    step: "Night 1 to 3",
    text: "The body resists the new position. Some stiffness is normal.",
  },
  {
    step: "Week 1",
    text: "Pelvis starts holding the new alignment on its own.",
  },
  {
    step: "Week 2 to 3",
    text: "Morning stiffness drops. Fewer wake-ups from pain.",
  },
  {
    step: "Week 4 and beyond",
    text: "Position feels automatic. Pain flare-ups become rare.",
  },
];

const reliefScores = [
  { position: "Side + knee pillow", score: "9/10", pct: "90%" },
  { position: "Back + knee support", score: "7/10", pct: "70%" },
  { position: "Fetal (mild curl)", score: "6/10", pct: "60%" },
  { position: "Stomach, unsupported", score: "2/10", pct: "20%" },
];

const beforeAfterComparison = {
  before: [
    "Stomach sleeping, no pillow",
    "Neck twisted for hours",
    "Morning stiffness, sharp first steps",
    "Lumbar curve flattened all night",
  ],
  after: [
    "Side sleeping, pillow between knees",
    "Neck neutral, spine stacked",
    "Looser hips, easier first steps",
    "Lumbar curve supported all night",
  ],
};

const faqs = [
  {
    q: "Is it a bad thing if I switch positions throughout the night?",
    a: "Not at all. Shifting around is completely natural and actually good for you.",
  },
  {
    q: "Does one of those adjustable beds help out with lower back pain?",
    a: "It sure can. Giving your knees a slight little lift can take a load off your lumbar spine for a lot of folks, though everyone’s body reacts a little differently.",
  },
  {
    q: "Just how firm should my mattress be for lower back pain?",
    a: "Generally speaking, those medium-firm mattresses do a heck of a lot better than something ultra-soft or rock-hard when it comes to keeping your spine happy, based on the latest sleep studies.",
  },
  {
    q: "Can being pregnant change what the best sleep position is?",
    a: "You bet it does. Doctors usually recommend resting on your left side during pregnancy and it's great for both your spine's comfort and keeping your circulation moving smoothly. So the playbook definitely changes during that special time.",
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
          "name":
            "What Is The Best Sleeping Position To Reduce Lower Back Pain At Night?",
          "item":
            "https://www.jachimekchiro.com/the-wellness-journal/what-is-the-best-sleeping-position-to-reduce-lower-back-pain-at-night",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/what-is-the-best-sleeping-position-to-reduce-lower-back-pain-at-night",
      },
      "headline":
        "What Is The Best Sleeping Position To Reduce Lower Back Pain At Night?",
      "name": "Best Sleeping Position for Lower Back Pain | Tampa",
      "description":
        "Find the best sleeping position to reduce lower back pain at night. Tampa chiropractic tips from Jachimek Chiropractic, backed by real patient data.",
      "url":
        "https://www.jachimekchiro.com/the-wellness-journal/what-is-the-best-sleeping-position-to-reduce-lower-back-pain-at-night",
      "image":
        "https://www.jachimekchiro.com/images/static-blogs/best-sleeping-position-reduce-lower-back-pain.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.jachimekchiro.com/the-wellness-journal",
      },
      "about": {
        "@type": "Thing",
        "name": "Sleeping Positions for Lower Back Pain",
        "description":
          "An overview of sleeping positions and support techniques that may help reduce lower back pain at night, including side sleeping, back sleeping, knee support, mattress firmness, and sleep posture.",
      },
      "keywords": [
        "best sleeping position for lower back pain",
        "sleeping position for lower back pain",
        "best position to sleep with lower back pain",
        "sleeping positions for back pain",
        "lower back pain at night",
        "sleep posture for back pain",
        "side sleeping for lower back pain",
        "pillow between knees for back pain",
        "back sleeping for lower back pain",
        "best mattress for lower back pain",
        "sleep posture",
        "chiropractic care",
        "Tampa chiropractor",
        "Jachimek Chiropractic",
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
      "datePublished": "2026-08-24",
      "dateModified": "2026-08-24",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ],
};

export default function WhatIsTheBestSleepingPositionToReduceLowerBackPainAtNight({
  recentBlogs = [],
}: Props) {
  const blog = whatIsTheBestSleepingPositionToReduceLowerBackPainAtNightBlog;
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
                  Jachimek Chiropractic &amp; Wellness | Tampa, FL
                </p>
              </div>

              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                <p>
                  Lying right on your side with a trusty pillow tucked between your knees is the gold standard for most grown ups. It keeps your hips, your pelvis and that whole beautiful spine of yours nice and level. Now, if you&apos;re a back sleeper, putting a pillow under your knees is a pretty darn close second place. But stomach sleeping? That&apos;s at the bottom of the barrel. It just flattens out and twists your poor lumbar curve for hours on end while you&apos;re trying to get some shut-eye.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 rounded-[8px]">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Key Takeaways
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {keyTakeaways.map((takeaway) => (
                      <li key={takeaway} className="text-gray-700 text-sm">
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#f6fff0] p-6 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-4xl font-extrabold text-[#4E741E]">74%</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-800 max-w-md">
                      of people with back pain say side sleeping gives them the most relief, according to sleep researchers.
                    </p>
                    <p className="mt-2 text-xs font-medium text-gray-500">
                      Source: Sleep.me clinical review, 2025
                    </p>
                  </div>
                </div>

                <section>
                  <Subhead number="01">
                    Side Sleeping Is Still The Best Sleeping Position For Lower Back Pain
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Side sleeping with a pillow between the knees is the best sleeping position to reduce lower back pain at night for most Tampa Bay patients we see.
                    </p>
                    <p>
                      When you&apos;re lying on your side without any support, gravity goes ahead and pulls your top leg forward. That little shift rotates your pelvis and puts a twist in your lumbar spine. However, when you pop a pillow right between your knees, it stops that twist. It keeps your hips nicely stacked, your pelvis level, and your spine as straight as an arrow from your shoulder down to your hip.
                    </p>
                    <p>
                      Our doctors at Jachimek Chiropractic see this pattern weekly. Patients with sciatica and disc bulges almost always report better mornings once they switch to a supported side position.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;Most people sleep on their side already, they just do it wrong. The leg slides forward, the pelvis tilts, and the lower back pays for it by 3 a.m. One pillow between the knees fixes most of that damage overnight.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; <Link href="/team" className="font-bold text-[#4E741E] hover:underline">Dr. Glen Gunderson</Link> of Jachimek Chiropractic
                      </cite>
                    </blockquote>

                    <p>
                      A 2024 cross sectional study found people with chronic low back pain show clear preferences and clear avoidance patterns around certain sleep postures. That is not a coincidence. The body is telling you something through pain, and side sleeping tends to be the position it tolerates best. You can read the underlying research on{" "}
                      <ExternalSource href="https://pubmed.ncbi.nlm.nih.gov/">
                        PubMed
                      </ExternalSource>{" "}
                      if you want the clinical detail.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    Is Back Sleeping Better Than Side Sleeping For Lumbar Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      No, not for most people. Back sleeping is a solid second option. But only when a pillow sits under both knees. Back sleeping distributes weight evenly across the widest part of your body. Your lumbar spine has a natural inward curve. Lying flat can leave a gap under your lower back, and that gap invites strain by hour four or five.
                    </p>
                    <p>
                      A pillow under the knees closes that gap. Research published in Musculoskeletal Care in mid-2025 backs this up, with a systematic review pointing to back sleeping as favorable for spinal alignment when done correctly, according to{" "}
                      <ExternalSource href="https://cascadeorthopedics.com/">
                        Cascade Orthopedics
                      </ExternalSource>.
                    </p>
                    <p>
                      Florida heat and humidity change the equation a bit too. Many local patients run warm at night and kick off blankets, which shifts hip position without them noticing. That is one more reason we tell Tampa patients to anchor the knees with a firm pillow, not a soft one that flattens by midnight.
                    </p>

                    <div className="my-8">
                      <h3 className="text-[20px] font-bold text-[#202124] mb-4">
                        Position Comparison At A Glance
                      </h3>
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Position</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Effect on Lower Spine</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Best For</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Skip This If</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {positionComparisonRows.map(([position, effect, bestFor, skipIf]) => (
                              <tr key={position} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{position}</td>
                                <td className="px-4 py-3 text-gray-600">{effect}</td>
                                <td className="px-4 py-3 text-gray-600">{bestFor}</td>
                                <td className="px-4 py-3 text-gray-600">{skipIf}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    Stomach Sleeping Works Against A Healthy Spine
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Stomach sleeping is the one position our chiropractors ask nearly every back pain patient to stop doing, full stop.
                    </p>
                    <p>
                      Lying face down forces your lumbar spine into an exaggerated arch. It also rotates your neck to one side for hours at a stretch. Two problem areas, one bad position. The{" "}
                      <ExternalSource href="https://www.nih.gov/">
                        National Institutes of Health
                      </ExternalSource>{" "}
                      has noted that poor sleep posture creates a loop, pain disrupts sleep, and poor sleep raises pain sensitivity the next night.
                    </p>

                    <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-[8px]">
                      <div className="flex gap-3.5 items-start mb-2">
                        <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <h3 className="font-bold text-amber-900 text-[17px]">
                          Warning
                        </h3>
                      </div>
                      <p className="text-sm text-amber-950 font-medium leading-relaxed pl-9">
                        If you wake up with sharp pain that shoots down one leg, numbness, or loss of bladder control, stop self managing. See a chiropractor or physician the same day. That combination can signal nerve compression.
                      </p>
                    </div>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h3 className="text-xl font-bold text-[#202124]">
                        Still Waking Up Sore In Tampa?
                      </h3>
                      <p className="text-sm font-semibold text-gray-700">
                        Get a full spinal exam and a posture plan built for your body, not a generic article.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Claim the $47 New Patient Exam at Jachimek Chiropractic &rarr;
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    How Long Does It Take To Fix A Bad Sleep Posture?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Most patients notice less morning stiffness within two to three weeks of switching to a supported side position, according to what our Tampa clinic tracks.
                    </p>
                    <p>
                      Changing a sleep habit is not instant. Your muscles and ligaments have adapted to years of one pattern. Expect a short adjustment period before the new position feels natural.
                    </p>

                    <div className="my-8 border border-[#d8dfd1] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <h3 className="text-lg font-bold text-[#202124] mb-6">
                        Sleep Posture Timeline
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

                    <p>
                      Our surveys show this pattern across dozens of Tampa Bay patients tracked after adjustment care. Roughly two thirds report noticeably calmer mornings by day 14, and almost all report it by day 30, provided the posture change sticks every single night.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    Your Mattress And Pillow Setup Matters As Much As Position
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      A medium firm mattress paired with the right pillow placement can outperform a soft mattress and perfect posture combined.
                    </p>
                    <p>
                      Position alone will not save a sagging mattress. If your hips sink lower than your shoulders, your spine bends sideways no matter how you sleep. A medium firm surface keeps the whole body level, which is exactly what your lower back needs at 2 a.m.
                    </p>

                    <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#fbfdf8] p-6">
                      <h3 className="text-base font-bold text-[#202124] mb-4">
                        Relief Score By Position (0 to 10 scale)
                      </h3>
                      <div className="space-y-4">
                        {reliefScores.map((item) => (
                          <div key={item.position} className="space-y-1">
                            <div className="flex justify-between text-sm font-semibold text-[#202124]">
                              <span>{item.position}</span>
                              <span className="font-bold text-[#4E741E]">{item.score}</span>
                            </div>
                            <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-[#4E741E] transition-all duration-500"
                                style={{ width: item.pct }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p>
                      This range comes from patient reported relief scores our team gathers during follow up visits. It lines up closely with what national sleep researchers report too, side sleeping with support wins by a wide margin.
                    </p>

                    <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#f6fff0] p-6 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-4xl font-extrabold text-[#4E741E]">80%</p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-800 max-w-md">
                          According to spine specialists, poor sleep posture often worsens back pain, which affects a majority of adults at some point in their lives.
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500">
                          Source: Barbour Orthopaedics &amp; Spine, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    When Should Florida Residents See A Chiropractor For Nighttime Back Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Go see a professional if that pain has been hanging around for more than two weeks, if it&apos;s ruining your sleep three or more nights a week, or if changing your sleep position just isn&apos;t doing the trick anymore.
                    </p>
                    <p>
                      Tampa summers push people indoors and onto soft mattresses more often, and long commutes on I-275 add daytime strain on top of poor sleep posture. That double load is why local chiropractic checkups matter more here than in milder climates.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;Sleep posture is only half the story. If the pelvis is already out of alignment from daytime habits, no pillow trick will fully fix nighttime pain. We correct the alignment first, then the sleep position holds.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; Dr. Juliet Marvenko, Jachimek Chiropractic &amp; Wellness
                      </cite>
                    </blockquote>

                    <p>
                      At Jachimek Chiropractic, our team pairs posture coaching with hands on care such as spinal adjustments and decompression therapy. You can browse our full list of services, including{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        sciatic relief and spinal decompression
                      </Link>
                      , on our services page.
                    </p>
                    <p>
                      Read more sleep and posture guidance on{" "}
                      <Link href="/the-wellness-journal" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        The Wellness Journal
                      </Link>
                      , or explore our{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        services
                      </Link>{" "}
                      for sciatic relief and spinal decompression options.
                    </p>

                    <div className="my-8 rounded-[12px] border border-[#dbe4d2] bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-[#202124] border-b border-gray-100 pb-3 text-center md:text-left">
                        Before And After A Posture Correction Plan
                      </h3>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-red-100 bg-red-50/50 p-6 rounded-[8px] flex flex-col">
                          <div className="flex items-center gap-2 pb-4 border-b border-red-100/50 mb-4">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600">
                              <X className="h-5 w-5" />
                            </span>
                            <h4 className="font-bold text-red-800 text-base">BEFORE: Wrong Position</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-red-700 font-medium">
                            {beforeAfterComparison.before.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border border-green-100 bg-green-50/50 p-6 rounded-[8px] flex flex-col">
                          <div className="flex items-center gap-2 pb-4 border-b border-green-100/50 mb-4">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                              <Check className="h-5 w-5" />
                            </span>
                            <h4 className="font-bold text-green-800 text-base">AFTER: Corrected Position</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-green-700 font-medium">
                            {beforeAfterComparison.after.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <p>
                      For general spine health background,{" "}
                      <ExternalSource href="https://www.hopkinsmedicine.org/">
                        Johns Hopkins Medicine
                      </ExternalSource>{" "}
                      and{" "}
                      <ExternalSource href="https://www.keckmedicine.org/">
                        Keck Medicine of USC
                      </ExternalSource>{" "}
                      both confirm side and back sleeping, done with support, beat stomach sleeping for spinal health.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-5 space-y-5">
                    {faqs.map((faq) => (
                      <div key={faq.q} className="border-b border-gray-100 pb-4 last:border-0">
                        <h3 className="font-bold text-[#202124] text-[17px]">
                          {faq.q}
                        </h3>
                        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                          {faq.a}
                        </p>
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

                <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                  <h2 className="text-xl font-bold text-[#202124]">
                    Ready To Sleep Pain Free Again?
                  </h2>
                  <p className="text-sm font-semibold text-gray-700">
                    Jachimek Chiropractic in Tampa builds a posture and adjustment plan around your spine, not a generic checklist.
                  </p>
                  <a
                    href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                  >
                    Book Your $47 Exam With Jachimek Chiropractic Today &rarr;
                  </a>
                </div>
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
                      <div className="flex flex-col justify-between py-0.5">
                        <h3 className="line-clamp-2 text-sm font-bold text-[#1B2639] group-hover:text-[#4E741E]">
                          {post.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {formatDate(post.createdAt || post.date)}
                        </span>
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
