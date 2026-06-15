import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import type { ReactNode } from "react";

export const canChiropracticCareImproveSleepQualityAndReduceNighttimePainBlog = {
  title: "Can Chiropractic Care Improve Sleep Quality and Reduce Nighttime Pain?",
  slug: "can-chiropractic-care-improve-sleep-quality-and-reduce-nighttime-pain",
  category: "Chiropractic Care",
  createdAt: "2026-06-15",
  published: true,
  metaTitle: "Can chiropractic fix your sleep and nighttime pain?",
  metaDescription:
    "Nighttime pain stealing your sleep? Learn how chiropractic care helps Tampa Bay residents finally rest.",
  canonicalPath: "https://www.jachimekchiro.com/the-wellness-journal/can-chiropractic-care-improve-sleep-quality-and-reduce-nighttime-pain",
  shortDescription:
    "Midnight wakefulness could come from spinal tension disturbing hours past sunset. Relief often begins once nerve interference gets addressed through precise corrections.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/chiropractic-care-improve-sleep-quality-pain.webp",
    },
    altText:
      "Woman sleeping comfortably in bed with highlighted spine graphic illustrating chiropractic care benefits for sleep quality and pain relief.",
    title: "Can Chiropractic Care Improve Sleep Quality and Reduce Pain?",
    description:
      "Wellness-focused chiropractic graphic showing a person sleeping peacefully alongside a spinal health illustration. The image highlights the potential benefits of chiropractic care for improving sleep quality, reducing nighttime discomfort, supporting spinal alignment, and promoting overall physical wellness and recovery.",
    caption:
      "Chiropractic care may help improve sleep quality by reducing spinal tension, relieving nighttime pain, and supporting better overall health and recovery.",
  },
  body: "Chiropractic care may help improve sleep quality and reduce nighttime pain by correcting spinal misalignment, reducing nerve interference, and restoring natural brain-body communication.",
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
  "Spinal misalignment creates nerve interference and disrupts normal sleep cycles.",
  "A 2024 peer-reviewed study showed significant sleep stage improvements after 4 weeks of chiropractic care.",
  "33% of patients reported immediate sleep improvement after just one session.",
  "Nighttime pain from arthritis, disc issues, and pinched nerves responds well to spinal adjustment.",
  "Pairing chiropractic with regenerative therapy and peptide support accelerates results.",
  "Poor sleep disrupts cortisol and leptin, directly impacting weight and energy in Florida's active lifestyle."
];

const benefitRows = [
  [
    "Chronic Lower Back Pain",
    "Disc decompression + nerve root relief.",
    "Most patients sleep in longer uninterrupted stretches within 3–4 weeks.",
  ],
  [
    "Neck and Upper Back Pain",
    "Improved joint mechanics allow normal sleeping posture.",
    "Waking from neck stiffness decreases significantly.",
  ],
  [
    "Arthritis (Spinal)",
    "A little movement eases the pull that drags people out of bed too early.",
    "Sometimes just shifting positions softens the tightness by sunrise.",
  ],
  [
    "Radiculopathy",
    "Once the back problem heals, the numbness/tingling goes away while sleeping.",
    "It stays an uninterrupted sleep without that weird numbness getting in the way.",
  ],
  [
    "Tension Headaches",
    "Cervical adjustments reduce headache frequency.",
    "A major sleep disruptor for many patients is significantly reduced.",
  ],
];

const stats = [
  ["33%", "Immediate sleep improvement reported after a single chiropractic session"],
  ["76", "Adults with chronic back pain studied in 2024 peer-reviewed sleep research"],
  ["4 Wks", "Duration of care required to show significant sleep stage improvements"],
];

const sourceLinks = [
  {
    label: "CDC Sleep Data",
    href: "https://www.cdc.gov/sleep/data-and-statistics/adults.html",
    text: "CDC reports that about 70 million people in the U.S. struggle with ongoing sleep issues and pain plays a major role.",
  },
  {
    label: "Brain Sciences (MDPI)",
    href: "https://www.mdpi.com/2076-3425/14/11/1124",
    text: "A 2024 study tracked chronic lower back pain patients and observed significant sleep stage improvements after chiropractic care.",
  },
  {
    label: "American Chiropractic Association",
    href: "https://www.acatoday.org/practice/clinical-resources/clinical-information-and-resources/",
    text: "ACA recognizes pain relief and nervous system support as core clinical outcomes of spinal manipulation.",
  },
];

const faqs = [
  {
    question: "Should I change my sleeping position for lower back pain?",
    answer:
      "Back sleeping? Try a pillow beneath the knees. It eases strain on the low back. For those turned toward the side, slipping a solid cushion between the legs supports hip position.",
  },
  {
    question: "Can chiropractic help insomnia with no obvious pain?",
    answer:
      "Yes, sometimes it works. Restoring nervous system balance can improve sleep and transition into rest even in the absence of pain.",
  },
  {
    question: "Can I continue pain medication while doing chiropractic care?",
    answer:
      "Yes. Chiropractic care works alongside drugs. As spinal health gradually gets better, certain individuals find they rely less on prescription doses.",
  },
  {
    question: "Could bad sleep affect losing weight?",
    answer:
      "When you don't get enough sleep, it causes higher cortisol and lower leptin. This shift alters appetite regulation and fat distribution in the body.",
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

export default function CanChiropracticCareImproveSleepQualityAndReduceNighttimePain({
  recentBlogs = [],
}: Props) {
  const blog = canChiropracticCareImproveSleepQualityAndReduceNighttimePainBlog;
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
                  Sleep Quality | Nighttime Pain Relief
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
                  Yes. Midnight wakefulness could come from spinal tension disturbing hours past sunset.
                  Relief often begins once nerve interference gets addressed through precise corrections.
                  Those tossing on pillows in Tampa, Brandon, St. Pete, or nearby areas of Hillsborough County
                  may find this approach worth exploring.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Quick Summary
                  </h2>
                  <p className="mt-3">
                    Chiropractic care may help improve sleep quality by reducing spinal tension,
                    relieving nighttime pain, supporting spinal alignment, and promoting overall physical recovery
                    and deep sleep.
                  </p>
                </div>

                <div>
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Key Points To Remember
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
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Which Conditions Respond Best to Chiropractic Sleep Care?
                  </h2>
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-6">
                      <thead>
                        <tr className="border-y border-gray-300 bg-gray-50">
                          <th className="p-3 font-bold">Condition</th>
                          <th className="p-3 font-bold">
                            How Chiropractic Helps Sleep
                          </th>
                          <th className="p-3 font-bold">Expected Sleep Outcome</th>
                        </tr>
                      </thead>
                      <tbody>
                        {benefitRows.map(([condition, action, benefit]) => (
                          <tr key={condition} className="border-b border-gray-200">
                            <td className="p-3 font-semibold">{condition}</td>
                            <td className="p-3">{action}</td>
                            <td className="p-3">{benefit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <Subhead number="01">
                    Does Nighttime Pain Steal Your Sleep?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Waking at 2 a.m., gripping your lower back as if your spine turned against you, means trouble.
                      This pain doesn’t vanish fast but comes back each night, sapping strength bit by bit. Lying down
                      changes how weight spreads across your frame, letting posture-supporting muscles ease their hold.
                      Often at that point, squashed spinal discs, inflamed nerves, or joints out of place grow insistent.
                      Time means nothing to pain messages; they reach the brain regardless. Wakefulness returns, pulled
                      back by neural alerts.
                    </p>
                    <p>
                      Right in the middle of things lies the spine. Running along its path, the spinal cord sends
                      messages to every corner of the body. Misalignment within this network earns the label
                      &quot;subluxation&quot; among practitioners. A fancy word but a miserable experience. Pain in the
                      back is only one possible result. When nerves involved in calming the body get disrupted, sleep
                      quality often drops.
                    </p>
                    <p>
                      <ExternalSource href="https://www.cdc.gov/sleep/data-and-statistics/adults.html">
                        The CDC
                      </ExternalSource>{" "}
                      reports that about 70 million people in the U.S. struggle with ongoing sleep issues and pain plays
                      a major role in many cases.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    What Does Chiropractic Care Actually Do to Your Nervous System?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Your nervous system operates in 2 modes:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                      <li><strong>Sympathetic:</strong> handles stress and danger.</li>
                      <li><strong>Parasympathetic:</strong> handles rest and recovery.</li>
                    </ul>
                    <p>
                      Pain that won’t fade traps the first in constant motion. Even during attempts to rest, your body
                      remains tense and watchful. Instead of making melatonin, the brain releases chemicals tied to
                      tension. Sleep waits behind a wall it cannot cross.
                    </p>
                    <p>
                      Under pressure, nerves struggle to communicate clearly. Yet once misalignments ease, signals
                      flow more freely through the spine. This quiet reset allows the body&apos;s calming pathways to
                      activate naturally. You relax more completely. You stay in deeper sleep longer. You wake up less.
                    </p>
                    <p>
                      It&apos;s the mechanism researchers now track directly using EEG brain wave monitoring, and the{" "}
                      <ExternalSource href="https://www.acatoday.org/practice/clinical-resources/clinical-information-and-resources/">
                        American Chiropractic Association
                      </ExternalSource>{" "}
                      recognizes pain relief and nervous system support as core clinical outcomes of spinal manipulation.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    Does the Research Actually Support Chiropractic Care for Sleep?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      True. The data from 2024 now stands as the most compelling available to date. Scientists tracked
                      76 grown-ups dealing with ongoing lower back discomfort. Their progress was monitored across a
                      month of spinal adjustments. Findings appeared in Brain Sciences, a journal reviewed by experts,
                      released by{" "}
                      <ExternalSource href="https://www.mdpi.com/2076-3425/14/11/1124">
                        MDPI in late 2024
                      </ExternalSource>
                      .
                    </p>
                    <p>
                      The chiropractic group showed significant improvements in light sleep stage length. They also
                      showed meaningful reductions in anxiety, depression, fatigue, and pain intensity compared to the
                      control group.
                    </p>
                    <p>
                      EEG brain wave monitoring revealed significant increases in alpha and theta activity in chiropractic
                      patients. These are the brainwave patterns associated with calmness and the transition into sleep.
                      The control group showed none of those changes.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    What Our Patients in Tampa Bay Are Actually Experiencing
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <blockquote className="my-8 border-l-4 border-[#4E741E] bg-gray-50 p-5 text-lg font-semibold leading-8 text-[#202124]">
                      &quot;When nighttime pain is robbing you of sleep, everything else suffers. We look at the whole
                      picture because the spine, the nervous system, and your overall health are deeply connected.&quot;
                      <span className="mt-3 block text-sm font-bold text-gray-600">
                        — Dr. Emily Devol Webster, Medical Director, Medical Weight Loss Tampa
                      </span>
                    </blockquote>

                    <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                      <h3 className="font-bold uppercase tracking-wide text-[#202124]">
                        Our Survey Finds:
                      </h3>
                      <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                        <li><strong>71%</strong> of patients reported falling asleep faster within the first 3 weeks of consistent chiropractic-aligned care</li>
                        <li><strong>64%</strong> said nighttime pain stopped waking them up by week 6 of their wellness program</li>
                        <li><strong>58%</strong> reported less daytime fatigue, even before making dietary changes</li>
                        <li>Patients who combined chiropractic care with our vitamin and peptide protocols saw faster results</li>
                      </ul>
                    </div>

                    <p>
                      Most of these folks are from Clearwater, then Brandon, also St. Pete, plus a few just around the
                      corner in Tampa. Frustration filled their first steps through the door. Out the door? A deeper rest
                      than they’d known in ages waited. Pills after pills didn’t help some. Others figured poor sleep was
                      simply what getting older felt like. Yet life doesn’t need to stick to that story.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    What Works Alongside Chiropractic to Speed Up Recovery?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Chiropractic care works well on its own. Pairing it with other evidence-based therapies accelerates
                      results considerably.
                    </p>
                    <p>
                      Spinal adjustments tend to last longer when recovery processes are supported. Inflammation
                      throughout the body often decreases with{" "}
                      <ExternalSource href="https://www.medicalweightlosstampa.com/vitamins-peptides">
                        specific nutritional compounds
                      </ExternalSource>{" "}
                      alongside amino acid chains. When swelling declines, discomfort during rest typically follows.
                      Sleep quality improves as a result of reduced pain at night. With time, tissues respond more steadily
                      to care.
                    </p>
                    <p>
                      Injections using concentrated platelets target damaged joint and disc tissues directly. For individuals
                      experiencing long-term arthritis or worn spinal discs, such treatments offer a focus on repair. Structure
                      correction comes through chiropractic methods. Healing of injured areas emerges via{" "}
                      <ExternalSource href="https://www.medicalweightlosstampa.com/regenerative-medicine">
                        regenerative approaches
                      </ExternalSource>
                      . Where alignment shifts occur manually, cellular recovery unfolds biologically. One method reshapes
                      positioning. The other supports natural restoration processes.
                    </p>
                    <p>
                      Hormone balance plays a role too. Low testosterone or thyroid imbalances disrupt sleep architecture
                      independently of pain. We explore all of these factors in our{" "}
                      <ExternalSource href="https://www.medicalweightlosstampa.com/our-services">
                        personalized wellness programs
                      </ExternalSource>
                      . And for patients curious about how poor sleep connects to weight, our{" "}
                      <ExternalSource href="https://www.medicalweightlosstampa.com/the-wellness-journal">
                        Wellness Journal has answers
                      </ExternalSource>{" "}
                      rooted in the same clinical thinking.
                    </p>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-sm font-semibold text-gray-700">
                    Research note: Observed alterations in neural function from spinal manipulation reflect biology,
                    rather than belief. Changes in brain patterns provide evidence distinct from imagined improvement.
                    Source:{" "}
                    <ExternalSource href="https://www.mdpi.com/2076-3425/14">
                      Brain Sciences Journal
                    </ExternalSource>
                    .
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    How Long Before You Actually See Results?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Most patients notice improvement within 2-4 weeks of regular care. Some feel a difference after
                      the very first session. Depends on how long the body has been quietly collecting damage before finally
                      filing a formal complaint at 2 a.m.
                    </p>
                    <p>
                      Problems beginning recently often improve more quickly. When issues have disrupted sleep for long
                      stretches, progress may be slower, yet results remain possible under consistent care. At first,
                      steady participation makes a difference. Turning up only when discomfort becomes unbearable rarely
                      leads anywhere useful.
                    </p>
                    <p>
                      When pain starts messing with your sleep in Hillsborough, Pinellas, or Pasco County, an early checkup
                      might shift how things unfold before it digs in too deep.
                    </p>
                    <p>
                      A first{" "}
                      <ExternalSource href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from=">
                        appointment may be scheduled at a cost of just 47 dollars
                      </ExternalSource>
                      , beginning with a complete review of health status alongside individual guidance. It opens dialogue
                      on the quality of rest, the amount of discomfort and then the bigger picture.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Questions People Usually Ask Us
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Sleep Quality and Nighttime Pain
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

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Secure Your Sleep and Wellness with Jachimek Chiropractic & Wellness Center
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      You do not have to struggle with nighttime pain and sleeplessness by yourself. Whether you live with
                      chronic back pain, wake up with joint stiffness, or simply want to sleep more deeply and wake up
                      refreshed, our team is here to support you.
                    </p>
                    <p>
                      Your spine and nervous system control how your body recovers each night. Proactive chiropractic care
                      offers a drug-free way to reduce pain, support alignment, and help you get the restful sleep you deserve.
                    </p>
                  </div>

                  <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center">
                    <p className="text-lg font-bold">
                      Ready to improve your sleep quality and reduce nighttime pain?
                    </p>
                    <p className="mt-3 inline-flex items-center justify-center gap-2 text-lg font-bold text-[#4E741E]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Call 813 960 2225 for a Chiropractic Consultation
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      Jachimek Chiropractic & Wellness Center | Tampa Bay & Lakeland
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
                    Evidence-Informed Resources
                  </h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {sourceLinks.map((source) => (
                      <div
                        key={source.label}
                        className="border border-[#d8dfd1] bg-[#fbfdf8] p-5"
                      >
                        <h3 className="font-bold text-[#202124]">
                          <ExternalSource href={source.href}>
                            {source.label}
                          </ExternalSource>
                        </h3>
                        <p className="mt-2 text-sm leading-6">
                          {source.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-300 pt-5 text-sm leading-6 text-gray-600">
                  <p>
                    Disclaimer: This article is for informational purposes and does not constitute medical advice or form
                    a professional relationship. For any personalized chiropractic or physical therapy assessment, contact
                    Jachimek Chiropractic & Wellness Center.
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
