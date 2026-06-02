import { Link } from "react-router-dom";

const services = [
  {
    to: "/service-seo",
    title: "SEO",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    bullets: [
      "Comprehensive keyword research & strategy",
      "On-page optimization & technical SEO",
      "Link building with high-authority backlinks",
      "Content gap analysis & optimization",
      "Monthly performance reports & insights",
    ],
  },
  {
    to: "/service-local-seo",
    title: "Local SEO",
    icon: (
      <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>
    ),
    bullets: [
      "Google Business Profile optimization",
      "Local citation building & management",
      "Review generation & reputation management",
      "Local keyword & geo-targeting strategy",
      "Google Maps ranking improvement",
    ],
  },
  {
    to: "/service-ppc",
    title: "PPC Advertising",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    bullets: [
      "Google Ads & Microsoft Ads management",
      "AI-powered bid optimization",
      "A/B ad copy & landing page testing",
      "Audience targeting & retargeting",
      "Conversion tracking & ROAS analysis",
    ],
  },
  {
    to: "/service-social-media",
    title: "Social Media",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    ),
    bullets: [
      "Custom content calendars & strategy",
      "Organic growth & community engagement",
      "Paid social campaign management",
      "Influencer partnership coordination",
      "Analytics & social listening reports",
    ],
  },
  {
    to: "/service-content",
    title: "Content Marketing",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    ),
    bullets: [
      "SEO-optimized blog posts & articles",
      "Website copywriting & landing pages",
      "Whitepapers, guides & downloadable assets",
      "Video script writing & storyboards",
      "Content distribution & promotion strategy",
    ],
  },
  {
    to: "/service-web-design",
    title: "Web Design",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    bullets: [
      "Custom responsive website design",
      "Conversion rate optimization (CRO)",
      "AI-powered UX personalization",
      "Page speed & performance optimization",
      "Ongoing maintenance & support",
    ],
  },
  {
    to: "/service-email",
    title: "Email Marketing",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    bullets: [
      "Email automation & drip campaigns",
      "Segment-based audience targeting",
      "A/B tested subject lines & content",
      "Personalized product recommendations",
      "Detailed open, click & conversion analytics",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-600">Comprehensive digital marketing solutions designed to drive measurable growth for your business.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Schedule a free strategy call and discover how we can help you achieve predictable, scalable growth.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-accent hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{service.icon}</svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <ul className="space-y-2.5 mb-6">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-gray-600 text-sm">
            <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <Link to={service.to} className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
