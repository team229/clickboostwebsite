import { useMemo, useState } from "react";

const plans = ["Basic", "Silver", "Gold", "Premium"];

const servicePlans = {
  seo: {
    label: "SEO Plans",
    eyebrow: "Search engine optimization packages",
    title: "SEO plans built for visibility across search, AI answers, and local discovery.",
    description:
      "Choose a focused SEO package and compare technical, on-page, off-page, AI visibility, reporting, and support coverage without published pricing.",
    accent: "from-blue-950 to-sky-900",
    cards: {
      Basic: [
        ["✓", "Keyword research for focused targets"],
        ["✓", "Core on-page optimization"],
        ["✓", "AI compatibility audit"],
        ["✓", "Monthly analytics and ranking reports"],
        ["✗", "Advanced GEO and AEO activities"],
        ["✗", "Premium local listing expansion"],
      ],
      Silver: [
        ["✓", "Expanded keyword and competitor review"],
        ["✓", "Google Business Profile support"],
        ["✓", "Enhanced schema validation"],
        ["✓", "Monthly link-building activities"],
        ["✗", "Voice search optimization"],
        ["✗", "Advanced AI prompt landing pages"],
      ],
      Gold: [
        ["✓", "Advanced on-page and backlink growth"],
        ["✓", "Featured snippet testing"],
        ["✓", "Infographics and local listings"],
        ["✓", "AEO and AI ranking reports"],
        ["✓", "Priority support channels"],
        ["✗", "Enterprise AI landing page set"],
      ],
      Premium: [
        ["✓", "Full-funnel SEO and AI visibility"],
        ["✓", "GEO, AEO, and voice search coverage"],
        ["✓", "Expanded content and PR activity"],
        ["✓", "Advanced structured data support"],
        ["✓", "Premium local SEO syndication"],
        ["✓", "Priority strategy and reporting"],
      ],
    },
    sections: [
      {
        title: "First Hand SEO Analysis",
        rows: [
          ["Keyword Research", "✓", "✓", "✓", "✓"],
          ["Competitor Analysis", "Basic", "Basic", "Advanced", "Advanced"],
          ["Penalty Check", "✓", "✓", "✓", "✓"],
          ["Backlink Analysis", "✗", "Basic", "Advanced", "Advanced + Toxic Link Review"],
          ["Baseline Ranking Check", "✓", "✓", "✓", "✓"],
        ],
      },
      {
        title: "AI Visibility Activities",
        rows: [
          ["AI Semantic Entity Optimization", "Basic", "Enhanced", "Advanced", "Premium"],
          ["Schema Repair", "✓", "✓", "✓", "✓"],
          ["AEO", "✗", "✗", "✓", "✓"],
          ["Voice Search Optimization", "✗", "✗", "Basic", "Advanced"],
          ["AI-Optimized Blog Posts", "1/month", "2/month", "4/month", "6/month"],
          ["Featured Snippet Testing", "✗", "✗", "✓", "✓"],
          ["AI Ranking Reports", "Monthly", "Monthly", "Monthly + Insights", "Monthly + Strategy"],
        ],
      },
      {
        title: "On-Page Optimization",
        rows: [
          ["Title/Meta/Heading Tag Optimization", "✓", "✓", "✓", "✓"],
          ["Content Optimization", "Basic", "Standard", "Advanced", "Advanced"],
          ["XML Sitemap", "✓", "✓", "✓", "✓"],
          ["Robots.txt", "✓", "✓", "✓", "✓"],
          ["Google Analytics Setup", "✓", "✓", "✓", "✓"],
          ["Structured Data", "✗", "Basic", "Advanced", "Advanced + Monitoring"],
        ],
      },
      {
        title: "Off-Page Optimization",
        rows: [
          ["Blog Writing", "1/month", "2/month", "4/month", "6/month"],
          ["Article Submissions", "1/month", "2/month", "4/month", "6/month"],
          ["Social Bookmarking", "15 links", "25 links", "40 links", "60 links"],
          ["Infographics", "✗", "✗", "1/month", "2/month"],
          ["Press Releases", "✗", "Client-provided", "1/quarter", "1/month"],
          ["Local Business Listings", "1/month", "3/month", "6/month", "10/month"],
          ["NAP Syndication", "Basic", "Standard", "Advanced", "Premium"],
        ],
      },
      {
        title: "SMO Activities — Facebook",
        rows: [
          ["Facebook Profile Creation", "✗", "✓", "✓", "✓"],
          ["Facebook Posting Frequency", "✗", "4/month", "8/month", "12/month"],
        ],
      },
      {
        title: "SMO Activities — Instagram",
        rows: [
          ["Instagram Profile Creation", "✗", "✓", "✓", "✓"],
          ["Instagram Posting Frequency", "✗", "4/month", "8/month", "12/month"],
        ],
      },
      {
        title: "SMO Activities — Twitter/X",
        rows: [
          ["Twitter/X Profile Creation", "✗", "✗", "✓", "✓"],
          ["Twitter/X Posting Frequency", "✗", "✗", "8/month", "12/month"],
        ],
      },
      {
        title: "SMO Activities — Pinterest",
        rows: [
          ["Pinterest Account Setup", "✗", "✗", "✓", "✓"],
          ["Pinterest Posting Frequency", "✗", "✗", "4/month", "8/month"],
        ],
      },
      {
        title: "SMO Activities — LinkedIn",
        rows: [
          ["LinkedIn Profile Creation", "✗", "✗", "✓", "✓"],
          ["LinkedIn Posting Frequency", "✗", "✗", "4/month", "8/month"],
        ],
      },
      {
        title: "Reports",
        rows: [
          ["Monthly Analytics", "✓", "✓", "✓", "✓"],
          ["Keyword Ranking", "✓", "✓", "✓", "✓"],
          ["Off-Page Submission", "✓", "✓", "✓", "✓"],
        ],
      },
      {
        title: "Customer Support",
        rows: [
          ["Email", "✓", "✓", "✓", "✓"],
          ["Phone", "✓", "✓", "✓", "✓"],
          ["Chat", "✓", "✓", "✓", "✓"],
        ],
      },
    ],
  },
  ppc: {
    label: "PPC Plans",
    eyebrow: "Paid search and media packages",
    title: "PPC plans for campaigns that stay measurable from day one.",
    description:
      "Compare setup, targeting, campaign management, platform coverage, conversion tracking, reporting, and support by plan tier.",
    accent: "from-slate-950 to-blue-900",
    cards: {
      Basic: [
        ["✓", "Campaign research and setup"],
        ["✓", "Core keyword targeting"],
        ["✓", "Monthly performance report"],
        ["✓", "Conversion tracking basics"],
        ["✗", "Remarketing campaigns"],
        ["✗", "Advanced ROI analysis"],
      ],
      Silver: [
        ["✓", "Expanded campaign structure"],
        ["✓", "Ad scheduling and negatives"],
        ["✓", "A/B ad copy testing"],
        ["✓", "Google and Bing Ads"],
        ["✗", "Display network expansion"],
        ["✗", "Priority optimization cadence"],
      ],
      Gold: [
        ["✓", "Advanced bid management"],
        ["✓", "Display and remarketing coverage"],
        ["✓", "ROI analysis and conversion insights"],
        ["✓", "Competitor strategy review"],
        ["✓", "Phone and chat support"],
        ["✗", "Enterprise multi-market buildout"],
      ],
      Premium: [
        ["✓", "Full-funnel paid media strategy"],
        ["✓", "Advanced A/B testing roadmap"],
        ["✓", "Remarketing and display network"],
        ["✓", "Weekly optimizations"],
        ["✓", "ROI-focused executive reporting"],
        ["✓", "Priority support"],
      ],
    },
    sections: [
      {
        title: "Campaign Setup & Strategy",
        rows: [
          ["Campaign Research", "Basic", "Standard", "Advanced", "Advanced"],
          ["Ad Copy Creation", "2 ads", "4 ads", "8 ads", "12 ads"],
          ["Keyword Targeting", "Core", "Expanded", "Advanced", "Advanced + Long-Tail"],
          ["Competitor Analysis", "✗", "Basic", "Advanced", "Advanced"],
        ],
      },
      {
        title: "Campaign Management",
        rows: [
          ["Bid Management", "Monthly", "Bi-weekly", "Weekly", "Weekly + Priority"],
          ["Ad Scheduling", "✗", "✓", "✓", "✓"],
          ["A/B Testing", "✗", "Basic", "Advanced", "Advanced"],
          ["Negative Keyword Management", "Basic", "Standard", "Advanced", "Advanced"],
        ],
      },
      {
        title: "Platforms Covered",
        rows: [
          ["Google Ads", "✓", "✓", "✓", "✓"],
          ["Bing Ads", "✗", "✓", "✓", "✓"],
          ["Display Network", "✗", "✗", "✓", "✓"],
          ["Remarketing", "✗", "✗", "✓", "✓"],
        ],
      },
      {
        title: "Reporting",
        rows: [
          ["Monthly Performance Report", "✓", "✓", "✓", "✓"],
          ["Conversion Tracking", "Basic", "Standard", "Advanced", "Advanced"],
          ["ROI Analysis", "✗", "Basic", "Advanced", "Executive Summary"],
        ],
      },
      {
        title: "Support",
        rows: [
          ["Email", "✓", "✓", "✓", "✓"],
          ["Phone", "✗", "✓", "✓", "✓"],
          ["Chat", "✗", "✗", "✓", "✓"],
        ],
      },
    ],
  },
  smo: {
    label: "SMO Plans",
    eyebrow: "Social media optimization packages",
    title: "SMO plans for consistent branding, content, and engagement.",
    description:
      "Review profile setup, monthly posting by platform, audience engagement, paid social options, reporting, and support coverage.",
    accent: "from-indigo-950 to-sky-900",
    cards: {
      Basic: [
        ["✓", "Profile optimization starter set"],
        ["✓", "Facebook and Instagram content"],
        ["✓", "Hashtag strategy basics"],
        ["✓", "Monthly social report"],
        ["✗", "Paid campaign setup"],
        ["✗", "Advanced audience interaction"],
      ],
      Silver: [
        ["✓", "Three-platform profile support"],
        ["✓", "More monthly posts"],
        ["✓", "Comment monitoring"],
        ["✓", "Follower growth tracking"],
        ["✗", "LinkedIn and Pinterest posting"],
        ["✗", "Advanced paid social"],
      ],
      Gold: [
        ["✓", "Five-platform social coverage"],
        ["✓", "Audience interaction support"],
        ["✓", "Boosted post planning"],
        ["✓", "Growth and engagement reporting"],
        ["✓", "Chat support"],
        ["✗", "Premium ad campaign cadence"],
      ],
      Premium: [
        ["✓", "Full brand and platform management"],
        ["✓", "High-frequency social posting"],
        ["✓", "Advanced engagement workflows"],
        ["✓", "Ad campaign setup"],
        ["✓", "Priority reporting insights"],
        ["✓", "Full support coverage"],
      ],
    },
    sections: [
      {
        title: "Profile Setup & Branding",
        rows: [
          ["Facebook Profile Creation/Optimization", "✓", "✓", "✓", "✓"],
          ["Instagram Profile Creation/Optimization", "✓", "✓", "✓", "✓"],
          ["Twitter/X Profile Creation/Optimization", "✗", "✓", "✓", "✓"],
          ["Pinterest Profile Creation/Optimization", "✗", "✗", "✓", "✓"],
          ["LinkedIn Profile Creation/Optimization", "✗", "✗", "✓", "✓"],
        ],
      },
      {
        title: "Content & Posting",
        rows: [
          ["Facebook Posts", "4/month", "8/month", "12/month", "16/month"],
          ["Instagram Posts", "4/month", "8/month", "12/month", "16/month"],
          ["Twitter/X Posts", "✗", "8/month", "12/month", "20/month"],
          ["Pinterest Pins", "✗", "✗", "8/month", "12/month"],
          ["LinkedIn Posts", "✗", "✗", "4/month", "8/month"],
        ],
      },
      {
        title: "Engagement Activities",
        rows: [
          ["Comment Monitoring", "Basic", "Standard", "Advanced", "Advanced"],
          ["Audience Interaction", "✗", "Basic", "Advanced", "Priority"],
          ["Hashtag Strategy", "Basic", "Standard", "Advanced", "Advanced"],
        ],
      },
      {
        title: "Paid Social",
        rows: [
          ["Boosted Posts", "✗", "✗", "1/month", "2/month"],
          ["Ad Campaign Setup", "✗", "✗", "Basic", "Advanced"],
        ],
      },
      {
        title: "Reporting",
        rows: [
          ["Monthly Social Report", "✓", "✓", "✓", "✓"],
          ["Follower Growth Tracking", "✓", "✓", "✓", "✓"],
        ],
      },
      {
        title: "Support",
        rows: [
          ["Email", "✓", "✓", "✓", "✓"],
          ["Phone", "✗", "✓", "✓", "✓"],
          ["Chat", "✗", "✗", "✓", "✓"],
        ],
      },
    ],
  },
  web: {
    label: "Web Plans",
    eyebrow: "Website design and development packages",
    title: "Web plans for polished, responsive, conversion-focused websites.",
    description:
      "Compare design, development, built-in features, SEO basics, performance, launch support, and handoff deliverables.",
    accent: "from-slate-950 to-cyan-900",
    cards: {
      Basic: [
        ["✓", "Starter responsive website"],
        ["✓", "Contact form and maps"],
        ["✓", "Basic SEO tags"],
        ["✓", "Browser compatibility checks"],
        ["✗", "CMS integration"],
        ["✗", "Training session"],
      ],
      Silver: [
        ["✓", "Multi-page custom design"],
        ["✓", "Blog setup and image gallery"],
        ["✓", "Google Analytics and XML sitemap"],
        ["✓", "Post-launch support"],
        ["✗", "Advanced CMS workflows"],
        ["✗", "Extended maintenance window"],
      ],
      Gold: [
        ["✓", "Advanced responsive website"],
        ["✓", "CMS integration"],
        ["✓", "Speed optimization and SSL guidance"],
        ["✓", "Training session"],
        ["✓", "Priority bug fixes"],
        ["✗", "Enterprise-level page count"],
      ],
      Premium: [
        ["✓", "Premium custom website build"],
        ["✓", "Full CMS and content setup"],
        ["✓", "Advanced performance pass"],
        ["✓", "Extended post-launch support"],
        ["✓", "Source files and training"],
        ["✓", "Priority maintenance handoff"],
      ],
    },
    sections: [
      {
        title: "Design & Development",
        rows: [
          ["Number of Pages", "Up to 5", "Up to 8", "Up to 12", "Up to 20"],
          ["Custom Design", "Basic", "Standard", "Advanced", "Premium"],
          ["Responsive Layout", "✓", "✓", "✓", "✓"],
          ["CMS Integration", "✗", "Basic", "Advanced", "Advanced"],
        ],
      },
      {
        title: "Features",
        rows: [
          ["Contact Forms", "1", "2", "3", "Custom"],
          ["Blog Setup", "✗", "✓", "✓", "✓"],
          ["Image Gallery", "✗", "✓", "✓", "✓"],
          ["Social Media Integration", "✓", "✓", "✓", "✓"],
          ["Google Maps", "✓", "✓", "✓", "✓"],
        ],
      },
      {
        title: "SEO Basics",
        rows: [
          ["Meta Tags", "Basic", "Standard", "Advanced", "Advanced"],
          ["XML Sitemap", "✓", "✓", "✓", "✓"],
          ["Google Analytics", "✓", "✓", "✓", "✓"],
        ],
      },
      {
        title: "Performance",
        rows: [
          ["Page Speed Optimization", "Basic", "Standard", "Advanced", "Advanced"],
          ["SSL Certificate", "Guidance", "Guidance", "Setup Support", "Setup Support"],
          ["Browser Compatibility", "✓", "✓", "✓", "✓"],
        ],
      },
      {
        title: "Support & Maintenance",
        rows: [
          ["Post-launch Support Duration", "7 days", "14 days", "30 days", "60 days"],
          ["Bug Fixes", "Basic", "Standard", "Priority", "Priority"],
        ],
      },
      {
        title: "Deliverables",
        rows: [
          ["Source Files", "✗", "✓", "✓", "✓"],
          ["Training Session", "✗", "✗", "1 session", "2 sessions"],
        ],
      },
    ],
  },
};

const serviceKeys = Object.keys(servicePlans);

function CellValue({ value }) {
  const normalized = String(value).trim().toLowerCase();
  if (normalized === "✓") return <span className="text-lg font-bold text-emerald-600" aria-label="Included">✓</span>;
  if (normalized === "✗" || normalized === "x") return <span className="text-lg font-bold text-rose-500" aria-label="Not included">✗</span>;
  return <span className="font-medium text-slate-700">{value}</span>;
}

function PricingCard({ plan, features }) {
  const popular = plan === "Gold";
  return (
    <article className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${popular ? "border-amber-400 ring-2 ring-amber-200" : "border-slate-200"}`}>
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-950 shadow-lg">
          Most Popular
        </span>
      )}
      <div className="mb-5">
        <h3 className="text-2xl font-bold text-slate-950">{plan}</h3>
        <p className="mt-2 text-sm text-slate-500">Flexible service coverage with pricing provided after a quick discovery call.</p>
      </div>
      <a href="#contact" className="mb-6 inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200">
        Contact Us for Pricing
      </a>
      <ul className="space-y-3 text-sm">
        {features.map(([icon, feature]) => (
          <li key={feature} className="flex gap-3 text-slate-700">
            <CellValue value={icon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ComparisonTable({ sections, openSections, toggleSection }) {
  return (
    <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:block">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">Full feature comparison across Basic, Silver, Gold, and Premium plans</caption>
        <thead className="sticky top-16 z-20 bg-slate-950 text-white shadow-lg">
          <tr>
            <th scope="col" className="w-1/3 px-6 py-5 text-base font-bold">Features</th>
            {plans.map((plan) => (
              <th key={plan} scope="col" className={`px-5 py-5 text-center text-base font-bold ${plan === "Gold" ? "bg-amber-400 text-slate-950" : ""}`}>
                {plan}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => (
            <SectionRows key={section.title} section={section} open={openSections[section.title]} toggleSection={toggleSection} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionRows({ section, open, toggleSection }) {
  return (
    <>
      <tr className="border-t border-slate-200 bg-slate-100">
        <th scope="rowgroup" colSpan={5} className="p-0">
          <button type="button" onClick={() => toggleSection(section.title)} className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-bold text-slate-950 hover:bg-slate-200">
            <span>{section.title}</span>
            <span className="text-xl" aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </th>
      </tr>
      {open && section.rows.map((row) => (
        <tr key={row[0]} className="border-t border-slate-100 even:bg-slate-50/60">
          <th scope="row" className="px-6 py-4 font-semibold text-slate-800">{row[0]}</th>
          {plans.map((plan, index) => (
            <td key={`${row[0]}-${plan}`} className={`px-5 py-4 text-center ${plan === "Gold" ? "bg-amber-50/70" : ""}`}>
              <CellValue value={row[index + 1]} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function MobileComparison({ sections, openSections, toggleSection, selectedPlan, setSelectedPlan }) {
  const planIndex = plans.indexOf(selectedPlan) + 1;
  return (
    <div className="lg:hidden">
      <div className="sticky top-16 z-20 mb-4 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
        <div role="tablist" aria-label="Choose a plan to compare" className="grid grid-cols-4 gap-1">
          {plans.map((plan) => (
            <button key={plan} type="button" role="tab" aria-selected={selectedPlan === plan} onClick={() => setSelectedPlan(plan)} className={`rounded-xl px-2 py-3 text-xs font-bold transition sm:text-sm ${selectedPlan === plan ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}>
              {plan}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {sections.map((section) => (
          <article key={section.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <button type="button" onClick={() => toggleSection(section.title)} className="flex w-full items-center justify-between bg-slate-100 px-5 py-4 text-left font-bold text-slate-950">
              <span>{section.title}</span>
              <span className="text-xl" aria-hidden="true">{openSections[section.title] ? "−" : "+"}</span>
            </button>
            {openSections[section.title] && (
              <dl className="divide-y divide-slate-100">
                {section.rows.map((row) => (
                  <div key={row[0]} className="grid grid-cols-[1fr_auto] gap-4 px-5 py-4">
                    <dt className="font-semibold text-slate-800">{row[0]}</dt>
                    <dd className="text-right"><CellValue value={row[planIndex]} /></dd>
                  </div>
                ))}
              </dl>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  const [activeService, setActiveService] = useState("seo");
  const [selectedPlan, setSelectedPlan] = useState("Gold");
  const active = servicePlans[activeService];
  const [openSections, setOpenSections] = useState(() =>
    Object.fromEntries(servicePlans.seo.sections.map((section) => [section.title, true]))
  );

  const sectionState = useMemo(
    () => Object.fromEntries(active.sections.map((section) => [section.title, openSections[section.title] ?? true])),
    [active.sections, openSections]
  );

  const switchService = (serviceKey) => {
    setActiveService(serviceKey);
    setSelectedPlan("Gold");
    setOpenSections((current) => ({
      ...current,
      ...Object.fromEntries(servicePlans[serviceKey].sections.map((section) => [section.title, current[section.title] ?? true])),
    }));
  };

  const toggleSection = (title) => {
    setOpenSections((current) => ({ ...current, [title]: !(current[title] ?? true) }));
  };

  return (
    <main className="bg-slate-50">
      <section className={`px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8 bg-gradient-to-br ${active.accent}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Pricing Plans</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Multi-service digital growth plans</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Compare SEO, PPC, SMO, and Web packages by tier. Every plan starts with a consultation, so pricing is always tailored to your goals and scope.
            </p>
          </div>
          <nav aria-label="Service pricing categories" className="mt-10 rounded-2xl bg-white/10 p-2 shadow-2xl ring-1 ring-white/15 backdrop-blur">
            <div role="tablist" className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {serviceKeys.map((key) => (
                <button key={key} type="button" role="tab" aria-selected={activeService === key} aria-controls="pricing-panel" onClick={() => switchService(key)} className={`rounded-xl px-4 py-3 text-sm font-bold transition sm:text-base ${activeService === key ? "bg-white text-slate-950 shadow-lg" : "text-white hover:bg-white/15"}`}>
                  {servicePlans[key].label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section id="pricing-panel" aria-live="polite" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">{active.eyebrow}</p>
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">{active.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{active.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <PricingCard key={`${activeService}-${plan}`} plan={plan} features={active.cards[plan]} />
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Detailed comparison</p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">Compare every included area</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-500">
                Use the section headers to collapse or expand groups. On smaller screens, choose a single plan to review one column at a time.
              </p>
            </div>
            <ComparisonTable sections={active.sections} openSections={sectionState} toggleSection={toggleSection} />
            <MobileComparison sections={active.sections} openSections={sectionState} toggleSection={toggleSection} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10 lg:px-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Get a Custom Quote</p>
          <h2 className="text-3xl font-black sm:text-4xl">Need a plan tailored to your budget, channels, and growth targets?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Tell us which service you are considering and we will map the right tier, deliverables, and next steps for your business.
          </p>
          <a href="/contact" className="mt-8 inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-950 shadow-lg transition hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200">
            Request Your Custom Quote
          </a>
        </div>
      </section>
    </main>
  );
}
