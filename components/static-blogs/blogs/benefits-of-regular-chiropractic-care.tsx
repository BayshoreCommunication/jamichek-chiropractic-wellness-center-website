import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import type { ReactNode } from "react";

export const benefitsOfRegularChiropracticCareBlog = {
  title: "Benefits of Regular Chiropractic Care for Long-Term Spinal Health",
  slug: "benefits-of-regular-chiropractic-care",
  category: "Chiropractic Care",
  createdAt: "2026-05-23",
  published: true,
  metaTitle: "Does Regular Chiropractic Care Improve Long Term Spinal Health?",
  metaDescription:
    "Explore how regular chiropractic care supports long term spinal health, posture improvement, and pain relief.",
  canonicalPath: "/the-wellness-journal/benefits-of-regular-chiropractic-care",
  shortDescription:
    "Regular chiropractic care supports spinal alignment, posture, mobility, nervous system function, and long-term back pain relief through proactive wellness care.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/regular-chiropractic-care-spinal-health-treatment.webp",
    },
    altText:
      "Chiropractor providing spinal adjustment therapy for long-term back pain relief and wellness",
    title: "Benefits of Regular Chiropractic Care for Spinal Health",
    description:
      "Professional chiropractic adjustment sessions focused on improving spinal alignment, reducing back pain, and supporting long-term musculoskeletal health and wellness.",
    caption:
      "Chiropractic spinal adjustment therapy helping improve posture, mobility, and long-term back health.",
  },
  body: "Regular chiropractic care is a proactive investment in long-term spinal health. It supports spinal alignment, posture, mobility, nervous system communication, and drug-free pain relief while helping patients protect lifelong movement.",
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
  "Regular chiropractic care is a proactive investment in long-term spinal health, not only a short-term pain fix.",
  "Healthy spinal alignment supports the nervous system, which can influence sleep, energy, digestion, mobility, and overall wellness.",
  "Preventive chiropractic visits may help patients reduce avoidable wear, stiffness, and recurring musculoskeletal stress.",
  "Posture correction can reduce tech neck strain and support better breathing, balance, and daily movement.",
  "Drug-free care can help reduce reliance on symptom masking and focus on the mechanical cause of pain.",
  "Gentle, low-force chiropractic techniques can be adapted for seniors and patients with different comfort levels.",
];

const benefitRows = [
  [
    "Spinal Health",
    "Maintains disc hydration, natural spinal curves, and joint motion.",
    "Helps reduce herniation risk, degeneration, and recurring back stiffness.",
  ],
  [
    "Nervous System",
    "Reduces mechanical interference in brain-body pathways.",
    "May support better sleep, digestion, energy, and whole-body function.",
  ],
  [
    "Musculoskeletal Health",
    "Restores joint mobility and supports soft tissue balance.",
    "Encourages better movement patterns and may reduce surgery risk.",
  ],
  [
    "Posture",
    "Corrects tech neck, rounded shoulders, and skeletal misalignment.",
    "Supports a taller stance, easier breathing, and less upper-body strain.",
  ],
  [
    "Pain Management",
    "Addresses root mechanical causes instead of only masking symptoms.",
    "Supports drug-free pain relief and lower long-term care burden.",
  ],
  [
    "Senior Health",
    "Uses gentle, low-force care based on mobility, comfort, and bone health.",
    "Helps maintain balance, flexibility, independence, and confidence.",
  ],
];

const stats = [
  ["Proactive", "Care before pain becomes a chronic problem"],
  ["Drug-Free", "Spinal adjustment therapy focused on root causes"],
  ["All Ages", "Gentle care adapted for comfort and mobility"],
];

const longevityBenefits = [
  "Reduced risk of repetitive strain injuries",
  "Decreased wear on weight-bearing joints",
  "Enhanced balance and structural stability",
  "Improved resilience for work, travel, hobbies, and family life",
];

const movementBenefits = [
  "Directly addresses structural causes of back pain and stiffness",
  "Promotes long-term soft tissue healing and mobility restoration",
  "Avoids relying only on chemical pain masks",
  "Helps joints bend, twist, and move with less daily resistance",
];

const postureBenefits = [
  "Less forward head posture from screen and phone use",
  "Reduced neck, shoulder, and upper back strain",
  "Better rib cage expansion for easier breathing",
  "More confident alignment during walking, sitting, and standing",
];

const sourceLinks = [
  {
    label: "NIH / NCCIH",
    href: "https://www.nccih.nih.gov/health/low-back-pain-and-complementary-health-approaches-what-you-need-to-know",
    text: "NCCIH notes that spinal manipulation may help some people with acute or chronic low back pain when used appropriately.",
  },
  {
    label: "CDC",
    href: "https://www.cdc.gov/overdose-prevention/hcp/clinical-care/nonopioid-therapies-for-pain-management.html",
    text: "CDC guidance includes spinal manipulation among nonopioid, noninvasive options used for some pain conditions.",
  },
  {
    label: "HHS",
    href: "https://www.hhs.gov/opioids/prevention/pain-management-options/index.html",
    text: "HHS pain management resources emphasize individualized, multimodal care and nonopioid pain management options.",
  },
];

const faqs = [
  {
    question: "Is it good to go to a chiropractor regularly?",
    answer:
      "Yes. Consistent chiropractic care can help maintain spinal alignment, support joint mobility, and work like preventive maintenance for your spine. The right schedule depends on your symptoms, posture, lifestyle, and exam findings.",
  },
  {
    question: "What are the long term effects of chiropractic care?",
    answer:
      "Long-term chiropractic care may support better posture, sustained joint mobility, reduced mechanical stress, and a more resilient spine. Many patients use it to stay active and reduce recurring back or neck flare-ups.",
  },
  {
    question: "Can a chiropractor fix spinal alignment permanently?",
    answer:
      "Alignment is an ongoing process. Regular adjustments, posture habits, movement, and strengthening can help your body hold better positioning despite daily stress from sitting, work, driving, and exercise.",
  },
  {
    question: "Is regular chiropractic care safe for older adults?",
    answer:
      "For many older adults, chiropractic care can be adapted with gentle, low-force techniques. A chiropractor should screen for bone density, fracture risk, medical history, and comfort before recommending adjustments.",
  },
  {
    question: "Does chiropractic care help with posture improvement?",
    answer:
      "It can. Chiropractic adjustments, ergonomic guidance, and corrective exercises can reduce tech neck, rounded shoulders, and recurring spinal strain that often contribute to poor posture.",
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

export default function BenefitsOfRegularChiropracticCare({
  recentBlogs = [],
}: Props) {
  const blog = benefitsOfRegularChiropracticCareBlog;
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
                  Spinal Health | Preventive Chiropractic Care
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
                  Jachimek Chiropractic & Wellness Center provides consistent,
                  proactive chiropractic care that supports spinal alignment,
                  strengthens nervous system communication, improves posture,
                  and helps patients build a foundation for lifelong mobility
                  and well-being.
                </p>

                <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Quick Summary
                  </h2>
                  <p className="mt-3">
                    Regular chiropractic care is not only about short-term back
                    pain relief. It is a long-term wellness strategy for people
                    who want better movement, better posture, less recurring
                    strain, and a healthier spine as they age.
                  </p>
                </div>

                <div>
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    Key Takeaways
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
                    Chiropractic Care Benefits at a Glance
                  </h2>
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-6">
                      <thead>
                        <tr className="border-y border-gray-300 bg-gray-50">
                          <th className="p-3 font-bold">Area of Health</th>
                          <th className="p-3 font-bold">
                            What Chiropractic Care Does
                          </th>
                          <th className="p-3 font-bold">Long-Term Benefit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {benefitRows.map(([area, action, benefit]) => (
                          <tr key={area} className="border-b border-gray-200">
                            <td className="p-3 font-semibold">{area}</td>
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
                    Long-Term Effects of Chiropractic Care for Future Success
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Many patients visit us for the first time when pain
                      becomes unbearable. They often wish they had started their
                      wellness journey much sooner. Your spine and discs need
                      consistent care so they do not wear down too quickly.
                    </p>
                    <p>
                      Proactive chiropractic care looks for the root cause of
                      discomfort before it becomes a chronic condition. Small
                      alignment and mobility issues may not hurt much at first,
                      but they can build into long-term back pain, stiffness,
                      disc pressure, or repetitive strain.
                    </p>
                    <p>
                      Think of it as investing in your mobility. You deserve to
                      travel, work, exercise, and play with your grandchildren
                      without feeling limited by your back. Regular spinal
                      alignment optimization helps your body keep up with your
                      ambitions.
                    </p>
                  </div>

                  <div className="mt-6 border-l-4 border-[#4E741E] bg-gray-50 p-5">
                    <h3 className="font-bold text-[#202124]">
                      Science of Longevity
                    </h3>
                    <p className="mt-2">
                      The natural curves of the spine help absorb shock during
                      daily movement and exercise. When those curves flatten or
                      shift, pressure on the spinal discs can increase. Over
                      time, that may contribute to herniation, degeneration, and
                      recurring pain. Regular chiropractic visits help keep
                      these structures resilient, mobile, and better supported.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold text-[#202124]">
                      Foundation for Health
                    </h3>
                    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                      {longevityBenefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-sm font-semibold text-gray-700">
                    Research note: NIH-hosted research has associated
                    nonpharmacologic spine care with lower opioid use for some
                    back pain patients. Source:{" "}
                    <ExternalSource href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12705058/">
                      PubMed Central
                    </ExternalSource>
                    .
                  </div>
                </section>

                <section>
                  <Subhead number="02">
                    Nervous System Function and the Brain-Body Connection
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Your body works because your brain communicates with every
                      cell through the spinal cord and nerves. When spinal
                      joints are not moving well or surrounding tissues are
                      irritated, that communication can feel less efficient in
                      everyday life.
                    </p>
                    <p>
                      We pay close attention to the pathways these messages
                      travel through. When movement improves and irritation
                      decreases, many patients feel better overall because the
                      body is no longer fighting as much mechanical stress.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                      <h3 className="font-bold text-[#202124]">
                        Optimal Internal Communication
                      </h3>
                      <p className="mt-2">
                        Precise, gentle chiropractic techniques are designed to
                        reduce spinal interference and improve motion. Patients
                        often report improved sleep, easier movement, and better
                        daily energy as their bodies become less guarded.
                      </p>
                    </div>
                    <div className="border border-[#d8dfd1] bg-[#fbfdf8] p-5">
                      <h3 className="font-bold text-[#202124]">
                        Support for the Whole Body
                      </h3>
                      <p className="mt-2">
                        The body and mind are connected. When pain decreases
                        and posture improves, people often feel clearer,
                        calmer, and more capable throughout the day.
                      </p>
                    </div>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-center">
                    <p className="text-3xl font-bold text-[#4E741E]">~40%</p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      Lower total care costs have been reported in some studies
                      when low back pain care begins with chiropractic care.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-gray-500">
                      Source:{" "}
                      <ExternalSource href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8802278/">
                        PubMed Central
                      </ExternalSource>
                    </p>
                  </div>
                </section>

                <section>
                  <Subhead number="03">
                    Musculoskeletal Health Through Movement Over Surgery
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      We advocate for conservative care as a way to help you
                      stay off the operating table whenever clinically
                      appropriate. Chiropractic care gives your body a better
                      environment to heal by improving movement, reducing
                      mechanical irritation, and supporting natural repair.
                    </p>
                    <p>
                      Preventive chiropractic care acts like a shield against
                      the injuries and compensations that can eventually lead to
                      invasive treatment. When joints move correctly, soft
                      tissues can recover with less repeated stress.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold text-[#202124]">
                      Maintenance of Joint Mobility
                    </h3>
                    <p className="mt-2">
                      Stiff joints are often the beginning of many chronic
                      limitations. If you lose the ability to bend, twist, or
                      walk comfortably, your quality of life can change quickly.
                      Consistent care helps protect mobility before it becomes a
                      crisis.
                    </p>
                    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                      {movementBenefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-center">
                    <p className="text-3xl font-bold text-[#4E741E]">~90%</p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      Some claims-data studies report much lower surgery rates
                      when patients see a chiropractor first for work-related
                      back injuries.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-gray-500">
                      Source:{" "}
                      <ExternalSource href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8802278/">
                        PubMed Central
                      </ExternalSource>
                    </p>
                  </div>

                  <p>
                    One visit may give short-term relief, but consistent care
                    creates the best opportunity for long-term change. We care
                    about how you move today and how you want to keep moving as
                    you age.
                  </p>
                </section>

                <section>
                  <Subhead number="04">
                    Chiropractic Care for Posture and Patient Safety
                  </Subhead>
                  <div className="mt-5 space-y-5">
                    <p>
                      Some patients feel nervous before their first chiropractic
                      visit. That is completely understandable. Our care is
                      gentle, personalized, and based on your comfort, exam
                      findings, and goals.
                    </p>
                    <p>
                      We explain every step before treatment begins. Your
                      comfort is just as important as your spinal alignment, and
                      your care plan should always fit your body instead of
                      forcing your body to fit a generic plan.
                    </p>
                  </div>

                  <div className="mt-6 border-l-4 border-[#4E741E] bg-gray-50 p-5">
                    <h3 className="font-bold text-[#202124]">
                      Modern Posture Correction
                    </h3>
                    <p className="mt-2">
                      In the digital age, many people deal with tech neck.
                      Hours spent looking down at screens can pull the head
                      forward, round the shoulders, and strain the neck and
                      upper back. Chiropractic care, ergonomic guidance, and
                      corrective exercises can help reverse these modern posture
                      problems.
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2 pl-5 list-disc marker:text-[#4E741E]">
                    {postureBenefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="my-8 border-y border-gray-300 py-5 text-sm font-semibold text-gray-700">
                    Pain management guidance increasingly emphasizes nonopioid
                    options when appropriate. Sources:{" "}
                    <ExternalSource href="https://www.cdc.gov/overdose-prevention/hcp/clinical-care/nonopioid-therapies-for-pain-management.html">
                      CDC
                    </ExternalSource>{" "}
                    and{" "}
                    <ExternalSource href="https://www.hhs.gov/opioids/prevention/pain-management-options/index.html">
                      HHS
                    </ExternalSource>
                    .
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Secure Your Vitality with Jachimek Chiropractic & Wellness
                    Center
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      You do not have to build better spinal health by yourself.
                      Whether you were hurt recently, live with recurring back
                      pain, or simply want to stay mobile and active, our team
                      is here to help.
                    </p>
                    <p>
                      You only have one spine. It has to last your whole life.
                      Regular chiropractic care can help you protect it with a
                      plan focused on alignment, posture, movement, and
                      long-term wellness.
                    </p>
                  </div>

                  <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center">
                    <p className="text-lg font-bold">
                      Ready to protect your long-term spinal health?
                    </p>
                    <p className="mt-3 inline-flex items-center justify-center gap-2 text-lg font-bold text-[#4E741E]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Call 813 960 2225 for a Chiropractic Consultation
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      Jachimek Chiropractic & Wellness Center | Tampa Bay &
                      Lakeland
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

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 font-semibold text-gray-700">
                    People Also Ask About Regular Chiropractic Care
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
                    relationship. For any personalized chiropractic or physical
                    therapy assessment, contact Jachimek Chiropractic & Wellness
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
