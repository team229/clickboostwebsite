export const site = {
  name: "ClickBoostMedia",
  legalName: "Clickboost Media",
  url: "https://www.clickboostmedia.com",
  phone: "+1 (619) 365-4177",
  phoneHref: "tel:+16193654177",
  email: "info@clickboostmedia.com",
  address: {
    street: "105 Vulcan Road, Ste 221",
    city: "Birmingham",
    region: "AL",
    postalCode: "35209",
    country: "US",
  },
  hours: "Mon–Fri, 9AM–6PM EST",
  markets: ["Birmingham, AL", "Columbus, OH", "Cleveland, OH", "Buffalo, NY", "New York City, NY"],
};

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "/pricing/", label: "Pricing" },
  { href: "/case-studies/", label: "Our work" },
  { href: "/about/", label: "About us" },
  { href: "/blogs/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  tags: string;
  tagline: string;
  intro: string;
  items: string[];
  /** Optional deeper sections, rendered after the intro. */
  sections?: { eyebrow: string; title: string; body?: string; bullets?: string[] }[];
  /** Optional comparison table. */
  compare?: { title: string; lead?: string; head: string[]; rows: string[][] };
  steps?: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
  image: string;
  alt: string;
  position?: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "ai-seo",
    title: "AI SEO optimization",
    navLabel: "AI SEO optimization",
    tags: "SEO · AEO · GEO · Local search",
    tagline: "Rankings, traffic and revenue — not just promises.",
    intro:
      "Most buyers never scroll past page one. Our approach combines technical SEO, intent-led content and AI search visibility so your site shows up where your customers are actually looking — and keeps improving after launch.",
    items: [
      "Competitor reverse-engineering",
      "Technical SEO audit and fixes",
      "Conversion-focused keyword strategy",
      "Content optimization built for AI answers",
      "Local and national search coverage",
      "Transparent, monthly reporting",
    ],
    sections: [
      {
        eyebrow: "Why it matters",
        title: "Being findable is still the cheapest growth channel you have.",
        body: "Over 90% of online experiences begin with a search. The businesses that appear first earn the click, the trust, and the sale. We treat SEO as a revenue channel with a measurable return, not a monthly report of vanity rankings.",
        bullets: [
          "Most buying journeys start on a search engine or an AI assistant.",
          "The top results absorb the majority of clicks and credibility.",
          "Organic traffic converts at a materially higher rate than cold paid traffic.",
        ],
      },
      {
        eyebrow: "The new search",
        title: "Don't just rank. Be the answer.",
        body: "Google AI Overviews, ChatGPT, Gemini, Claude and Perplexity now shape how people discover businesses. We structure your content and entity data so your brand can be understood, quoted and recommended across search engines and AI answers — measured against a consistent baseline, with no guarantees of a mention.",
      },
    ],
    faqs: [
      {
        q: "How soon will I see SEO results?",
        a: "SEO is a long-term strategy. Most clients start seeing meaningful improvements within 3–6 months, with significant results by month 6–12. Timelines depend on your starting position, competition and how quickly changes ship.",
      },
      {
        q: "How is ClickBoostMedia different from other SEO agencies?",
        a: "We combine AI-assisted research with human review and report on business outcomes rather than rankings alone. Every recommendation is tied to a page, an intent and a measurable next step.",
      },
      {
        q: "Do you offer local, national or international SEO?",
        a: "All three. We scope the strategy around your actual market — a single metro, multiple locations, or several countries — and build the technical and content plan around it.",
      },
      {
        q: "How is AI used in your SEO strategy?",
        a: "We use AI for keyword and intent clustering, content briefs, technical analysis and monitoring, then apply editorial and technical judgement before anything ships. AI speeds up the work; it does not replace the strategy.",
      },
    ],
    image: "/assets/services/seo-and-ai-search.jpg",
    alt: "A vermilion magnifying glass holding a chrome sphere, representing search visibility",
    position: "30% 70%",
    metaTitle: "AI SEO Optimization Services",
    metaDescription:
      "AI-powered SEO covering technical audits, content, local search and visibility in Google AI Overviews and LLM answers. Measured in revenue.",
  },
  {
    slug: "ppc",
    title: "PPC & paid media",
    navLabel: "PPC & paid media",
    tags: "Google Ads · Meta Ads · CRO",
    tagline: "Make every advertising dollar work harder.",
    intro:
      "Clicks are a starting point, not the finish line. We build paid campaigns around qualified demand, clear attribution and the outcomes that matter — then cut what does not work and scale what does.",
    items: [
      "Google Ads search and shopping campaigns",
      "Meta and Instagram advertising",
      "YouTube and LinkedIn campaigns",
      "Landing pages built to convert",
      "Conversion tracking and attribution",
      "Budget testing and scaling",
    ],
    compare: {
      title: "Google Ads versus Meta Ads",
      lead: "The platform matters less than the strategy behind it. This is how we decide where your budget should sit.",
      head: ["", "Google Ads", "Meta Ads"],
      rows: [
        ["Best for", "High-intent search demand", "Demand creation and retargeting"],
        ["Typical timeline", "Results in 2–4 weeks", "Results in 3–6 weeks"],
        ["Creative weight", "Copy and offer", "Visuals and hooks"],
        ["Attribution", "Queries and conversions", "Views, clicks and blended ROAS"],
        ["Common mistake", "Broad match with no negatives", "Boosting posts instead of testing"],
      ],
    },
    faqs: [
      {
        q: "How much does PPC management cost?",
        a: "Management starts at $500/month for ad spend management. The total depends on your ad budget, the number of platforms and campaign complexity. Ad spend is separate and always stays in your own account.",
      },
      {
        q: "How long before Google Ads show results?",
        a: "Most campaigns start producing meaningful results within 2–4 weeks, with optimization continuing over the first three months as conversion data accumulates.",
      },
      {
        q: "What is a good ROAS?",
        a: "A healthy ROAS typically sits between 3:1 and 5:1 — $3–$5 in revenue for every $1 spent. The right target depends on your margin, average order value and how much of the journey happens offline.",
      },
      {
        q: "Do you manage Meta Ads and Google Ads together?",
        a: "Yes. Running both under one strategy avoids double-counting conversions and lets each platform do the job it is best at.",
      },
    ],
    image: "/assets/services/paid-media.jpg",
    alt: "Ascending cream bars with a vermilion peak and a chrome sphere on top",
    position: "50% 80%",
    metaTitle: "PPC Management & Google Ads Services",
    metaDescription:
      "PPC management across Google, Meta, YouTube and LinkedIn — campaign strategy, landing pages and tracking built to turn ad spend into revenue.",
  },
  {
    slug: "social-media",
    title: "Social media & creative",
    navLabel: "Social media & creative",
    tags: "Strategy · Content · Community",
    tagline: "Give people a reason to pay attention.",
    intro:
      "Strong brands do more than show up. They have a point of view. We bring yours to life through a consistent voice, platform-native content and a publishing rhythm your team can actually sustain.",
    items: [
      "Brand voice and channel strategy",
      "Monthly content calendars",
      "Design and short-form video production",
      "Copywriting and caption strategy",
      "Community management",
      "Paid social and reporting",
    ],
    sections: [
      {
        eyebrow: "What it changes",
        title: "Attention turns into trust long before it turns into revenue.",
        body: "Consistent, useful content positions you as the obvious choice in your category. It also gives your paid campaigns better creative to work with, and your sales team warmer conversations to walk into.",
        bullets: [
          "Become the name people recognise in your industry.",
          "Reach higher-value customers who check before they buy.",
          "Build a library of creative you can reuse in ads and email.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often do you post?",
        a: "Typically 3–5 times per week per platform, depending on your plan and channel strategy. Consistency matters more than volume.",
      },
      {
        q: "Can you manage all platforms?",
        a: "Yes — Instagram, Facebook, LinkedIn, TikTok, X and YouTube. We usually recommend focusing on two or three where your customers actually are.",
      },
      {
        q: "Who creates the content?",
        a: "Our team handles planning, copy, design and editing. You review and approve in a shared calendar before anything publishes.",
      },
    ],
    image: "/assets/services/social-and-creative.jpg",
    alt: "Overlapping rounded tiles in vermilion, cream and graphite",
    position: "20% 40%",
    metaTitle: "Social Media Management Services",
    metaDescription:
      "Social media strategy, content production, community management and paid social that builds demand and turns attention into loyal customers.",
  },
  {
    slug: "web-development",
    title: "Websites & web development",
    navLabel: "Websites & web development",
    tags: "Web design · Development · CRO",
    tagline: "Experiences that turn interest into action.",
    intro:
      "A website is more than a first impression. It is where your brand earns trust, answers questions and makes the next step feel effortless. We design and build sites that load fast, rank well and convert.",
    items: [
      "Marketing and service websites",
      "Ecommerce and product catalogues",
      "Campaign landing pages",
      "Rebuilds and platform migrations",
      "Core Web Vitals performance rescue",
      "Design and conversion optimization",
    ],
    sections: [
      {
        eyebrow: "Our build standard",
        title: "What ships by default, not as an upsell.",
        bullets: [
          "Core Web Vitals budgets — LCP under 2.5s, INP under 200ms, CLS under 0.1 on a mid-range phone.",
          "Semantic HTML — one H1 per page, logical heading order, real links and buttons.",
          "Structured data — Organization, Service, FAQ and Breadcrumb markup that matches visible content.",
          "Accessibility basics — labelled forms, keyboard navigation, focus states, contrast and alt text.",
          "Indexing hygiene — clean URLs, self-referencing canonicals, XML sitemap and sensible robots rules.",
          "Measurement — analytics and conversion events verified before launch, not after.",
        ],
      },
      {
        eyebrow: "Redesigns",
        title: "Without losing rankings.",
        body: "A redesign that quietly deletes a ranking page is the most common own goal in SEO. Every build follows the same migration checklist.",
        bullets: [
          "URL inventory before design — every indexed URL, its traffic and inbound links.",
          "One-to-one redirect map — each old URL points at its closest new equivalent.",
          "Content parity review — titles, H1s and body copy compared page by page.",
          "Staged crawl — status codes, canonicals, assets and internal links checked pre-launch.",
          "Post-launch monitoring — sitemap resubmitted and coverage watched for four weeks.",
        ],
      },
    ],
    steps: [
      { title: "Discovery", body: "Goals, audience, competitors, page inventory and a measurement plan." },
      { title: "Structure", body: "Sitemap, page briefs and wireframes agreed before visual design." },
      { title: "Design", body: "Visual direction for key templates, reviewed on real content." },
      { title: "Build", body: "Front end, CMS or static build, forms, tracking and integrations." },
      { title: "QA", body: "Speed, accessibility, cross-device, form handling and redirect verification." },
      { title: "Launch & watch", body: "Deploy, resubmit the sitemap, monitor indexing and Core Web Vitals for 30 days." },
    ],
    faqs: [
      {
        q: "How long does a website project take?",
        a: "A focused marketing site typically runs four to eight weeks from approved structure to launch. Ecommerce and multi-language builds take longer. The biggest variable is usually content and approvals, not development.",
      },
      {
        q: "Do you write the copy?",
        a: "We can. Most projects need page briefs, headings and on-page copy written around search intent, and we would rather do that than build beautiful pages with placeholder text.",
      },
      {
        q: "Can you work with our existing site instead of rebuilding it?",
        a: "Often yes. If the platform is sound, a targeted performance and conversion pass is cheaper than a rebuild. If it is failing Core Web Vitals or cannot support the structure you need, we will say so with evidence.",
      },
      {
        q: "Who hosts the site, and what happens after launch?",
        a: "You do — hosting, domain and analytics remain in your accounts. We handle deployment and can stay on a light monthly retainer for updates, monitoring and improvements.",
      },
    ],
    image: "/assets/services/websites-and-apps.jpg",
    alt: "A browser window rendered in cream and vermilion",
    position: "center",
    metaTitle: "Web Development Agency",
    metaDescription:
      "Marketing sites, ecommerce and rebuilds designed to convert and engineered for speed, structure and accessibility — so SEO never plateaus.",
  },
  {
    slug: "app-development",
    title: "Mobile app development",
    navLabel: "Mobile app development",
    tags: "iOS · Android · React Native",
    tagline: "From first sketch to store launch.",
    intro:
      "iOS, Android and React Native apps built end to end: scoping, design, build, store submission and the acquisition work that decides whether anyone actually installs it.",
    items: [
      "Customer apps with accounts and payments",
      "Internal and field tools",
      "Scoped MVPs that test one assumption",
      "React Native cross-platform builds",
      "Companion apps for existing platforms",
      "Rescue and rebuild of stalled projects",
    ],
    compare: {
      title: "Native or cross-platform?",
      lead: "The decision that sets your budget, timeline and what you can do later.",
      head: ["", "React Native", "Native iOS + Android", "Progressive web app"],
      rows: [
        ["Codebases", "One", "Two", "One (web)"],
        ["Typical timeline", "Fastest", "Slowest", "Very fast"],
        ["Best for", "Content, commerce, bookings", "Hardware, AR, complex animation", "Quick validation"],
        ["Store presence", "App Store + Google Play", "App Store + Google Play", "None"],
        ["Push notifications", "Yes", "Yes", "Limited"],
        ["Ongoing cost", "Lowest", "Highest", "Low"],
      ],
    },
    sections: [
      {
        eyebrow: "Ownership",
        title: "What you own at the end.",
        bullets: [
          "Source code in your repository, with a documented build process.",
          "App Store and Google Play accounts registered to your business.",
          "Design files, backend, database and all third-party credentials.",
          "Analytics and crash reporting wired to dashboards you control.",
          "A written handover, not a verbal one.",
        ],
      },
    ],
    steps: [
      { title: "Discovery", body: "Users, core flows, feature list and a release cut. We agree what is not in version one." },
      { title: "Design", body: "Wireframes, then clickable design for the main flows before engineering starts." },
      { title: "Build", body: "Two-week sprints with a TestFlight or internal-track build at the end of each." },
      { title: "QA & review", body: "Device testing, store assets, privacy declarations and submission handling." },
      { title: "Launch", body: "Analytics verification, store optimization and a monitoring window." },
      { title: "Iterate", body: "Monthly improvements driven by retention and crash data, not opinions." },
    ],
    faqs: [
      {
        q: "How much does an app cost?",
        a: "It depends on scope, not platform. A focused React Native MVP with accounts and one core flow is a very different project from a native app with offline sync and hardware access. We scope first and quote fixed.",
      },
      {
        q: "How long does it take to launch?",
        a: "A scoped MVP typically takes six to twelve weeks including store review. Larger builds run in two-week increments, so you always have something testable.",
      },
      {
        q: "Do you maintain the app after launch?",
        a: "Yes, optionally. Store rules, OS updates and dependency upgrades will break an unmaintained app, so most clients keep a light monthly retainer.",
      },
      {
        q: "I only have an idea — can you help me scope it?",
        a: "That is the right time to talk. We turn the idea into a feature list, a release cut and a rough budget, and tell you honestly if a mobile app is the wrong tool.",
      },
    ],
    image: "/assets/services/app-store-optimization.jpg",
    alt: "A vermilion app icon with a faceted sphere",
    position: "70% 30%",
    metaTitle: "Mobile App Development Company",
    metaDescription:
      "iOS, Android and React Native app development from scoping and design through store submission, launch and acquisition.",
  },
  {
    slug: "crm-development",
    title: "CRM development & automation",
    navLabel: "CRM development",
    tags: "CRM · Integration · Automation",
    tagline: "Built around how your team already sells.",
    intro:
      "Off-the-shelf CRMs make you work their way. We configure and build systems around your pipeline, your reporting and the tools you already use — then train the people who have to live in it.",
    items: [
      "Pipeline and deal-stage design",
      "Lead capture, scoring and routing",
      "Quotes, tasks and follow-up automation",
      "Dashboards that refresh themselves",
      "Two-way integrations with your stack",
      "Migration, de-duplication and clean-up",
    ],
    compare: {
      title: "Configure or build?",
      lead: "An honest comparison before anyone quotes you for the bigger project.",
      head: ["", "Configure HubSpot / Zoho / Pipedrive", "Custom CRM build"],
      rows: [
        ["Time to first version", "1–3 weeks", "4–10 weeks"],
        ["Best when", "Your process is fairly standard", "Your process is genuinely unusual"],
        ["Ongoing cost", "Per-seat SaaS licences", "Hosting, support, development"],
        ["You own the code", "No — you rent the platform", "Yes"],
        ["Reporting limits", "Whatever the vendor exposes", "Any metric you can define"],
        ["Migration risk", "Low", "Higher — careful data work needed"],
      ],
    },
    steps: [
      { title: "Audit", body: "We sit with the people who use the system, map the real process and list what is missing or ignored." },
      { title: "Data model", body: "Objects, fields, stages and permissions agreed before anything is built." },
      { title: "Build or configure", body: "Pipelines, automation, templates and dashboards delivered in reviewable chunks." },
      { title: "Migrate", body: "De-duplicate, map, import and spot-check records with the team that owns them." },
      { title: "Train and hand over", body: "Short sessions by role, written notes and admin access in your name." },
      { title: "Thirty-day adjustment", body: "Real usage always surfaces friction. We fix the first round at no extra cost." },
    ],
    faqs: [
      {
        q: "How long does a CRM project take?",
        a: "Configuration and clean-up projects typically take one to three weeks. Custom builds run four to ten weeks depending on integrations and how much historical data has to be migrated.",
      },
      {
        q: "Can you fix our existing CRM instead of replacing it?",
        a: "Yes — that is most of what we do. If HubSpot, Zoho, Pipedrive or Salesforce can be configured to match your process, replacing it is usually the more expensive option.",
      },
      {
        q: "Do we own the data and the code?",
        a: "Always. The CRM account, the data and any custom code stay in your name. If we part ways, nothing has to be re-platformed.",
      },
      {
        q: "Will you work alongside our developer or IT team?",
        a: "Yes. We can own the whole build, or deliver the CRM layer while your team handles infrastructure, SSO and internal systems.",
      },
    ],
    image: "/assets/services/crm-and-automation.jpg",
    alt: "A chain of interlocked vermilion links",
    position: "80% 60%",
    metaTitle: "Custom CRM Development & Integration",
    metaDescription:
      "CRM configuration and custom builds around your real sales process: pipelines, lead routing, automation, integrations and clean data migration.",
  },
  {
    slug: "ai-automation",
    title: "AI automation",
    navLabel: "AI automation",
    tags: "AI · Automation · Operations",
    tagline: "Remove busywork, not people.",
    intro:
      "We automate the repetitive parts of marketing and sales — lead follow-up, reporting, content operations, support triage — and keep a human approving anything customer-facing.",
    items: [
      "Lead response, enrichment and routing",
      "Automated reporting and dashboards",
      "Content briefs, drafts and review flows",
      "Support triage and escalation rules",
      "Tool-to-tool integrations",
      "AI search visibility and entity data",
    ],
    sections: [
      {
        eyebrow: "What to automate",
        title: "Not everything should be automated.",
        body: "We score candidates on three things before recommending a build: volume, the cost of a mistake, and whether the task has a clear definition of done. If two people would do it differently, the first job is to standardise it.",
        bullets: [
          "Volume — forty times a day usually pays for itself; twice a week rarely does.",
          "Cost of a mistake — pricing, legal and money start with a human in the loop.",
          "Definition of done — automating an unclear process just produces bad output faster.",
        ],
      },
      {
        eyebrow: "Guardrails",
        title: "Safe enough to leave running.",
        bullets: [
          "Human approval on anything that reaches a customer.",
          "Every automated action traceable to its input.",
          "Fallbacks that route work to a person instead of failing silently.",
          "Customer data only goes to tools you have approved.",
          "Hours saved, response times and error rates tracked before and after.",
        ],
      },
    ],
    steps: [
      { title: "Audit", body: "We map where hours actually go and pick the workflow with the best return." },
      { title: "Pilot", body: "One workflow, connected to real data, running alongside the current process." },
      { title: "Measure", body: "Baseline versus pilot: time saved, error rate, response time." },
      { title: "Harden", body: "Approval steps, logging, fallbacks and documentation." },
      { title: "Expand", body: "Only after the pilot proves itself — usually to the workflow next door." },
      { title: "Review", body: "Quarterly check that the automation still matches how the team works." },
    ],
    faqs: [
      {
        q: "Is this replacing our staff?",
        a: "No. It removes the repetitive part of their week so they can spend time on work that needs judgement. Every project has a named human responsible for the output.",
      },
      {
        q: "Which tools do you build with?",
        a: "We pick based on what you already pay for and where your data lives. Common stacks are your CRM plus an automation layer and a model API, with reporting in the analytics tool you already use.",
      },
      {
        q: "How quickly can something be live?",
        a: "A single workflow pilot is usually live in two to four weeks, including the audit and approval design. Larger rollouts follow the pilot's measured results.",
      },
      {
        q: "What about data privacy?",
        a: "Customer data only goes to tools you approve, with retention and access rules documented. We do not train models on your data, and sensitive data can be excluded entirely.",
      },
    ],
    image: "/assets/services/seo-and-ai-search.jpg",
    alt: "A vermilion magnifying glass holding a chrome sphere",
    position: "50% 30%",
    metaTitle: "AI Automation & Integration Services",
    metaDescription:
      "AI automation for lead response, reporting, content operations and support triage — with human approval on anything customer-facing.",
  },
];

export const caseStudies = [
  {
    name: "Appliance Tech Pros",
    industry: "Appliance repair",
    services: "Google Ads / SEO",
    metrics: [
      ["Conversion growth", "+181.9%"],
      ["Cost per conversion", "−30.3%"],
      ["Profile interactions", "+30.9%"],
    ],
  },
  {
    name: "Price Is Right Taxi Services",
    industry: "Transport",
    services: "Google Ads",
    metrics: [
      ["Conversion rate", "+48.9%"],
      ["Conversions", "+89.3%"],
      ["Cost per conversion", "−30%"],
    ],
  },
  {
    name: "Investigation Hotline",
    industry: "Investigation services",
    services: "Google Ads",
    metrics: [
      ["Conversion rate", "+326.9%"],
      ["Conversion volume", "+157.7%"],
      ["Cost per conversion", "−27.6%"],
    ],
  },
  {
    name: "Amylove Hair Braiding",
    industry: "Beauty",
    services: "Website / SEO / Social",
    metrics: [
      ["Engagement", "+222%"],
      ["Profile interactions", "+88%"],
      ["Website clicks", "+50%"],
    ],
  },
  {
    name: "CSI Security",
    industry: "Security services",
    services: "Website / Google Ads / SEO",
    metrics: [
      ["Conversion rate", "+1,040%"],
      ["Impression share", "+56%"],
      ["Cost per conversion", "−38.9%"],
    ],
  },
];

export type Plan = {
  name: string;
  was: string;
  price: string;
  featured?: boolean;
  features: [string, string][];
};

export const plans: Plan[] = [
  {
    name: "Basic",
    was: "$700",
    price: "$500",
    features: [
      ["Keywords selected", "Up to 15"],
      ["Backlinks / month", "15"],
      ["Pages optimized", "Up to 10"],
      ["Guest posting", "—"],
      ["AI competitor tracking", "Included"],
      ["AI visibility audit", "1 page"],
    ],
  },
  {
    name: "Silver",
    was: "$950",
    price: "$700",
    features: [
      ["Keywords selected", "Up to 30"],
      ["Backlinks / month", "30"],
      ["Pages optimized", "Up to 15"],
      ["Guest posting", "—"],
      ["AI competitor tracking", "Included"],
      ["AI visibility audit", "3 pages"],
    ],
  },
  {
    name: "Gold",
    was: "$1,200",
    price: "$1,000",
    featured: true,
    features: [
      ["Keywords selected", "Up to 60"],
      ["Backlinks / month", "60"],
      ["Pages optimized", "Up to 25"],
      ["Guest posting", "Included"],
      ["AI competitor tracking", "Included"],
      ["AI visibility audit", "5 pages"],
    ],
  },
  {
    name: "Premium",
    was: "$2,200",
    price: "$1,800",
    features: [
      ["Keywords selected", "Up to 100"],
      ["Backlinks / month", "100"],
      ["Pages optimized", "Up to 40"],
      ["Guest posting", "Included"],
      ["AI competitor tracking", "Included"],
      ["AI visibility audit", "10 pages"],
    ],
  },
];

export type Comparison = { title: string; columns: string[]; rows: string[][] };

export const comparisons: Comparison[] = [
  {
    title: "First-hand SEO analysis",
    columns: ["Basic", "Silver", "Gold", "Premium"],
    rows: [
      ["Pre-optimization website audit", "✓", "✓", "✓", "✓"],
      ["Competitor analysis", "✓", "✓", "✓", "✓"],
      ["Keyword analysis and selection", "✓", "✓", "✓", "✓"],
      ["Baseline ranking check", "✓", "✓", "✓", "✓"],
      ["Baseline traffic check", "✓", "✓", "✓", "✓"],
      ["Google Analytics check", "✓", "✓", "✓", "✓"],
      ["Google Search Console check", "✓", "✓", "✓", "✓"],
      ["Content duplication check", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    title: "AI visibility activities",
    columns: ["Basic", "Silver", "Gold", "Premium"],
    rows: [
      ["AI schema entity", "Basic", "Advanced", "Full AI/LLM", "Advanced AI/LLM"],
      ["AI-powered content", "—", "✓", "✓", "✓"],
      ["AI prompt engineering", "—", "—", "✓", "✓"],
      ["AI Overviews tracking", "✓", "✓", "✓", "✓"],
      ["AI Search Console setup", "✓", "✓", "✓", "✓"],
      ["AI competitor tracking", "—", "✓", "✓", "✓"],
      ["Generative engine optimization", "—", "—", "✓", "✓"],
      ["Conversational AI keywords", "—", "—", "✓", "✓"],
      ["Voice search optimization", "—", "—", "✓", "✓"],
      ["Blog strategy", "1 blog", "2 blogs", "4 blogs", "4 blogs"],
    ],
  },
  {
    title: "On-page optimization",
    columns: ["Basic", "Silver", "Gold", "Premium"],
    rows: [
      ["Website canonical check", "✓", "✓", "✓", "✓"],
      ["Title tag optimization", "✓", "✓", "✓", "✓"],
      ["Meta tag optimization", "✓", "✓", "✓", "✓"],
      ["HTML tag optimization", "✓", "✓", "✓", "✓"],
      ["Image and alt tag optimization", "✓", "✓", "✓", "✓"],
      ["XML sitemap setup", "✓", "✓", "✓", "✓"],
      ["Robots.txt setup", "✓", "✓", "✓", "✓"],
      ["Google Analytics setup", "✓", "✓", "✓", "✓"],
      ["Google Search Console setup", "✓", "✓", "✓", "✓"],
      ["Website speed optimization", "✓", "✓", "✓", "✓"],
      ["Internal linking optimization", "—", "✓", "✓", "✓"],
      ["Structured data markup", "—", "✓", "✓", "✓"],
    ],
  },
  {
    title: "Off-page optimization",
    columns: ["Basic", "Silver", "Gold", "Premium"],
    rows: [
      ["Backlink audit", "✓", "✓", "✓", "✓"],
      ["Competitor backlink analysis", "✓", "✓", "✓", "✓"],
      ["Directory submissions", "✓", "✓", "✓", "✓"],
      ["Local citations", "✓", "✓", "✓", "✓"],
      ["Guest posting", "—", "—", "✓", "✓"],
      ["Niche edits", "—", "—", "✓", "✓"],
      ["Broken link building", "—", "—", "✓", "✓"],
      ["Digital PR outreach", "—", "—", "—", "✓"],
      ["Brand mention monitoring", "✓", "✓", "✓", "✓"],
      ["Backlink monitoring", "✓", "✓", "✓", "✓"],
      ["Toxic link disavow", "—", "✓", "✓", "✓"],
    ],
  },
  {
    title: "Social media activities",
    columns: ["Basic", "Silver", "Gold", "Premium"],
    rows: [
      ["Profile optimization", "✓", "✓", "✓", "✓"],
      ["Content calendar", "✓", "✓", "✓", "✓"],
      ["Post design", "4 / month", "8 / month", "12 / month", "20 / month"],
      ["Caption copywriting", "✓", "✓", "✓", "✓"],
      ["Hashtag research", "✓", "✓", "✓", "✓"],
      ["Community management", "—", "—", "✓", "✓"],
    ],
  },
  {
    title: "Reporting",
    columns: ["Basic", "Silver", "Gold", "Premium"],
    rows: [
      ["Monthly performance report", "✓", "✓", "✓", "✓"],
      ["Ranking report", "✓", "✓", "✓", "✓"],
      ["Traffic and conversion report", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    title: "Customer support",
    columns: ["Basic", "Silver", "Gold", "Premium"],
    rows: [
      ["Email support", "✓", "✓", "✓", "✓"],
      ["Dedicated account manager", "—", "✓", "✓", "✓"],
      ["Strategy call", "Monthly", "Monthly", "Bi-weekly", "Weekly"],
    ],
  },
];

export const pricingFaqs = [
  {
    q: "What is included in a monthly SEO plan?",
    a: "Every plan includes technical and on-page work, keyword research, backlinks, AI visibility tracking and reporting. The difference between tiers is volume — keywords, backlinks, pages optimized and how many blog posts are produced.",
  },
  {
    q: "Is ad spend included in the price?",
    a: "No. Plan prices cover strategy, production and management. Advertising spend, software licences and third-party fees are billed separately and stay in your own accounts.",
  },
  {
    q: "Is there a minimum term?",
    a: "SEO plans are monthly and most clients commit to at least six months, because that is the point where the work compounds. There is no long lock-in beyond the agreed notice period.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Plans can move up or down at the end of any billing month. We will tell you if a change would slow down work already in progress.",
  },
];

export const insights = [
  {
    slug: "search-beyond-the-search-bar",
    cat: "Search & Discovery",
    title: "Your next customer might not use a search bar.",
    read: "5 min read",
    date: "2026-09-18",
    lead:
      "Search is no longer one channel. It is a collection of moments where people ask questions, compare options, and decide whom to trust.",
    sections: [
      {
        h: "A wider discovery journey",
        p: "Search engines still matter, but AI assistants, social platforms and app stores also shape discovery. A useful strategy considers where your audience asks questions, not just where your site currently ranks.",
      },
      {
        h: "Build answers, not just keywords",
        p: "Clear explanations, original expertise, useful FAQs and accurate structured data help both people and machines understand your business. AEO focuses on direct answers; GEO considers how generative tools synthesize and cite information. Neither guarantees a mention.",
      },
      {
        h: "Measure the right signals",
        p: "Start with referral sources, qualified inquiries and the questions prospects ask you. Monitor your brand across a consistent set of queries, while recognising that generative answers vary. Treat visibility as a learning process rather than a ranking promise.",
      },
    ],
  },
  {
    slug: "better-website-better-conversations",
    cat: "Design & Experience",
    title: "A better website starts with better conversations.",
    read: "4 min read",
    date: "2026-08-27",
    lead: "Before wireframes, colours or code, the most important design tool is a good question.",
    sections: [
      {
        h: "Understand what people came to do",
        p: "Interview your customers and sales team. Learn what creates uncertainty, what customers compare and what they need before taking the next step. The answers should shape your navigation and page hierarchy.",
      },
      {
        h: "Make the next step obvious",
        p: "A website should offer a clear route from curiosity to confidence. Pair helpful service explanations with relevant evidence and a simple, accessible contact journey. Avoid asking for information you do not actually need.",
      },
      {
        h: "Keep learning after launch",
        p: "Launch is the beginning of an improvement cycle. Review performance, accessibility and customer questions regularly. Small, informed changes often matter more than a complete redesign every few years.",
      },
    ],
  },
  {
    slug: "connected-growth",
    cat: "Strategy & Growth",
    title: "Stop treating your marketing channels like strangers.",
    read: "6 min read",
    date: "2026-07-30",
    lead:
      "Your customers experience one brand. Your website, search, advertising and social teams should work toward one shared goal.",
    sections: [
      {
        h: "Start with a shared definition of progress",
        p: "Agree on a small set of business outcomes before selecting channel metrics. Qualified demand, customer acquisition and retention offer better direction than reporting unrelated clicks and impressions.",
      },
      {
        h: "Give each channel a job",
        p: "Social can introduce a point of view. Search can capture intent. A website can resolve uncertainty. CRM can nurture a relationship. Make the handoffs intentional, with consistent messaging and appropriate measurement.",
      },
      {
        h: "Use one learning loop",
        p: "Bring creative, campaign, website and customer insights into the same conversation. When a question appears in sales calls, answer it in content. When a campaign message resonates, test it on your landing page.",
      },
    ],
  },
];

export const principles = [
  ["Listen before we lead.", "We ask better questions to understand your goals, your customers and the reality of your business."],
  ["Connect the right pieces.", "We build a focused roadmap that brings strategy, creative and technology into the same conversation."],
  ["Build with intention.", "We keep decisions tied to customer needs and business goals, with clear milestones and collaborative feedback."],
  ["Learn. Refine. Repeat.", "We review what is working, communicate what we learn and turn the next insight into the next improvement."],
];

export const homeFaqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "Mostly small and mid-sized businesses across the US and Canada — legal, dental, HVAC, transport, education, security and professional services. The common thread is a real product or service and the ambition to grow it.",
  },
  {
    q: "Can we start with one service instead of everything?",
    a: "Yes. A website, SEO audit, paid campaign or CRM clean-up can be a focused first project. Most of our long-term relationships started with one clearly scoped piece of work.",
  },
  {
    q: "Do you guarantee results?",
    a: "No agency can guarantee rankings or revenue. What we do commit to is a clear scope, honest reporting and a process for improving what the data shows. You always know what was done and what it produced.",
  },
  {
    q: "How do we get started?",
    a: "Book a free audit or discovery call. We will look at your site and channels, tell you what we see and propose the smallest useful next step — no pitch deck required.",
  },
];
