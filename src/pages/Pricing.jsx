import { useEffect, useMemo, useState } from "react";

const plans = ["Basic", "Silver", "Gold", "Premium"];

const servicePlans = {
  seo: {
    label: "SEO Plans",
    eyebrow: "Search, AI answers, and local visibility",
    title: "SEO plans built for better rankings, stronger authority, and AI-era discovery.",
    description: "Compare core SEO, technical optimization, content, off-page authority, AI visibility, reporting, and support coverage. Pricing is always shared after discovery so your scope stays tailored.",
    cards: {
      Basic: [["✓", "Keyword research for focused targets"], ["✓", "Core on-page optimization"], ["✓", "AI compatibility audit"], ["✓", "Monthly analytics and ranking reports"], ["✗", "Advanced GEO and AEO activities"], ["✗", "Premium local listing expansion"]],
      Silver: [["✓", "Expanded keyword and competitor review"], ["✓", "Google Business Profile support"], ["✓", "Enhanced schema validation"], ["✓", "Monthly link-building activities"], ["✗", "Voice search optimization"], ["✗", "Advanced AI prompt landing pages"]],
      Gold: [["✓", "Advanced on-page and backlink growth"], ["✓", "Featured snippet testing"], ["✓", "Infographics and local listings"], ["✓", "AEO and AI ranking reports"], ["✓", "Priority support channels"], ["✗", "Enterprise AI landing page set"]],
      Premium: [["✓", "Full-funnel SEO and AI visibility"], ["✓", "GEO, AEO, and voice search coverage"], ["✓", "Expanded content and PR activity"], ["✓", "Advanced structured data support"], ["✓", "Premium local SEO syndication"], ["✓", "Priority strategy and reporting"]],
    },
    sections: [
      ["First Hand SEO Analysis", [["Keyword Research", "✓", "✓", "✓", "✓"], ["Competitor Analysis", "Basic", "Basic", "Advanced", "Advanced"], ["Penalty Check", "✓", "✓", "✓", "✓"], ["Backlink Analysis", "✗", "Basic", "Advanced", "Advanced + Toxic Link Review"], ["Baseline Ranking Check", "✓", "✓", "✓", "✓"]]],
      ["AI Visibility Activities", [["AI Semantic Entity Optimization", "Basic", "Enhanced", "Advanced", "Premium"], ["Schema Repair", "✓", "✓", "✓", "✓"], ["AEO", "✗", "✗", "✓", "✓"], ["Voice Search Optimization", "✗", "✗", "Basic", "Advanced"], ["AI-Optimized Blog Posts", "1/month", "2/month", "4/month", "6/month"], ["Featured Snippet Testing", "✗", "✗", "✓", "✓"], ["AI Ranking Reports", "Monthly", "Monthly", "Monthly + Insights", "Monthly + Strategy"]]],
      ["On-Page Optimization", [["Title/Meta/Heading Tag Optimization", "✓", "✓", "✓", "✓"], ["Content Optimization", "Basic", "Standard", "Advanced", "Advanced"], ["XML Sitemap", "✓", "✓", "✓", "✓"], ["Robots.txt", "✓", "✓", "✓", "✓"], ["Google Analytics Setup", "✓", "✓", "✓", "✓"], ["Structured Data", "✗", "Basic", "Advanced", "Advanced + Monitoring"]]],
      ["Off-Page Optimization", [["Blog Writing", "1/month", "2/month", "4/month", "6/month"], ["Article Submissions", "1/month", "2/month", "4/month", "6/month"], ["Social Bookmarking", "15 links", "25 links", "40 links", "60 links"], ["Infographics", "✗", "✗", "1/month", "2/month"], ["Press Releases", "✗", "Client-provided", "1/quarter", "1/month"], ["Local Business Listings", "1/month", "3/month", "6/month", "10/month"], ["NAP Syndication", "Basic", "Standard", "Advanced", "Premium"]]],
      ["SMO Activities — Facebook", [["Facebook Profile Creation", "✗", "✓", "✓", "✓"], ["Facebook Posting Frequency", "✗", "4/month", "8/month", "12/month"]]],
      ["SMO Activities — Instagram", [["Instagram Profile Creation", "✗", "✓", "✓", "✓"], ["Instagram Posting Frequency", "✗", "4/month", "8/month", "12/month"]]],
      ["SMO Activities — Twitter/X", [["Twitter/X Profile Creation", "✗", "✗", "✓", "✓"], ["Twitter/X Posting Frequency", "✗", "✗", "8/month", "12/month"]]],
      ["SMO Activities — Pinterest", [["Pinterest Account Setup", "✗", "✗", "✓", "✓"], ["Pinterest Posting Frequency", "✗", "✗", "4/month", "8/month"]]],
      ["SMO Activities — LinkedIn", [["LinkedIn Profile Creation", "✗", "✗", "✓", "✓"], ["LinkedIn Posting Frequency", "✗", "✗", "4/month", "8/month"]]],
      ["Reports", [["Monthly Analytics", "✓", "✓", "✓", "✓"], ["Keyword Ranking", "✓", "✓", "✓", "✓"], ["Off-Page Submission", "✓", "✓", "✓", "✓"]]],
      ["Customer Support", [["Email", "✓", "✓", "✓", "✓"], ["Phone", "✓", "✓", "✓", "✓"], ["Chat", "✓", "✓", "✓", "✓"]]],
    ],
  },
  ppc: {
    label: "PPC Plans",
    eyebrow: "Paid search and performance media",
    title: "PPC plans for campaigns that stay measurable from day one.",
    description: "Build, manage, optimize, and report paid campaigns across search, display, retargeting, and conversion tracking without publishing one-size-fits-all pricing.",
    cards: {
      Basic: [["✓", "Campaign research and launch setup"], ["✓", "Core ad copy and keyword targeting"], ["✓", "Google Ads coverage"], ["✓", "Monthly performance report"], ["✗", "Remarketing funnel"], ["✗", "Advanced ROI analysis"]],
      Silver: [["✓", "Expanded keyword and competitor analysis"], ["✓", "Bid management and ad scheduling"], ["✓", "Negative keyword management"], ["✓", "Conversion tracking"], ["✗", "Display network expansion"], ["✗", "Advanced multivariate testing"]],
      Gold: [["✓", "Search, display, and remarketing"], ["✓", "A/B testing and landing-page feedback"], ["✓", "ROI analysis"], ["✓", "Phone and chat support"], ["✓", "Bing Ads support"], ["✗", "Enterprise experimentation roadmap"]],
      Premium: [["✓", "Multi-platform paid growth strategy"], ["✓", "Advanced bid and audience optimization"], ["✓", "Full remarketing and display coverage"], ["✓", "ROI and conversion intelligence"], ["✓", "Premium reporting cadence"], ["✓", "Priority campaign support"]],
    },
    sections: [
      ["Campaign Setup & Strategy", [["Campaign Research", "✓", "✓", "✓", "✓"], ["Ad Copy Creation", "2 sets", "4 sets", "6 sets", "Custom"], ["Keyword Targeting", "Basic", "Standard", "Advanced", "Advanced"], ["Competitor Analysis", "Basic", "Standard", "Advanced", "Advanced + Market Notes"]]],
      ["Campaign Management", [["Bid Management", "Monthly", "Bi-weekly", "Weekly", "Twice weekly"], ["Ad Scheduling", "✓", "✓", "✓", "✓"], ["A/B Testing", "✗", "Basic", "Advanced", "Advanced"], ["Negative Keyword Management", "Monthly", "Bi-weekly", "Weekly", "Weekly + Search Terms"]]],
      ["Platforms Covered", [["Google Ads", "✓", "✓", "✓", "✓"], ["Bing Ads", "✗", "✗", "✓", "✓"], ["Display Network", "✗", "✗", "✓", "✓"], ["Remarketing", "✗", "Basic", "Advanced", "Advanced"]]],
      ["Reporting", [["Monthly Performance Report", "✓", "✓", "✓", "✓"], ["Conversion Tracking", "Basic", "✓", "Advanced", "Advanced"], ["ROI Analysis", "✗", "Basic", "✓", "✓ + Strategy"]]],
      ["Support", [["Email", "✓", "✓", "✓", "✓"], ["Phone", "✗", "✓", "✓", "✓"], ["Chat", "✗", "✗", "✓", "✓"]]],
    ],
  },
  smo: {
    label: "SMO Plans",
    eyebrow: "Organic and paid social presence",
    title: "SMO plans for consistent content, stronger engagement, and audience growth.",
    description: "Compare social profile setup, branded posting, engagement workflows, boosted activity, reporting, and support across the main growth platforms.",
    cards: {
      Basic: [["✓", "Core profile optimization"], ["✓", "Facebook and Instagram posting"], ["✓", "Monthly social report"], ["✓", "Hashtag basics"], ["✗", "Paid social setup"], ["✗", "LinkedIn thought leadership cadence"]],
      Silver: [["✓", "Expanded platform coverage"], ["✓", "Audience interaction support"], ["✓", "Follower growth tracking"], ["✓", "Boosted post guidance"], ["✗", "Advanced paid campaign setup"], ["✗", "Premium community monitoring"]],
      Gold: [["✓", "Multi-platform content cadence"], ["✓", "Comment monitoring"], ["✓", "Hashtag strategy"], ["✓", "Boosted posts"], ["✓", "Ad campaign setup"], ["✗", "Daily enterprise response desk"]],
      Premium: [["✓", "Full social brand management"], ["✓", "High-frequency posting calendar"], ["✓", "Paid social launch support"], ["✓", "Advanced engagement workflows"], ["✓", "Premium follower tracking"], ["✓", "Priority support"]],
    },
    sections: [
      ["Profile Setup & Branding", [["Facebook Profile Creation/Optimization", "✓", "✓", "✓", "✓"], ["Instagram Profile Creation/Optimization", "✓", "✓", "✓", "✓"], ["Twitter/X Profile Creation/Optimization", "✗", "✓", "✓", "✓"], ["Pinterest Profile Creation/Optimization", "✗", "✗", "✓", "✓"], ["LinkedIn Profile Creation/Optimization", "✗", "✓", "✓", "✓"]]],
      ["Content & Posting", [["Facebook Posts", "4/month", "8/month", "12/month", "20/month"], ["Instagram Posts", "4/month", "8/month", "12/month", "20/month"], ["Twitter/X Posts", "✗", "8/month", "12/month", "20/month"], ["Pinterest Pins", "✗", "✗", "8/month", "12/month"], ["LinkedIn Posts", "✗", "4/month", "8/month", "12/month"]]],
      ["Engagement Activities", [["Comment Monitoring", "Basic", "Standard", "Advanced", "Advanced"], ["Audience Interaction", "✗", "Basic", "Advanced", "Advanced"], ["Hashtag Strategy", "Basic", "Standard", "Advanced", "Premium"]]],
      ["Paid Social", [["Boosted Posts", "✗", "Guidance", "2/month", "4/month"], ["Ad Campaign Setup", "✗", "✗", "✓", "✓ + Optimization"]]],
      ["Reporting", [["Monthly Social Report", "✓", "✓", "✓", "✓"], ["Follower Growth Tracking", "Basic", "✓", "Advanced", "Advanced + Insights"]]],
      ["Support", [["Email", "✓", "✓", "✓", "✓"], ["Phone", "✗", "✓", "✓", "✓"], ["Chat", "✗", "✗", "✓", "✓"]]],
    ],
  },
  web: {
    label: "Web Plans",
    eyebrow: "Design, development, and launch support",
    title: "Web plans for fast, responsive, conversion-focused business websites.",
    description: "Compare design, development, functionality, SEO basics, performance, maintenance, and handoff deliverables across four practical website tiers.",
    cards: {
      Basic: [["✓", "Starter website page set"], ["✓", "Responsive layout"], ["✓", "Contact form"], ["✓", "Meta tags and analytics"], ["✗", "CMS integration"], ["✗", "Training session"]],
      Silver: [["✓", "Expanded page count"], ["✓", "Custom design direction"], ["✓", "Blog setup"], ["✓", "Google Maps and social links"], ["✓", "Basic performance optimization"], ["✗", "Advanced source handoff"]],
      Gold: [["✓", "Custom responsive website"], ["✓", "CMS integration"], ["✓", "Image gallery and blog"], ["✓", "SEO basics and sitemap"], ["✓", "SSL and browser checks"], ["✓", "Training session"]],
      Premium: [["✓", "Premium custom website system"], ["✓", "Advanced CMS and features"], ["✓", "Performance-focused build"], ["✓", "Extended maintenance"], ["✓", "Complete deliverables"], ["✓", "Priority launch support"]],
    },
    sections: [
      ["Design & Development", [["Number of pages", "Up to 5", "Up to 10", "Up to 15", "Custom"], ["Custom Design", "Basic", "Standard", "Advanced", "Premium"], ["Responsive Layout", "✓", "✓", "✓", "✓"], ["CMS Integration", "✗", "Basic", "✓", "Advanced"]]],
      ["Features", [["Contact Forms", "1", "2", "3", "Custom"], ["Blog Setup", "✗", "✓", "✓", "✓"], ["Image Gallery", "✗", "Basic", "✓", "Advanced"], ["Social Media Integration", "✓", "✓", "✓", "✓"], ["Google Maps", "✓", "✓", "✓", "✓"]]],
      ["SEO Basics", [["Meta Tags", "✓", "✓", "✓", "✓"], ["XML Sitemap", "✓", "✓", "✓", "✓"], ["Google Analytics", "✓", "✓", "✓", "✓"]]],
      ["Performance", [["Page Speed Optimization", "Basic", "Standard", "Advanced", "Advanced"], ["SSL Certificate", "Guidance", "✓", "✓", "✓"], ["Browser Compatibility", "✓", "✓", "✓", "✓"]]],
      ["Support & Maintenance", [["Post-launch Support Duration", "7 days", "14 days", "30 days", "60 days"], ["Bug Fixes", "Basic", "Standard", "Advanced", "Priority"]]],
      ["Deliverables", [["Source Files", "✗", "Basic", "✓", "✓"], ["Training Session", "✗", "✗", "✓", "✓"]]],
    ],
  },
};

const services = Object.keys(servicePlans);
const normalize = (sections) => sections.map(([title, rows]) => ({ title, rows }));

function CellValue({ value }) {
  const markClass = value === "✓" ? "is-check" : value === "✗" ? "is-cross" : "";
  return <span className={`pricing-value ${markClass}`}>{value}</span>;
}

function PricingCard({ plan, features }) {
  const popular = plan === "Gold";
  return (
    <article className={`pricing-card ${popular ? "popular" : ""}`}>
      {popular && <span className="popular-badge">Most Popular</span>}
      <h3>{plan}</h3>
      <p>Pricing is tailored after a quick scope review.</p>
      <a className="pricing-card-btn" href="#contact">Contact Us for Pricing</a>
      <ul>
        {features.map(([icon, feature]) => <li key={feature}><CellValue value={icon} /> <span>{feature}</span></li>)}
      </ul>
    </article>
  );
}

function ComparisonTable({ sections, openSections, toggleSection }) {
  return (
    <div className="comparison-table-wrap" aria-label="Desktop plan comparison">
      <table className="comparison-table">
        <caption>Full feature comparison across Basic, Silver, Gold, and Premium plans</caption>
        <thead>
          <tr><th scope="col">Features</th>{plans.map(plan => <th key={plan} className={plan === "Gold" ? "gold-column" : ""} scope="col">{plan}</th>)}</tr>
        </thead>
        <tbody>
          {sections.map(section => <SectionRows key={section.title} section={section} open={openSections[section.title]} toggleSection={toggleSection} />)}
        </tbody>
      </table>
    </div>
  );
}

function SectionRows({ section, open, toggleSection }) {
  return (
    <>
      <tr className="section-row"><th scope="rowgroup" colSpan="5"><button type="button" onClick={() => toggleSection(section.title)}><span>{section.title}</span><span aria-hidden="true">{open ? "−" : "+"}</span></button></th></tr>
      {open && section.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{plans.map((plan, index) => <td key={`${row[0]}-${plan}`} className={plan === "Gold" ? "gold-column" : ""}><CellValue value={row[index + 1]} /></td>)}</tr>)}
    </>
  );
}

function MobileComparison({ sections, openSections, toggleSection, selectedPlan, setSelectedPlan }) {
  const planIndex = plans.indexOf(selectedPlan) + 1;
  return (
    <div className="mobile-comparison">
      <div className="mobile-plan-switcher" role="tablist" aria-label="Choose a plan to compare">
        {plans.map(plan => <button key={plan} type="button" role="tab" aria-selected={selectedPlan === plan} onClick={() => setSelectedPlan(plan)}>{plan}</button>)}
      </div>
      {sections.map(section => (
        <article className="mobile-feature-group" key={section.title}>
          <button type="button" onClick={() => toggleSection(section.title)}><span>{section.title}</span><span aria-hidden="true">{openSections[section.title] ? "−" : "+"}</span></button>
          {openSections[section.title] && <dl>{section.rows.map(row => <div key={row[0]}><dt>{row[0]}</dt><dd><CellValue value={row[planIndex]} /></dd></div>)}</dl>}
        </article>
      ))}
    </div>
  );
}

export default function Pricing() {
  const [activeService, setActiveService] = useState("seo");
  const [selectedPlan, setSelectedPlan] = useState("Gold");
  const active = servicePlans[activeService];
  const activeSections = useMemo(() => normalize(active.sections), [active]);
  const [openSections, setOpenSections] = useState(() => Object.fromEntries(normalize(servicePlans.seo.sections).map(section => [section.title, true])));
  const sectionState = useMemo(() => Object.fromEntries(activeSections.map(section => [section.title, openSections[section.title] ?? true])), [activeSections, openSections]);

  useEffect(() => { document.title = "Pricing Plans | ClickBoost Media – Digital Marketing Agency"; }, []);

  const switchService = (serviceKey) => {
    setActiveService(serviceKey);
    setSelectedPlan("Gold");
    setOpenSections(current => ({ ...current, ...Object.fromEntries(normalize(servicePlans[serviceKey].sections).map(section => [section.title, current[section.title] ?? true])) }));
  };

  const toggleSection = (title) => setOpenSections(current => ({ ...current, [title]: !(current[title] ?? true) }));

  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-container">
          <p className="pricing-kicker">Pricing Plans</p>
          <h1>Multi-service digital growth plans</h1>
          <p>Compare SEO, PPC, SMO, and Web packages by tier. Every plan starts with a consultation, so pricing is tailored to your goals and scope.</p>
          <nav className="service-tabs" aria-label="Service pricing categories"><div role="tablist">{services.map(key => <button key={key} type="button" role="tab" aria-selected={activeService === key} aria-controls="pricing-panel" onClick={() => switchService(key)}>{servicePlans[key].label}</button>)}</div></nav>
        </div>
      </section>
      <section id="pricing-panel" className="pricing-panel" aria-live="polite">
        <div className="pricing-container">
          <div className="pricing-section-intro"><p className="pricing-kicker">{active.eyebrow}</p><h2>{active.title}</h2><p>{active.description}</p></div>
          <div className="pricing-cards">{plans.map(plan => <PricingCard key={`${activeService}-${plan}`} plan={plan} features={active.cards[plan]} />)}</div>
          <div className="comparison-heading"><div><p className="pricing-kicker">Detailed comparison</p><h2>Compare every included area</h2></div><p>Use the section headers to collapse or expand groups. On smaller screens, choose one plan column at a time.</p></div>
          <ComparisonTable sections={activeSections} openSections={sectionState} toggleSection={toggleSection} />
          <MobileComparison sections={activeSections} openSections={sectionState} toggleSection={toggleSection} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
        </div>
      </section>
      <section id="contact" className="pricing-quote"><div className="pricing-container"><div className="quote-banner"><p className="pricing-kicker">Get a Custom Quote</p><h2>Need a plan tailored to your budget, channels, and growth targets?</h2><p>Tell us which service you are considering and we will map the right tier, deliverables, and next steps for your business.</p><a href="/contact">Request Your Custom Quote</a></div></div></section>
    </main>
  );
}
