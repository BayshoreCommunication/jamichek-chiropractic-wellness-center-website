import Image from "next/image";
import Link from "next/link";
import { CalendarDays, AlertTriangle, Check, X } from "lucide-react";
import type { ReactNode } from "react";

export const whyDoesBackPainGetWorseAfterSittingAllDayBlog = {
  title: "Why Does Back Pain Get Worse After Sitting All Day?",
  slug: "why-does-back-pain-get-worse-after-sitting-all-day",
  category: "Chiropractic Care",
  createdAt: "2026-09-08",
  updatedAt: "2026-09-08",
  published: true,
  metaTitle: "Why Does Back Pain Get Worse After Sitting",
  metaDescription:
    "Sitting spikes lumbar disc pressure up to 40 percent. See why back pain worsens by afternoon and how Jachimek Chiropractic in Tampa treats it fast.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/why-does-back-pain-get-worse-after-sitting-all-day",
  shortDescription:
    "Back pain gets worse after sitting all day because sitting pushes pressure inside your lumbar discs up by roughly 30 to 40% compared to standing. Learn how posture and core support protect your spine.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/why-does-back-pain-worse-after-sitting-all-day.webp",
    },
    altText:
      "Man at an office desk holding his lower back with a highlighted glowing spine indicating severe pain from sitting.",
    title: "Why Back Pain Gets Worse After Sitting All Day: Guide",
    description:
      "Learn how prolonged sitting impacts your spine, posture, and muscles, and discover practical tips to relieve severe lower back discomfort.",
    caption:
      "Understand the causes of lower back pain from sitting all day and find practical ways to protect your spine.",
  },
  body: "Back pain gets worse after sitting all day because sitting pushes pressure inside your lumbar discs up by roughly 30 to 40% compared to standing. It’s like your spine is quietly losing a fight it never signed up for. And the deep muscles meant to protect your back go slack from disuse. Stack eight hours of that, and your lower back pays for it by afternoon.",
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
  "Your lumbar discs take on 30 to 40% more pressure while you sit than while you stand.",
  "Roughly 8 in 10 adults deal with low back pain at some point in life, especially desk-bound professionals.",
  "If pain shows up specifically after sitting, in the afternoon rather than the morning, the culprit is usually disc load and tired core muscles.",
  "A short break every half hour or so, even just five minutes on your feet, measurably eases both the pressure and the fatigue.",
  "Jachimek Chiropractic & Wellness treats this with a combination approach, adjustments and decompression when needed.",
];

const timelineSteps = [
  {
    step: "0–30 min",
    title: "Low Risk Window",
    text: "Disc pressure is elevated but stabilizing muscles are not yet fatigued.",
  },
  {
    step: "30–45 min",
    title: "Muscle Fatigue Begins",
    text: "Deep core and multifidus muscles begin to fatigue, especially without lumbar support or movement.",
  },
  {
    step: "1–2 hrs",
    title: "Postural Shift",
    text: "Hip flexors shorten, pelvic tilt increases, and lumbar curve continues to flatten under sustained load.",
  },
  {
    step: "2–3 hrs",
    title: "Onset of Stiffness",
    text: "First noticeable dull ache or stiffness typically appears in the lower back or across the hips.",
  },
  {
    step: "4+ hrs",
    title: "Locked-Up Lower Back",
    text: "Cumulative disc pressure and muscle fatigue commonly produce the sharper, locked-up feeling most desk workers recognize by afternoon.",
  },
];

const pressureChartData = [
  {
    posture: "Reclined 130° + Lumbar Support",
    increase: "+5% to +15%",
    pct: "15%",
    color: "bg-emerald-600",
  },
  {
    posture: "Seated with Lumbar Support",
    increase: "+10% to +20%",
    pct: "30%",
    color: "bg-[#4E741E]",
  },
  {
    posture: "Upright 90°, No Support",
    increase: "+25% to +40%",
    pct: "55%",
    color: "bg-amber-500",
  },
  {
    posture: "Slouched, Forward-Flexed",
    increase: "+40% to +90%",
    pct: "90%",
    color: "bg-red-500",
  },
];

const habitComparisonRows = [
  [
    "Sitting bolt upright at 90°",
    "Increases disc pressure versus a moderate recline",
    "Common myth, not protective",
  ],
  [
    "Reclining seat back to 100°–130°",
    "Reduces disc pressure and ligament strain",
    "Genuinely helpful",
  ],
  [
    "Crossing legs while seated",
    "Tilts the pelvis and loads one side of the lumbar spine unevenly",
    "Worsens asymmetric pain",
  ],
  [
    "Standing desk used all day, no breaks",
    "Trades disc pressure for prolonged static muscle fatigue",
    "Not a full fix on its own",
  ],
  [
    "5–10 min movement break every 30–45 min",
    "Restores disc hydration and resets fatigued stabilizers",
    "Strongly protective",
  ],
  [
    "Lumbar support cushion",
    "Maintains natural spinal curve, lowers disc load",
    "Genuinely helpful",
  ],
];

const careSteps = [
  {
    stepNumber: "STEP 1",
    title: "Assessment & History",
    desc: "A hands-on exam plus a detailed look at your work setup, hours seated, and pain pattern through the day.",
  },
  {
    stepNumber: "STEP 2",
    title: "Spinal Adjustment",
    desc: "Chiropractic adjustments to restore joint motion and take pressure off compressed segments and irritated nerves.",
  },
  {
    stepNumber: "STEP 3",
    title: "Spinal Decompression (as indicated)",
    desc: "Non-surgical decompression therapy to gently reduce pressure on affected discs and support rehydration.",
  },
  {
    stepNumber: "STEP 4",
    title: "Targeted Rehab Exercises",
    desc: "Core and hip mobility work aimed directly at the multifidus and hip flexor patterns that sitting creates.",
  },
  {
    stepNumber: "STEP 5",
    title: "Posture & Break Plan",
    desc: "A specific, realistic movement-break schedule built around your actual job, not a generic handout.",
  },
];

const faqs = [
  {
    q: "Is it better to sit or stand all day for back pain?",
    a: "Neither, honestly. Standing all day just trades disc pressure for a different problem, static fatigue in your legs and lower back. Switch between sitting and standing throughout your day.",
  },
  {
    q: "Can a bad mattress make sitting-related back pain worse?",
    a: "It can. If your mattress doesn't support your lumbar curve overnight, your discs don't get the recovery and rehydration they need. Then the pain from your desk day just carries straight into the next one.",
  },
  {
    q: "How many minutes should I stand for every hour I sit?",
    a: "Most occupational research points to something like 5 to 10 minutes on your feet for every 30 to 45 minutes seated.",
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
          "name": "Why Does Back Pain Get Worse After Sitting All Day?",
          "item":
            "https://www.jachimekchiro.com/the-wellness-journal/why-does-back-pain-get-worse-after-sitting-all-day",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/why-does-back-pain-get-worse-after-sitting-all-day",
      },
      "headline": "Why Does Back Pain Get Worse After Sitting All Day?",
      "name": "Why Does Back Pain Get Worse After Sitting",
      "description":
        "Sitting spikes lumbar disc pressure up to 40 percent. See why back pain worsens by afternoon and how Jachimek Chiropractic in Tampa treats it fast.",
      "url":
        "https://www.jachimekchiro.com/the-wellness-journal/why-does-back-pain-get-worse-after-sitting-all-day",
      "image":
        "https://www.jachimekchiro.com/images/static-blogs/why-does-back-pain-worse-after-sitting-all-day.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.jachimekchiro.com/the-wellness-journal",
      },
      "about": {
        "@type": "Thing",
        "name": "Lower Back Pain from Sitting",
        "description":
          "An in-depth guide covering intradiscal pressure, slouched sitting posture, core muscle fatigue, desk job pain timelines, and chiropractic treatments for sitting-related lower back pain.",
      },
      "keywords": [
        "why does back pain get worse after sitting all day",
        "lower back pain sitting all day",
        "back pain worsens after sitting",
        "lumbar disc pressure sitting vs standing",
        "desk posture back pain relief",
        "chiropractic treatment for sitting back pain",
        "Tampa chiropractor back pain",
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
      "datePublished": "2026-09-08",
      "dateModified": "2026-09-08",
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

export default function WhyDoesBackPainGetWorseAfterSittingAllDay({
  recentBlogs = [],
}: Props) {
  const blog = whyDoesBackPainGetWorseAfterSittingAllDayBlog;
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
                  Back pain gets worse after sitting all day because sitting pushes pressure inside your lumbar discs up by roughly 30 to 40% compared to standing. It’s like your spine is quietly losing a fight it never signed up for. And the deep muscles meant to protect your back go slack from disuse. Stack eight hours of that, and your lower back pays for it by afternoon.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 rounded-[8px]">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    KEY TAKEAWAYS
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center">
                    <div className="flex flex-col items-center">
                      <p className="text-4xl font-extrabold text-[#4E741E]">40%</p>
                      <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-gray-800">
                        Higher disc pressure sitting vs. standing
                      </p>
                    </div>
                    <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-[#d8dfd1] py-4 sm:py-0 px-2">
                      <p className="text-4xl font-extrabold text-[#4E741E]">80%</p>
                      <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-gray-800">
                        Of adults get low back pain in their lifetime
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-4xl font-extrabold text-[#4E741E]">2/3</p>
                      <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-gray-800">
                        Of a typical office workday spent seated
                      </p>
                    </div>
                  </div>
                </div>

                <section>
                  <Subhead number="01">
                    The Real Cause of Lower Back Pain from Sitting
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Sitting is not the enemy by itself. The real problem is how you sit, and for how long. Here is what is really going on inside your back.
                    </p>

                    <ul className="space-y-4 pl-2">
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          <strong className="font-bold text-[#202124]">Your spine loses its natural shape.</strong>{" "}
                          When you stand, your back keeps a gentle curve and your legs and hips carry most of your weight. When you slouch in a chair, that curve flattens out. Now your lower back has to carry weight it is not built to carry alone.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          <strong className="font-bold text-[#202124]">The old &quot;sitting destroys your discs&quot; claim is not fully true anymore.</strong>{" "}
                          For years, people were told sitting always squeezes the discs in your spine harder than standing does. Newer research looked at this more closely and found that in a healthy back, sitting and standing put about the same pressure on the discs. So sitting by itself is not the villain everyone thought it was.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          <strong className="font-bold text-[#202124]">Bad posture is the real problem, not the chair.</strong>{" "}
                          Slouching forward, rounding your shoulders, and sinking into the seat are what cause trouble. Studies on office workers found real back discomfort within just one hour of slouched sitting, even though upright sitting caused far less strain.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          <strong className="font-bold text-[#202124]">Weak core muscles let your spine down.</strong>{" "}
                          Deep inside your belly and lower back, you have small muscles that are supposed to hold your spine steady. If you sit too much without moving, these muscles get weak and stop doing their job properly. Then your ligaments and joints have to take over, and they were never meant to carry that load.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          <strong className="font-bold text-[#202124]">It builds up slowly, not all at once.</strong>{" "}
                          Nobody wakes up one day with sudden back pain from sitting. It starts small. A dull ache by afternoon. Stiffness when you finally get up. Waking up and still feeling tight. Over weeks and months, this adds up.
                        </div>
                      </li>
                    </ul>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;I hear the same story from patient after patient. Fine in the morning, tight by lunch, and by the time they&apos;re walking out the office door their lower back feels locked up. That&apos;s hours of disc load and muscle fatigue stacking on top of each other.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; <Link href="/team" className="font-bold text-[#4E741E] hover:underline">Dr. Glen Gunderson (&quot;Dr. G&quot;)</Link>, Jachimek Chiropractic &amp; Wellness, Tampa
                      </cite>
                    </blockquote>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    How Long Does It Take for Sitting to Trigger Back Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Most people feel fine for the first 30 to 45 minutes. After that, posture starts to slip and the lower back loses its support. Between two and three hours, a dull ache or stiffness usually shows up. Pass four hours and that ache often locks into the tight, stuck feeling most desk workers know well.
                    </p>

                    <div className="my-8 border border-[#d8dfd1] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <h3 className="text-lg font-bold text-[#202124] mb-6">
                        A Typical Desk-Job Pain Timeline
                      </h3>
                      <div className="space-y-4">
                        {timelineSteps.map((item, index) => (
                          <div key={item.step} className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-3">
                              <span className="flex h-7 px-2.5 items-center justify-center rounded-full bg-[#4E741E] text-xs font-bold text-white whitespace-nowrap">
                                {item.step}
                              </span>
                              <span className="font-bold text-[#202124] text-sm sm:text-base">
                                {item.title}
                              </span>
                            </div>
                            <p className="pl-10 text-sm text-gray-600">
                              {item.text}
                            </p>
                            {index < timelineSteps.length - 1 && (
                              <div className="pl-4 py-1 text-[#4E741E] font-bold">
                                &#9660;
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    Intradiscal Pressure by Posture - The Range the Research Shows
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      All sitting don’t your spine the same way. Chair angle, presence or absence of lumbar support, seat recline angles – all of these will affect sitting posture, and so affect the outcome. It’s no surprise, then, that these variables produce a range of possible values – one value for the study as a whole, rather than for a specific chair.
                    </p>
                    <p>
                      The chart below pulls together what studies have measured across different sitting postures, using standing as the baseline everything else is compared to.
                    </p>

                    <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#fbfdf8] p-6">
                      <h3 className="text-base font-bold text-[#202124] mb-4">
                        Intradiscal Pressure Load Relative to Standing
                      </h3>
                      <div className="space-y-4">
                        {pressureChartData.map((item) => (
                          <div key={item.posture} className="space-y-1">
                            <div className="flex justify-between text-sm font-semibold text-[#202124]">
                              <span>{item.posture}</span>
                              <span className="font-bold text-[#4E741E]">{item.increase}</span>
                            </div>
                            <div className="h-3.5 w-full rounded-full bg-gray-200 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${item.color} transition-all duration-500`}
                                style={{ width: item.pct }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p>
                      Sitting straight up at 90 degrees as we&apos;ve been taught, actually places more pressure on the spine than a slight recline. A reclining 100 to 130 degrees while keeping the natural curve in the lower back places less stress on the discs.
                    </p>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h3 className="text-xl font-bold text-[#202124]">
                        Stop Guessing at What&apos;s Causing Your Back Pain
                      </h3>
                      <p className="text-sm font-semibold text-gray-700 max-w-lg">
                        Get a complete chiropractic consultation, exam, and personalized treatment plan for $47 at Jachimek Chiropractic &amp; Wellness.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Claim the $47 New Patient Special &rarr;
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    Desk Posture Habits That Make Pain Worse vs. What Actually Helps
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Some habits that feel protective aren&apos;t. Others that sound minor carry real weight. Worth laying out side by side, based on everything covered above.
                    </p>

                    <div className="my-8">
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Habit</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Effect on Lumbar Spine</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Verdict</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {habitComparisonRows.map(([habit, effect, verdict]) => (
                              <tr key={habit} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{habit}</td>
                                <td className="px-4 py-3 text-gray-600">{effect}</td>
                                <td className="px-4 py-3 font-semibold text-[#4E741E]">{verdict}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    How Jachimek Chiropractic Approaches Sitting-Related Back Pain
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Fixing this well means going after both problems at once, the compressed disc and the muscle that&apos;s given up on the job, instead of just chasing whatever hurts today. Here&apos;s roughly what that looks like at Jachimek Chiropractic &amp; Wellness.
                    </p>

                    <div className="my-8 border border-[#d8dfd1] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <div className="space-y-6">
                        {careSteps.map((step, idx) => (
                          <div key={step.stepNumber} className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-[#4E741E] text-sm uppercase tracking-wide">
                                {step.stepNumber}
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-[#4E741E]" />
                              <h3 className="font-bold text-[#202124] text-base sm:text-lg">
                                {step.title}
                              </h3>
                            </div>
                            <p className="pl-0 sm:pl-16 text-sm text-gray-600 leading-relaxed">
                              {step.desc}
                            </p>
                            {idx < careSteps.length - 1 && (
                              <div className="text-center sm:text-left sm:pl-7 pt-2 text-[#4E741E] font-bold">
                                &#8595;
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    Is There Any Way to Avoid Back Pain from Sitting at Work Without Changing Jobs?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      According to the{" "}
                      <ExternalSource href="https://www.ninds.nih.gov/">
                        National Institute of Neurological Disorders and Stroke
                      </ExternalSource>
                      , 80 percent of adults suffer back pain during their lifetimes, and sitting habits are considered a proven risk factor when it is combined with lack of physical activity during the week.
                    </p>
                    <p>
                      A randomized study tracked in the CDC&apos;s{" "}
                      <ExternalSource href="https://www.cdc.gov/niosh/">
                        NIOSH occupational health archive
                      </ExternalSource>{" "}
                      cut desk workers&apos; sitting time by about 1.5 hours a day. They found real improvement in pain, energy, and sleep, without hurting productivity or focus at all. That last part is the one people worry about most, and it turns out not to be a tradeoff. This is a short list, and it holds up whether you&apos;re at a desk in an office or a kitchen table at home.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;None of this works if it doesn&apos;t fit into someone&apos;s real day. We&apos;re not handing out the same printout to every patient. We look at their actual chair, their actual hours, and build something they&apos;ll realistically stick with.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; <Link href="/team" className="font-bold text-[#4E741E] hover:underline">Dr. Juliet Marvenko (&quot;Dr. J&quot;)</Link>, Jachimek Chiropractic &amp; Wellness, Tampa
                      </cite>
                    </blockquote>

                    <p>
                      The{" "}
                      <ExternalSource href="https://www.aaos.org/">
                        American Academy of Orthopaedic Surgeons
                      </ExternalSource>{" "}
                      and other clinical groups consistently point out that most low back pain responds to conservative care first, targeted exercise, manual therapy, changing how you move through your day, well before anything more invasive gets considered. That&apos;s the same approach behind chiropractic and decompression care at Jachimek in Tampa. Fix what&apos;s actually driving it, don&apos;t just manage it forever.
                    </p>

                    <p>
                      Explore our full range of treatments on our{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        services page
                      </Link>
                      , or read more posture and spine health articles on{" "}
                      <Link href="/the-wellness-journal" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        The Wellness Journal
                      </Link>
                      .
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
                    Disclaimer: This information is not medical advice directly. For your unique situation, contact the care team at Jachimek Chiropractic &amp; Wellness, 5111 Ehrlich Road Ste 128, Tampa, FL 33624.
                  </p>
                </section>

                <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                  <h2 className="text-xl font-bold text-[#202124]">
                    Your Back Doesn&apos;t Have to Wait Until It&apos;s Unbearable
                  </h2>
                  <p className="text-sm font-semibold text-gray-700 max-w-lg">
                    Jachimek Chiropractic &amp; Wellness helps Tampa Bay professionals fix sitting-related back pain at the source. New patients start with a full exam and personalized plan for $47.
                  </p>
                  <a
                    href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                  >
                    Book Your Visit at Jachimek Chiropractic &amp; Wellness &rarr;
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
                        className="h-20 w-full rounded-[6px] object-cover"
                      />
                      <div className="flex flex-col justify-center">
                        <p className="text-xs font-semibold text-[#4E741E]">
                          {formatDate(post.createdAt || post.date)}
                        </p>
                        <h3 className="mt-1 line-clamp-2 text-sm font-bold text-[#1B2639] group-hover:text-[#4E741E]">
                          {post.title}
                        </h3>
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
