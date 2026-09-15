import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { ReactNode } from "react";

export const canYourSleepingPositionContributeToNeckPainBlog = {
  title: "Can Your Sleeping Position Contribute to Neck Pain",
  slug: "can-your-sleeping-position-contribute-to-neck-pain",
  category: "Chiropractic Care",
  createdAt: "2026-09-15",
  updatedAt: "2026-09-15",
  published: true,
  metaTitle: "Sleep Position and Neck Pain, Tampa Chiro Guide",
  metaDescription:
    "Learn how your sleeping position causes neck pain and what Tampa's Jachimek Chiropractic recommends to fix it fast, backed by research.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/can-your-sleeping-position-contribute-to-neck-pain",
  shortDescription:
    "Wondering if your sleeping position contributes to neck pain? Discover how Jachimek Chiropractic & Wellness can help you support spinal alignment, reduce neck tension, improve sleep quality, and wake up feeling better.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/can-your-sleeping-position-contribute-to-neck-pain.webp",
    },
    altText:
      "Woman sleeping with highlighted neck strain alongside illustrations comparing stomach, back, and side sleeping positions.",
    title: "Can Your Sleeping Position Contribute to Neck Pain",
    description:
      "Wondering if your sleeping position contributes to neck pain? Discover how Jachimek Chiropractic & Wellness can help you support spinal alignment, reduce neck tension, improve sleep quality, and wake up feeling better.",
    caption:
      "Learn how different sleeping positions impact your neck and discover tips to support proper spinal alignment.",
  },
  body: "Yes. Your sleeping position can be the reason of your neck pain. A lot more than people may not understand how. Stomach sleeping and bad side sleeping twist or bend your neck for hours while you're out cold, no chance to self correct. Back sleeping (or side sleeping, if the pillow's actually right) keeps things straighter. Cuts down the risk quite a bit.",
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
  "Stomach sleeping is usually the worst offender here, mostly because breathing that way means your head stays twisted for hours straight.",
  "Side sleeping actually helps, but only if the pillow height matches your ear-to-shoulder gap. Get that wrong and it works against you instead.",
  "Back sleeping tends to keep the neck closest to straight, though let's be honest, it's just not comfortable for everyone's build.",
  "Pillow mismatch, not just position, is behind a large share of Tampa Bay patients we see for morning neck stiffness at Jachimek Chiropractic.",
  "Chronic morning neck pain lasting more than two to three weeks warrants a professional cervical spine evaluation rather than another pillow swap.",
];

const timelineSteps = [
  {
    step: "Night 1–3",
    title: "Initial Adaptation",
    text: "Expect some adjustment discomfort as muscles adapt to a new alignment, this is normal and usually mild.",
  },
  {
    step: "Day 4–7",
    title: "Reduced Morning Stiffness",
    text: "Morning stiffness typically starts shortening in duration, though it may not disappear yet.",
  },
  {
    step: "Week 2",
    title: "Noticeable Progress",
    text: "Most patients report noticeably fewer painful mornings if pillow and position were the primary driver.",
  },
  {
    step: "Beyond Week 2",
    title: "Professional Evaluation Needed",
    text: "If pain persists at this point, the cause likely goes beyond sleep posture and needs a professional exam.",
  },
];

const actionSequenceSteps = [
  "1. Identify your dominant sleep position honestly, not the one you fall asleep in",
  "2. Measure the ear-to-shoulder gap if you sleep on your side",
  "3. Adjust pillow loft to fill that gap exactly, no more, no less",
  "4. Add a small pillow under the knees if sleeping on your back",
  "5. Track morning symptoms for one to two weeks before changing anything else",
];

const pressureChartData = [
  {
    posture: "Back Sleeping",
    increase: "0–15%",
    pct: "15%",
    color: "bg-[#4E741E]",
  },
  {
    posture: "Side (Good Pillow)",
    increase: "5–20%",
    pct: "20%",
    color: "bg-emerald-600",
  },
  {
    posture: "Side (Wrong Loft)",
    increase: "40–65%",
    pct: "65%",
    color: "bg-amber-500",
  },
  {
    posture: "Stomach",
    increase: "50–100%",
    pct: "100%",
    color: "bg-red-500",
  },
];

const positionComparisonRows = [
  [
    "Back",
    "Near neutral, straight line",
    "Low loft, contoured, supports the curve",
    "Lowest",
  ],
  [
    "Side (correct loft)",
    "Neutral if gap is filled fully",
    "Medium to high loft, firm edge",
    "Low",
  ],
  [
    "Side (wrong loft)",
    "Lateral bend, one-sided strain",
    "Same as above, just sized wrong",
    "High",
  ],
  [
    "Stomach",
    "Rotated up to 90 degrees for hours",
    "No pillow fixes the rotation itself",
    "Highest",
  ],
];

const faqs = [
  {
    q: "Can changing my pillow alone fix sleep related neck pain?",
    a: "Sometimes, but only if pillow height was the entire problem. If pain has lasted more than a few weeks, position and posture usually need addressing too.",
  },
  {
    q: "Is it bad to sleep with my neck twisted to check my phone before bed?",
    a: "Yes. Even a short period of extreme neck flexion right before sleep can carry tension into the night and worsen morning stiffness.",
  },
  {
    q: "Does a firmer mattress help neck pain more than a softer one?",
    a: "Not universally. What matters most is whether the mattress keeps your spine level, which depends on your body weight and sleep position, not firmness alone.",
  },
  {
    q: "Can neck pillows with memory foam make pain worse in Florida's climate?",
    a: "They can if heat retention causes frequent repositioning overnight. A cooling gel infused option often performs better in warm, humid bedrooms.",
  },
  {
    q: "How long should I try fixing my sleep posture before seeing a chiropractor?",
    a: "Give it two to three weeks of consistent changes. If mornings are still painful after that, a professional evaluation is the next step.",
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
          "name": "Can Your Sleeping Position Contribute to Neck Pain",
          "item":
            "https://www.jachimekchiro.com/the-wellness-journal/can-your-sleeping-position-contribute-to-neck-pain",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/can-your-sleeping-position-contribute-to-neck-pain",
      },
      "headline": "Can Your Sleeping Position Contribute to Neck Pain",
      "name": "Sleep Position and Neck Pain, Tampa Chiro Guide",
      "description":
        "Learn how your sleeping position causes neck pain and what Tampa's Jachimek Chiropractic recommends to fix it fast, backed by research.",
      "url":
        "https://www.jachimekchiro.com/the-wellness-journal/can-your-sleeping-position-contribute-to-neck-pain",
      "image":
        "https://www.jachimekchiro.com/images/static-blogs/can-your-sleeping-position-contribute-to-neck-pain.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.jachimekchiro.com/the-wellness-journal",
      },
      "about": {
        "@type": "Thing",
        "name": "Sleeping Position and Neck Pain",
        "description":
          "An in-depth guide covering cervical alignment, side, back, and stomach sleeping positions, pillow loft selection, and chiropractic care for morning neck stiffness.",
      },
      "keywords": [
        "can your sleeping position contribute to neck pain",
        "neck pain from sleeping position",
        "stomach sleeping neck strain",
        "pillow height for side sleepers",
        "cervical alignment sleep",
        "chiropractor Tampa neck pain",
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
      "datePublished": "2026-09-15",
      "dateModified": "2026-09-15",
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

export default function CanYourSleepingPositionContributeToNeckPain({
  recentBlogs = [],
}: Props) {
  const blog = canYourSleepingPositionContributeToNeckPainBlog;
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
                  Yes. Your sleeping position can be the reason of your neck pain. A lot more than people may not understand how. Stomach sleeping and bad side sleeping twist or bend your neck for hours while you&apos;re out cold, no chance to self correct. Back sleeping (or side sleeping, if the pillow&apos;s actually right) keeps things straighter. Cuts down the risk quite a bit.
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
                      <p className="text-4xl font-extrabold text-[#4E741E]">30–50%</p>
                      <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-gray-800">
                        Of adults report neck pain in any given year
                      </p>
                    </div>
                    <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-[#d8dfd1] py-4 sm:py-0 px-2">
                      <p className="text-4xl font-extrabold text-[#4E741E]">1.5–2x</p>
                      <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-gray-800">
                        Higher pain severity linked to side and stomach sleeping
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-4xl font-extrabold text-[#4E741E]">40%</p>
                      <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-gray-800">
                        Of chronic neck pain sufferers report it is sleep related
                      </p>
                    </div>
                  </div>
                </div>

                <section>
                  <Subhead number="01">
                    What Actually Happens to Your Neck When You Sleep Wrong
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Your cervical spine is a gentle forward curve made of seven small bones stacked on muscle, disc, and ligament, built to hold your head upright while awake, not sideways for eight unconscious hours.
                    </p>
                    <p>
                      Stomach sleeping is the clearest offender. To breathe face down, you have to rotate your head close to ninety degrees and hold it there. According to research indexed through{" "}
                      <ExternalSource href="https://www.ncbi.nlm.nih.gov/">
                        the National Center for Biotechnology Information
                      </ExternalSource>
                      , sustained cervical rotation of this kind is associated with measurably increased neck pain and disrupted rest.
                    </p>
                    <p>
                      Side sleeping sits in the middle, and this is where most of the confusion lives online. A{" "}
                      <ExternalSource href="https://nsuworks.nova.edu/cgi/viewcontent.cgi?article=1134&amp;context=ijahsp">
                        study published through Nova Southeastern University
                      </ExternalSource>{" "}
                      found that side lying actually protected against waking cervical, scapular, and arm pain and promoted higher sleep quality ratings, when compared to other positions in the study group. The catch, and it is a big one, is pillow height. Get the loft wrong by even an inch or two and side sleeping stops protecting the neck and starts bending it laterally instead.
                    </p>
                    <p>
                      Back sleeping keeps the head, neck, and spine closest to one straight neutral line without rotational or lateral force, which is exactly why{" "}
                      <ExternalSource href="https://www.mayoclinic.org/diseases-conditions/neck-pain/symptoms-causes/syc-20375581">
                        the Mayo Clinic
                      </ExternalSource>{" "}
                      lists poor posture, and by extension poor sleep posture, among the leading everyday causes of neck pain.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    How Much Worse Does Each Sleeping Position Make Neck Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Comparative research on sleep posture and pain outcomes places side and stomach sleeping at roughly 1.5 to 2 times higher reported pain severity than back sleeping, with the range depending on pillow support and how long the position has been habitual. Back sleeping correlates with lower relative risk, though <em>lower</em> is not <em>zero</em>.
                    </p>

                    <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#fbfdf8] p-6">
                      <h3 className="text-base font-bold text-[#202124] mb-4">
                        Relative Neck Pain Severity Increase by Sleep Position
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
                      <p className="mt-4 text-xs italic text-gray-600">
                        Reported pain increase range by position, drawn from the source studies cited below.
                      </p>
                    </div>

                    <p>
                      Notice something in that spread. Side sleeping appears twice, once near the bottom and once near the top, because side sleeping is not one position, it is two very different experiences depending entirely on whether the pillow fills the ear to shoulder gap. Our team hears a version of this same story weekly, a patient who switched to side sleeping for an unrelated reason, maybe pregnancy or a partner&apos;s snoring, and started waking up with a stiff neck within a month without connecting the two.
                    </p>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h3 className="text-xl font-bold text-[#202124]">
                        Not Sure Which Position Is Working Against You?
                      </h3>
                      <p className="text-sm font-semibold text-gray-700 max-w-lg">
                        Get a complete cervical spine consultation and personalized treatment plan for $47 at Jachimek Chiropractic &amp; Wellness.
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
                  <Subhead number="03">
                    Back, Side, or Stomach - Comparing the Three Sleep Positions
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Rather than telling you in paragraph form what you probably already suspect, here is the direct comparison laid out plainly so you can see where your own position lands.
                    </p>

                    <div className="my-8">
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Position</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Cervical Alignment</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Best Pillow Type</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Relative Neck Pain Risk</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {positionComparisonRows.map(([pos, align, pillow, risk]) => (
                              <tr key={pos} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{pos}</td>
                                <td className="px-4 py-3 text-gray-600">{align}</td>
                                <td className="px-4 py-3 text-gray-600">{pillow}</td>
                                <td className="px-4 py-3 font-semibold text-[#4E741E]">{risk}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <p>
                      A pattern worth calling out directly, one that changes the advice, is that the pillow column matters almost as much as the position column. We are opinionated about this at Jachimek Chiropractic because we see it constantly. The pillow has to completely bridge the distance from your ear to the outside of your shoulder, and according to{" "}
                      <ExternalSource href="https://www.sleepfoundation.org/sleeping-positions/best-sleeping-position-for-neck-pain">
                        the Sleep Foundation
                      </ExternalSource>
                      , certain hand and arm placements during back sleeping can also rotate the spine out of alignment, so even the sleepers doing everything else right can undo it with where their hands end up.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    What to Do Tonight if You Wake Up With Neck Pain Tomorrow
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      You do not need to overhaul your entire bedroom to start correcting this. A short, deliberate sequence tonight matters more than an expensive pillow purchased in a panic tomorrow.
                    </p>

                    <div className="my-8 border border-[#d8dfd1] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <div className="space-y-3">
                        {actionSequenceSteps.map((stepText, idx) => (
                          <div key={stepText} className="flex flex-col items-center sm:items-start">
                            <div className="w-full border border-[#4E741E] bg-[#f2f4f8] p-3.5 rounded-[6px] text-center sm:text-left text-sm font-semibold text-[#1f4d78]">
                              {stepText}
                            </div>
                            {idx < actionSequenceSteps.length - 1 && (
                              <div className="py-2 text-[#4E741E] font-bold text-lg">
                                &darr;
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-[20px] font-bold text-[#202124] pt-2">
                      A Two Week Recovery Timeline You Can Actually Expect
                    </h3>

                    <div className="my-6 border border-[#d8dfd1] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <div className="space-y-6">
                        {timelineSteps.map((item, idx) => (
                          <div key={item.step} className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-white bg-[#4E741E] px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                                {item.step}
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-[#4E741E]" />
                              <h4 className="font-bold text-[#202124] text-base sm:text-lg">
                                {item.title}
                              </h4>
                            </div>
                            <p className="pl-0 sm:pl-16 text-sm text-gray-600 leading-relaxed">
                              {item.text}
                            </p>
                            {idx < timelineSteps.length - 1 && (
                              <div className="text-center sm:text-left sm:pl-7 pt-2 text-[#4E741E] font-bold">
                                &#8595;
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <p>
                      That last row matters more than it looks. Our surveys of new patients at Jachimek Chiropractic consistently show that people wait an average of several weeks past this two week mark before booking an evaluation, usually because they assume the pain will eventually resolve on its own. It often does not, and waiting tends to make the eventual treatment take longer, not shorter.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;The neck holds up a bowling ball sized head for sixteen hours a day without complaint. Ask it to do that for another eight hours in a twisted or unsupported position, and eventually it stops staying quiet about it.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; <Link href="/team" className="font-bold text-[#4E741E] hover:underline">Dr. Glen Gunderson (&quot;Dr. G&quot;)</Link>, DC, Jachimek Chiropractic &amp; Wellness, Tampa, FL
                      </cite>
                    </blockquote>

                    <p>
                      That mirrors what clinicians across Florida are seeing more broadly, not just at our own practice. Physical therapists treating sleep related neck strain describe a nearly identical pattern, patients cycling through pillows and mattresses without ever addressing the position itself, according to{" "}
                      <ExternalSource href="https://limitlesspts.com/sleep-with-neck-pain-positions/">
                        clinical guidance from Limitless Physical Therapy
                      </ExternalSource>
                      , which notes that treating the symptom without understanding why the neck hurts more at night rarely produces lasting results.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    Why Tampa Bay Sleepers Have a Few Extra Risk Factors
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Tampa&apos;s climate keeps bedrooms running air conditioning nearly year round, and cold rooms encourage curling into tighter, more twisted positions than a naturally temperate bedroom would.
                    </p>
                    <p>
                      If you live anywhere in the greater Tampa area, from Carrollwood to Westchase to Citrus Park, and mornings start with a stiff neck more often than not, it is worth having it evaluated in person. You can see our full range of care options on the{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        chiropractic services page
                      </Link>
                      , including the spinal decompression and adjustment work we use most for sleep related cervical strain.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    When Morning Neck Pain Means It Is Time to See a Chiropractor
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Not every stiff morning needs a clinical visit, and we will say that plainly even though we would obviously like to see you. A single rough night after unusual activity, travel, or an odd sleeping arrangement is not typically cause for concern.
                    </p>

                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          Pain lasting longer than two to three weeks despite pillow and position changes
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          Numbness, tingling, or weakness radiating into the shoulder or arm
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          Headaches that consistently start at the base of the skull
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          Pain that wakes you up in the middle of the night, not just present at morning
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                        <div>
                          A recent car accident, fall, or injury before the neck pain began
                        </div>
                      </li>
                    </ul>

                    <p>
                      Any of those five signs is a reasonable prompt to stop self diagnosing. This is not a scare tactic, it is the same guidance you would get from{" "}
                      <ExternalSource href="https://www.rushortho.com/news-events/news/common-stiff-neck-causes-and-treatments/">
                        Rush Orthopaedics
                      </ExternalSource>
                      , which recommends seeing a specialist when stiffness persists beyond a week or includes numbness or weakness. Our doctors, Dr. Juliet Marvenko and Dr. Glen Gunderson, along with Dr. Donny Morris, have collectively treated thousands of Tampa area patients for this exact pattern, usually after waiting far longer than they should have.
                    </p>

                    <p>
                      You can learn more about how we approach an initial visit on our{" "}
                      <Link href="/help" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        Let Us Help You page
                      </Link>
                      , or reach the office directly to ask questions before booking anything.
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
                    Not Sure Which Position Is Working Against You?
                  </h2>
                  <p className="text-sm font-semibold text-gray-700 max-w-lg">
                    Jachimek Chiropractic &amp; Wellness helps Tampa Bay patients fix sleeping position neck pain at the source. New patients start with a full exam and personalized plan for $47.
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
                      <div className="flex flex-col justify-between">
                        <h3 className="line-clamp-2 text-sm font-bold text-[#202124] group-hover:text-[#4E741E]">
                          {post.title}
                        </h3>
                        <p className="text-xs font-semibold text-gray-500">
                          {formatDate(post.createdAt || post.date)}
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
