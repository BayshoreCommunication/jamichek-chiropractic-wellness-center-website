import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

export const simpleDailyHabitsThatCanHelpYouMaintainBetterMobilityBlog = {
  title: "Simple Daily Habits That Can Help You Maintain Better Mobility",
  slug: "simple-daily-habits-that-can-help-you-maintain-better-mobility",
  category: "Chiropractic Care",
  createdAt: "2026-11-12",
  updatedAt: "2026-11-12",
  date: "2026-11-12",
  published: true,
  metaTitle: "Simple Daily Habits for Better Mobility for Floridians",
  metaDescription:
    "Simple daily habits that can help you maintain better mobility. A Tampa chiropractic team shares a 10-minute routine for morning, midday and evening.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/simple-daily-habits-that-can-help-you-maintain-better-mobility",
  shortDescription:
    "Discover simple daily habits to improve and maintain better body mobility, including regular stretching, staying active, practicing good posture, and staying hydrated.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/simple-daily-habits-to-maintain-better-mobility.webp",
    },
    altText:
      "Woman sitting cross-legged on a yoga mat doing a side stretch inside a bright chiropractic wellness clinic.",
    title: "Simple Daily Habits That Help Maintain Better Mobility",
    description:
      "Discover simple daily habits to improve and maintain better body mobility, including regular stretching, staying active, practicing good posture, and staying hydrated.",
    caption:
      "Learn easy daily habits like stretching and good posture to support long-term joint mobility.",
  },
  body: "These are simple everyday actions that can help you keep your mobility. Each morning you’ll get your spine and hips moving in a full range of motion and take regular breaks from sitting. Then you finish up the day with some light strength and balance work.",
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
  "Mobility is controlled range of motion so it’s important to build strength too.",
  "Try to spread the 10 minutes throughout the day rather than doing a long session which you’ll be tempted to skip.",
  "The CDC data show that the risk of serious walking and stair climbing issues increases almost 4x between ages 45-64 and 18-44.",
  "Chronic stiffness or inclemency and numbness (sometimes weakness) should be looked into.",
];

const mobilityStats = [
  {
    value: "4.8%",
    label:
      "of adults 18 to 44 report serious difficulty walking or climbing stairs",
    bg: "bg-[#e6f4f1]",
    valueColor: "text-[#12355b]",
  },
  {
    value: "18.1%",
    label: "of adults 45 to 64 report the same difficulty",
    bg: "bg-[#f6f1e9]",
    valueColor: "text-[#e4572e]",
  },
  {
    value: "26.9%",
    label: "of adults 65 and older report it",
    bg: "bg-[#e6f4f1]",
    valueColor: "text-[#12355b]",
  },
  {
    value: "1 in 4",
    label:
      "older adults falls each year, and fewer than half tell their doctor",
    bg: "bg-[#f6f1e9]",
    valueColor: "text-[#e4572e]",
  },
];

const qualityRows = [
  {
    quality: "Flexibility",
    meaning: "How far a joint can travel, with or without help",
    habit: "Held stretches such as the hip flexor lunge",
    striped: false,
  },
  {
    quality: "Mobility",
    meaning: "Range of motion you can actively control",
    habit: "Cat and camel, hip hinges, rotations",
    striped: true,
  },
  {
    quality: "Stability",
    meaning: "The control that keeps your range safe",
    habit: "Single leg balance, sit to stand",
    striped: false,
  },
];

const morningHabits = [
  {
    name: "Knees to chest rocks.",
    detail: "Lie on your back, hug both knees and rock slowly for thirty seconds.",
  },
  {
    name: "Cat and camel.",
    detail:
      "On hands and knees, round and arch your spine through eight slow rounds.",
  },
  {
    name: "Hip hinges.",
    detail:
      "Stand tall, push your hips back and slide your hands down your thighs. Eight reps, knees soft.",
  },
  {
    name: "Rotations.",
    detail:
      "Cross your arms and turn from the middle of your back, five slow turns each way.",
  },
];

const middayHabits = [
  {
    name: "Hip flexor lunge.",
    detail:
      "Step into a half kneeling lunge, tuck your tailbone and hold twenty seconds each side.",
  },
  {
    name: "Chin tucks.",
    detail: "Draw your head straight back as if making a double chin. Eight reps.",
  },
  {
    name: "Shoulder blade squeezes.",
    detail:
      "Pull both blades toward your spine and hold two seconds. Ten reps.",
  },
  {
    name: "Calf raises.",
    detail: "Twelve slow ones, fingertips on the counter.",
  },
];

const eveningHabits = [
  {
    name: "Sit to stand.",
    detail:
      "Rise from a sturdy chair without using your hands. Ten reps, slow on the way down.",
  },
  {
    name: "Single leg balance.",
    detail:
      "Fingertips on the counter, thirty seconds each side. Lift the fingertips when it feels easy.",
  },
  {
    name: "Legs up and breathe.",
    detail:
      "Rest your calves on a sofa cushion for one minute of slow breathing.",
  },
];

const dailyRoutineRows = [
  {
    timeOfDay: "Morning",
    minutes: "4",
    focus: "Range of motion",
    moves: "Knees to chest rocks, cat and camel, hip hinges, rotations",
    striped: false,
  },
  {
    timeOfDay: "Midday",
    minutes: "3",
    focus: "Undo stillness",
    moves:
      "Hip flexor lunge, chin tucks, shoulder blade squeezes, calf raises",
    striped: true,
  },
  {
    timeOfDay: "Evening",
    minutes: "3",
    focus: "Strength and balance",
    moves: "Sit to stand, single leg balance, legs up and breathe",
    striped: false,
  },
  {
    timeOfDay: "Total",
    minutes: "10",
    focus: "Daily",
    moves: "Three short blocks, no equipment beyond a chair and a counter",
    striped: true,
  },
];

const faqs = [
  {
    question: "How quickly will I see improvement in mobility?",
    answer:
      "This can vary. Some people may feel more flexible after a few weeks of consistent practice. Gaining strength and balance usually takes longer.",
  },
  {
    question: "Can I do these habits if I suffer from arthritis?",
    answer:
      "In many cases yes, but you want to ensure you are working within a comfortable range. Please discuss with your doctor first. If an exercise causes increased joint pain, please avoid doing that exercise.",
  },
  {
    question: "Should I stretch before or after activity?",
    answer:
      "Short movements like hinging and rotating are great to do before activity. However, longer static stretches are better to do at the end of the day.",
  },
  {
    question: "Does my age affect how I should begin?",
    answer:
      "The same exercises can be done by all ages. Over the age of 65 it is best to focus on sit to stand and balancing exercises. Ensure you have a counter nearby.",
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
  variant = "blue",
}: {
  href: string;
  children: ReactNode;
  variant?: "blue" | "teal";
}) {
  const colorClasses =
    variant === "teal"
      ? "font-bold text-[#1b998b] underline decoration-[#1b998b]/60 underline-offset-4 transition hover:text-[#12355b] hover:decoration-[#12355b]"
      : "font-medium text-[#1155cc] underline decoration-[#1155cc]/60 underline-offset-4 transition hover:text-[#12355b] hover:decoration-[#12355b]";

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={colorClasses}
    >
      {children}
    </a>
  );
}

function InternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-bold text-[#1b998b] underline decoration-[#1b998b]/60 underline-offset-4 transition hover:text-[#12355b] hover:decoration-[#12355b]"
    >
      {children}
    </Link>
  );
}

function Figure1Chart() {
  const plotLeft = 72;
  const plotRight = 626;
  const plotTop = 44;
  const plotBottom = 310;
  const plotHeight = plotBottom - plotTop;
  const maxVal = 50;

  const yPos = (val: number) => plotBottom - (val / maxVal) * plotHeight;

  const groups = [
    {
      label: "Adults 18 to 44",
      cx: 170,
      low: 2.0,
      high: 10.4,
      overall: 4.8,
    },
    {
      label: "Adults 45 to 64",
      cx: 350,
      low: 8.9,
      high: 42.3,
      overall: 18.1,
    },
    {
      label: "Adults 65 and older",
      cx: 530,
      low: 18.7,
      high: 43.5,
      overall: 26.9,
    },
  ];

  const barWidth = 74;

  return (
    <div className="rounded-[8px] border border-[#cfd8dc] bg-white p-3 sm:p-5 shadow-2xs">
      <svg
        viewBox="0 0 650 368"
        className="h-auto w-full"
        role="img"
        aria-label="Chart showing serious difficulty walking or climbing stairs by age group and household income range"
      >
        <text
          x={plotLeft}
          y="24"
          fill="#12355b"
          fontSize="16"
          fontWeight="700"
        >
          The spread inside each age group, by household income
        </text>

        <rect
          x={plotLeft}
          y={plotTop}
          width={plotRight - plotLeft}
          height={plotHeight}
          fill="#f6f1e9"
        />

        {[0, 10, 20, 30, 40, 50].map((tick) => {
          const y = yPos(tick);
          return (
            <g key={tick}>
              <line
                x1={plotLeft}
                y1={y}
                x2={plotRight}
                y2={y}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <line
                x1={plotLeft - 5}
                y1={y}
                x2={plotLeft}
                y2={y}
                stroke="#5b6770"
                strokeWidth="1.2"
              />
              <text
                x={plotLeft - 9}
                y={y + 4}
                textAnchor="end"
                fill="#5b6770"
                fontSize="11.5"
              >
                {tick}
              </text>
            </g>
          );
        })}

        <text
          x="22"
          y={(plotTop + plotBottom) / 2}
          textAnchor="middle"
          fill="#5b6770"
          fontSize="11.5"
          transform={`rotate(-90 22 ${(plotTop + plotBottom) / 2})`}
        >
          <tspan x="22" dy="-7">
            Percent reporting serious difficulty
          </tspan>
          <tspan x="22" dy="14">
            walking or climbing stairs
          </tspan>
        </text>

        <circle cx={plotLeft + 18} cy="58" r="6" fill="#e4572e" />
        <text x={plotLeft + 34} y="62" fill="#5b6770" fontSize="11.5">
          Overall figure for the age group
        </text>

        <rect
          x={plotLeft + 8}
          y="71"
          width="20"
          height="9"
          rx="1"
          fill="#2d9d92"
        />
        <text x={plotLeft + 34} y="79" fill="#5b6770" fontSize="11.5">
          Range across income levels
        </text>

        {groups.map((g) => {
          const yTop = yPos(g.high);
          const yBot = yPos(g.low);
          const yDot = yPos(g.overall);
          const xLeft = g.cx - barWidth / 2;
          const xRight = g.cx + barWidth / 2;

          return (
            <g key={g.label}>
              <rect
                x={xLeft}
                y={yTop}
                width={barWidth}
                height={Math.max(yBot - yTop, 2)}
                fill="#2d9d92"
              />
              <circle
                cx={g.cx}
                cy={yDot}
                r="6.5"
                fill="#e4572e"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <text
                x={xLeft - 10}
                y={yDot + 4}
                textAnchor="end"
                fill="#e4572e"
                fontSize="11.5"
                fontWeight="700"
              >
                {g.overall.toFixed(1)}%
              </text>
              <text
                x={xRight + 10}
                y={yTop + 6}
                textAnchor="start"
                fill="#12355b"
                fontSize="11.5"
                fontWeight="700"
              >
                {g.high.toFixed(1)}%
              </text>
              <text
                x={xRight + 10}
                y={yBot + 4}
                textAnchor="start"
                fill="#12355b"
                fontSize="11.5"
                fontWeight="700"
              >
                {g.low.toFixed(1)}%
              </text>
              <text
                x={g.cx}
                y={plotBottom + 20}
                textAnchor="middle"
                fill="#12355b"
                fontSize="12.5"
                fontWeight="600"
              >
                {g.label}
              </text>
            </g>
          );
        })}

        <text x="12" y="357" fill="#5b6770" fontSize="10.5">
          Source CDC MMWR 2018, analysis of 2016 BRFSS data
        </text>
      </svg>
    </div>
  );
}

function Figure2Chart() {
  const plotLeft = 72;
  const plotRight = 626;
  const plotTop = 44;
  const plotBottom = 310;
  const plotHeight = plotBottom - plotTop;
  const maxVal = 33;

  const yPos = (val: number) => plotBottom - (val / maxVal) * plotHeight;

  const groups = [
    {
      label: "Adults 18 to 44",
      cx: 170,
      us: 4.8,
      south: 5.6,
    },
    {
      label: "Adults 45 to 64",
      cx: 350,
      us: 18.1,
      south: 21.5,
    },
    {
      label: "Adults 65 and older",
      cx: 530,
      us: 26.9,
      south: 28.8,
    },
  ];

  const barWidth = 62;

  return (
    <div className="rounded-[8px] border border-[#cfd8dc] bg-white p-3 sm:p-5 shadow-2xs">
      <svg
        viewBox="0 0 650 368"
        className="h-auto w-full"
        role="img"
        aria-label="Chart comparing national difficulty walking or climbing stairs to the South Census region"
      >
        <text
          x={plotLeft}
          y="24"
          fill="#12355b"
          fontSize="16"
          fontWeight="700"
        >
          Florida sits in the South, where the numbers run higher
        </text>

        <rect
          x={plotLeft}
          y={plotTop}
          width={plotRight - plotLeft}
          height={plotHeight}
          fill="#f6f1e9"
        />

        {[0, 5, 10, 15, 20, 25, 30].map((tick) => {
          const y = yPos(tick);
          return (
            <g key={tick}>
              <line
                x1={plotLeft}
                y1={y}
                x2={plotRight}
                y2={y}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <line
                x1={plotLeft - 5}
                y1={y}
                x2={plotLeft}
                y2={y}
                stroke="#5b6770"
                strokeWidth="1.2"
              />
              <text
                x={plotLeft - 9}
                y={y + 4}
                textAnchor="end"
                fill="#5b6770"
                fontSize="11.5"
              >
                {tick}
              </text>
            </g>
          );
        })}

        <text
          x="22"
          y={(plotTop + plotBottom) / 2}
          textAnchor="middle"
          fill="#5b6770"
          fontSize="11.5"
          transform={`rotate(-90 22 ${(plotTop + plotBottom) / 2})`}
        >
          <tspan x="22" dy="-7">
            Percent reporting serious difficulty
          </tspan>
          <tspan x="22" dy="14">
            walking or climbing stairs
          </tspan>
        </text>

        <rect
          x={plotLeft + 8}
          y="53"
          width="20"
          height="9"
          rx="1"
          fill="#12355b"
        />
        <text x={plotLeft + 34} y="61" fill="#5b6770" fontSize="11.5">
          United States overall
        </text>

        <rect
          x={plotLeft + 8}
          y="69"
          width="20"
          height="9"
          rx="1"
          fill="#e4572e"
        />
        <text x={plotLeft + 34} y="77" fill="#5b6770" fontSize="11.5">
          South Census region
        </text>

        {groups.map((g) => {
          const usTop = yPos(g.us);
          const southTop = yPos(g.south);
          const usX = g.cx - barWidth;
          const southX = g.cx;

          return (
            <g key={g.label}>
              <rect
                x={usX}
                y={usTop}
                width={barWidth}
                height={plotBottom - usTop}
                fill="#12355b"
              />
              <text
                x={usX + barWidth / 2}
                y={usTop - 6}
                textAnchor="middle"
                fill="#12355b"
                fontSize="11.5"
                fontWeight="700"
              >
                {g.us.toFixed(1)}%
              </text>

              <rect
                x={southX}
                y={southTop}
                width={barWidth}
                height={plotBottom - southTop}
                fill="#e4572e"
              />
              <text
                x={southX + barWidth / 2}
                y={southTop - 6}
                textAnchor="middle"
                fill="#e4572e"
                fontSize="11.5"
                fontWeight="700"
              >
                {g.south.toFixed(1)}%
              </text>

              <text
                x={g.cx}
                y={plotBottom + 20}
                textAnchor="middle"
                fill="#12355b"
                fontSize="12.5"
                fontWeight="600"
              >
                {g.label}
              </text>
            </g>
          );
        })}

        <text x="12" y="357" fill="#5b6770" fontSize="10.5">
          Source CDC MMWR 2018, analysis of 2016 BRFSS data
        </text>
      </svg>
    </div>
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
          name: "Simple Daily Habits That Can Help You Maintain Better Mobility",
          item: "https://www.jachimekchiro.com/the-wellness-journal/simple-daily-habits-that-can-help-you-maintain-better-mobility",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.jachimekchiro.com/the-wellness-journal/simple-daily-habits-that-can-help-you-maintain-better-mobility#article",
      headline: "Simple Daily Habits for Better Mobility for Floridians",
      name: "Simple Daily Habits That Can Help You Maintain Better Mobility",
      description:
        "Simple daily habits that can help you maintain better mobility. A Tampa chiropractic team shares a 10-minute routine for morning, midday and evening.",
      url: "https://www.jachimekchiro.com/the-wellness-journal/simple-daily-habits-that-can-help-you-maintain-better-mobility",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.jachimekchiro.com/the-wellness-journal/simple-daily-habits-that-can-help-you-maintain-better-mobility",
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.jachimekchiro.com/images/static-blogs/simple-daily-habits-to-maintain-better-mobility.webp",
        caption:
          "Learn easy daily habits like stretching and good posture to support long-term joint mobility.",
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
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
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

export default function SimpleDailyHabitsThatCanHelpYouMaintainBetterMobility({
  recentBlogs = [],
}: Props) {
  const blog =
    simpleDailyHabitsThatCanHelpYouMaintainBetterMobilityBlog;
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
                width={1754}
                height={895}
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
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#1b998b]">
                <span>{blog.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#1b998b]" />
                <span className="inline-flex items-center gap-2 text-[#5b6770]">
                  <CalendarDays
                    className="h-4 w-4 text-[#1b998b]"
                    aria-hidden="true"
                  />
                  Published: {formatDate(blog.createdAt)}
                </span>
                {blog.updatedAt && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#1b998b]" />
                    <span className="inline-flex items-center gap-2 text-[#5b6770]">
                      <CalendarDays
                        className="h-4 w-4 text-[#1b998b]"
                        aria-hidden="true"
                      />
                      Updated: {formatDate(blog.updatedAt)}
                    </span>
                  </>
                )}
              </div>

              {/* Title Header (left aligned as in doc) */}
              <h1 className="mt-6 max-w-4xl text-left text-[28px] font-bold leading-[1.25] text-[#000000] sm:text-[36px] lg:text-[42px]">
                {blog.title}
              </h1>

              {/* Body Content */}
              <div className="mt-6 space-y-6 text-[16px] leading-[1.8] text-[#1f2a33]">
                {/* Intro Paragraph (justified as in doc) */}
                <p className="text-justify text-[16.5px] leading-[1.8] text-[#1f2a33]">
                  These are simple everyday actions that can help you keep your
                  mobility. Each morning you&rsquo;ll get your spine and hips
                  moving in a full range of motion and take regular breaks from
                  sitting. Then you finish up the day with some light strength
                  and balance work.
                </p>

                {/* KEY POINTS Box (#e6f4f1 bg, #1b998b left border & heading) */}
                <div className="rounded-r-[8px] border-l-[4px] border-[#1b998b] bg-[#e6f4f1] px-5 py-5 sm:px-6 sm:py-6">
                  <h2 className="text-justify text-[20px] font-bold tracking-wide text-[#1b998b]">
                    KEY POINTS
                  </h2>
                  <ul className="mt-3.5 space-y-2 text-left text-[15.5px] leading-[1.65] text-[#1f2a33]">
                    {keyPoints.map((point) => (
                      <li key={point} className="flex items-start">
                        <span className="mr-3 select-none font-bold text-[#1b998b]">
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 1 */}
                <section className="pt-2 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[25px] font-bold leading-snug text-[#000000]">
                    Simple daily habits are more notable than a weekend workout
                  </h2>
                  <p className="text-justify text-[#000000]">
                    Start with the numbers, because you deserve to see them
                    instead of taking our word for it.{" "}
                    <ExternalSource href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6095650/">
                      CDC researchers looked at data from a survey in 2016
                    </ExternalSource>{" "}
                    and saw that 4.8% of adults aged 18-44, 18.1% aged 45-64 and
                    26.9% of adults aged 65+ had a serious problem walking or
                    climbing stairs.
                  </p>
                  <p className="text-justify text-[#000000]">
                    It&rsquo;s the increase between the first two that we are
                    interested in. Nearly fourfold, and it lands during the years
                    most of us still call prime. Nobody announces it. Mobility
                    slides quietly while the calendar stays busy.
                  </p>

                  {/* 4-Card CDC Stat Grid (alternating #e6f4f1 / #f6f1e9, #12355b / #e4572e) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pt-2">
                    {mobilityStats.map((stat) => (
                      <div
                        key={stat.value}
                        className={`${stat.bg} rounded-[6px] border border-white p-4 sm:p-5`}
                      >
                        <p
                          className={`text-justify text-[32px] sm:text-[36px] font-bold leading-none ${stat.valueColor}`}
                        >
                          {stat.value}
                        </p>
                        <p className="mt-2.5 text-justify text-[13px] leading-[1.45] text-[#5b6770]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Subsection h3 */}
                  <h3 className="pt-4 text-justify text-[19px] sm:text-[21px] font-bold leading-snug text-[#000000]">
                    Newer federal data points the same direction
                  </h3>
                  <p className="text-justify text-[#000000]">
                    The CDC&rsquo;s 2022 survey estimates put{" "}
                    <ExternalSource
                      href="https://www.cdc.gov/disability-and-health/articles-documents/disability-and-health-data-now.html"
                      variant="teal"
                    >
                      43.9 percent of adults 65 and older
                    </ExternalSource>{" "}
                    in the group reporting some form of functional disability.
                    Fair warning though. These are self reported answers to a
                    blunt question about serious difficulty, so milder stiffness
                    never shows up, and the CDC authors note that people in long
                    term care are left out, which probably pushes the true
                    figures higher.
                  </p>
                  <p className="text-justify text-[#000000]">
                    The range inside each age group tells a second story.
                  </p>

                  {/* Figure 1 */}
                  <figure className="pt-2">
                    <Figure1Chart />
                    <figcaption className="mt-2.5 text-justify text-[13px] italic leading-relaxed text-[#5b6770]">
                      Figure 1. Serious walking or stair difficulty by age
                      group, with the spread across household income levels.
                    </figcaption>
                  </figure>

                  <p className="text-justify text-[#000000]">
                    Among adults 45 to 64, those living below the federal
                    poverty level reported serious walking difficulty at 42.3%,
                    against 8.9% for those at twice the poverty level or above.
                    Age loads the dice, yes, but it doesn&rsquo;t roll them
                    alone. Whilst we can&rsquo;t prove it from surveys like
                    this, we can see that there are several factors at play.
                    Time, cost, safe walkways and access to care are all a
                    consideration. The good news is that it&rsquo;s free and
                    takes 10 minutes, so it should definitely get a fair go.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[25px] font-bold leading-snug text-[#000000]">
                    What does better mobility honestly mean?
                  </h2>
                  <p className="text-justify text-[#000000]">
                    They&rsquo;ll stretch for an hour feeling nice and loose.
                    Then will grimace when reaching up to the top shelf.
                    Flexibility and mobility are similar but not the same.
                    Mobility is the amount of movement you have control over.
                    Flexibility is how much movement you have in your joints and
                    often requires assistance. Stability is the control you have
                    to keep within a safe range.
                  </p>

                  {/* Quality / Meaning / Habit Table (#12355b header, #e6f4f1 striped rows, #cfd8dc border) */}
                  <div className="overflow-x-auto rounded-[6px] border border-[#cfd8dc]">
                    <table className="w-full min-w-[540px] border-collapse text-justify text-sm leading-6">
                      <thead>
                        <tr className="bg-[#12355b] text-white">
                          <th className="border border-[#cfd8dc] px-3.5 py-2.5 font-bold">
                            Quality
                          </th>
                          <th className="border border-[#cfd8dc] px-3.5 py-2.5 font-bold">
                            What it means
                          </th>
                          <th className="border border-[#cfd8dc] px-3.5 py-2.5 font-bold">
                            A daily habit that builds it
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {qualityRows.map((row) => (
                          <tr
                            key={row.quality}
                            className={
                              row.striped ? "bg-[#e6f4f1]" : "bg-white"
                            }
                          >
                            <td className="border border-[#cfd8dc] px-3.5 py-2.5 font-medium text-[#1f2a33]">
                              {row.quality}
                            </td>
                            <td className="border border-[#cfd8dc] px-3.5 py-2.5 text-[#1f2a33]">
                              {row.meaning}
                            </td>
                            <td className="border border-[#cfd8dc] px-3.5 py-2.5 text-[#1f2a33]">
                              {row.habit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-justify text-[#000000]">
                    That distinction runs through every habit below. Each one
                    asks a joint to travel through its range, then asks a muscle
                    to hold something there. According to federal guidelines
                    from the{" "}
                    <ExternalSource href="https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines/top-10-things-know">
                      Department of Health and Human Services
                    </ExternalSource>
                    , adults should be doing 150-300 mins of moderate intensity
                    physical activity weekly. They also recommend doing muscle
                    strengthening activities two or more times per week and
                    balance activities for older adults. We are using our 10
                    mins as a stepping stone towards meeting those larger time
                    frames.
                  </p>
                </section>

                {/* Section 3: Morning Habits */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[25px] font-bold leading-snug text-[#000000]">
                    Which morning habits help you maintain better mobility?
                  </h2>
                  <p className="text-justify text-[#000000]">
                    Joints are fine all night tend to complain first thing. Give
                    them a gentle runway before the day asks anything big of
                    them.
                  </p>
                  <ul className="space-y-2.5 pl-4 sm:pl-6 text-justify text-[#000000]">
                    {morningHabits.map((item) => (
                      <li key={item.name} className="flex items-start">
                        <span className="mr-3 select-none font-bold text-[#12355b]">
                          &bull;
                        </span>
                        <span>
                          <strong className="font-bold">{item.name}</strong>{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-justify text-[#000000]">
                    Our surveys show that plenty of our new patients at our
                    Tampa office list morning stiffness among their first three
                    complaints, which is why this block comes first. If you walk
                    outdoors, do it early. Most of Tampa Bay feels far kinder
                    before nine, and a cooler body moves with less protest.
                  </p>
                </section>

                {/* Section 4: Midday Habits */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[25px] font-bold leading-snug text-[#000000]">
                    What should you do at midday to protect your mobility?
                  </h2>
                  <p className="text-justify text-[#000000]">
                    Sitting gets blamed for everything, and it deserves some of
                    it. Stillness is the real culprit though, and stillness is
                    fixable. There is no magic interval, but standing every
                    thirty to forty five minutes is a sensible working rule.
                  </p>
                  <ul className="space-y-2.5 pl-4 sm:pl-6 text-left text-[#000000]">
                    {middayHabits.map((item) => (
                      <li key={item.name} className="flex items-start">
                        <span className="mr-3 select-none font-bold text-[#12355b]">
                          &bull;
                        </span>
                        <span>
                          <strong className="font-bold">{item.name}</strong>{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-justify text-[#000000]">
                    A practical example. If your commute runs along Interstate
                    275 or the Veterans Expressway, your hips have been folded
                    for the better part of an hour before you reach your desk.
                    Park, stand, and do the lunge beside the car door. Nobody in
                    the lot will mind.
                  </p>

                  {/* CTA Box 1 (#12355b bg, #e4572e left border) */}
                  <div className="my-6 rounded-r-[8px] border-l-[4px] border-[#e4572e] bg-[#12355b] px-5 py-5 sm:px-6 sm:py-6 text-white shadow-sm">
                    <p className="text-justify text-[20px] sm:text-[22px] font-bold leading-snug text-white">
                      Stiff in a way a stretch won&rsquo;t fix?
                    </p>
                    <p className="mt-2 text-justify text-[15px] leading-relaxed text-white/95">
                      Our Tampa team looks at how you move before suggesting
                      anything. New patients can book a full exam and
                      personalized plan for $47.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-[15px] font-bold">
                      <a
                        href="tel:8139602225"
                        className="inline-flex items-center gap-2 text-[#ffc9b8] transition hover:text-white"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Call 813.960.2225
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-white underline decoration-white/80 underline-offset-4 transition hover:text-[#ffc9b8]"
                      >
                        Book your visit
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Subsection: Evening Habits (h3 as annotated in doc) */}
                <section className="pt-2 space-y-4">
                  <h3 className="text-justify text-[21px] sm:text-[23px] font-bold leading-snug text-[#000000]">
                    How do evening habits keep your mobility steady?
                  </h3>
                  <p className="text-justify text-[#000000]">
                    Evening is for strength and balance, the two things most
                    routines forget. Fall risk is the reason we bother. The CDC
                    reports that{" "}
                    <ExternalSource
                      href="https://archive.cdc.gov/www_cdc_gov/media/releases/2016/p0922-older-adult-falls.html"
                      variant="teal"
                    >
                      one in four older adults falls each year, and fewer than
                      half tell their doctor
                    </ExternalSource>
                    . That silence is worth breaking.
                  </p>
                  <ul className="space-y-2.5 pl-4 sm:pl-6 text-left text-[#000000]">
                    {eveningHabits.map((item) => (
                      <li key={item.name} className="flex items-start">
                        <span className="mr-3 select-none font-bold text-[#12355b]">
                          &bull;
                        </span>
                        <span>
                          <strong className="font-bold">{item.name}</strong>{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Quote Box 1 (#f6f1e9 bg, #1b998b left border) */}
                  <div className="my-5 rounded-r-[8px] border-l-[4px] border-[#1b998b] bg-[#f6f1e9] px-5 py-5 sm:px-6 sm:py-5">
                    <p className="text-justify text-[18px] italic leading-[1.65] text-[#12355b]">
                      &ldquo;Older adult falls are increasing and, sadly, often
                      herald the end of independence.&rdquo;
                    </p>
                    <p className="mt-2.5 text-justify text-[13.5px]">
                      <span className="font-bold text-[#e4572e]">
                        Tom Frieden, M.D., M.P.H.
                      </span>{" "}
                      <span className="text-[#5b6770]">
                        Director of the CDC at the time of the 2016 release
                      </span>
                    </p>
                  </div>

                  <p className="text-justify text-[#000000]">
                    Here is the whole routine in one place.
                  </p>

                  {/* Full Daily Routine Summary Table */}
                  <div className="overflow-x-auto rounded-[6px] border border-[#cfd8dc]">
                    <table className="w-full min-w-[580px] border-collapse text-justify text-sm leading-6">
                      <thead>
                        <tr className="bg-[#12355b] text-white">
                          <th className="border border-[#cfd8dc] px-3.5 py-2.5 font-bold">
                            Time of day
                          </th>
                          <th className="border border-[#cfd8dc] px-3.5 py-2.5 font-bold">
                            Minutes
                          </th>
                          <th className="border border-[#cfd8dc] px-3.5 py-2.5 font-bold">
                            Focus
                          </th>
                          <th className="border border-[#cfd8dc] px-3.5 py-2.5 font-bold">
                            Moves
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dailyRoutineRows.map((row) => (
                          <tr
                            key={row.timeOfDay}
                            className={
                              row.striped ? "bg-[#e6f4f1]" : "bg-white"
                            }
                          >
                            <td className="border border-[#cfd8dc] px-3.5 py-2.5 font-medium text-[#1f2a33]">
                              {row.timeOfDay}
                            </td>
                            <td className="border border-[#cfd8dc] px-3.5 py-2.5 text-[#1f2a33]">
                              {row.minutes}
                            </td>
                            <td className="border border-[#cfd8dc] px-3.5 py-2.5 text-[#1f2a33]">
                              {row.focus}
                            </td>
                            <td className="border border-[#cfd8dc] px-3.5 py-2.5 text-[#1f2a33]">
                              {row.moves}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 5: Florida Heat and Humidity */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[25px] font-bold leading-snug text-[#000000]">
                    Do Florida heat and humidity change how you should move?
                  </h2>
                  <p className="text-justify text-[#000000]">
                    A little, yes. Florida falls inside the CDC&rsquo;s South
                    Census region, and the 2016 data there ran higher at every
                    age group.
                  </p>

                  {/* Figure 2 */}
                  <figure className="pt-2">
                    <Figure2Chart />
                    <figcaption className="mt-2.5 text-justify text-[13px] italic leading-relaxed text-[#5b6770]">
                      Figure 2. Serious walking or stair difficulty, national
                      figures against the South Census region.
                    </figcaption>
                  </figure>

                  <p className="text-justify text-[#000000]">
                    We can suggest you drink lots of water so you&rsquo;re not
                    starting on a dehydration. Have a walk outside during the
                    early hours or after the sun has set. If you like playing
                    pickleball or golf during the weekends then take 2 minutes
                    out of your morning to do this. Cold hips and a sudden lunge
                    for a drop shot are a poor pairing.
                  </p>
                </section>

                {/* Section 6: When Daily Habits Are Not Enough */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[25px] font-bold leading-snug text-[#000000]">
                    When are daily habits not enough?
                  </h2>
                  <p className="text-justify text-[#000000]">
                    Some signs skip the queue. Other signs deserve an exam soon.
                    Morning stiffness that lingers past roughly half an hour,
                    especially with swollen joints, can point to inflammatory
                    causes that need a physician&rsquo;s eyes. Pain that shoots
                    below the knee, or tingling that follows a line down one
                    leg, suggests an irritated sciatic nerve.
                  </p>
                  <p className="text-justify text-[#000000]">
                    Here is the honest part. Most sciatica and back pain eases
                    over weeks, and{" "}
                    <ExternalSource
                      href="https://www.aafp.org/pubs/afp/issues/2017/0915/p407.html"
                      variant="teal"
                    >
                      the American College of Physicians&rsquo; guidance
                    </ExternalSource>{" "}
                    says as much. That reassures, and it also tempts people to
                    wait out pain that isn&rsquo;t following the script. The
                    same guidance rates the evidence for spinal manipulation as
                    low quality, with only a small functional gain over sham
                    treatment, yet it still lists manipulation among reasonable
                    first options before medication. We think any clinician who
                    skips that detail isn&rsquo;t being straight with you.
                  </p>

                  {/* Quote Box 2 (#f6f1e9 bg, #1b998b left border) */}
                  <div className="my-5 rounded-r-[8px] border-l-[4px] border-[#1b998b] bg-[#f6f1e9] px-5 py-5 sm:px-6 sm:py-5">
                    <p className="text-justify text-[18px] italic leading-[1.65] text-[#12355b]">
                      &ldquo;The best routine is the one you&rsquo;ll still do
                      on a slow Wednesday when nobody is watching. Start smaller
                      than your ambition.&rdquo;
                    </p>
                    <p className="mt-2.5 text-justify text-[13.5px]">
                      <span className="font-bold text-[#e4572e]">
                        Dr. Donny Morris, DC
                      </span>{" "}
                      <span className="text-[#5b6770]">
                        Chiropractic Physician, Jachimek Chiropractic &amp;
                        Wellness Center
                      </span>
                    </p>
                  </div>

                  <p className="text-justify text-[#000000]">
                    That reasoning shapes how we work at Jachimek Chiropractic
                    &amp; Wellness Center in Tampa. An exam comes first, so we
                    know what is pressing on what. Then, when history and
                    findings point that way, care may include{" "}
                    <InternalLink href="/services">
                      spinal decompression and sciatic relief
                    </InternalLink>{" "}
                    alongside the habits above. The evidence for nonsurgical
                    decompression is thinner than the evidence for exercise, and
                    we&rsquo;d rather tell you so than oversell it. Dr. Donny
                    Morris came to this work through his own chronic back pain
                    after years in construction, and Dr. Glen Gunderson has
                    practiced in Tampa for nearly 40 years. You can{" "}
                    <InternalLink href="/team">
                      meet the whole team here
                    </InternalLink>
                    .
                  </p>
                  <p className="text-justify text-[#000000]">
                    If you&rsquo;d like to see how we can help before deciding
                    anything, our{" "}
                    <InternalLink href="/help">
                      Let Us Help You page
                    </InternalLink>{" "}
                    is a good first stop, and{" "}
                    <InternalLink href="/the-wellness-journal">
                      The Wellness Journal
                    </InternalLink>{" "}
                    holds more of our reading on movement and recovery.
                  </p>

                  {/* CTA Box 2 (#12355b bg, #e4572e left border) */}
                  <div className="my-6 rounded-r-[8px] border-l-[4px] border-[#e4572e] bg-[#12355b] px-5 py-5 sm:px-6 sm:py-6 text-white shadow-sm">
                    <p className="text-justify text-[20px] sm:text-[22px] font-bold leading-snug text-white">
                      Ten minutes today, an exam when you need one.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-[15px] font-bold">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-[4px] bg-[#e4572e] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#c94722]"
                      >
                        Book your visit
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <a
                        href="tel:8139602225"
                        className="inline-flex items-center gap-2 text-[#ffc9b8] transition hover:text-white"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Call 813.960.2225
                      </a>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section className="pt-3 space-y-4">
                  <h2 className="text-justify text-[22px] sm:text-[25px] font-bold leading-snug text-[#000000]">
                    FAQ
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-[8px] border border-[#cfd8dc] bg-[#fbfdf8] p-5 shadow-2xs"
                      >
                        <h3 className="text-justify text-[16.5px] font-bold text-[#12355b]">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-justify text-[15px] leading-relaxed text-[#000000]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Medical Disclaimer Box */}
                <div className="mt-6 rounded-[6px] border border-gray-200 bg-gray-50 p-4 text-justify text-xs italic text-[#5b6770]">
                  Disclaimer: This article is provided for informational
                  purposes and does not constitute medical advice. For any
                  mobility concern, persistent stiffness, or nerve symptoms,
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

