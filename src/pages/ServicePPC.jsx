import { Link } from "react-router-dom";

const sections = [
  {
    title: "Google & Bing Ads That Convert",
    text: "We build and manage highly targeted search and display campaigns across Google and Microsoft Advertising, leveraging AI to optimize every click and maximize conversion rates.",
    items: [
      "Search campaign setup and optimization",
      "Shopping campaigns for e-commerce",
      "Display advertising for brand awareness",
      "Video advertising on YouTube",
      "Performance Max campaigns",
    ],
  },
  {
    title: "Paid Social That Engages",
    text: "From Facebook to TikTok, we craft paid social campaigns that capture attention, drive engagement, and deliver measurable results across every major platform.",
    items: [
      "Facebook & Instagram advertising",
      "LinkedIn B2B campaigns",
      "TikTok advertising for younger audiences",
      "Twitter/X promotional campaigns",
      "Pinterest shopping ads",
    ],
  },
  {
    title: "Retargeting That Brings Them Back",
    text: "Our AI-driven retargeting strategies re-engage your website visitors and past customers with personalized ads that drive conversions and increase lifetime value.",
    items: [
      "Website visitor retargeting",
      "Abandoned cart recovery",
      "Dynamic product retargeting",
      "Cross-platform audience syncing",
      "Sequential messaging campaigns",
    ],
  },
  {
    title: "ROI-Obsessed Budget Management",
    text: "Every dollar counts. We use advanced AI algorithms to manage your ad budgets in real time, ensuring maximum return on every campaign.",
    items: [
      "AI-powered bid optimization",
      "Conversion tracking and attribution",
      "Budget allocation across channels",
      "Quality Score improvement",
      "Cost-per-acquisition (CPA) reduction",
    ],
  },
  {
    title: "Real-Time Campaign Optimization",
    text: "We continuously monitor, test, and refine your campaigns to ensure peak performance, adapting to market changes and audience behavior in real time.",
    items: [
      "Continuous ad copy testing",
      "Landing page optimization",
      "Audience refinement",
      "Negative keyword management",
      "Competitive bid adjustments",
    ],
  },
];

const otherServices = [
  { name: "SEO Services", path: "/service-seo" },
  { name: "Social Media Marketing", path: "/service-social-media" },
  { name: "Content Marketing", path: "/service-content" },
  { name: "Web Design", path: "/service-web-design" },
  { name: "View All Services", path: "/services" },
];

export default function ServicePPC() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Pay-Per-Click (PPC) Advertising
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              AI-powered PPC campaigns that deliver immediate visibility and maximum ROI.
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
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Generate Leads?</h3>
                <p className="text-white/90 mb-8 leading-relaxed">Get a free PPC audit and discover how much ad spend you're leaving on the table.</p>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Stop Wasting Ad Spend</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Get a free PPC audit and start getting the most out of every dollar.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Get Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
