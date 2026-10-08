import Image from "next/image";
import Link from "next/link";
import { CalendarDays, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const whyDoesLookingDownAtYourPhoneMakeYourNeckHurtBlog = {
  title: "Why Does Looking Down at Your Phone Make Your Neck Hurt",
  slug: "why-does-looking-down-at-your-phone-make-your-neck-hurt",
  category: "Chiropractic Care",
  createdAt: "2026-10-07",
  updatedAt: "2026-10-07",
  date: "2026-10-07",
  published: true,
  metaTitle: "Why Phones Hurt Your Neck: Tampa Chiro Explains",
  metaDescription:
    "Looking down at your phone loads your neck like a weight rack. See the real Tampa Bay data and how Jachimek Chiropractic treats text neck for good.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/why-does-looking-down-at-your-phone-make-your-neck-hurt",
  shortDescription:
    "Learn why looking down at your phone makes your neck hurt with Jachemck Chiropractic & Wellness. Discover how it increases neck strain, puts extra pressure on your spine, leads to muscle tension, and can cause long-term problems.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/why-does-looking-down-at-your-phone-make-your-neck-hurt.webp",
    },
    altText:
      "Woman looking down at her phone with highlighted neck strain and spine pressure from Jachemck Chiropractic & Wellness.",
    title: "Why Does Looking Down at Your Phone Make Your Neck Hurt",
    description:
      "Learn why looking down at your phone makes your neck hurt with Jachemck Chiropractic & Wellness. Discover how it increases neck strain, puts extra pressure on your spine, leads to muscle tension, and can cause long-term problems.",
    caption:
      'Understand how "text neck" and poor posture while using your smartphone can cause neck pain, muscle tension, and long-term spinal issues.',
  },
  body: "It's more of a mechanical issue; nothing mysterious behind it. Looking down at a device, such as a screen or keyboard, with the head extended forward, requires a large amount of effort from the neck muscles. Once it reaches a certain degree of tilting, it feels as if you're carrying a bowling ball on your neck. After hours of this daily, the muscles, discs and joints of your vertebrae will start to complain about the overload.",
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
  "Forward head posture adds measurable pounds of leverage force to the cervical spine for every inch the head drifts forward of the shoulders.",
  "Tampa Bay's commute and desk culture stack extra flexion time onto an already phone heavy day.",
  "The pain pattern normally begins in the trapezius and at the base of the skull before it ever reaches the lower neck.",
  "Posture correction plus targeted chiropractic care is better than stretching for lasting relief.",
  "Ignoring the pain pattern, for a time can speed up disc wear that would otherwise appear only many decades later.",
];

const statsCards = [
  {
    number: "01",
    stat: "27 lbs",
    description:
      "Effective force on the cervical spine at just a 15 degree forward tilt",
  },
  {
    number: "02",
    stat: "49 lbs",
    description:
      "Force at a 45 degree tilt, the angle most people hit while reading a text message below chest height",
  },
  {
    number: "03",
    stat: "5h 16m",
    description: "Average daily phone time for American adults in 2026",
  },
  {
    number: "04",
    stat: "29.26 min",
    description: "Average one way commute across Tampa Bay in 2026",
  },
];

const tiltChartData = [
  {
    angle: "0 degrees, neutral",
    load: "10 to 12 lbs",
    pct: "20%",
    color: "bg-[#4E741E]",
    feeling: "Normal. No strain.",
  },
  {
    angle: "15 degrees, glancing down",
    load: "27 lbs",
    pct: "45%",
    color: "bg-emerald-600",
    feeling: "Fine for a minute, not for an hour.",
  },
  {
    angle: "30 degrees, scrolling",
    load: "40 lbs",
    pct: "67%",
    color: "bg-amber-500",
    feeling: "Upper trap tightness begins.",
  },
  {
    angle: "45 degrees, texting low",
    load: "49 lbs",
    pct: "82%",
    color: "bg-orange-500",
    feeling: "Base of skull ache, stiff turns.",
  },
  {
    angle: "60 degrees, chin to chest",
    load: "60 lbs",
    pct: "100%",
    color: "bg-red-500",
    feeling: "Sharp pinch, possible tingling to the arm.",
  },
];

const layeredApproachSteps = [
  {
    step: "Step 1",
    title: "Awareness",
    text: "Notice the tilt. Most people do not feel 45 degrees, they just feel the ache six hours later.",
  },
  {
    step: "Step 2",
    title: "Ergonomic Fix",
    text: "Bring the phone up, not the head down. Prop laptops. Set monitors to eye height.",
  },
  {
    step: "Step 3",
    title: "Mobility Work",
    text: "Chin tucks and scapular retraction rebuild the muscles posture actually depends on.",
  },
  {
    step: "Step 4",
    title: "Chiropractic Correction",
    text: "Adjustments and spinal decompression address the joint restriction stretching cannot reach.",
  },
];

const muscleGroups = [
  {
    name: "The upper trapezius muscle",
    detail:
      "(connects the neck and the shoulder) becomes tight first. You may consider this the first sign of stress.",
  },
  {
    name: "The suboccipital muscles",
    detail:
      "located at the bottom of the skull work hard trying to keep the eyes level when the neck moves forward.",
  },
  {
    name: "The deep cervical flexors",
    detail:
      "the muscles that are supposed to support the neck become weak because they're not used enough and no longer do their job.",
  },
  {
    name: "Pectoral muscles",
    detail:
      "shorten as the shoulders round forward, which pulls the whole upper body further out of alignment.",
  },
];

const postureFixes = [
  "If you are reading a story or doing a ton of paperwork set a timer for 20 minutes and do 10 slow chin tucks when the timer goes off.",
  "Always try to make sure your phone is at the level of your eyes even if it sometimes feels a little weird.",
  "Change the car headrest and mirror so that leaning forward at lights on I-275 doesn't feel normal anymore.",
  "Replace one night of scrolling with a minute of scapular retraction exercises against a wall.",
];

const faqs = [
  {
    q: "Does it take a long time to fix head posture?",
    a: "Well, most people feel less pain after a couple of weeks, maybe 4, if they're consistent with treatment. But getting your posture back to normal and building up those deep neck muscles takes closer to 2-3 months.",
  },
  {
    q: "Is text neck the same as a pinched nerve?",
    a: "Not exactly. Text neck describes the postural pattern and muscle strain, while a pinched nerve involves actual nerve compression, often from a disc or joint change that developed after prolonged poor posture.",
  },
  {
    q: "Do kids and teens get text neck too?",
    a: "Yes, and often earlier than adults expect. Teens who spend hours on phones and laptops for schoolwork show the same forward flexed posture patterns, sometimes with faster onset of symptoms since their postural habits are still forming.",
  },
  {
    q: "Will a standing desk fix neck pain from screen use?",
    a: "A standing desk changes hip and lower back load more than neck angle. Screen height relative to eye level matters far more for the neck than whether someone is sitting or standing.",
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
    <h2 className="flex items-center text-[22px] sm:text-[24px] font-bold leading-snug text-[#202124]">
      <SectionNumber value={number} />
      <span>{children}</span>
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
          name: "Why Does Looking Down at Your Phone Make Your Neck Hurt",
          item: "https://www.jachimekchiro.com/the-wellness-journal/why-does-looking-down-at-your-phone-make-your-neck-hurt",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/why-does-looking-down-at-your-phone-make-your-neck-hurt",
      },
      headline:
        "Why Does Looking Down at Your Phone Make Your Neck Hurt?",
      name: "Why Phones Hurt Your Neck: Tampa Chiro Explains",
      description:
        "Looking down at your phone loads your neck like a weight rack. See the real Tampa Bay data and how Jachimek Chiropractic treats text neck for good.",
      url: "https://www.jachimekchiro.com/the-wellness-journal/why-does-looking-down-at-your-phone-make-your-neck-hurt",
      image:
        "https://www.jachimekchiro.com/images/static-blogs/why-does-looking-down-at-your-phone-make-your-neck-hurt.webp",
      isPartOf: {
        "@type": "Blog",
        "@id": "https://www.jachimekchiro.com/the-wellness-journal",
      },
      about: {
        "@type": "Thing",
        name: "Text Neck & Forward Head Posture Strain",
        description:
          "An in-depth clinical guide on smartphone neck strain, cervical spine biomechanics, Tampa Bay lifestyle factors, and chiropractic treatments.",
      },
      keywords: [
        "why does looking down at your phone make your neck hurt",
        "text neck pain",
        "forward head posture",
        "smartphone neck strain",
        "cervical spine pressure",
        "chiropractor Tampa neck pain",
        "Jachimek Chiropractic",
      ],
      author: {
        "@type": "Organization",
        name: "Jachimek Chiropractic & Wellness",
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
      datePublished: "2026-10-07",
      dateModified: "2026-10-07",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function WhyDoesLookingDownAtYourPhoneMakeYourNeckHurt({
  recentBlogs = [],
}: Props) {
  const blog = whyDoesLookingDownAtYourPhoneMakeYourNeckHurtBlog;
  const recentPosts = recentBlogs
    .filter(
      (post) =>
        post?.slug && post.slug !== blog.slug && post.published !== false
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
              {/* Category & Dates */}
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

              {/* Title Header */}
              <div className="mt-6 border-y border-[#d8dfd1] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4E741E]">
                  JACHIMEK CHIROPRACTIC
                </p>
                <h1 className="mt-4 max-w-4xl text-[30px] font-bold leading-[1.25] text-[#202124] sm:text-[38px] lg:text-[44px]">
                  Why Does Looking Down at Your Phone Make Your Neck Hurt?
                </h1>
                <p className="mt-4 text-base font-semibold text-gray-600">
                  Jachimek Chiropractic &amp; Wellness | Tampa, FL
                </p>
              </div>

              {/* Body Content - paragraphs match doc justification */}
              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                {/* Intro Paragraph */}
                <p className="text-justify">
                  It&apos;s more of a mechanical issue; nothing mysterious behind it.
                  Looking down at a device, such as a screen or keyboard, with
                  the head extended forward, requires a large amount of effort
                  from the neck muscles. Once it reaches a certain degree of
                  tilting, it feels as if you&apos;re carrying a bowling ball on your
                  neck. After hours of this daily, the muscles, discs and joints
                  of your vertebrae will start to complain about the overload.
                </p>

                {/* Key Points Box */}
                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 rounded-[8px]">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    KEY POINTS
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E] text-left">
                    {keyPoints.map((point) => (
                      <li key={point} className="text-gray-700 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 01 */}
                <section>
                  <Subhead number="01">
                    The Math Nobody Warned You About
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p className="text-justify">
                      Start with the head. It weighs roughly ten to twelve pounds
                      sitting neutral on top of the spine, which the neck muscles
                      handle without complaint all day long. The trouble starts
                      the instant that head tips forward, because the spine is
                      not built to carry weight on a lever arm.{" "}
                      <ExternalSource href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13369806/">
                        Research published through PMC on craniovertebral posture
                      </ExternalSource>{" "}
                      puts a number on it directly, roughly ten additional
                      pounds of load for every single inch the head drifts forward
                      of the shoulders.
                    </p>
                    <p className="text-justify">
                      <ExternalSource href="https://www.washingtonpost.com/news/morning-mix/wp/2014/11/20/text-neck-is-becoming-an-epidemic-and-could-wreck-your-spine/">
                        The Washington Post covered the biomechanics behind this
                        in detail
                      </ExternalSource>
                      , and newer imaging work keeps confirming the same curve.
                    </p>
                  </div>
                </section>

                {/* Section 02 */}
                <section>
                  <Subhead number="02">This Is Worse Than It Sounds</Subhead>
                  <div className="mt-5 space-y-5">
                    <p className="text-justify">
                      According to a 2025 imaging study published in the Journal of
                      Spine Surgery,{" "}
                      <ExternalSource href="https://jss.amegroups.org/article/view/7375/html">
                        smartphone texting can actually change alignment
                      </ExternalSource>{" "}
                      in healthy young adults. The biggest shifts happen in the
                      part of the neck, not the lower part that textbooks
                      usually blame.
                    </p>

                    {/* Stats Grid Cards */}
                    <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#f6fff0] p-6 text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statsCards.map((card, index) => (
                          <div
                            key={card.number}
                            className={`flex flex-col ${
                              index !== 0
                                ? "pt-4 sm:pt-0 border-t sm:border-t-0 border-[#d8dfd1]"
                                : ""
                            }`}
                          >
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                              {card.number}
                            </span>
                            <p className="text-3xl sm:text-4xl font-extrabold text-[#4E741E] mt-1">
                              {card.stat}
                            </p>
                            <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-gray-800">
                              {card.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 03 */}
                <section>
                  <Subhead number="03">
                    Why Tampa Bay Makes This Worse, Not Better
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p className="text-justify">
                      Every metro area has phones. Not every metro area has
                      Tampa&apos;s particular combination of long car time and
                      desk jobs stacked end to end. The average one way commute
                      across the Tampa Bay region sits at{" "}
                      <ExternalSource href="https://stateoftheregion.com/drivers/infrastructure/commute-time/">
                        29.26 minutes in the 2026 Regional Competitiveness Report
                      </ExternalSource>
                      , and drivers stuck at red lights on Dale Mabry or Ehrlich
                      Road are not exactly staring straight ahead the whole time.
                      Add in the fact that{" "}
                      <ExternalSource href="https://datausa.io/profile/geo/tampa-fl">
                        commuters citywide average 24.8 minutes behind the wheel
                        on top of a full workday
                      </ExternalSource>
                      , and the forward flexed neck starts before the workday
                      even begins.
                    </p>

                    {/* Dr. Glen Gunderson Quote */}
                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700 text-left rounded-r-[6px]">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;Patients tell me their neck pain started this
                        year. It did not start this year. It started the year
                        they got a smartphone and never adjusted how they hold
                        their head. The body just took its time sending the
                        invoice.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash;{" "}
                        <Link
                          href="/team"
                          className="font-bold text-[#4E741E] hover:underline"
                        >
                          Dr. Glen Gunderson, &ldquo;Dr. G&rdquo;
                        </Link>{" "}
                        | Doctor of Chiropractic, Jachimek Chiropractic &amp;
                        Wellness Center, Tampa
                      </cite>
                    </blockquote>

                    <p className="text-justify">
                      Then the workday itself adds more. American adults are now
                      spending an average of 5 hours and 16 minutes on their phones
                      every day as of 2026. That&apos;s a 14% increase, from 2
                      years ago. If you add a Tampa commute, a desk job and evening
                      phone scrolling together the neck never gets enough time to
                      rest and recover. This is not a phone problem exclusively.
                      It is a Tampa Bay lifestyle problem wearing a phone shaped
                      disguise.
                    </p>
                  </div>
                </section>

                {/* Section 04 */}
                <section>
                  <Subhead number="04">
                    What Actually Happens Inside the Neck?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p className="text-justify">
                      Forward head posture does not just tire out muscles. It
                      changes the mechanics of the joints underneath them.{" "}
                      <ExternalSource href="https://www.spine-health.com/conditions/neck-pain/forward-head-postures-effect-cervical-spine">
                        Spine-health.com&apos;s clinical overview explains
                      </ExternalSource>{" "}
                      that the lower cervical vertebrae, particularly C5 and C6,
                      already carry the most load from the head&apos;s resting
                      weight, so any added forward tilt concentrates even more
                      compressive force right there. Over years, that steady
                      overload is associated with faster disc degeneration and
                      facet joint wear, changes that would normally show up
                      decades later on someone&apos;s x-ray.
                    </p>
                    <p className="text-justify">
                      A separate finding worth taking seriously, from a controlled
                      study on cervical spinal stiffness, showed that a 45 degree
                      flexed head position measurably reduces the spine&apos;s
                      structural stiffness at the upper neck. Less stiffness
                      under load means less control, and less control is how minor
                      strain becomes a recurring injury. The muscles get sloppy
                      because the joints are giving them a bad platform to work
                      from.
                    </p>

                    {/* Progress Chart Visual */}
                    <div className="my-8 rounded-[8px] border border-[#d8dfd1] bg-[#fbfdf8] p-6 text-left">
                      <h3 className="text-base font-bold text-[#202124] mb-4">
                        Cervical Spine Effective Load by Head Tilt Angle
                      </h3>
                      <div className="space-y-4">
                        {tiltChartData.map((item) => (
                          <div key={item.angle} className="space-y-1">
                            <div className="flex justify-between text-sm font-semibold text-[#202124]">
                              <span>{item.angle}</span>
                              <span className="font-bold text-[#4E741E]">
                                {item.load}
                              </span>
                            </div>
                            <div className="h-3.5 w-full rounded-full bg-gray-200 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${item.color} transition-all duration-500`}
                                style={{ width: item.pct }}
                              />
                            </div>
                            <p className="text-xs text-gray-500 italic">
                              {item.feeling}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs italic text-gray-600">
                        Biomechanical load calculation based on published
                        craniovertebral clinical models.
                      </p>
                    </div>

                    {/* Table View */}
                    <div className="my-8">
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">
                                Head Tilt Angle
                              </th>
                              <th className="px-4 py-3 font-bold text-[#202124]">
                                Effective Load on Neck
                              </th>
                              <th className="px-4 py-3 font-bold text-[#202124]">
                                What It Feels Like
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {tiltChartData.map((row) => (
                              <tr key={row.angle} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">
                                  {row.angle}
                                </td>
                                <td className="px-4 py-3 font-semibold text-[#4E741E]">
                                  {row.load}
                                </td>
                                <td className="px-4 py-3 text-gray-600">
                                  {row.feeling}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 05 */}
                <section>
                  <Subhead number="05">
                    The Muscle Groups Doing All the Complaining
                  </Subhead>
                  <div className="mt-5 space-y-4">
                    <ul className="space-y-3 pl-2 text-left">
                      {muscleGroups.map((group) => (
                        <li key={group.name} className="flex items-start gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                          <div className="text-gray-800 text-[16px] leading-[1.75]">
                            <strong className="text-[#202124]">{group.name}</strong>{" "}
                            {group.detail}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Section 06 */}
                <section>
                  <Subhead number="06">
                    Just Stretching Neck Won’t Fix It Unfortunately
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p className="text-justify">
                      Stretching alone rarely solves this, and anyone selling a
                      5 minute daily stretch as a full fix is skipping the
                      joint mechanics part of the lecture.{" "}
                      <ExternalSource href="https://www.physio-pedia.com/Advanced_Technological_Usage_in_Nuchal_Posture_Among_Students_(TEXT_NECK)">
                        Physiopedias clinical summary on posture
                      </ExternalSource>{" "}
                      says that the length‑tension relationship of the neck
                      muscles changes after months or years of forward flexion.
                      Passive stretching can relieve the symptom. However, it
                      doesn’t fix the postural habit or the joint restriction
                      that causes the problem. That’s why a layered approach is
                      valuable.
                    </p>

                    {/* 4 Steps Flow */}
                    <div className="my-8 border border-[#d8dfd1] bg-[#fbfdf8] p-6 rounded-[8px] text-left">
                      <h3 className="text-[18px] font-bold text-[#202124] mb-4">
                        A Layered Approach to Lasting Posture Correction
                      </h3>
                      <div className="space-y-3">
                        {layeredApproachSteps.map((stepItem, idx) => (
                          <div
                            key={stepItem.step}
                            className="flex flex-col items-center sm:items-start"
                          >
                            <div className="w-full border border-[#4E741E] bg-[#f2f4f8] p-4 rounded-[6px] text-left">
                              <span className="inline-block bg-[#4E741E] text-white text-xs font-bold px-2.5 py-0.5 rounded mr-2 uppercase">
                                {stepItem.step}
                              </span>
                              <strong className="text-base text-[#1f4d78]">
                                {stepItem.title}:
                              </strong>{" "}
                              <span className="text-sm text-gray-700">
                                {stepItem.text}
                              </span>
                            </div>
                            {idx < layeredApproachSteps.length - 1 && (
                              <div className="py-2 text-[#4E741E] font-bold text-lg">
                                &darr;
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 07 */}
                <section>
                  <Subhead number="07">
                    Chiropractic Care May Stop Text Neck Pain Faster Than Anything
                    Else
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p className="text-justify">
                      A typical plan through the{" "}
                      <Link
                        href="/services"
                        className="font-bold text-[#4E741E] underline-offset-4 hover:underline"
                      >
                        chiropractic services at Jachimek Chiropractic &amp;
                        Wellness Center
                      </Link>{" "}
                      starts with a hands on assessment of cervical range of motion
                      and joint restriction. Spinal decompression therapy takes
                      pressure off compressed discs directly, adjustments restore
                      motion to joints that have been locked in a forward flexed
                      pattern, and targeted rehabilitation exercises retrain the
                      deep neck flexors that stopped doing their job months ago.
                    </p>
                    <p className="text-justify">
                      <Link
                        href="/team"
                        className="font-bold text-[#4E741E] underline-offset-4 hover:underline"
                      >
                        Dr. Donny Morris, DC
                      </Link>
                      , who trained at Palmer College of Chiropractic in Daytona
                      Beach and dealt with his own chronic back pain from years in
                      construction, builds these plans around getting patients
                      back to full function rather than just quieting the pain for
                      a week.
                    </p>

                    {/* Cleveland Clinic Quote */}
                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700 text-left rounded-r-[6px]">
                      <p className="font-medium text-[17px] leading-relaxed text-[#202124]">
                        &ldquo;People rarely feel tech neck while they are
                        actually looking down. The pain shows up later as a
                        cumulative bill, because a person engrossed in a screen
                        almost never notices the strain building in real
                        time.&rdquo;
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-600 not-italic">
                        &mdash; Dr. Andrew Bang, DC | Chiropractor, Cleveland
                        Clinic
                      </cite>
                    </blockquote>
                  </div>
                </section>

                {/* Section 08 */}
                <section>
                  <Subhead number="08">
                    4 Simple Posture Fixes You Can Start Today
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <ul className="space-y-3 pl-2 text-left">
                      {postureFixes.map((fix) => (
                        <li key={fix} className="flex items-start gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#4E741E] mt-2.5 flex-shrink-0" />
                          <div className="text-gray-800 text-[16px] leading-[1.75]">
                            {fix}
                          </div>
                        </li>
                      ))}
                    </ul>

                    <p className="text-justify pt-3">
                      None of this means you have to quit using smartphones and
                      that was never an idea in the first place. It requires
                      treating the neck like the load‑bearing structure that it
                      actually is. Readers who want a library of posture and pain
                      topics can browse{" "}
                      <Link
                        href="/the-wellness-journal"
                        className="font-bold text-[#4E741E] underline-offset-4 hover:underline"
                      >
                        The Wellness Journal
                      </Link>{" "}
                      for more on the connection between daily habits and
                      chronic pain.
                    </p>
                  </div>
                </section>

                {/* CTA Card Box */}
                <div className="my-10 border border-[#4E741E] bg-[#f6fff0] p-6 sm:p-8 text-center rounded-[8px] flex flex-col items-center justify-center gap-4">
                  <h2 className="text-2xl font-bold text-[#202124]">
                    Your Neck Has Been Sending Signals. Time to Listen.
                  </h2>
                  <p className="text-sm font-semibold text-gray-700 max-w-lg">
                    Discover targeted neck strain relief and restore proper
                    cervical spine alignment at Jachimek Chiropractic &amp;
                    Wellness in Tampa.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                    <a
                      href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-[4px] bg-[#4E741E] px-6 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                    >
                      Schedule a Visit Today <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      href="/team"
                      className="inline-flex items-center gap-2 rounded-[4px] border border-[#4E741E] bg-white px-6 py-3 text-sm font-bold text-[#4E741E] hover:bg-[#f6fff0] transition"
                    >
                      Meet the Team at Jachimek Chiropractic
                    </Link>
                  </div>
                </div>

                {/* FAQ Section */}
                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-5 space-y-5 text-left">
                    {faqs.map((faq) => (
                      <div
                        key={faq.q}
                        className="border-b border-gray-100 pb-4 last:border-0"
                      >
                        <h3 className="font-bold text-[#202124] text-[17px]">
                          {faq.q}
                        </h3>
                        <p className="mt-2 text-gray-700 text-sm leading-relaxed text-justify sm:text-left">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Disclaimer */}
                <section className="border-t border-gray-300 pt-5 text-sm leading-6 text-gray-600 space-y-3 text-left">
                  <p>
                    <strong>Disclaimer:</strong> This article is for
                    informational and educational purposes only. It shouldn’t be
                    a substitute for medical advice. Always consult with a
                    qualified healthcare practitioner before making any medical
                    treatment decisions.
                  </p>
                </section>

                {/* Bottom Promotional Box */}
                <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                  <h2 className="text-xl font-bold text-[#202124]">
                    Tired of Dealing with Smartphone Neck Stiffness?
                  </h2>
                  <p className="text-sm font-semibold text-gray-700 max-w-lg">
                    Jachimek Chiropractic &amp; Wellness helps Tampa Bay patients
                    relieve text neck and spinal compression at the root cause.
                    New patients start with a comprehensive exam and customized
                    treatment plan for $47.
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
