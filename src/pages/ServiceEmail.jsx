import { Link } from "react-router-dom";

const sections = [
  {
    title: "Strategic Email Funnel Development",
    text: "We design and build strategic email funnels that guide your subscribers from first contact to loyal customer, with personalized messaging at every stage of their journey.",
    items: [
      "Welcome series for new subscribers",
      "Lead nurturing sequences",
      "Abandoned cart recovery",
      "Post-purchase onboarding",
      "Re-engagement campaigns",
    ],
  },
  {
    title: "AI-Powered Personalization",
    text: "Our AI engines analyze behavioral data to deliver hyper-personalized emails that resonate with each subscriber, dramatically improving engagement and conversion rates.",
    items: [
      "Behavioral trigger emails",
      "Predictive send-time optimization",
      "Dynamic content blocks",
      "Product recommendations",
      "Personalized subject lines",
    ],
  },
  {
    title: "Advanced Segmentation & Dynamic Content",
    text: "We segment your audience with precision using demographic, behavioral, and lifecycle data, ensuring every message reaches the right person at the right time.",
    items: [
      "Demographic and firmographic segmentation",
      "Behavioral segmentation",
      "Purchase history targeting",
      "Engagement level segments",
      "Lifecycle stage targeting",
    ],
  },
  {
    title: "Automated Campaigns",
    text: "Set it and forget it with sophisticated automation workflows that nurture leads, onboard customers, and re-engage dormant subscribers without manual effort.",
    items: [
      "Drip campaign setup",
      "Lead scoring automation",
      "Multi-channel workflows",
      "Customer journey mapping",
      "Win-back campaigns",
    ],
  },
  {
    title: "CRM & E-commerce Integration",
    text: "We seamlessly integrate your email marketing with your CRM and e-commerce platforms, unifying your data for more intelligent and effective campaigns.",
    items: [
      "Salesforce, HubSpot, Pipedrive integration",
      "Shopify, WooCommerce, Magento sync",
      "Custom API integrations",
      "Data synchronization",
      "Cross-platform reporting",
    ],
  },
  {
    title: "Performance Analytics & ROI Reporting",
    text: "Our detailed analytics and reporting provide clear visibility into your email marketing performance, with actionable insights to continuously improve results.",
    items: [
      "Open and click-through rate optimization",
      "Conversion tracking and attribution",
      "Revenue per email reporting",
      "A/B testing and optimization",
      "Deliverability monitoring",
    ],
  },
];

const otherServices = [
  { name: "SEO Services", path: "/service-seo" },
  { name: "PPC Advertising", path: "/service-ppc" },
  { name: "Social Media Marketing", path: "/service-social-media" },
  { name: "Web Design", path: "/service-web-design" },
  { name: "View All Services", path: "/services" },
];

export default function ServiceEmail() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Email Marketing & Automation
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              AI-powered email campaigns that nurture leads, drive conversions, and deliver an unmatched return on investment through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{section.text}</p>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <aside className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Boost Email ROI?</h3>
                <p className="text-white/90 mb-8 leading-relaxed">Get a free email audit and find out how much revenue your email list is leaving on the table.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/contact" className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all">
                    Get Free Audit
                  </Link>
                  <Link to="/contact" className="px-6 py-3 bg-white/10 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
                    Schedule a Call
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Other Services</h3>
                <ul className="space-y-4">
                  {otherServices.map((service, i) => (
                    <li key={i}>
                      <Link to={service.path} className="text-gray-600 hover:text-accent transition-colors font-medium">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Is Your Email Marketing Profitable?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Get a free email audit and discover how to turn your email list into a revenue powerhouse.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Get Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
