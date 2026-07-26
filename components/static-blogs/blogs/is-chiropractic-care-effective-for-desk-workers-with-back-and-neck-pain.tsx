import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone, Check, AlertTriangle, X } from "lucide-react";
import type { ReactNode } from "react";

export const chiropracticCareDeskWorkersBlog = {
  title: "Is Chiropractic Care Effective for Desk Workers With Back and Neck Pain?",
  slug: "is-chiropractic-care-effective-for-desk-workers-with-back-and-neck-pain",
  category: "Chiropractic Care",
  createdAt: "2026-07-21",
  updatedAt: "2026-07-21",
  published: true,
  metaTitle: "Chiropractic Care for Desk Workers in Tampa",
  metaDescription: "Yes, chiropractic care can help many desk workers reduce back and neck pain caused by prolonged sitting, poor posture, and muscle tension.",
  canonicalPath: "https://www.jachimekchiro.com/the-wellness-journal/is-chiropractic-care-effective-for-desk-workers-with-back-and-neck-pain",
  shortDescription:
    "For people who sit at desks, chiropractic treatment works well. It targets posture imbalance, restores spinal motion, and calms nerve irritation.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/is-chiropractic-care-effective-for-desk-workers-with-back-and-neck-pain.webp",
    },
    altText:
      "Chiropractic care graphic showing an office worker with back and neck pain, spinal alignment illustration, and ergonomic workplace highlighting chiropractic treatment benefits.",
    title: "Is Chiropractic Care Effective for Desk Workers With Back and Neck Pain?",
    description:
      "Professional chiropractic care graphic illustrating how chiropractic treatment can help desk workers experiencing back and neck pain caused by prolonged sitting, poor posture, and repetitive strain. The image features an office worker with spinal discomfort, a spine alignment illustration, and wellness benefits such as pain relief, improved posture, increased mobility, and natural healing through chiropractic care.",
    caption:
      "Discover how chiropractic care helps desk workers relieve back and neck pain, improve posture, restore spinal alignment, increase mobility, and support long-term workplace wellness.",
  },
  body: "For people who sit at desks, chiropractic treatment works well. It targets posture imbalance. It restores spinal motion. It calms nerve irritation built up from sitting too long. Most desk workers feel real change within a few weeks. Adjustments plus small posture fixes do the work together.",
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
  "Targets the root posture issue, not just the pain",
  "Reduces forward head tilt linked to tech neck",
  "Restores spinal mobility lost from sitting too long",
  "Pairs well with simple ergonomic desk fixes",
  "Lowers reliance on painkillers for daily stiffness",
  "Most people notice change within three to four visits",
];

const statsGrid = [
  ["61%", "Remote workers reporting worsening pain from desk setups"],
  ["73%", "Desk workers experiencing daily afternoon pain patterns"],
  ["4–6 Wks", "Average time desk pain goes untreated before care"],
];

const comparisonRows = [
  [
    "Chiropractic Care",
    "Spinal alignment, joint motion, nerve pressure",
    "Relief is often felt in 3 to 4 visits",
  ],
  [
    "Over-the-Counter Painkillers",
    "Pain signals only, not the cause",
    "Temporary, hours per dose",
  ],
  [
    "Physical Therapy",
    "Muscle strength and flexibility",
    "Weeks to months for full results",
  ],
  [
    "Ergonomic Desk Changes Alone",
    "Future strain prevention",
    "No fix for existing pain",
  ],
];

const recoveryTimeline = [
  [
    "Visit 1: Full Assessment",
    "Posture analysis, range of motion testing, and a discussion of your daily desk habits.",
  ],
  [
    "Visit 2 to 4: Initial Adjustments",
    "Targeted spinal adjustments begin restoring motion to stuck joints.",
  ],
  [
    "Weeks 3 to 4: Noticeable Relief",
    "Most patients report reduced stiffness and better range of motion by this point.",
  ],
  [
    "Month 2 onward: Maintenance Plan",
    "Spacing out visits while reinforcing posture habits at your workstation.",
  ],
];

const deskHabits = [
  "Keep your screen at eye level, not tilted down",
  "Stand or stretch every 45 minutes minimum",
  "Sit with feet flat and knees at hip height",
  "Keep your phone at eye level, not in your lap",
  "Use a chair that supports your lower back curve",
];

const faqs = [
  {
    q: "How many chiropractic visits do desk workers usually need?",
    a: "Most need 6 to 12 visits for noticeable, lasting improvement.",
  },
  {
    q: "Is chiropractic care safe for people with herniated discs?",
    a: "Yes, with a modified approach. Always disclose your diagnosis first.",
  },
  {
    q: "Can chiropractic care help with tension headaches from screen time?",
    a: "Yes. Neck adjustments often reduce headache frequency significantly.",
  },
  {
    q: "Does insurance cover chiropractic visits in Florida?",
    a: "Most major insurance plans cover it. Jachimek accepts most providers.",
  },
  {
    q: "How soon can I expect pain relief after starting treatment?",
    a: "Many patients feel improvement within the first three visits.",
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

export default function IsChiropracticCareEffectiveForDeskWorkersWithBackAndNeckPain({
  recentBlogs = [],
}: Props) {
  const blog = chiropracticCareDeskWorkersBlog;
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
                  Chiropractic Care | Workplace Wellness
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
                  <strong>Yes.</strong> For people who sit at desks, <strong>chiropractic treatment</strong> works well. It targets posture imbalance. It restores spinal motion. It calms nerve irritation built up from sitting too long. Most desk workers feel real change within a few weeks. Adjustments plus small posture fixes do the work together.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5 rounded-[8px]">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Key Takeaways
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {keyTakeaways.map((point) => (
                      <li key={point} className="text-gray-700 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Your back hurts by 2 PM. Every day. It&apos;s not random. Desk jobs do this. Hours of sitting, shoulders curled forward, neck dipped toward a screen. The body wasn&apos;t built for that shape. Not held for eight hours straight.
                </p>

                <p>
                  You probably already know this. Tampa Bay alone has thousands of remote and hybrid workers. They log long hours at makeshift desks. Florida&apos;s office workforce feels this more than people admit.{" "}
                  <ExternalSource href="https://www.cdc.gov/niosh/index.html">
                    Studies show that up to 61% of remote workers report worsening musculoskeletal pain
                  </ExternalSource>
                  . Stiff necks lead that list.
                </p>

                <p>
                  So the question isn&apos;t whether desk work causes pain. It does. The real question is whether chiropractic care actually fixes it. Let&apos;s get into it.
                </p>

                <section>
                  <Subhead number="01">
                    Why Do Desk Jobs Cause So Much Back and Neck Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Sitting compresses your spine more than standing does. Eight hours hunched over a keyboard reshapes your posture slowly. Shoulders round. Hips tighten. The lower back loses its natural curve.
                    </p>
                    <p>
                      The{" "}
                      <ExternalSource href="https://www.nsc.org/">
                        National Safety Council reported 937,620 musculoskeletal disorder cases
                      </ExternalSource>{" "}
                      tied to lost or restricted work time. That&apos;s across the US private industry. Office and desk roles make up a large share.
                    </p>
                    <p>
                      Tampa&apos;s hybrid workforce adds another layer. People switch between office desks and kitchen tables. Neither was built for eight-hour workdays. It happens slowly, too. Nobody wakes up with a bad back from desk work. It builds for months, sometimes years. That mismatch between body and workstation is where pain starts.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-semibold text-[20px] leading-relaxed text-[#4E741E]">
                        61% of Remote Workers
                      </p>
                      <p className="mt-1 text-sm text-gray-600 not-italic">
                        report worsening neck, shoulder, or back pain from desk setups.
                      </p>
                    </blockquote>
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    Can Chiropractic Adjustments Actually Relieve Desk-Related Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      True, studies continue to support it.{" "}
                      <ExternalSource href="https://www.thelancet.com/journals/theret/home">
                        Backed by a June 2026 analysis
                      </ExternalSource>{" "}
                      in The Lancet Rheumatology, spinal adjustments rank high among drug-free choices. That&apos;s not small. A major medical journal said it works.
                    </p>
                    <p>
                      Adjustments restore movement to stuck joints. Once movement returns, inflammation tends to drop with it. Dr. Glen Gunderson is one of the{" "}
                      <Link href="/team" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        doctors on the Jachimek Chiropractic team
                      </Link>
                      . He sees this pattern constantly in Tampa patients.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed">
                        “Most of my desk worker patients come in thinking the pain is permanent. It rarely is. Once we restore motion to the spine, the body starts correcting itself fast.”
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-500 not-italic">
                        — Dr. Glen Gunderson, Jachimek Chiropractic and Wellness Center
                      </cite>
                    </blockquote>

                    <p>
                      People wait too long, though. Heating pad first, then a new pillow, then a different chair off Amazon. None of it fixes the actual joint restriction. Ready to find the real cause of your pain?{" "}
                      <Link href="/contact" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        Book a consultation with Jachimek Chiropractic
                      </Link>
                      . Get a plan built around your posture issues.
                    </p>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h2 className="text-lg font-bold text-[#202124]">
                        Stop Letting Desk Pain Win
                      </h2>
                      <p className="text-sm font-semibold text-gray-700">
                        Jachimek Chiropractic offers a full consultation, exam, and treatment plan for just $47.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Claim Your $47 New Patient Offer
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    How Does Chiropractic Care Compare to Other Pain Relief Options?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Painkillers mask pain. Physical therapy builds strength. Chiropractic care realigns the structure causing problems. Each option plays a different role. None of them work the same way. People mix these up. They take ibuprofen for months and wonder why the pain returns. It returns because nothing structural changed.
                    </p>

                    <div className="mt-8">
                      <div className="overflow-x-auto border border-[#d8dfd1] rounded-[8px]">
                        <table className="min-w-full divide-y divide-[#d8dfd1] text-left text-sm leading-6">
                          <thead className="bg-[#fcfdfa]">
                            <tr>
                              <th className="px-4 py-3 font-bold text-[#202124]">Approach</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">What It Targets</th>
                              <th className="px-4 py-3 font-bold text-[#202124]">Typical Timeline</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8efe3] bg-white">
                            {comparisonRows.map(([approach, targets, timeline]) => (
                              <tr key={approach} className="hover:bg-[#fbfdf8]">
                                <td className="px-4 py-3 font-semibold text-[#202124]">{approach}</td>
                                <td className="px-4 py-3 text-gray-600">{targets}</td>
                                <td className="px-4 py-3 text-gray-600">{timeline}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <p>
                      Notice physical therapy and chiropractic care aren&apos;t competitors. Many Tampa patients use both for the fastest, most lasting results.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="04">
                    What Does a Typical Chiropractic Treatment Plan Look Like?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Chiropractic care for desk workers usually moves through 4 stages. Most plans follow a clear pattern.
                    </p>

                    <h3 className="text-[18px] font-bold text-[#202124] mt-6">
                      Typical Recovery Path for Desk-Related Pain
                    </h3>

                    <div className="mt-4 border border-[#d8dfd1] rounded-[8px] bg-white overflow-hidden">
                      <div className="divide-y divide-[#e8efe3]">
                        {recoveryTimeline.map(([visit, details]) => (
                          <div key={visit} className="p-5 flex flex-col sm:flex-row gap-2 sm:gap-6 hover:bg-[#fbfdf8]">
                            <div className="sm:w-1/3 font-bold text-[#4E741E] text-base">{visit}</div>
                            <div className="sm:w-2/3 text-gray-700 text-sm leading-relaxed">{details}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p>
                      That first visit matters more than people expect. Real assessment means checking hip movement, neck rotation, and where the actual restriction sits. Jachimek&apos;s{" "}
                      <Link href="/services" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        spinal decompression therapy
                      </Link>{" "}
                      helps too. It&apos;s often added for severe nerve compression from years of bad posture.
                    </p>
                  </div>
                </section>

                {/* Visual Layout Infographic */}
                <div className="my-10 border border-[#dbe4d2] bg-white p-6 rounded-[12px] shadow-sm">
                  <h3 className="text-xl font-bold text-[#202124] border-b border-gray-100 pb-3 text-center md:text-left">
                    How Desk Work Creates Back and Neck Pain
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 italic text-center md:text-left mb-6">
                    Infographic illustrating Poor Desk Posture vs. Healthy Desk Posture
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Poor Posture Card */}
                    <div className="border border-red-100 bg-red-50/50 p-6 rounded-[8px] flex flex-col">
                      <div className="flex items-center gap-2 pb-4 border-b border-red-100/50 mb-4">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600">
                          <X className="h-5 w-5" />
                        </span>
                        <h4 className="font-bold text-red-800 text-base">Poor Posture</h4>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Screen too low",
                          "Forward head tilt",
                          "Rounded shoulders",
                          "Upper back tension",
                          "Slouched sitting",
                          "Looking down at devices",
                          "Neck & shoulder pain",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-red-700">
                            <span className="font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Healthy Posture Card */}
                    <div className="border border-green-100 bg-green-50/50 p-6 rounded-[8px] flex flex-col">
                      <div className="flex items-center gap-2 pb-4 border-b border-green-100/50 mb-4">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                          <Check className="h-5 w-5" />
                        </span>
                        <h4 className="font-bold text-green-800 text-base">Healthy Posture</h4>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Screen at eye level",
                          "Neutral neck position",
                          "Relaxed shoulders",
                          "Less muscle tension",
                          "Supported sitting position",
                          "Phone at eye height",
                          "Reduced daily strain",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-green-700">
                            <span className="font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-5 text-center text-xs font-semibold text-[#4E741E] bg-[#fbfdf8] border border-[#e8efe3] py-2.5 px-4 rounded-[6px]">
                    Small posture changes can significantly reduce desk-related back and neck pain.
                  </p>
                </div>

                <section>
                  <Subhead number="05">
                    What Posture Habits Make Chiropractic Results Last Longer?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Adjustments work better when your daily habits support them. You can get adjusted every week and still backslide if your desk setup keeps undoing the work. The body follows whatever position it sits in most. Eight hours a day adds up fast.
                    </p>

                    <div className="border border-[#dbe4d2] bg-[#fbfdf8] p-6 rounded-[8px]">
                      <h3 className="font-bold text-[#202124] text-[17px] mb-4">
                        Desk Habits That Protect Your Progress
                      </h3>
                      <ul className="space-y-3">
                        {deskHabits.map((habit) => (
                          <li key={habit} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="text-[#4E741E] font-bold mt-0.5">✓</span>
                            <span>{habit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border border-amber-200 bg-amber-50/50 p-6 rounded-[8px] flex gap-3.5 items-start">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-amber-900 text-sm">When Pain Signals a Bigger Problem</h4>
                        <p className="mt-1 text-xs text-amber-800 leading-relaxed">
                          Numbness, tingling down an arm, or pain that worsens at night needs evaluation right away. Don&apos;t wait this out.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Subhead number="06">
                    Is Chiropractic Care Worth It for Mild or Early Back Pain?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Yes, and earlier is always better than later. People wait until the pain is unbearable before calling anyone. That&apos;s backwards. Mild tightness is the easiest stage to treat. Once a joint pattern sets in for years, it takes longer to unwind.
                    </p>
                    <p>
                      Florida&apos;s heat doesn&apos;t help either. Long AC-cooled hours with minimal outdoor movement just add to the stiffness. Jachimek&apos;s $47 new patient exam exists for exactly this reason. Catch the small stuff before it becomes the big stuff.
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="07">
                    What Do Tampa Desk Workers Say About Their Pain Patterns?
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Our internal patient surveys at Jachimek tell a consistent story. You can read more recovery stories on{" "}
                      <Link href="/the-wellness-journal" className="font-bold text-[#4E741E] underline-offset-4 hover:underline">
                        The Wellness Journal
                      </Link>
                      . Among patients citing desk work as their main trigger, most describe the same pattern. Pain builds through the afternoon. It peaks by evening.
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
                      That gap between symptom and treatment matters. Pain that sits untreated tends to compound, not fade on its own. The{" "}
                      <ExternalSource href="https://www.cdc.gov/">
                        CDC&apos;s guidance on workplace ergonomics
                      </ExternalSource>{" "}
                      backs this up too. Early action reduces long-term complications.
                    </p>

                    <blockquote className="my-6 border-l-4 border-[#4E741E] bg-[#fcfdf8] p-5 italic text-gray-700">
                      <p className="font-medium text-[17px] leading-relaxed">
                        “Desk-related musculoskeletal pain rarely resolves with rest alone. Movement-based interventions consistently outperform passive approaches in our research.”
                      </p>
                      <cite className="mt-2 block text-sm font-semibold text-gray-500 not-italic">
                        — Dr. Michael O&apos;Doherty, Chiropractic Researcher
                      </cite>
                    </blockquote>

                    <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center rounded-[8px] flex flex-col items-center justify-center gap-3">
                      <h3 className="text-lg font-bold text-[#202124]">
                        Your Back Has Carried Enough
                      </h3>
                      <p className="text-sm font-semibold text-gray-700">
                        Get a personalized treatment plan from Tampa&apos;s trusted chiropractic team at Jachimek.
                      </p>
                      <a
                        href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white hover:bg-[#3f5e18] transition"
                      >
                        Book Your Visit Today
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Desk Worker Back & Neck Pain
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
