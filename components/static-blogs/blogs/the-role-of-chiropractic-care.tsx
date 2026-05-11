import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export const theRoleOfChiropracticCareBlog = {
  title: "The Role of Chiropractic Care in Treating Neck and Shoulder Tension",
  slug: "the-role-of-chiropractic-care-in-treating-neck-and-shoulder-tension",
  category: "Chiropractic Care",
  createdAt: "2026-05-11",
  published: true,
  shortDescription:
    "If your neck and shoulders feel tight and achy, chiropractic care can offer real relief by improving spinal movement, easing stiffness, and supporting better posture.",
  featuredImage: {
    image: {
      url: "/images/static-blogs/chiropractic-care-neck-shoulder-tension-relief.webp",
    },
    altText: "A woman holding the back of her neck because of neck tension",
  },
  body: "If your neck and shoulders feel tight and achy, chiropractic care can offer real relief. By gently realigning your spine, chiropractors help melt away muscle stiffness and ease pinched nerves.",
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
  };
};

type Props = {
  recentBlogs?: RecentBlog[];
};

const keyPoints = [
  "30.7% of U.S. adults experience upper-limb pain, and 58.9% have pain of any kind (NCHS).",
  "14.3% of working adults reported neck pain over a 3-month period -- about 18 million workers.",
  "Forward head posture, stress, and poor ergonomics are the top drivers of recurring neck tension.",
  "Chiropractic care targets joint restriction, muscle guarding, and spinal alignment -- not just symptoms.",
  "Combining chiropractic care with daily movement habits gives the best long-term results.",
];

const patterns = [
  [
    "Forward Head Posture",
    "Screen/desk work, phone use",
    "Cervical adjustments, postural re-training",
  ],
  [
    "Upper Trapezius Tension",
    "Stress, shoulder guarding",
    "Soft tissue work, joint mobilization",
  ],
  ["Tech Neck", "Prolonged device use", "Spinal alignment, ergonomic guidance"],
  ["Morning Stiffness", "Poor sleep position", "Cervical mobility restoration"],
  [
    "Tension Headaches",
    "Neck muscle overload",
    "Manual therapy, trigger point release",
  ],
  [
    "Shoulder Girdle Strain",
    "Repetitive reaching/lifting",
    "Shoulder mobility work, stabilization",
  ],
];

const faqs = [
  {
    question: "Does a chiropractic adjustment hurt?",
    answer:
      "For most people, it does not. You might feel some pressure, a stretch, or a quick release during the adjustment, but the goal is to help ease discomfort, not add to it.",
  },
  {
    question: "How many visits will I need?",
    answer:
      "That really depends on how long the tension has been there and what is causing it. Some people notice improvement quickly, while others may need more time to help their bodies move and hold better posture.",
  },
  {
    question: "Can stretching fix it on its own?",
    answer:
      "Stretching can help, absolutely. But if a joint is not moving well, stretching the muscles around it may only go so far. In those cases, the joint restriction itself may need attention, too.",
  },
  {
    question: "Is chiropractic care safe?",
    answer:
      "Yes. It is a widely used non-invasive option for neck and back pain, especially when the care begins with a proper evaluation and a clear plan.",
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

export default function TheRoleOfChiropracticCare({ recentBlogs = [] }: Props) {
  const blog = theRoleOfChiropracticCareBlog;
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
                width={1200}
                height={760}
                priority
                className="h-auto w-full object-cover"
              />
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

              <h1 className="mt-6 max-w-4xl text-[30px] font-bold leading-[1.25] text-[#202124] sm:text-[38px] lg:text-[44px]">
                {blog.title}
              </h1>

              <div className="mt-8 space-y-7 text-[16px] leading-[1.85] text-[#202124]">
                <p>
                  If your neck and shoulders feel tight and achy, chiropractic
                  care can offer real relief. By gently realigning your spine,
                  chiropractors help melt away muscle stiffness and ease pinched
                  nerves. It is a natural, hands-on way to reduce pain, get you
                  moving freely, and help your body heal itself.
                </p>

                <div>
                  <h2 className="text-[18px] font-bold tracking-wide text-[#202124]">
                    KEY POINTS
                  </h2>
                  <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#202124]">
                    {keyPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <p>
                  That is the real issue with neck stiffness relief. It is not
                  just about the spot that hurts. NCHS reported that 30.7% of
                  U.S. adults had upper-limb pain, and 58.9% experienced pain of
                  any kind during that period. That is a lot of people carrying
                  tension around. Quietly. Daily. Sometimes for years.
                </p>

                <p>
                  In a few minutes, you&apos;ll know about the habits,
                  positions, and stress patterns that keep feeding it.
                </p>

                <section>
                  <h2 className="flex items-center text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="01" />
                    Why Neck and Shoulder Tension Keeps Coming Back
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      Tension builds within the body. The body reacts to how it
                      is being used. And modern life gives the neck and
                      shoulders plenty to complain about. Long hours sitting.
                      Constant screen time. Stress that never really switches
                      off. It all stacks up.
                    </p>
                    <p>
                      CDC-backed research estimated that 14.3% of U.S. working
                      adults reported neck pain over a 3-month period, which
                      worked out to about 18 million workers. A big part of the
                      problem is forward head posture. Add in rounded shoulders
                      and a slumped upper back. This is how the whole area
                      starts to feel overloaded.
                    </p>
                    <p>
                      Stress matters too. When people are tense, their shoulders
                      often rise without them noticing. Their mouth tightens.
                      Their breathing gets shallow. That low-grade guarding can
                      turn into upper trapezius tension before the day is even
                      over.
                    </p>
                    <p>
                      Other common triggers include ergonomic workstation
                      problems, sleeping in a poor position, repetitive
                      reaching, and not moving enough during the day.
                    </p>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-center text-sm font-semibold text-gray-700">
                    How Common Is Neck and Shoulder Tension? | Sources: NCHS,
                    CDC. *Some figures estimated for illustration.
                  </div>
                </section>

                <section>
                  <h2 className="flex items-center text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="02" />
                    How Chiropractic Care Can Help Ease the Load
                  </h2>
                  <p className="mt-5">
                    Chiropractic care is not only about a quick adjustment. It
                    is about helping the body move with less resistance.
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <h3 className="font-bold">
                        (I) Restoring Joint Movement to Reduce Muscle Strain
                      </h3>
                      <p>
                        Chiropractic care focuses on improving how your joints
                        move. Especially in the neck and upper back. When these
                        joints become restricted, the surrounding muscles often
                        tighten. It protects the area. This causes ongoing
                        stiffness and discomfort. Gentle adjustments help
                        restore normal motion.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">
                        (II) Reducing Muscle Guarding and Tightness
                      </h3>
                      <p>
                        When the body senses limited movement or irritation, it
                        reacts by tightening nearby muscles. A response known as
                        muscle guarding. Chiropractic adjustments may help calm
                        this response.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">
                        (III) Improving Spinal Alignment and Posture
                      </h3>
                      <p>
                        Poor posture, especially forward head position and
                        rounded shoulders, adds continuous stress to the neck
                        and upper back. Chiropractic care supports better spinal
                        alignment. It helps distribute weight more evenly across
                        the body.
                      </p>
                    </div>
                  </div>

                  <div className="my-8 border-y border-gray-300 py-5 text-center text-sm font-semibold text-gray-700">
                    Patient Outcomes: With vs. Without Chiropractic Care |
                    Illustrative data based on published outcome studies.
                  </div>
                </section>

                <section>
                  <h2 className="flex items-center text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="03" />
                    What We Look For During Your Visit
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      Does it feel worse in the morning? Or does stress make it
                      flare up? These details matter. They help us understand
                      the pattern, not just the pain.
                    </p>
                    <p>
                      Then we look at movement. We check neck flexibility,
                      shoulder mobility, posture, and alignment. We also feel
                      for tight spots or sensitive areas where the tissue may be
                      holding too much tension.
                    </p>
                    <p>
                      Sometimes the problem starts in the neck. Sometimes the
                      shoulder is part of the story. Often, it is both.
                    </p>
                  </div>

                  <div className="mt-7 overflow-x-auto">
                    <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-6">
                      <caption className="mb-3 text-left text-base font-bold text-[#202124]">
                        Common Tension Patterns and Chiropractic Responses
                      </caption>
                      <thead>
                        <tr className="border-y border-gray-300 bg-gray-50">
                          <th className="p-3 font-bold">Tension Pattern</th>
                          <th className="p-3 font-bold">Common Cause</th>
                          <th className="p-3 font-bold">
                            Chiropractic Response
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {patterns.map(([pattern, cause, response]) => (
                          <tr
                            key={pattern}
                            className="border-b border-gray-200"
                          >
                            <td className="p-3 font-semibold">{pattern}</td>
                            <td className="p-3">{cause}</td>
                            <td className="p-3">{response}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="flex items-center text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="04" />
                    The Domino Effect: Tension, Fatigue, and Headaches
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      Neck tension is not always just a sore muscle. Research
                      reviews continue to support manual therapy and exercise
                      for those kinds of neck-related headache patterns.
                    </p>
                    <p>
                      Then there is fatigue. Pain is draining. Even if it is not
                      sharp, your brain still has to process it all. That takes
                      energy, focus, and patience.
                    </p>
                    <ul className="space-y-2 pl-5 list-disc">
                      <li>They can think more clearly.</li>
                      <li>They can focus longer and sleep better.</li>
                      <li>
                        Finally, they stop bracing against the day quite so
                        much.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="flex items-center text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="05" />
                    Why Chiropractic Care Works Best with Healthy Habits
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      An adjustment can help reset motion. But the habits around
                      it matter just as much. That is where the everyday stuff
                      comes in.
                    </p>
                    <p>
                      Set reminders to stand and move. Bring your screen up to
                      eye level. Stop living folded over a laptop. Keep your
                      pillow supportive so your neck is not cranked into an
                      awkward position all night.
                    </p>
                    <ul className="space-y-2 pl-5 list-disc">
                      <li>
                        Spinal alignment is easier to maintain when you are
                        moving often.
                      </li>
                      <li>
                        Shoulder blade stability improves when the upper back is
                        stronger.
                      </li>
                      <li>
                        Posture usually holds better when the body is not
                        fighting stiffness all day.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="flex items-center text-[24px] font-bold leading-snug text-[#202124]">
                    <SectionNumber value="06" />
                    When Neck and Shoulder Pain Needs a Different Approach
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      Chiropractic care can help with neck and shoulder tension
                      caused by posture, stress, or daily strain. But not every
                      pain pattern should be treated the same way.
                    </p>
                    <p>
                      If pain starts moving down the arm, or you notice
                      numbness, tingling, or weakness in the hand, that may
                      suggest nerve involvement. The same is true if the pain
                      began after a fall, car accident, or sports injury.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[24px] font-bold leading-snug text-[#202124]">
                    Frequently Asked Questions
                  </h2>
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
                    Start Feeling Better with Jachimek Chiropractic
                  </h2>
                  <div className="mt-5 space-y-5">
                    <p>
                      We consider more than just the sore spot at Jachimek
                      Chiropractic. That bigger picture matters a lot. Maybe the
                      tension started with work. Maybe it started with stress.
                      Maybe it has been building slowly for years.
                    </p>
                    <p>
                      If you are ready for better movement, better posture, and
                      less daily tension, start with Jachimek Chiropractic at
                      www.jachimekchiro.com. Sometimes the next good step is
                      simpler than it feels.
                    </p>
                  </div>

                  <div className="mt-8 border border-[#4E741E] bg-[#f6fff0] p-6 text-center">
                    <p className="text-lg font-bold">
                      Ready for better movement and less daily tension?
                    </p>
                    <p className="mt-2">
                      Jachimek Chiropractic is here for you.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex rounded-[4px] bg-[#4E741E] px-5 py-3 text-sm font-bold text-white"
                    >
                      Schedule Your Appointment
                    </Link>
                  </div>
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
