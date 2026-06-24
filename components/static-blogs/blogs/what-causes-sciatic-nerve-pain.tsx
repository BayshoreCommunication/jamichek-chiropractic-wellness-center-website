import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import type { ReactNode } from "react";

export const whatCausesSciaticNervePainBlog = {
  title: "What Causes Sciatic Nerve Pain and How Chiropractic Care Can Help",
  slug: "what-causes-sciatic-nerve-pain-and-how-chiropractic-care-can-help",
  category: "Chiropractic Care",
  createdAt: "2026-05-14",
  published: true,
  metaTitle: "Stop Sciatic Nerve Pain: Expert Chiropractic Care",
  metaDescription: "Chronic leg pain often stems from hidden spinal compression. We investigate the source of your sciatica to provide real, drug-free pressure relief.",
  shortDescription:
    "Sciatica occurs when the sciatic nerve becomes irritated, inflamed, or compressed from a herniated disc, spinal stenosis, or piriformis syndrome.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/sciatic-nerve-pain-chiropractic-treatment.webp",
    },
    altText:
      "Chiropractor providing treatment for sciatic nerve pain and lower back discomfort",
    title: "Sciatic Nerve Pain Relief Through Chiropractic Care",
    description:
      "Chiropractic treatment session focused on relieving sciatic nerve pain, lower back discomfort, and nerve inflammation through spinal adjustments and therapeutic care designed to improve mobility and reduce pain symptoms.",
    caption:
      "Chiropractic care session targeting sciatic nerve pain and back relief",
  },
  body: "Sciatica occurs when the sciatic nerve becomes irritated, inflamed, or compressed from a herniated disc, spinal stenosis, or piriformis syndrome. Chiropractic care aims to relieve nerve pressure through spinal adjustments, manual therapies, and exercises.",
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
  "Sciatica is nerve compression, not just a muscle problem.",
  "True sciatica vs. sciatic-like pain requires different treatment approaches.",
  "Herniated discs, spinal stenosis, and piriformis syndrome are the top causes.",
  "Chiropractic adjustments directly address the mechanical pressure on the nerve.",
  "Most mild-to-moderate cases improve in a few weeks of consistent care.",
  "Warning signs like loss of bladder control require immediate medical attention.",
];

const stats = [
  ["2-8 Weeks", "Typical recovery timeline"],
  ["#1 Longest Nerve", "The sciatic nerve in your body"],
  ["Drug-Free", "Conservative care resolves most cases"],
];

const painTypes = [
  [
    "True Sciatica",
    "This happens when the sciatic nerve is squeezed directly.",
  ],
  [
    "Sciatic-Like Pain",
    "This is because of issues with the muscles or joints near the sciatic nerve.",
  ],
];

const causes = [
  {
    title: "Herniated or Bulging Disc",
    body: "This is the leading cause of radiculopathy. An L4-L5 disc bulge pushes outward and presses on the nerve. The inner disc material irritates the surrounding nerve roots directly. This creates sharp pain that travels all the way to your toes.",
  },
  {
    title: "Spinal Stenosis",
    body: "The spinal canal narrows and squeezes the nerves. This condition is much more common as people begin aging. It reduces the space available for nerves to exit the spine safely. Walking often becomes difficult because the nerves lack proper room to function.",
  },
  {
    title: "Muscle Tightness",
    body: "Piriformis syndrome mimics sciatica by compressing the nerve in the gluteal region. A tight piriformis muscle in the buttock can irritate the nerve deeply. Sitting for long hours at a desk makes this tightness much worse. It is a very common issue for office workers in Tampa.",
  },
  {
    title: "Poor Posture",
    body: "When you lean to one side every day it puts pressure on your spine. This daily habit can cause subluxation, which is a minor spinal misalignment. The muscles in your back then start to pull and that causes inflammation around the nerves. Small changes in the way you stand or sit can eventually lead to chronic pain levels.",
  },
  {
    title: "Injury or Accident",
    body: "Car accidents on I-4 or sudden falls can shift your spinal alignment. These events trigger immediate nerve compression and lead to intense local swelling. Even an old injury can resurface years later as chronic sciatica. Proper alignment is necessary to stop the cycle of recurring pain.",
  },
  {
    title: "Degenerative Disc Disease",
    body: "Spinal discs get worn out as time passes. This wear and tear reduces the space between your vertebrae and nerves that acts as protection. Your nerve roots get irritated and pressed all the time without that extra space. It is necessary to take care of your spine consistently.",
  },
];

const aggravators = [
  "Sitting for long periods without lumbar support",
  "Sudden bending or twisting of the torso",
  "Lifting heavy objects using your back muscles",
  "Lack of regular movement and core exercise",
  "Sleeping in positions that strain the lower back",
];

const treatments = [
  ["Manual therapy", "to reduce pressure on the nerve roots"],
  ["Posture correction", "to balance the weight on your spine"],
  ["Therapeutic exercise", "to improve your overall spinal stability"],
  ["Lifestyle advice", "to help you avoid future painful flare-ups"],
];

const healingSigns = [
  "Pain becomes less sharp and much more manageable daily",
  "The pain stops traveling as far down your leg",
  'Tingling and "pins and needles" sensations start to reduce',
  "You notice an improved gait while walking or moving",
  "Sitting and standing become much less painful for you",
  "Muscle strength returns to your affected leg and foot",
];

const preventionTips = [
  "When you are sitting at your office desk remember to sit up and maintain good posture.",
  "You should get up from your chair. Move around every now and then because sitting for too long is not good for you.",
  "Your back will thank you if you do exercises to strengthen your core stability.",
  "If you need to lift something do not use your back; use your legs and make sure you are lifting correctly.",
  "You should try to stay active by doing things like swimming or walking because these are good for your body.",
  "It is a good idea to maintain a healthy weight because being overweight can lead to a sedentary lifestyle.",
  "When you are buying shoes make sure to get shoes that are supportive and provide good support for your feet and back.",
];

const faqs = [
  {
    question: "What vitamin is lacking for sciatic nerve pain?",
    answer:
      "Vitamin B12 is essential for nerve regeneration and health. A deficiency can make nerve pain feel much more intense.",
  },
  {
    question: "Can a chiropractor fix L4 and L5?",
    answer:
      'They cannot "fix" a torn disc, but they improve alignment. This reduces pressure on the nerve to allow for natural healing.',
  },
  {
    question: "Is there any permanent solution for L4-L5 disc bulge?",
    answer:
      "Many cases resolve with conservative care and proper lifestyle changes. Surgery is the final alternative for advanced or non-responsive cases.",
  },
  {
    question: "What are the alternatives to chiropractic care?",
    answer:
      "Physical therapy, medication, and injections are common medical alternatives. Some patients require a combination of these treatments for relief.",
  },
  {
    question: "What is the most successful treatment for sciatica?",
    answer:
      "Combining chiropractic care with movement therapy and lifestyle changes works best.",
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

export default function WhatCausesSciaticNervePain({
  recentBlogs = [],
}: Props) {
  const blog = whatCausesSciaticNervePainBlog;
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
                  Chiropractic Care | Sciatica Relief
                </p>
                <h1 className="mt-4 max-w-4xl text-[30px] font-bold leading-[1.25] text-[#202124] sm:text-[38px] lg:text-[44px]">
                  {blog.title}
                </h1>
                <p className="mt-4 text-base font-semibold text-gray-600">
                  Explained by Jachimek Chiropractic & Wellness | Tampa Bay &
                  Lakeland, FL
                </p>
              </div>

              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                <p>
                  Sciatic nerve pain, also called sciatica, occurs when the
                  sciatic nerve becomes irritated, inflamed, or compressed from
                  a herniated disc, spinal stenosis, or piriformis syndrome.
                  Chiropractic care aims to relieve this nerve pressure through
                  spinal adjustments, manual therapies and exercises to restore
                  proper alignment and improve mobility.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Quick Takeaways
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {quickTakeaways.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map(([value, label]) => (
                    <div
                      key={value}
                      className="border border-[#d8dfd1] bg-[#f6fff0] p-5 text-center"
                    >
                      <p className="text-2xl font-bold text-[#4E741E]">
                        {value}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-gray-700">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <section>
                  <Subhead number="01">
                    Let&apos;s Take a Look At Where Sciatic Nerve Pain Happens
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Sciatic pain does not stay in one place. It starts in the
                      lower back and travels through the pelvic region.
                      Sometimes it reaches the calf or even the foot. That is
                      what makes it confusing. The sciatic nerve is really big.
                      It is the longest nerve in our body.
                    </p>
                    <p>There are two kinds of sciatic nerve problems:</p>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {painTypes.map(([title, body]) => (
                      <div key={title} className="border-l-4 border-[#4E741E] bg-gray-50 p-5">
                        <h3 className="font-bold text-[#202124]">{title}</h3>
                        <p className="mt-2">{body}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-5">
                    <p>
                      People often think they just have hip pain or a pulled
                      muscle when they really have nerve problems with the
                      sciatic nerve. Hip issues usually stay in the groin area.
                      Sciatica follows a dermatome map downward in a straight
                      line.
                    </p>
                    <p>
                      Many patients in Polk County misdiagnose it as muscle pain
                      at first. The L4 and L5 vertebrae sit in the lower spine
                      near the nerve. When these discs bulge, they press on the
                      spinal canal and roots. That pressure creates the sharp,
                      electric pain that travels down the posterior thigh.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    So, What Causes Terrible Pain To Sciatic Nerve
                  </Subhead>
                  <p className="mt-5">
                    It rarely comes from one single issue. Most cases build over
                    time due to mechanical stress on the spine.
                  </p>

                  <div className="mt-6 space-y-5">
                    {causes.map((cause, index) => (
                      <div key={cause.title}>
                        <h3 className="font-bold">
                          {index + 1}. {cause.title}
                        </h3>
                        <p>{cause.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    What Aggravates the Sciatic Nerve?
                  </h2>
                  <ul className="mt-5 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {aggravators.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <Subhead number="03">
                    Is it Better to Go to a Physical Therapist or Chiropractor
                    for Sciatica?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Let&apos;s be honest. Most people ask this after the pain
                      becomes unbearable. A chiropractor is often the better
                      first step for nerve pressure relief. Sciatica is usually
                      caused by compression from a spinal misalignment.
                      Chiropractic adjustments directly address that mechanical
                      pressure through specific manual shifts.
                    </p>
                    <p>
                      I have seen cases where someone tried stretching for weeks
                      elsewhere. Their pain stayed because the bone was still
                      pressing the nerve. Once spinal alignment was corrected,
                      relief finally came to the patient. Joint motion must be
                      restored before the nerve can truly heal.
                    </p>
                    <p>
                      That does not mean physical therapy is useless for your
                      recovery. It becomes very important once your initial
                      spinal alignment improves significantly. Therapy helps
                      strengthen your muscles to prevent the pain from
                      returning.
                    </p>
                    <p>
                      According to musculoskeletal studies, conservative care
                      resolves most cases without surgery. Using a drug-free
                      relief approach is safer for your overall health.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    How Our Chiropractic Care Can Help Your Sciatica Pain
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      We offer practical and honest care at Jachimek
                      Chiropractic and Wellness. We give you chiropractic care
                      that is based on real results. Our way of doing things
                      looks at your body and life, not just the pain you are
                      feeling. We want to find the reason for your pain and help
                      you feel better.
                    </p>
                    <p>Treatment usually includes:</p>
                    <ul className="space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                      {treatments.map(([title, body]) => (
                        <li key={title}>
                          <span className="font-bold">{title}</span> {body}
                        </li>
                      ))}
                    </ul>
                    <p>
                      We also guide patients on using heat and cold therapy. We
                      teach safe stretching routines that protect your sensitive
                      lower back. We always put the safety of patients first.
                    </p>
                    <p>
                      If someone has bad nerve damage that will not go away they
                      might need to have surgery. Things like not being able to
                      control their bladder are very serious. That needs medical
                      help right away. We refer those cases to specialists in
                      the Lakeland medical community.
                    </p>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-sm font-semibold text-gray-700">
                    Also read: How Chiropractic Adjustments Support Faster
                    Recovery After Sports Injuries
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    How Long Does It Take a Chiropractor to Fix a Sciatic
                    Nerve?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Most people want a quick fix for their leg pain. The
                      honest answer is that your recovery timeline always
                      depends. Mild cases of acute sciatica can improve within 2
                      weeks. Moderate cases often take 6 to 8 weeks of regular
                      care. Tissue healing is a slow process that cannot be
                      rushed easily.
                    </p>
                    <p>
                      The severity of your nerve compression matters the most
                      for healing. A small disc bulge heals faster than a severe
                      spinal herniation. Your lifestyle in Florida also plays a
                      very big role here.
                    </p>
                    <p>
                      Sitting all day in a car slows your natural recovery.
                      Staying active with gentle walking helps maintain your
                      mobility restoration. Consistency with your inflammation
                      reduction plan is the real key.
                    </p>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-sm font-semibold text-gray-700">
                    Also read: How Chiropractor Spinal Adjustments Improve
                    Posture and Relieve Pain Naturally
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    What Are the Signs That Sciatica Is Healing?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Recovery does not happen all at once for most patients. It
                      shows up in small, positive changes in your body. One
                      major sign is the centralization of your daily pain. This
                      means the pain moves from the foot back up.
                    </p>
                    <p>Other signs of healing include:</p>
                    <ul className="space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                      {healingSigns.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p>
                      These signs mean the nerve pressure is finally reducing
                      over time. Your body is moving away from a state of
                      constant irritation.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="07">Prevention Is Better Than a Cure</Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Prevention truly matters for maintaining your long-term
                      lumbar health. Good body mechanics prevent the spine from
                      shifting out of place.
                    </p>
                    <ul className="space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                      {preventionTips.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <Subhead number="08">
                    When Should You Not See a Chiropractor?
                  </Subhead>
                  <div className="mt-5 border border-[#e4d1c5] bg-[#fff7f1] p-5">
                    <h3 className="font-bold text-[#202124]">
                      Important Safety Note
                    </h3>
                    <div className="mt-3 space-y-5">
                      <p>
                        Sometimes chiropractic care is not what you need. If
                        you have Cauda Equina Syndrome you need to go to the
                        hospital right away. Think about waking up and your legs
                        are totally numb and you cannot move them. That is a
                        serious problem that needs surgery.
                      </p>
                      <p>
                        You should see a doctor first if you have a fracture or
                        a bad infection. Chiropractic care works best when the
                        problem is mechanical, with the muscles and bones. We
                        always screen our patients to ensure they are safe for
                        adjustments. Your safety is more important than any
                        spinal adjustment we perform.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    But When You Must See One, Call Jachimek Chiropractic &
                    Wellness
                  </h2>
                  <div className="mt-5 border border-[#4E741E] bg-[#f6fff0] p-6 text-center">
                    <p className="text-lg font-bold">
                      We want to find out what is causing your sciatica, not
                      just treat the symptoms.
                    </p>
                    <p className="mt-3 inline-flex items-center justify-center gap-2 text-lg font-bold text-[#4E741E]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Call 813 960 2225 to Get Relief from Your Sciatica
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      Free Consultation | Jachimek Chiropractic & Wellness |
                      Tampa Bay & Lakeland
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white"
                    >
                      Schedule Your Appointment
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Sciatica and Chiropractic Care
                  </p>
                  <div className="mt-5 space-y-5">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3 className="font-bold">Q: {faq.question}</h3>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-300 pt-5 text-sm leading-6 text-gray-600">
                  <p>
                    Disclaimer: This article is for informational purposes and
                    does not constitute medical advice or form a professional
                    relationship. For any personalized physical therapy
                    assessments, contact Jachimek Chiropractic & Wellness
                    Center.
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
