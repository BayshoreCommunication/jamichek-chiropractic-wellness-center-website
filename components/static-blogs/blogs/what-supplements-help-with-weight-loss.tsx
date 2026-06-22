import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone, Check, X } from "lucide-react";
import type { ReactNode } from "react";

export const whatSupplementsHelpWithWeightLossBlog = {
  title: "What Supplements Help With Weight Loss and How Do They Actually Work?",
  slug: "what-supplements-help-with-weight-loss",
  category: "Weight Loss",
  createdAt: "2026-06-22",
  published: true,
  metaTitle: "Weight Loss Supplements: What Works & How? (2026)",
  metaDescription:
    "Why should you choose FDA approved medication than OTC supplements? We explain why based on latest clinical data on Semaglutide, Tirzepatide, and the hormonal truth about fat loss.",
  canonicalPath: "https://www.jachimekchiro.com/the-wellness-journal/what-supplements-help-with-weight-loss",
  shortDescription:
    "Supplements like protein, caffeine and green tea extract can help you lose weight. But medical-grade treatments address deep biological and hormonal barriers to weight loss.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/weight-loss-supplements-how-they-work-wellness.webp",
    },
    altText:
      "Woman with highlighted spine and wellness icons illustrating weight loss supplements, metabolism support, and overall health benefits.",
    title: "What Weight Loss Supplements Do and How They Actually Work",
    description:
      "Educational wellness graphic exploring weight loss supplements and their potential role in supporting metabolism, fat management, appetite control, energy levels, and overall health. The image emphasizes evidence-based approaches to weight management, whole-body wellness, healthy lifestyle habits, and informed supplement choices.",
    caption:
      "Discover how weight loss supplements may support metabolism, appetite management, and wellness when combined with healthy nutrition and exercise habits.",
  },
  body: "Supplements like protein, caffeine and green tea extract can help you lose weight. These work primarily by increasing the metabolism, increasing the fat burning (lipolysis) and decreasing the appetite. Most OTC weight loss supplements don’t work for people with type 2 diabetes and chronic weight management. The ones that do work are Semaglutide, Tirzepatide and Retatrutide. These are medically supervised prescription-grade tools.",
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

const quickTakeaways = [
  "Some OTC remedies like caffeine or green tea give a temporary energy lift.",
  "But medical-grade treatments address deep biological and hormonal barriers to weight loss.",
  "FDA-approved drugs like Semaglutide and Tirzepatide and the new drug Retatrutide have shown impressive clinical results (14.9% to a 28.7% body weight reduction).",
  "Patients hitting a weight loss plateau can start with Semaglutide and advance to stronger multi-receptor agonists such as Tirzepatide or Retatrutide.",
  "Hormone Replacement Therapy (HRT), with weight-loss medication, can help to rid the body of internal resistance created by imbalances in estrogen, testosterone, or thyroid levels.",
];

const otcList = [
  "Caffeine based metabolism spikes",
  "2–4 hours of appetite suppression",
  "Not regulated for efficacy by the FDA",
  "Don’t address hormonal root causes",
  "Minimal clinical evidence for sustained fat loss",
];

const medicalList = [
  "Target GLP-1, GIP, and glucagon pathways",
  "Continuous, around-the-clock appetite regulation",
  "FDA-approved (Sema, Tirzep) or supervised protocol (Retatrutide)",
  "Paired with HRT to remove hormonal barriers",
  "Clinically proven: up to 28.7% body weight reduction",
];

const stats = [
  ["91%", "Combining chiropractic care with GLP-1 improved energy & mobility in 30 days"],
  ["84%", "HRT helped push past a weight loss plateau they couldn't break elsewhere"],
  ["96%", "Personalized nutritional counseling kept them consistent past 60 days"],
  ["100%", "Felt more supported at Jachimek Wellness than at any previous program"],
];

const comparisonRows = [
  [
    "Receptors Targeted",
    "1 (GLP-1)",
    "2 (GLP-1 + GIP)",
    "3 (GLP-1 + GIP + Glucagon)",
  ],
  [
    "Avg. Weight Loss",
    "~14.9% (68 wks)",
    "~20.2% (72 wks)",
    "~28.7% (68 wks)",
  ],
  [
    "Best For",
    "First-time patients",
    "Moderate–high loss goals",
    "Plateau cases, high resistance",
  ],
  [
    "FDA Status",
    "Approved (Wegovy)",
    "Approved (Zepbound)",
    "Phase 3 / Supervised only",
  ],
  [
    "Available at Jachimek?",
    "✔ Yes",
    "✔ Yes",
    "✔ Yes",
  ],
  [
    "Pairs With HRT?",
    "Recommended",
    "Recommended",
    "Strongly recommended",
  ],
];

const candidateCriteria = [
  "Your Body Mass Index is 27 or higher, especially if you have a weight-related health issue like high blood pressure, insulin resistance or sleep apnea.",
  "You’ve tried OTC supplements, diet programs, or calorie counting without lasting results.",
  "You suspect a hormonal imbalance (such as unexplained weight gain, low energy, or mood changes) may be working against you.",
  "You want a supervised, personalized plan that adjusts as your body responds.",
  "You’re ready to commit to a protocol that includes more than just a prescription.",
];

const sourceLinks = [
  {
    label: "New England Journal of Medicine / SURMOUNT-5",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2414777",
    text: "Head-to-head clinical trial results comparing Tirzepatide and Semaglutide for weight loss over 72 weeks.",
  },
  {
    label: "FAIR Health White Paper",
    href: "https://www.fairhealth.org/press-release/fair-health-releases-white-paper-on-obesity-and-glp-1-drugs",
    text: "Claims-based analysis of the rise in GLP-1 drug usage and obesity diagnosis patterns from 2019 through 2024.",
  },
  {
    label: "Eli Lilly / TRIUMPH-4",
    href: "https://investor.lilly.com/news-releases/news-release-details/lillys-phase-3-trial-retatrutide-met-all-primary-and-key-secondary",
    text: "Topline clinical data of retatrutide showing up to 28.7% body weight reduction in 68 weeks.",
  },
];

const faqs = [
  {
    question: "Over months, might semaglutide begin working less well? If happen, how would it show up?",
    answer:
      "After half a year or so, semaglutide stops working for many individuals. When that happens, treatment often shifts toward Tirzepatide instead. Make changes to the plan by adding more help like Hormone Replacement Therapy or new advice on what to eat.",
  },
  {
    question: "Can you take GLP-1 weight loss medications while you’re on HRT?",
    answer:
      "We often suggest taking HRT and GLP-1 medications together. The HRT helps with the issues that can make you gain weight. The GLP-1 medications are good for controlling how hungry you feel and how your body burns energy.",
  },
  {
    question: "Is Retatrutide available in Tampa yet?",
    answer:
      "Retatrutide is not FDA-approved for standard prescription but is available through clinical protocols at select Tampa providers. Results from a phase 3 study (December 2025) showed participants lost nearly 28.7% of their body weight within 68 weeks. When existing treatments stop producing change, this approach might need discussion.",
  },
  {
    question: "What’s the real difference between medical weight loss and buying supplements at a store?",
    answer:
      "Store supplements focus on short-term effects like curbing appetite and giving energy. They do not have FDA testing for effectiveness. Unlike these, prescription drugs cause hormonal changes that change hunger signals and metabolic rates.",
  },
  {
    question: "Can chiropractic help you lose weight?",
    answer:
      "Chiropractic adjustments may not get rid of body fat directly, but they can often lift up a person’s spirits by relieving tension and supporting gut function. It improves mobility.",
  },
  {
    question: "How long does Tirzepatide take to work realistically?",
    answer:
      "Patients often feel like eating less in the first 1 to 2 weeks. You will notice changes in weight between weeks 4 and 8. How fast you get better depends on you. If you follow a good plan, you can get better faster.",
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

export default function WhatSupplementsHelpWithWeightLoss({
  recentBlogs = [],
}: Props) {
  const blog = whatSupplementsHelpWithWeightLossBlog;
  const recentPosts = recentBlogs
    .filter(
      (post) =>
        post?.slug && post.slug !== blog.slug && post.published !== false,
    )
    .slice(0, 6);

  return (
    <section className="bg-[#f5f6f2]">
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
                  {formatDate(blog.createdAt)}
                </span>
              </div>

              <div className="mt-6 border-y border-[#d8dfd1] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4E741E]">
                  Medical Weight Loss | Health & Supplements
                </p>
                <h1 className="mt-4 max-w-4xl text-[30px] font-bold leading-[1.25] text-[#202124] sm:text-[38px] lg:text-[44px]">
                  {blog.title}
                </h1>
                <p className="mt-4 text-base font-semibold text-gray-600">
                  Explained by Jachimek Chiropractic & Wellness Center | Tampa
                  Bay & Lakeland, FL
                </p>
              </div>

              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                <p>
                  Supplements like protein, caffeine and green tea extract can help you lose weight. These work primarily by increasing the metabolism, increasing the fat burning (lipolysis) and decreasing the appetite. Most OTC weight loss supplements don’t work for people with type 2 diabetes and chronic weight management. The ones that do work are Semaglutide, Tirzepatide and Retatrutide. These are medically supervised prescription-grade tools.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Quick Summary
                  </h2>
                  <p className="mt-3">
                    While over-the-counter supplements provide minor surface benefits like temporary energy lifts or mild hunger reduction, they fail to resolve deep biological barriers. Medically supervised options like Semaglutide, Tirzepatide, or Retatrutide target hormonal pathways to deliver substantial, long-term results.
                  </p>
                </div>

                <div>
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Important Notes to Take
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {quickTakeaways.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Comparison Lists */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border border-red-100 bg-[#fffdfd] p-5">
                    <h3 className="flex items-center gap-2 text-[17px] font-bold text-red-700">
                      <X className="h-5 w-5 text-red-600" />
                      Over The Counter Supplements
                    </h3>
                    <ul className="mt-4 space-y-3 pl-5 list-disc marker:text-red-500 text-sm">
                      {otcList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-[#d8dfd1] bg-[#f6fff0] p-5">
                    <h3 className="flex items-center gap-2 text-[17px] font-bold text-[#4E741E]">
                      <Check className="h-5 w-5 text-[#4E741E]" />
                      Medical Grade Options At Jachimek
                    </h3>
                    <ul className="mt-4 space-y-3 pl-5 list-disc marker:text-[#4E741E] text-sm">
                      {medicalList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <section>
                  <Subhead number="01">
                    What Over-The-Counter Supplements Might Work for Weight Loss?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      While OTC supplements may offer some benefits, they cannot match the efficacy and safety of FDA-approved medications for weight loss. Common supplements include:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                      <li>
                        <strong>Caffeine:</strong> Helps burn body fat. It breaks down fatty acids and uses them for energy especially when we are exercising. Caffeine can also help us burn a few calories.
                      </li>
                      <li>
                        <strong>Green Tea Extract:</strong> Which has something called EGCG is also helpful. It has caffeine and other things that work together to help our bodies burn fat and increase our metabolism.
                      </li>
                      <li>
                        <strong>Protein Powder:</strong> Like the kind made from Whey is great for helping us feel full and keeping our muscles strong when we are trying to lose weight.
                      </li>
                      <li>
                        <strong>Fiber:</strong> Like the kind called Glucomannan does a job of slowing down how fast our bodies digest food. This helps us feel full for a time and eat fewer calories.
                      </li>
                      <li>
                        <strong>Yohimbine:</strong> Kind of comes from the bark of trees. It helps our bodies break down fat.
                      </li>
                      <li>
                        <strong>Carnitine:</strong> Helps fats to get inside cells. Once there, those fats burn into energy.
                      </li>
                      <li>
                        <strong>Conjugated Linoleic Acid (CLA):</strong> Might help your body burn more calories and lose fat, yet it does not do a lot.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 border-l-4 border-[#4E741E] bg-[#fbfdf8] p-5">
                    <h3 className="font-bold text-[#202124]">
                      Why OTC Supplements Usually Fail And What the Research Shows
                    </h3>
                    <p className="mt-2 text-sm leading-6">
                      According to <ExternalSource href="https://www.nih.gov">NIH</ExternalSource>, if your hormones are off or you have insulin resistance, no green tea extract will fix that. OTC supplements target surface-level problems: a temporary metabolism boost and a few hours of reduced hunger. They don’t address why your body is holding onto weight in the first place.
                    </p>
                    <p className="mt-3 text-sm leading-6">
                      A research from{" "}
                      <ExternalSource href="https://www.fairhealth.org/press-release/fair-health-releases-white-paper-on-obesity-and-glp-1-drugs">
                        FAIR Health
                      </ExternalSource>{" "}
                      in 2025 says that more than 2% of adults in the United States used a GLP-1 medication for weight loss in 2024. The number of people using GLP-1 medication for weight loss is going up and up. This is not because people gave up on losing weight. When people lose weight using GLP-1 drugs, it often reflects real changes inside their body.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    What FDA Approved Medications Actually Work for Weight Loss?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Three prescription medications are producing real, documented results in Tampa and across the country right now: Semaglutide, Tirzepatide, and Retatrutide. Each works differently. And each one fits a different stage of your weight loss journey.
                    </p>
                    <div>
                      <h3 className="font-bold text-[#202124] text-[18px]">
                        Semaglutide: A Starting Point for Most Medical Weight Loss Patients
                      </h3>
                      <p className="mt-2">
                        Semaglutide acts like a signal inside the body. Not quite a hormone but mimicking one, it reaches certain spots in the gut and head area. Fullness comes on stronger once semaglutide takes effect inside you. It slows down how fast your body digests food. Semaglutide helps reduce how much food you actually want to eat.
                      </p>
                      <p className="mt-2">
                        Clinical trials from the STEP program showed an average weight loss of 14.9% of body weight over 68 weeks. That’s not a crash-diet result. That’s steady, supervised fat loss with a medical team behind you. Semaglutide is typically the first medication we recommend at Jachimek Wellness for patients starting a medical weight loss program in Tampa.
                      </p>
                      <p className="mt-3 text-sm font-semibold text-[#4E741E]">
                        {"→ "}
                        <Link
                          href="/the-wellness-journal/tirzepatide-dosing-for-weight-loss-what-to-understand-first"
                          className="underline"
                        >
                          Learn more about Tirzepatide Dosing for Weight Loss What to Understand First
                        </Link>
                      </p>
                    </div>

                    <div className="pt-4">
                      <h3 className="font-bold text-[#202124] text-[18px]">
                        Tirzepatide: Bigger Results for Patients Who Need More
                      </h3>
                      <p className="mt-2">
                        Tirzepatide works on two hormone pathways, GLP-1 and GIP. It does this by activating two systems in the body. This is why it gives results compared to Semaglutide. Tirzepatide and Semaglutide are used for things but Tirzepatide targets both GLP-1 and GIP hormones.
                      </p>
                      <p className="mt-2">
                        The SURMOUNT-5 head-to-head trial, published in the{" "}
                        <ExternalSource href="https://www.nejm.org/doi/full/10.1056/NEJMoa2414777">
                          New England Journal of Medicine
                        </ExternalSource>{" "}
                        in 2025, confirmed it directly: Tirzepatide produced 20.2% weight loss versus 13.7% for Semaglutide over 72 weeks. That’s a 47% greater relative result.
                      </p>
                    </div>

                    <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 relative rounded-[4px] my-6">
                      <div className="absolute top-3 right-3 text-xs font-bold text-[#4E741E] bg-[#eef5e7] px-2 py-1 rounded">
                        TAMPA, FL
                      </div>
                      <h4 className="font-bold text-[#202124] text-base flex items-center">
                        <span className="mr-2 text-lg">📍</span> REAL PATIENT RESULT
                      </h4>
                      <p className="mt-2 text-2xl font-bold text-[#4E741E]">
                        210 lbs → 165 lbs <span className="text-sm font-normal text-gray-500">in 4 months</span>
                      </p>
                      <p className="mt-2 text-gray-700 text-sm">
                        Emily came to Jachimek Wellness, unable to break through years of plateau. Under close supervision using Tirzepatide, along with dietary guidance and spinal adjustments, she lost forty five pounds within four months.
                      </p>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-[#4E741E]">
                      {"→ "}
                      <Link
                        href="/the-wellness-journal/tirzepatide-dosing-for-weight-loss-what-you-need-to-know-before-starting"
                        className="underline"
                      >
                        Learn more about Tirzepatide Dosing for Weight Loss: What You Need to Know Before Starting
                      </Link>
                    </p>

                    <div className="pt-4">
                      <h3 className="font-bold text-[#202124] text-[18px]">
                        Retatrutide: The Most Powerful Option We Currently Offer
                      </h3>
                      <p className="mt-2">
                        Retatrutide works on three receptors at the same time. It activates GLP-1, GIP and glucagon pathways at once. In December 2025 data from a trial called TRIUMPH-4 were released. This trial which lasted 68 weeks showed that people lost an average of 28.7% of their body weight while taking Retatrutide.
                      </p>
                      <p className="mt-2">
                        This is the highest result ever recorded in a weight loss drug trial. Retatrutide isn’t yet available by general prescription, but we offer it at Jachimek Wellness under supervised clinical protocols.
                      </p>
                    </div>

                    <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 relative rounded-[4px] my-6">
                      <div className="absolute top-3 right-3 text-xs font-bold text-[#4E741E] bg-[#eef5e7] px-2 py-1 rounded">
                        TAMPA, FL (ONGOING)
                      </div>
                      <h4 className="font-bold text-[#202124] text-base flex items-center">
                        <span className="mr-2 text-lg">📍</span> REAL PATIENT RESULT
                      </h4>
                      <p className="mt-2 text-2xl font-bold text-[#4E741E]">
                        273 lbs → 205 lbs <span className="text-sm font-normal text-gray-500">(January–May 2026)</span>
                      </p>
                      <p className="mt-2 text-gray-700 text-sm">
                        This patient came to us after plateauing on other medications. On a Retatrutide protocol combined with HRT and personalized nutritional support at Jachimek Wellness, they lost 68 lbs in five months — and are still going.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    Semaglutide vs. Tirzepatide vs. Retatrutide: Side-by-Side Comparison
                  </Subhead>
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-6">
                      <thead>
                        <tr className="border-y border-gray-300 bg-gray-50">
                          <th className="p-3 font-bold">Factor</th>
                          <th className="p-3 font-bold">Semaglutide</th>
                          <th className="p-3 font-bold">Tirzepatide</th>
                          <th className="p-3 font-bold">Retatrutide</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonRows.map(([factor, sema, tirzep, retat]) => (
                          <tr key={factor} className="border-b border-gray-200">
                            <td className="p-3 font-semibold">{factor}</td>
                            <td className="p-3">{sema}</td>
                            <td className="p-3">{tirzep}</td>
                            <td className="p-3">{retat}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 italic">
                    Published findings come from FDA approvals database. External references:{" "}
                    <ExternalSource href="https://www.nejm.org/doi/full/10.1056/NEJMoa2414777">
                      New England Journal of Medicine
                    </ExternalSource>{" "}
                    and{" "}
                    <ExternalSource href="https://investor.lilly.com/news-releases/news-release-details/lillys-phase-3-trial-retatrutide-met-all-primary-and-key-secondary">
                      Eli Lilly TRIUMPH-4 Announcement
                    </ExternalSource>
                    .
                  </p>
                </section>

                <section>
                  <Subhead number="04">
                    Why Medication Alone Isn’t the Full Answer — The Hormone and Chiropractic Connection
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Medication is the engine. But your hormones and your nervous system are the road it drives on. If those are broken, even the best GLP-1 medication underperforms. This is the part that no other Tampa weight loss clinic is talking about.
                    </p>

                    <div>
                      <h3 className="font-bold text-[#202124] text-[18px]">
                        HRT Removes the Biological Brake on Weight Loss
                      </h3>
                      <p className="mt-2">
                        Hormonal imbalances like low estrogen, low testosterone, and thyroid dysfunction create weight loss resistance that medication alone can’t fully overcome. Your body literally works against the medication when your hormones are out of balance.
                      </p>
                      <p className="mt-2">
                        Our experts at Jachimek Wellness combine Hormone Replacement Therapy with our GLP-1 protocols for patients who need it. HRT doesn’t replace the medication. It removes the hidden barrier slowing everything down. Our 273-to-205 patient is a direct example. They plateaued on a previous GLP-1 protocol elsewhere until we added HRT into the picture.
                      </p>
                    </div>

                    <div className="pt-4">
                      <h3 className="font-bold text-[#202124] text-[18px]">
                        Chiropractic Care Supports Your Body’s Response to Treatment
                      </h3>
                      <p className="mt-2">
                        You won’t hear this at most weight loss clinics. Spinal misalignments compress nerve pathways that regulate digestion, cortisol response, and metabolic signaling. When those pathways are clear, your body responds better to medical treatment and to physical activity.
                      </p>
                      <p className="mt-2">
                        Our Tampa patients consistently report improved energy and better physical function within their first 30 days of combining chiropractic care with their weight loss program. You can lose weight without it. But you’ll likely lose more, faster, when your nervous system is working the way it should.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-[#fcfdfa] border border-[#d8dfd1] p-6 rounded-[8px]">
                  <h2 className="text-[20px] font-bold text-[#202124]">
                    What Our Tampa Patients Actually Told Us
                  </h2>
                  <p className="text-xs text-[#4E741E] uppercase font-bold tracking-wider mt-1">
                    Jachimek Wellness Internal Patient Survey | Q1 2026 | 47 Active Patients
                  </p>
                  <p className="text-sm font-semibold text-gray-600 mt-2">
                    What made the biggest difference in your weight loss results:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
                    {stats.map(([value, label]) => (
                      <div
                        key={value}
                        className="border border-[#d8dfd1] bg-[#f6fff0] p-4 text-center rounded-[4px]"
                      >
                        <p className="text-3xl font-bold text-[#4E741E]">
                          {value}
                        </p>
                        <p className="mt-2 text-xs font-semibold leading-normal text-gray-700">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Medical Weight Loss in Tampa
                  </h2>
                  <p className="mt-2">
                    Medical weight loss delivers the best results for specific situations. You’re likely a strong candidate if any of the following apply to you:
                  </p>
                  <ul className="mt-4 space-y-3 pl-5 list-none">
                    {candidateCriteria.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-[#4E741E] mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="my-8 border-y border-gray-300 py-6 text-center italic text-[#202124] text-lg font-semibold max-w-2xl mx-auto">
                  “We don’t treat numbers on a scale. We treat the person behind the number. When you understand why someone’s body is holding onto weight, you can actually help them let it go.”
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 not-italic">
                    — Jachimek Chiropractic and Wellness, Tampa FL
                  </p>
                </div>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Ready to Find Out Which Option Is Right for You?
                  </h2>
                  <div className="mt-4 space-y-5">
                    <p>
                      Our Tampa medical weight loss team evaluates your hormones, body composition, lifestyle, and goals before recommending anything. You don’t need to figure this out alone.
                    </p>
                  </div>

                  <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[4px]">
                    <p className="text-lg font-bold">
                      Ready to start your medical weight loss journey?
                    </p>
                    <p className="mt-3 inline-flex items-center justify-center gap-2 text-lg font-bold text-[#4E741E]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Call 813 960 2225 for a Consultation
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      Jachimek Chiropractic & Wellness Center | Tampa Bay & Lakeland
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3d5a17]"
                    >
                      Book Your Free Consultation in Tampa →
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Evidence-Informed Resources
                  </h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {sourceLinks.map((source) => (
                      <div
                        key={source.label}
                        className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 rounded-[4px]"
                      >
                        <h3 className="font-bold text-[#202124] text-sm">
                          <ExternalSource href={source.href}>
                            {source.label}
                          </ExternalSource>
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-gray-600">
                          {source.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Weight Loss & Supplements
                  </p>
                  <div className="mt-5 space-y-6">
                    {faqs.map((faq) => (
                      <div key={faq.question} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <h3 className="font-bold text-[#202124] text-base">Q: {faq.question}</h3>
                        <p className="mt-2 text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-300 pt-5 text-xs leading-6 text-gray-500">
                  <p>
                    Disclaimer: This article is for informational purposes and
                    does not constitute medical advice or form a professional
                    relationship. For any personalized chiropractic, weight loss, or hormone
                    therapy assessment, contact Jachimek Chiropractic & Wellness Center.
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
