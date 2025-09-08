import { type Metadata } from 'next'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { Container } from '@/components/Container'

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MinusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6 12h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const engineeringFaqs = [
  {
    question: "Describe a skill or knowledge you acquired recently that has been impactful for you.",
    answer: "Recently, I've been diving deep into 3D modelling for printing—initially as a creative outlet, but it's had a surprisingly broad impact. What started with designing accessories for my reef tank evolved into learning tools like Fusion 360 and Blender, contributing to open source 3D printing communities, and building a small product line through my side project. This hands-on experience has sharpened the way I think about product—not just in terms of functionality, but in how things are designed, packaged, shared, and improved over time.",
  },
  {
    question: "What kinds of software projects have you worked on before?",
    answer: "Most of the software projects I've worked on have been in the domain of web and web applications, ranging from large-scale commercial platforms to internal tooling, open source contributions, and personal side projects. Much of my professional experience has focused on building and maintaining open source software and SaaS products in the realm of Content Management and eCommerce systems, especially during my time at Automattic (WooCommerce division), where I led teams working on shipping, analytics, partnerships, and core extensions used by millions of merchants globally.",
  },
  {
    question: "Would you describe yourself as a high quality coder? Why?",
    answer: "I would describe myself as a high quality coder—though to me, that's about more than just writing clean syntax. I define high quality coding as building software that is maintainable, understandable, and genuinely useful. It's about writing code that plays well with others: easy to review, test, extend, and debug. I care deeply about naming things clearly, reducing complexity, leaving helpful documentation, and thinking about the long-term health of the codebase—not just the immediate solution.",
  },
  {
    question: "Would you describe yourself as an architect of resilient software?",
    answer: "Yes, I would describe myself as an architect of resilient software—especially in the context of web applications, eCommerce infrastructure, and customer-facing platforms at scale. To me, resilient software means systems that continue to perform reliably under pressure: through scale, failure, change, and ambiguity. It's about more than uptime—it's about graceful degradation, smart defaults, clear fallbacks, and systems that are observable and maintainable over time.",
  },
  {
    question: "What is your most senior role in a software engineering organisation?",
    answer: "My most senior role was as Director of Engineering at Automattic, where I was responsible for multiple teams within the WooCommerce division. At peak, I led five engineering teams—with 30+ individual contributors—spanning a portfolio of 35+ digital products. These included core WooCommerce extensions (like Shipping and Analytics), as well as strategic partnership integrations with platforms such as Google, TikTok, Meta, and Pinterest.",
  },
  {
    question: "What is your proudest success as an engineering leader?",
    answer: "My proudest success as an engineering leader was growing a small team of five into a multi-team organisation—and supporting that growth by investing deeply in leadership development and mentorship. When I first joined, we were a single team looking after a few products. Over time, as the scope of our work and product portfolio expanded, I helped scale that into five cross-functional engineering teams. But the real success wasn't just in numbers—it was in growing the people who would lead those teams.",
  },
  {
    question: "Outline your thoughts on quality in software development.",
    answer: "I believe quality in software development is a shared concern—not a phase, a role, or a checklist. Just like security and documentation, quality is something that needs to be owned by everyone, from product to engineering to support. The best teams I've worked with treat it as a cultural value—baked into planning, development, and feedback loops—not something handed off at the end. To me, quality goes beyond just 'does it work?' It's about resilience, clarity, usability, and long-term maintainability.",
  },
]

const managementFaqs = [
  {
    question: "Would you describe yourself as an effective manager? Why?",
    answer: "Yes, I would describe myself as an effective manager—because I focus on enabling others to do their best work while aligning that work with meaningful outcomes. For me, management isn't about control or hierarchy—it's about creating the right environment: clear expectations, psychological safety, strong context, and the systems that help people grow and deliver together. I measure my effectiveness by their growth, our outcomes, and the culture we built together.",
  },
  {
    question: "Describe the daily, weekly, monthly and quarterly habits you expect in a well-run software engineering team.",
    answer: "In my most recent roles—particularly at Automattic—we worked in a highly distributed, async-first environment where teams were encouraged to work 'how they work best.' That meant embracing flexibility in team rituals and rhythms, based on the needs of the people and the nature of the work. Daily: async stand-ups and clear status updates. Weekly: 1:1s, team calls, and lightweight retrospectives. Monthly: metrics health checks and cross-functional syncs. Quarterly: roadmap planning and strategic reflection.",
  },
  {
    question: "Which practices are important when running multiple teams and products?",
    answer: "When you're running multiple teams and products, the most important thing is to create clarity without becoming a bottleneck. You need to balance consistency and alignment with flexibility and trust—giving each team enough autonomy to move fast, while making sure everything rolls up to a coherent strategy. Key practices include clear ownership and boundaries, strong async communication, aligned planning rituals, shared visibility, empowered engineering leads, and cross-team collaboration support.",
  },
  {
    question: "Describe your approach to team and individual performance management.",
    answer: "My approach to performance management is centred on clarity, context, and care. Whether at the team or individual level, I believe people do their best work when expectations are clear, feedback is regular, and they understand how their efforts contribute to something meaningful. At the individual level, performance management starts long before there's an issue. It's about regular 1:1s, feedback in the moment, and recognising both strengths and growth areas over time.",
  },
  {
    question: "Describe your approach to coaching, mentorship and career development.",
    answer: "For me, coaching and career development is about helping people find their path—not pushing them down a predefined one. Everyone's motivated by different things, and part of the job is creating space to figure that out. I try to keep things grounded: regular 1:1s, honest conversations, and support that's specific to the person—not just the role. I focus on giving people opportunities to grow through doing—leading projects, mentoring others, or stepping into something uncomfortable—but with the support and reflection they need along the way.",
  },
]

const educationFaqs = [
  {
    question: "How did you rank in your final year of high school in mathematics and your home language?",
    answer: "I completed my final year of high school at the top of my class with the highest grade in both mathematics and English.",
  },
  {
    question: "Please state your high school graduation results and explain the grading system used.",
    answer: "I graduated high school in the year 2000, completing my Higher School Certificate (HSC) and receiving a Universities Admission Index (UAI) of 95.5 out of 100. The UAI was the university entrance ranking system used in New South Wales and the Australian Capital Territory at the time. It ranked students in relation to their entire age cohort, not just those who completed Year 12—so a UAI of 95.5 indicated a position higher than 95.5% of the cohort I began secondary school with.",
  },
  {
    question: "Which university and degree did you choose?",
    answer: "I chose to study at the Australian National University (ANU) in Canberra, where I completed a double degree in Information Technology and Commerce. With my grades, I had the option to attend any university in the country, but ANU stood out because it's consistently recognised as one of Australia's top universities, its location in Canberra, and the double degree structure gave me the flexibility to explore both technical and business/leadership-focused subjects.",
  },
  {
    question: "What was your degree result and how did that reflect on your ability?",
    answer: "I graduated with a High Distinction (HD) average, which is the highest grade band in the Australian university grading system (80–100%). An HD average means that I consistently scored above 80% across my subjects, including in both technical and project-based courses. For me, it reflects not just academic ability but also curiosity, consistency, and a drive to understand things properly—not just get through them.",
  },
  {
    question: "What leadership roles did you take on during your education?",
    answer: "Throughout school and university, I often found myself in leadership roles—both formal and practical. I was Primary School Captain, then later Vice Captain in high school. At university, I took on the IT Manager role in my college dorm, was captain of my hockey team, and managed student work duties coordinating cleaning rosters. One thing I'm still proud of was building an online portal for my graduating class to stay in touch—this was pre-social media, so I spun it up using open source tools.",
  },
]

function FAQSection({ 
  title, 
  faqs 
}: { 
  title: string
  faqs: Array<{ question: string; answer: string }> 
}) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
        {title}
      </h3>
      <dl className="divide-y divide-zinc-900/10 dark:divide-zinc-100/10">
        {faqs.map((faq, index) => (
          <Disclosure key={index} as="div" className="py-6 first:pt-0 last:pb-0">
            <dt>
              <DisclosureButton className="group flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-100">
                <span className="text-base/7 font-semibold">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <PlusIcon aria-hidden="true" className="h-6 w-6 group-data-open:hidden" />
                  <MinusIcon aria-hidden="true" className="h-6 w-6 group-not-data-open:hidden" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" className="mt-2 pr-12">
              <p className="text-base/7 text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </dl>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Frequently asked questions about Jason Conroy\'s experience, background, and expertise.',
}

export default function FAQs() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Frequently asked questions
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Common questions about my experience, approach, and background. If you have additional questions, feel free to reach out.
        </p>
        
        <div className="mt-16">
          <FAQSection title="Engineering Experience" faqs={engineeringFaqs} />
          <FAQSection title="Management Experience" faqs={managementFaqs} />
          <FAQSection title="Education" faqs={educationFaqs} />
        </div>
      </div>
    </Container>
  )
}