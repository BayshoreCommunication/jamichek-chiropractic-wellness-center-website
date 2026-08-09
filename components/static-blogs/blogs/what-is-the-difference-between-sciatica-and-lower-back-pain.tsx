import Image from "next/image";
import Link from "next/link";
import { CalendarDays, AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

export const whatIsTheDifferenceBetweenSciaticaAndLowerBackPainBlog = {
  title: "What Is the Difference Between Sciatica and Lower Back Pain?",
  slug: "what-is-the-difference-between-sciatica-and-lower-back-pain",
  category: "Chiropractic Care",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  published: true,
  metaTitle: "The hidden dangers of sciatica vs lower back pain",
  metaDescription:
    "One is a muscle but the other is a nerve. Mixing up sciatica vs lower back pain wastes months on bad routines. Spot the travel sign before surgery.",
  canonicalPath:
    "https://www.jachimekchiro.com/the-wellness-journal/what-is-the-difference-between-sciatica-and-lower-back-pain",
  shortDescription:
    "Common back pain stays in one specific place but sciatica loves to move around. Understanding the key differences between sciatica and lower back pain helps ensure you get the right treatment.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/sciatica-vs-lower-back-pain-differences-chiropractic.webp",
    },
    altText:
      "Chiropractic educational graphic comparing sciatica and lower back pain, showing pain patterns, symptoms, and differences between the two conditions.",
    title: "What Is the Difference Between Sciatica and Lower Back Pain?",
    description:
      "Educational chiropractic graphic explaining the key differences between sciatica and lower back pain. The image compares pain patterns, possible symptoms, and common causes, showing how sciatica may radiate from the lower back down the leg while lower back pain typically remains localized to the lower back. The graphic also highlights the importance of accurate diagnosis and targeted treatment.",
    caption:
      "Sciatica and lower back pain can feel similar, but they often have different causes and symptoms. Understanding the difference can help you recognize the right path toward care.",
  },
  body: "Common back pain stays in one specific place but sciatica loves to moves around. That simple reality separates two conditions that people mix up all the time. Getting them confused means you end up with the wrong treatment plan and that happens way more than it should.",
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
  "Lower back pain is usually just a muscle or mechanical issue that stays right in your lumbar region.",
  "Sciatica is nerve pain that travels from the lower back through your glutes and right down one leg.",
  "Numbness or tingling or a burning shock below your knee means you are dealing with sciatica instead of a basic back strain.",
  "A dull and achy stiffness that never leaves your belt line is just ordinary lower back pain.",
  "Sitting down for hours makes sciatica feel way worse than normal back pain.",
];

const comparisonRows = [
  [
    "Location",
    "Stays in the lumbar region",
    "Radiates into the buttock and leg",
  ],
  [
    "Sensation",
    "Dull ache or stiffness or a spasm",
    "Burning, shooting, electric shock",
  ],
  [
    "Sidedness",
    "Usually central or both sides",
    "Almost always one-sided",
  ],
  [
    "Numbness or weakness",
    "Rare",
    "Common below the knee",
  ],
  [
    "Common cause",
    "Muscle strain, poor posture, disc wear",
    "Herniated disc, spinal stenosis, bone spur",
  ],
  [
    "Worse with sitting",
    "Sometimes",
    "Almost always",
  ],
];

const sciaticaTriggers = [
  "Herniated or bulging disc pressing directly on a lumbar nerve root",
  "Spinal stenosis, a narrowing of the canal that squeezes nerve space",
  "Bone spurs from age-related degeneration or old injury",
  "A tight piriformis muscle that irritates the nerve as it goes through the hip",
  "Sitting down for a long time in a car or at a desk for eight hours or more every day",
];

const statsGrid = [
  ["41%", "of our new lower back pain patients initially describe leg symptoms they hadn't connected to their spine"],
  ["6 in 10", "sciatica cases we see trace back to prolonged sitting rather than a single injury"],
  ["2-4 weeks", "is the typical window mechanical back pain needs before patients notice real improvement with care"],
];

const treatmentMethods = [
  "Lower back pain gets manual adjustments and targeted soft tissue therapy along with core strengthening and posture adjustments.",
  "Sciatica gets non-surgical spinal decompression and nerve mobilization plus piriformis release work.",
  "Both benefit from movement screens, ergonomic coaching, and a home plan built around your actual daily routine.",
];

const warningSigns = [
  "Numbness or tingling that goes all the way below your knee",
  "Weakness when you try to lift your foot or stand up on your toes",
  "Pain that starts after a fall or a car accident or any direct trauma",
  "Any change in your bladder or bowel control which requires an immediate evaluation on the same day",
  "Symptoms that keep getting worse instead of leveling off after two weeks",
];

const faqs = [
  {
    q: "Can sciatica happen on both sides of the body at once?",
    a: "It's uncommon. Bilateral sciatica does happen sometimes. It usually comes from central spinal stenosis or a massive disc herniation affecting both nerve roots at once. Most cases remain on one side.",
  },
  {
    q: "Is a herniated disc the only cause of sciatica?",
    a: "No it doesn’t. Plenty of people have disc herniations that show up on scans but they feel zero pain. Sciatica only occurs if the herniation physically touches or pinches a nerve root.",
  },
  {
    q: "Can I use heat or ice for sciatica nerve pain?",
    a: "Use ice for the first couple of days to bring down the inflammation around the nerve root. After that you want to switch to heat because heat relaxes the tight muscles that are squeezing the nerve. Do not leave heating pads on for hours though.",
  },
  {
    q: "Does walking make sciatica better or worse?",
    a: "Walking is good actually but don’t take long strides and stay away from hills. It heals the area by pumping nutrients and blood into the discs.",
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

export default function WhatIsTheDifferenceBetweenSciaticaAndLowerBackPain({
  recentBlogs = [],
}: Props) {
  const blog = whatIsTheDifferenceBetweenSciaticaAndLowerBackPainBlog;
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
                  Chiropractic Care | Pain Relief Guide
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
                  Common back pain stays in one specific place but sciatica loves to moves around. That simple reality separates two conditions that people mix up all the time. Getting them confused means you end up with the wrong treatment plan and that happens way more than it should.
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

                <section>
                  <Subhead number="01">
                    Is All Back Pain Pretty Much the Same Thing?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      No, and treating it that way is exactly why so many Tampa residents stay stuck in a pain cycle. Lower back pain is a location. Sciatica is a nerve event. One stays where you feel it. The other one travels, and travel is the tell.
                    </p>
                    <p>
                      General lumbar pain comes from muscles or ligaments or joints. Maybe it’s just discs that are irritated and worn down from decades of sitting or lifting or standing around on hard tile floors. Sciatica happens when something is physically pinching the sciatic nerve itself. That’s the single thickest nerve in your whole body. Same neighborhood. Completely different problem.
                    </p>
                    <p>
                      We always ask new patients one specific question before we do anything else. Does the pain stay in your back or does it run down your leg? That answer right there tells us which nerve pathway we need to look at.
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
                    What Does Sciatica Feel Like? Sciatica Vs Normal Back Pain
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      If you ask someone to describe regular lower back pain they use words like sore or stiff. Ask a sciatica patient and the language changes completely to things like burning or electric. The nerve doesn’t just ache quietly. It lets you know it’s there.
                    </p>
                    <p>
                      Here&apos;s the side-by-side breakdown our doctors walk patients through during every new evaluation.
                    </p>

                    <div className="mt-6">
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Feature</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Lower Back Pain</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Sciatica</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {comparisonRows.map(([feature, lbp, sciatica]) => (
                              <tr key={feature} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{feature}</td>
                                <td className="px-4 py-3 text-gray-600">{lbp}</td>
                                <td className="px-4 py-3 text-gray-600">{sciatica}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <p>
                      It makes a lot of sense to know exactly which column your symptoms match before you start guessing at a fix. Most people try to treat the wrong thing for weeks. They realize too late that the stretch routine they found online was meant for the other condition entirely.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    What Is Really Making the Nerve Act Up?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Sciatica rarely shows up without a reason. Something is physically narrowing the space the nerve root needs, and Florida lifestyles hand that narrowing plenty of opportunities.
                    </p>

                    <div className="border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <h3 className="font-bold text-[#202124] text-[17px] mb-4">
                        Common Sciatica Triggers
                      </h3>
                      <ul className="space-y-3 pl-5 list-disc marker:text-[#4E741E]">
                        {sciaticaTriggers.map((trigger) => (
                          <li key={trigger} className="text-sm text-gray-700">
                            {trigger}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p>
                      Plain lower back pain has a different rap sheet entirely. Think of muscle strain from working in the yard or bad posture from staring down at a phone. It could be extra body weight putting pressure on the lumbar spine or simple wear on the discs. None of those things touch a nerve root directly. That is exactly why the pain never goes past your backside.
                    </p>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h2 className="text-lg font-bold text-[#202124]">
                        Stop Guessing Which One You Have
                      </h2>
                      <p className="text-sm font-semibold text-gray-700">
                        $47 gets you a full consultation, exam, and personalized plan at Jachimek Chiropractic.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Claim Your $47 New Patient Exam →
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    People in Tampa Get This Wrong So Often
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      The heat and the humidity mixed with a lifestyle focused on boats and golf carts and long commutes on I-275 create a very specific injury pattern around here. We track outcomes across our Tampa patient base, and the pattern holds up consistently.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {statsGrid.map(([value, label]) => (
                        <div
                          key={value}
                          className="border border-[#d8dfd1] bg-[#f6fff0] p-5 text-center rounded-[6px]"
                        >
                          <p className="text-2xl font-bold text-[#4E741E]">
                            {value}
                          </p>
                          <p className="mt-2 text-xs font-semibold leading-5 text-gray-700">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p>
                      The national data matches exactly what we see in our own rooms. Nearly 80% of people suffer from lower back pain at some stage in their lives. Sciatica hits closer to four out of ten people according to{" "}
                      <ExternalSource href="https://www.uhhospitals.org/">
                        University Hospitals
                      </ExternalSource>
                      . On a global level low back pain is still the top cause of disability based on numbers from the{" "}
                      <ExternalSource href="https://www.iasp-pain.org/">
                        International Association for the Study of Pain
                      </ExternalSource>
                      .
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    Can You Make Things Worse by Ignoring the Difference?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      You absolutely can. This is the point where the difference matters for your real life. Treating sciatica like a pulled muscle wastes weeks of time while the nerve compression just sits there getting worse. Ice packs and rest might dull the ache without ever relieving the pressure causing it.
                    </p>
                    <p>
                      Left alone long enough, nerve compression can progress from tingling to genuine weakness in the foot or leg. That&apos;s a different conversation entirely, and one you want to have early rather than after months of guessing.
                    </p>
                    <p>
                      Patients often wait around for months hoping sciatica will just go away on its own like a muscle strain usually does. Nerve compression generally requires a targeted approach instead of just waiting it out.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-semibold text-[17px] leading-relaxed text-[#202124] not-italic">
                        Source: Dr. Antimo Paul Gazzillo, MD, Physical Medicine &amp; Rehabilitation Specialist,{" "}
                        <ExternalSource href="https://www.uhhospitals.org/">
                          University Hospitals
                        </ExternalSource>
                      </p>
                    </blockquote>

                    <p>
                      On the encouraging side, most cases of both conditions respond well to conservative, non-surgical care when addressed early. Surgery stays a last resort for the small percentage who don&apos;t improve with hands-on treatment, according to{" "}
                      <ExternalSource href="https://my.clevelandclinic.org/">
                        Cleveland Clinic
                      </ExternalSource>
                      .
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    What Actually Fixes Each Condition?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Chiropractic care deals with these two issues differently because the underlying mechanics are not the same. Back pain driven by muscles responds well to adjustments and soft tissue work and fixing your posture. Sciatica driven by a nerve often requires decompression to physically open up space around the nerve root.
                    </p>

                    <div className="border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <h3 className="font-bold text-[#202124] text-[17px] mb-4">
                        How We Treat Each One
                      </h3>
                      <ul className="space-y-3 pl-5 list-disc marker:text-[#4E741E]">
                        {treatmentMethods.map((method) => (
                          <li key={method} className="text-sm text-gray-700">
                            {method}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p>
                      Our doctors, Dr. J and Dr. G, build every plan around a real exam rather than a generic protocol. You can meet the{" "}
                      <Link href="/team" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        full care team here
                      </Link>{" "}
                      or browse the complete range of{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        chiropractic services we offer
                      </Link>
                      , including dedicated sciatic relief and spinal decompression programs.
                    </p>

                    <p>
                      Not every case needs the same intensity of care either. If you&apos;re unsure where your symptoms land, our free{" "}
                      <Link href="/help" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        guidance page
                      </Link>{" "}
                      walks through what to expect before you ever book an exam.
                    </p>

                    <p>
                      The{" "}
                      <ExternalSource href="https://www.aaos.org/">
                        American Academy of Orthopaedic Surgeons
                      </ExternalSource>{" "}
                      and most spine specialists agree that early conservative treatment, not prolonged rest, produces the best outcomes for both conditions. Movement, done correctly, is medicine here.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="07">
                    When to Stop Waiting and Watching Your Back Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Most flare-ups get better within two to four weeks when you use the right conservative care. Beyond that window, or sooner if certain symptoms appear, waiting stops being the smart move.
                    </p>

                    <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-[8px]">
                      <div className="flex gap-3.5 items-start mb-4">
                        <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <h3 className="font-bold text-amber-900 text-[17px]">
                          See a Doctor Sooner If You Notice -
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

                    <p>
                      None of these signs are here to scare you. They just show the line between taking care of it yourself and getting professional help. A real exam clears up the confusion in a single visit. That kind of clarity is worth a lot more than another week of wondering what’s going on.
                    </p>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h2 className="text-lg font-bold text-[#202124]">
                        Ready to Find Out Which One You&apos;re Dealing With?
                      </h2>
                      <p className="text-sm font-semibold text-gray-700">
                        Book your exam with Jachimek Chiropractic &amp; Wellness in Tampa and get answers.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Schedule Your Visit Today →
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Sciatica vs Lower Back Pain
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

                <section className="border-t border-gray-300 pt-5 text-sm leading-6 text-gray-600">
                  <p>
                    Disclaimer: This article is provided for general information only and does not constitute medical advice. Individual results from any treatment vary based on skin condition, severity, and overall health. Schedule a consultation to determine the right treatment plan for your specific case.
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
