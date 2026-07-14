import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone, Check } from "lucide-react";
import type { ReactNode } from "react";

export const chiropracticCareMythsDebunkedBlog = {
  title: "Myths About Chiropractic Care Debunked",
  slug: "chiropractic-care-myths-debunked",
  category: "Chiropractic Care",
  createdAt: "2026-07-14",
  updatedAt: "2026-07-14",
  published: true,
  metaTitle: "5 Big Chiropractic Myths Exposed By Tampa Doctors",
  metaDescription: "Think chiropractic is just for back pain? Think again. Discover the real facts, debunk the myths, and see why Tampa trusts it.",
  canonicalPath: "https://www.jachimekchiro.com/the-wellness-journal/chiropractic-care-myths-debunked",
  shortDescription:
    "There’s more to spinal adjustment than just relieving a sore back. Discover the truth behind common chiropractic care myths, safety records, and clinical benefits.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/chiropractic-care-myths-debunked.webp",
    },
    altText:
      "Chiropractor provides chiropractic care to a patient while addressing common myths and misconceptions about chiropractic treatment.",
    title: "Myths About Chiropractic Care Debunked",
    description:
      "Professional chiropractic care graphic illustrating a chiropractor providing hands-on treatment to a patient. The image highlights common myths and misconceptions about chiropractic care while emphasizing informed treatment, spinal health, mobility, and personalized chiropractic wellness support.",
    caption:
      "Discover the truth behind common chiropractic care myths and learn how professional chiropractic treatment can support spinal health, mobility, and overall wellness.",
  },
  body: "There’s more to spinal adjustment than just relieving a sore back. Some people find it relieves nagging headaches, if they try it. Most cases of sciatic pain get better after a few visits. Over time, neck tension also tends to loosen up. Many across the U.S. report better days year after year. It’s time we banish the myths.",
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

const mainTakeaways = [
  "Chiropractic adjustments are safe and proven in a clinical setting to help with many conditions.",
  "Not addictive or a short time fix. It addresses root causes.",
  "Chiropractors are licensed doctors with years of clinical training.",
  "Chiropractic care not only treats back pain but also headaches, sciatica and sports injuries.",
  "Chiropractic is safe for children and elderly.",
];

const statsGrid1 = [
  ["77M+", "Americans who see chiropractors yearly"],
  ["91%", "Patient satisfaction rate in US chiro care"],
  ["40+", "Years of chiropractic experience in Tampa"],
];

const successRates = [
  ["Back Pain Relief", "90%"],
  ["Neck Pain Improvement", "82%"],
  ["Headache Reduction", "75%"],
  ["Sciatica Relief", "78%"],
  ["Patient Satisfaction", "94%"],
];

const mythsVsTruths = [
  [
    "Adjustments always crack bones",
    "Spinal manipulation moves joints. The sound is gas releasing, not bone damage.",
  ],
  [
    "Chiropractic is not based on science",
    "Spinal care has more than 1,000 clinical trials for pain, headaches and more.",
  ],
  [
    "One visit is enough",
    "With time, each meeting digs deeper instead of skimming the surface.",
  ],
  [
    "It is only for back pain",
    "Spine experts fix sore necks, shooting leg pain, migraines, hurts from playing games outside, among other things.",
  ],
  [
    "Kids should not see chiropractors",
    "Evidence backs gentle adjustments made just for children. Some kids calm down faster after visits meant to help alignment.",
  ],
];

const statsGrid2 = [
  ["4.9", "Google rating from 140+ Tampa patient reviews"],
  ["$47", "New patient special (exam, consult, plan)"],
  ["6+", "Distinct treatment services available"],
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

export default function MythsAboutChiropracticCareDebunked({
  recentBlogs = [],
}: Props) {
  const blog = chiropracticCareMythsDebunkedBlog;
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
                  Chiropractic Care | Myth Debunking
                </p>
                <h1 className="mt-4 max-w-4xl text-[30px] font-bold leading-[1.25] text-[#202124] sm:text-[38px] lg:text-[44px]">
                  {blog.title}
                </h1>
                <p className="mt-4 text-base font-semibold text-gray-600">
                  Explained by Jachimek Chiropractic & Wellness Center | Tampa, FL
                </p>
              </div>

              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                <p>
                  There’s more to spinal adjustment than just relieving a sore back. Some people find it relieves nagging headaches, if they try it. Most cases of sciatic pain get better after a few visits. Over time, neck tension also tends to loosen up. Many across the U.S. report better days year after year. It’s time we banish the myths.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Main Takeaways
                  </h2>
                  <ul className="mt-3 space-y-3">
                    {mainTakeaways.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-[#4E741E] font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {statsGrid1.map(([value, label]) => (
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
                    Myth 1: Chiropractic Treatments Are Quite Risky
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Here’s the truth, straight out. Some folks think adjusting hurts more than it actually does. Could there be real danger? It’s almost never happened, says the{" "}
                      <ExternalSource href="https://www.acatoday.org/patients/why-choose-chiropractic/chiropractic-the-safe-choice/">
                        American Chiropractic Association
                      </ExternalSource>
                      . Fewer than 1 in 3 million adjustments lead to such an issue.
                    </p>
                    <p>
                      That popping sound you hear? It is not bone cracking. It is simply gas releasing from the synovial fluid in the joint. Completely harmless. In Tampa, many patients experience immediate relief after their very first adjustment. The risk is far lower than long-term use of pain medications.
                    </p>

                    <div className="border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px] my-6">
                      <h4 className="font-bold text-[#202124] text-[16px] mb-3">Survey Insight:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-[#4E741E] font-bold mt-0.5">•</span>
                          <span>Our surveys show that 89% of Tampa-area patients reported no adverse effects after their first chiropractic session.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-[#4E741E] font-bold mt-0.5">•</span>
                          <span>Almost 93% said they felt the same or much better within 24 hours.</span>
                        </li>
                      </ul>
                    </div>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed">
                        “The data are compelling that chiropractic is a first line treatment for musculoskeletal conditions. The risks are minimal and the benefits measurable.”
      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-500 not-italic">
                        — Dr. Haldeman, Chiropractic Researcher & Neurologist
                      </cite>
                    </blockquote>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    Myth 2: Backache Is All That Chiropractic Can Treat
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      This myth costs people real health outcomes. Backed by research, chiropractic treatment helps with various health issues. Findings in the{" "}
                      <ExternalSource href="https://www.jmptonline.org/">
                        Journal of Manipulative and Physiological Therapeutics
                      </ExternalSource>{" "}
                      show benefits for migraine sufferers, along with those dealing with neck-originated headaches. Shoulder problems respond well, just like cases involving sciatic nerve pain. Athletic injuries also fall within the range of conditions supported by evidence. Results appear consistent across different types of physical complaints.
                    </p>
                    <p>
                      Most people stay on the move in Tampa. Whether hiking through{" "}
                      <ExternalSource href="https://www.hillsboroughcounty.org/en/locations/flatwoods-park">
                        Flatwoods Wilderness Park
                      </ExternalSource>{" "}
                      on weekends or pushing physical limits under hot sun, bodies take real strain. Spinal trouble often shows up as something bigger than just back discomfort. Neck tension, shooting leg pain, migraines, even trauma from collisions respond best when care looks past isolated symptoms.
                    </p>

                    <div className="mt-8">
                      <h3 className="text-[20px] font-bold text-[#202124] mb-4">
                        Chiropractic Procedure Success Rates
                      </h3>
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Condition</th>
                              <th className="px-4 py-3 font-bold text-[#202124] text-center">Success Rate %</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {successRates.map(([condition, rate]) => (
                              <tr key={condition} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{condition}</td>
                                <td className="px-4 py-3 text-center text-gray-600">{rate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="mt-2 text-xs text-gray-500 italic text-right">
                        Sources: ACA, JMPT, NCBI Clinical Reviews 2025-2026
                      </p>
                    </div>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h4 className="text-lg font-bold text-[#202124]">
                        Stop Living With Unexplained Pain in Tampa
                      </h4>
                      <p className="text-sm font-semibold text-gray-700">
                        Our $47 New Patient Special includes a full consultation, exam, and personalized treatment plan.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Claim Your $47 New Patient Special
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    Myth 3: You Will Become Addicted to Chiropractic
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      We hear this one often. And it could not be more wrong. Chiropractic care is not a dependency model. It is a corrective model. It’s more like physical therapy or orthodontics. You continue visits until the underlying issue is corrected. Then you maintain.
                    </p>
                    <p>
                      At a well-run Tampa chiropractic wellness center, your chiropractor will build you a personalized care plan with a clear endpoint. According to the{" "}
                      <ExternalSource href="https://www.nccih.nih.gov/health/chiropractic-what-you-need-to-know">
                        National Center for Complementary and Integrative Health
                      </ExternalSource>
                      , most acute conditions see resolution within 6 to 12 sessions. Your doctor should decide that.
                    </p>

                    <div className="border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px] my-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-[#4E741E] font-bold mt-0.5">•</span>
                          <span>Those sticking to every part of treatment tend toward stronger results over time.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-[#4E741E] font-bold mt-0.5">•</span>
                          <span>Single-visit patients often see temporary relief only.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-[20px] font-bold text-[#202124] mb-4">
                        Popular Beliefs About Chiropractors Against Real Facts
                      </h3>
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">The Myth</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">The Truth</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {mythsVsTruths.map(([myth, truth]) => (
                              <tr key={myth} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{myth}</td>
                                <td className="px-4 py-3 text-gray-600">{truth}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    Myth 4: Chiropractors Aren’t Really Doctors
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Future chiropractors start with 4 years of undergraduate coursework. Then four additional years at an accredited chiropractic institution are to be completed. This path leads to a Doctor of Chiropractic (D.C.) qualification. The cumulative hours of clinical training is often more than that of medical doctors in musculoskeletal care. They are licensed and board certified.
                    </p>
                    <p>
                      In Florida, the{" "}
                      <ExternalSource href="https://floridaschiropracticmedicine.gov/">
                        Florida Board of Chiropractic Medicine
                      </ExternalSource>{" "}
                      mandates rigorous continuing education requirements. The Tampa area has some of the most experienced chiropractic professionals in the state. Some practices here carry doctors with 30 to 40 years of clinical experience. That is not a coincidence. It is commitment.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed">
                        “Healing begins when the body works without blocks. Our group focuses on the full individual, never just one sign of trouble. When nerve connections clear, recovery will always follow naturally. That is real medicine.”
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-500 not-italic">
                        — Dr. Juliet Marvenko, Doctor of Chiropractic, Jachimek Chiropractic and Wellness, Tampa FL
                      </cite>
                    </blockquote>
                  </div>
                </section>

                <section>
                  <Subhead number="05">
                    Myth 5: Insurance in Florida Doesn’t Cover Chiropractic Care
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Yes. Most major insurance providers in Florida cover chiropractic care to some degree. Medicare includes chiropractic adjustments. Workers’ compensation and auto accident claims almost universally cover it too. This is important for Tampa commuters and drivers who get into accidents on I-275 or I-4 every single day.
                    </p>
                    <p>
                      Beyond insurance, reputable Tampa chiropractic offices accept flexible options like CareCredit and HSA/FSA funds. The financial barrier most people assume is simply not there. You can explore your coverage and{" "}
                      <Link href="/team" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        meet the full care team
                      </Link>{" "}
                      to understand exactly what is covered before you commit to a single dollar.
                    </p>

                    <div className="border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px] my-6">
                      <h4 className="font-bold text-[#202124] text-[16px] mb-3">Survey Insight:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-[#4E741E] font-bold mt-0.5">•</span>
                          <span>Our surveys show that 71% of first-time chiropractic patients in Tampa wrongly assumed their insurance would not cover treatment. Most were surprised to learn it did.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124] border-b border-[#d8dfd1] pb-2">
                    Proven Tampa Chiropractic Services That Actually Deliver Results
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      Tampa patients deserve access to care that is verified, specific, and results-driven. The services below are all clinically established. They represent the kind of comprehensive care available right here in the Ehrlich Road corridor of Northwest Tampa.
                    </p>

                    <div className="border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <ul className="space-y-3">
                        {[
                          "Spinal decompression therapy for disc herniation and nerve compression.",
                          "Chiropractic adjustments for back pain, neck pain, and posture correction.",
                          "Sciatica relief targeting nerve root compression at the lumbar spine.",
                          "Cervical Manipulation and Soft Tissue Therapy for Headache and Migraine Care",
                          "Whiplash and soft tissue damage recovery after a car accident.",
                          "For a complete recovery, rehabilitation exercises are combined with spinal care.",
                        ].map((service) => (
                          <li key={service} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="text-[#4E741E] font-bold mt-0.5">✓</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p>
                      Each service above is backed by current clinical evidence. Each is delivered by a licensed team. You can explore all of these in detail on the{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        services page
                      </Link>
                      . And if you are unsure where to start, the{" "}
                      <Link href="/help" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        Let Us Help You page
                      </Link>{" "}
                      walks you through your options step by step.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-3 my-6">
                      {statsGrid2.map(([value, label]) => (
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

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h3 className="text-lg font-bold text-[#202124]">
                        Ready to Finally Get Pain-Free in Tampa?
                      </h3>
                      <p className="text-sm font-semibold text-gray-700">
                        Book your $47 New Patient Special today. No long waits. No judgment. Just results.
                      </p>
                      <p className="flex items-center gap-2 text-lg font-bold text-[#4E741E]">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                        Call 813.960.2225 to Book Your Exam
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Book Now at Jachimek Chiropractic
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Chiropractic Myths & Misconceptions
                  </p>
                  <div className="mt-5 space-y-5">
                    {[
                      {
                        q: "Do chiropractic sessions take up time?",
                        a: "Your meetings may last between 20 to 45 minutes. Right at the start, things go slower because there is evaluating to do, then talking it through. Later visits tend to move quickly, built around specific progress points.",
                      },
                      {
                        q: "Is chiropractic care safe while pregnant?",
                        a: "Most certainly. During pregnancy, spinal adjustments may relieve lower back strain along with pressure in the pelvis. Each session shifts gently when the provider understands your condition.",
                      },
                      {
                        q: "Are spinal decompression & standard adjustment same?",
                        a: "Though it sounds intense, spinal decompression actually pulls the spine apart slowly using a machine. This easing motion takes weight off squeezed discs along with irritated nerves. This method doesn't need surgery, having received clearance from the FDA.",
                      },
                      {
                        q: "Do I need referrals to see a Tampa chiropractor?",
                        a: "No referral needed. Chiropractors in Florida are primary contact providers. You can book directly. Your chiropractor may work with your physician for best results, though.",
                      },
                    ].map((faq) => (
                      <div key={faq.q}>
                        <h3 className="font-bold text-[#202124]">Q: {faq.q}</h3>
                        <p className="text-gray-700">{faq.a}</p>
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
