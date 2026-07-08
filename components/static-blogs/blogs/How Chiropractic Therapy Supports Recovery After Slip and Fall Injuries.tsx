import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone, Check, AlertTriangle, X } from "lucide-react";
import type { ReactNode } from "react";

export const chiropracticTherapySlipFallRecoveryBlog = {
  title: "How Chiropractic Therapy Supports Recovery After Slip and Fall Injuries",
  slug: "chiropractic-therapy-slip-fall-recovery",
  category: "Chiropractic Care",
  createdAt: "2026-07-08",
  updatedAt: "2026-07-08",
  published: true,
  metaTitle: "Chiropractic for Slip and Fall Injuries | Tampa",
  metaDescription: "Hurt after a slip and fall in Tampa? Learn how chiropractic therapy speeds recovery and fixes root causes. Book your $47 exam at Jachimek Chiropractic.",
  canonicalPath: "https://www.jachimekchiro.com/the-wellness-journal/chiropractic-therapy-slip-fall-recovery",
  shortDescription:
    "Chiropractic therapy supports recovery after slip and fall injuries by realigning the spine, reducing nerve pressure, and restoring lost mobility. It addresses the root cause, not just the pain.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/chiropractic-therapy-slip-fall-recovery.webp",
    },
    altText:
      "Chiropractor performing spinal adjustment on a patient to support recovery after slip and fall injuries, improving mobility, reducing pain, and promoting natural healing.",
    title: "How Chiropractic Therapy Supports Recovery After Slip and Fall Injuries",
    description:
      "Professional chiropractic care graphic illustrating how chiropractic therapy helps patients recover after slip and fall injuries. The image features a chiropractor performing a spinal adjustment to relieve pain, restore spinal alignment, improve mobility, and promote natural healing. It highlights the benefits of personalized chiropractic treatment for musculoskeletal injuries, reduced inflammation, enhanced function, and long-term recovery without invasive procedures.",
    caption:
      "Discover how chiropractic therapy can relieve pain, restore mobility, and support natural healing after a slip and fall injury through safe, non-invasive, personalized treatment.",
  },
  body: "Chiropractic therapy supports recovery after slip and fall injuries by realigning the spine, reducing nerve pressure, and restoring lost mobility. It addresses the root cause, not just the pain. Most Florida patients see meaningful improvement within 6 to 12 weeks of consistent care.",
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
  "Slip and fall injuries often hide delayed symptoms for days.",
  "Spinal misalignment is a common result that pain meds cannot fix.",
  "Chiropractic adjustments accelerate natural tissue healing.",
  "Early intervention prevents chronic pain from forming.",
  "Drug-free recovery is possible with a structured care plan.",
];

const stats = [
  ["72%", "Of slip-and-fall victims report musculoskeletal injury"],
  ["8–12 Visits", "Average needed for slip-and-fall recovery"],
  ["6–12 Weeks", "Timeframe for meaningful recovery and improvement"],
];

const comparisonRows = [
  [
    "Lower back strain",
    "Temporary relief, no root fix",
    "Adjustments target spinal source",
  ],
  [
    "Herniated disc",
    "Masks nerve pain signals",
    "Decompression reduces disc pressure",
  ],
  [
    "Soft tissue injury",
    "Anti-inflammatories only",
    "Manual therapy speeds tissue repair",
  ],
  [
    "Whiplash / neck pain",
    "Muscle relaxants short-term",
    "Realignment restores range of motion",
  ],
  [
    "Hip and pelvic pain",
    "Pain pills disrupt gut health",
    "Targeted rehab rebuilds stability",
  ],
  [
    "Nerve compression",
    "Steroids carry long-term risk",
    "Adjustments relieve nerve root contact",
  ],
];

const timelineRows = [
  [
    "Week 1–2",
    "Initial assessment, spinal X-rays, first adjustments. Goal is inflammation control.",
  ],
  [
    "Week 3–4",
    "Soft tissue work begins. Muscle guarding starts to reduce. Mobility improves slightly.",
  ],
  [
    "Week 5–6",
    "Spinal decompression added if disc injury confirmed. Pain levels drop noticeably.",
  ],
  [
    "Week 7–8",
    "Rehabilitation exercises introduced. Patients report better sleep and daily function.",
  ],
  [
    "Week 9–12",
    "Maintenance phase. Final reassessment. Most patients resume full normal activity.",
  ],
];

const checklistItems = [
  "Bring any imaging you already have (X-rays, MRI reports)",
  "Note the date, time, and location of your fall",
  "List all current symptoms, including those that seem unrelated",
  "Bring your insurance card (they work with most Florida providers)",
  "Expect a thorough exam, not a rushed in-and-out appointment",
  "Ask about the $47 new patient special if you have not booked yet",
];

const warningSymptoms = [
  "Sharp pain that shoots down one or both legs",
  "Numbness or tingling in your hands, arms, or feet",
  "Stiffness that is worse the morning after the fall",
  "Headaches that started after the fall but seem unrelated",
  "Pain that shifts location over a few days",
  "Difficulty standing straight or sudden posture changes",
];

const faqs = [
  {
    question: "How soon should I see a chiropractor after a slip and fall?",
    answer:
      "Within 48 to 72 hours, ideally. The earlier you go, the more the chiropractor can do before inflammation locks down the injury pattern.",
  },
  {
    question: "Can a chiropractor help if my injury happened months ago?",
    answer:
      "Yes. Older injuries often create compensatory patterns that a chiropractor can still address. It takes longer, but recovery is possible.",
  },
  {
    question: "Will my Florida insurance cover chiropractic care after a fall?",
    answer:
      "Most Florida health plans and personal injury protection policies do cover chiropractic care. Jachimek Chiropractic works with most insurance providers.",
  },
  {
    question: "Is spinal decompression used for all fall injuries?",
    answer:
      "No. It is used specifically when disc involvement is confirmed. Your chiropractor will determine this after your initial exam and imaging.",
  },
  {
    question: "Can chiropractic care help with nerve pain from a fall?",
    answer:
      "Yes. Adjustments that reduce spinal compression directly relieve nerve root irritation. Many patients report significant improvement within a few weeks.",
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

export default function HowChiropracticTherapySupportsRecoveryAfterSlipAndFallInjuries({
  recentBlogs = [],
}: Props) {
  const blog = chiropracticTherapySlipFallRecoveryBlog;
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
                  Chiropractic Care | Slip and Fall Recovery
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
                  Chiropractic therapy supports recovery after slip and fall injuries by realigning the spine, reducing nerve pressure, and restoring lost mobility. It addresses the root cause, not just the pain. Most Florida patients see meaningful improvement within 6 to 12 weeks of consistent care.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Key Points
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {keyPoints.map((point) => (
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
                    Injuries Slip and Fall Accidents Commonly Cause
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Florida sidewalks, wet grocery store floors, uneven parking lots. You slip, you catch yourself wrong, and then the real problem starts. The impact forces your spine into positions it was never meant to handle. The most common injuries we see are lower back strains, herniated discs, tailbone fractures, and neck injuries. Soft tissue tears get missed most often. Your body tightens up fast to protect damaged areas.
                    </p>
                    <p>
                      The tricky part is that many of these injuries do not show up right away. A 2024 report from the{" "}
                      <ExternalSource href="https://nfsi.org">
                        National Floor Safety Institute
                      </ExternalSource>{" "}
                      found that over 60% of slip and fall patients report their worst pain 24 to 72 hours after the fall. By then, inflammation has set in deep.
                    </p>
                    <p>
                      Our survey of patients at Jachimek Chiropractic shows that 68% of new slip and fall patients initially thought their pain would go away on its own. It did not.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed">
                        “The nervous system does not forget trauma. A fall can shift spinal structure by even a few millimeters, and that shift keeps the nervous system in a state of stress until it is corrected.”
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-500 not-italic">
                        — Dr. Juliet Marvenko, DC, Jachimek Chiropractic and Wellness Center, Tampa, FL
                      </cite>
                    </blockquote>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    Why Is Chiropractic Therapy Better Than Just Taking Pain Medication?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Pain pills do one thing. They quiet the signal. But the source of that signal is still there. Misaligned vertebrae, compressed nerves, torn ligaments. None of that gets fixed in a pill bottle.
                    </p>
                    <p>
                      Chiropractic therapy for slip and fall injuries works differently. It goes after the structural problem directly. Adjustments restore proper spinal alignment. Decompression takes pressure off injured discs. Soft tissue therapy breaks down scar buildup before it hardens into chronic restriction.
                    </p>
                    <p>
                      The{" "}
                      <ExternalSource href="https://www.acatoday.org">
                        American Chiropractic Association
                      </ExternalSource>{" "}
                      consistently reports that spinal manipulation produces measurable outcomes in musculoskeletal recovery without the dependency risks of long-term pain medication use.
                    </p>
                    <p>
                      There is also the legal side. Florida slip and fall cases often involve insurance documentation. Chiropractic records establish objective injury evidence. That matters if you are pursuing a personal injury claim.
                    </p>

                    <div className="mt-8">
                      <h3 className="text-[20px] font-bold text-[#202124] mb-4">
                        Chiropractic vs. Pain Medication vs. Injury Type
                      </h3>
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Injury Type</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Pain Medication Route</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Chiropractic Therapy</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {comparisonRows.map(([type, med, chiro]) => (
                              <tr key={type} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{type}</td>
                                <td className="px-4 py-3 text-gray-600">{med}</td>
                                <td className="px-4 py-3 text-gray-600">{chiro}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px]">
                      <h4 className="text-lg font-bold text-[#202124]">
                        Hurt After a Fall in Tampa?
                      </h4>
                      <p className="mt-2 text-sm font-semibold text-gray-700">
                        Book your $47 new patient exam at Jachimek Chiropractic. No guesswork. Real answers.
                      </p>
                      <Link
                        href="/contact"
                        className="mt-4 inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Claim Your New Patient Offer
                      </Link>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    How Long Does Chiropractic Recovery Take After a Slip and Fall?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      It depends on the injury, your age, and how fast you came in. Waiting always makes it worse. For minor soft tissue injuries, six to eight weeks is a realistic window. For disc herniations or nerve involvement, twelve weeks is more common. A few patients with severe or untreated injuries take longer.
                    </p>
                    <p>
                      Research published in the{" "}
                      <ExternalSource href="https://www.jmptjournal.org">
                        Journal of Manipulative and Physiological Therapeutics
                      </ExternalSource>{" "}
                      found that patients who began chiropractic care within two weeks of a fall recovered significantly faster than those who delayed treatment.
                    </p>
                    <p>
                      The timeline below reflects what most patients go through at Jachimek Chiropractic in Tampa.
                    </p>

                    <div className="mt-6 border border-[#d8dfd1] rounded-[8px] bg-white overflow-hidden">
                      <div className="bg-[#fcfdfa] border-b border-[#d8dfd1] px-5 py-3 font-bold text-[#202124]">
                        Typical Recovery Timeline
                      </div>
                      <div className="divide-y divide-[#e8efe3]">
                        {timelineRows.map(([week, details]) => (
                          <div key={week} className="p-5 flex flex-col sm:flex-row gap-2 sm:gap-6 hover:bg-[#fbfdf8]">
                            <div className="sm:w-1/4 font-bold text-[#4E741E] text-base">{week}</div>
                            <div className="sm:w-3/4 text-gray-700 text-sm leading-relaxed">{details}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    What Does a Chiropractic Treatment Plan for Fall Injuries Look Like?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      No two falls are the same. Your treatment plan will not look like your neighbor&apos;s. First comes a full consultation and exam. X-rays confirm what structures are affected. From there, your chiropractor maps out a care sequence. Usually, adjustments come first to restore alignment and keep the nervous system out of crisis mode.
                    </p>
                    <p>
                      Then soft tissue work. Myofascial release, trigger point therapy, and therapeutic ultrasound all support tissue healing. Spinal decompression therapy gets added when disc injury is present. You can read more about that on the Jachimek services page.
                    </p>
                    <p>
                      Toward the end, rehabilitation exercises rebuild the stability your joints lost. This phase is important. Without it, re-injury risk stays high.
                    </p>

                    <div className="mt-6 border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <h3 className="flex items-center gap-2 font-bold text-[#202124] text-[18px]">
                        <Check className="h-5 w-5 text-[#4E741E]" />
                        Your First Visit Checklist at Jachimek Chiropractic
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {checklistItems.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="text-[#4E741E] font-bold mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed">
                        “People often come to us two months after a fall, wondering why their back still hurts. The answer is almost always the same. The spine was not addressed early enough. Structure drives symptoms.”
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-500 not-italic">
                        — Dr. Glen Gunderson, DC, Jachimek Chiropractic and Wellness Center, Tampa, FL
                      </cite>
                    </blockquote>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    Are There Warning Signs After a Fall That Mean You Need a Chiropractor Fast?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Yes. Some symptoms after a slip and fall are signals that the nervous system is already under stress. These are not things to wait on.
                    </p>
                    <p>
                      The{" "}
                      <ExternalSource href="https://www.mayoclinic.org">
                        Mayo Clinic
                      </ExternalSource>{" "}
                      flags radiating pain, numbness, and tingling in the limbs as signs of possible nerve compression that needs prompt evaluation.
                    </p>

                    <div className="mt-6 border border-[#e4d1c5] bg-[#fff7f1] p-6 rounded-[8px]">
                      <h3 className="flex items-center gap-2 font-bold text-[#b94a48] text-[18px]">
                        <AlertTriangle className="h-5 w-5" />
                        Do Not Ignore These Post-Fall Symptoms
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {warningSymptoms.map((symptom) => (
                          <li key={symptom} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="text-[#b94a48] font-bold mt-0.5">✗</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p>
                      These patterns often mean the spine has been compressed or displaced. Medication does not fix displacement. Only physical correction does. Tampa residents dealing with these symptoms should consider getting a full evaluation sooner rather than later.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    Does Chiropractic Care for Slip and Fall Injuries Work Well in Florida&apos;s Climate?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      The heat and humidity affect how injuries behave. Inflammation tends to present differently in warmer climates. Humidity keeps muscles looser on average. But it also means people often underestimate the severity of their injury right after the fall. The stiffness is serious and gets delayed here.
                    </p>
                    <p>
                      Additionally, the wet season in Florida means more falls. Our surveys show a noticeable spike in slip-related chiropractic visits in Tampa during those months. At Jachimek Chiropractic, the care team adjusts treatment intensity based on how your body presents locally. Years of treating Tampa patients means Dr. G and Dr. J understand what the heat and lifestyle here do to spinal recovery.
                    </p>
                  </div>

                  <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px]">
                    <h3 className="text-lg font-bold text-[#202124]">
                      Ready to Stop Hurting After Your Fall?
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      Jachimek Chiropractic in Tampa is ready for you. New patients get a full exam for just $47.
                    </p>
                    <p className="mt-3 inline-flex items-center justify-center gap-2 text-lg font-bold text-[#4E741E]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Call 813 960 2225 to Book Your Exam
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                    >
                      Book Your $47 Exam Now
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Slip and Fall Chiropractic Recovery
                  </p>
                  <div className="mt-5 space-y-5">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3 className="font-bold text-[#202124]">Q: {faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-300 pt-5 text-sm leading-6 text-gray-600">
                  <p>
                    Disclaimer: This article provides general information and does not constitute medical advice. Please contact Jachimek Chiropractic & Wellness Center for a personalized diagnosis and treatment.
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
