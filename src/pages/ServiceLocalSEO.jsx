import { Link } from "react-router-dom";

export default function ServiceLocalSEO() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Local SEO & GMB Optimization</h1>
          <p className="text-lg sm:text-xl text-gray-600">Dominate local search and appear at the top when customers are looking for businesses like yours.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <SectionBlock
              title="Google Business Profile (GMB) Optimization"
              text="Your Google Business Profile is the most critical asset for local visibility. We optimize every element to ensure your business stands out in the local pack and maps results."
              items={[
                "Complete profile setup and verification",
                "Category and attribute optimization",
                "Business description and keyword integration",
                "Photo and video optimization",
                "Google Posts and updates",
                "Service area and hours management",
              ]}
            />
            <SectionBlock
              title="Maps Ranking Optimization"
              text="Getting your business to appear at the top of Google Maps requires a strategic approach to local ranking factors that goes beyond basic optimization."
              items={[
                "NAP (Name, Address, Phone) consistency",
                "Proximity and relevance optimization",
                "Category and keyword strategy",
                "Geo-targeted content creation",
                "Local backlink building",
              ]}
            />
            <SectionBlock
              title="Intelligent Review Management"
              text="Online reviews are social proof that directly influences buying decisions. We help you manage, grow, and leverage your reputation across all major platforms."
              items={[
                "Review monitoring and alerts",
                "Review response management",
                "Review generation campaigns",
                "Negative review mitigation",
                "Multi-platform review tracking",
              ]}
            />
            <SectionBlock
              title="Local Citations & Listings"
              text="Consistent citations across the web strengthen your local authority and help search engines trust that your business information is accurate and reliable."
              items={[
                "Citation audit and cleanup",
                "Top directory submissions",
                "Industry-specific listings",
                "Citation monitoring and updates",
                "Duplicate listing removal",
              ]}
            />
            <SectionBlock
              title="AI Analysis of Competitor Trends"
              text="Stay ahead of the competition with AI-powered insights that reveal exactly what your local competitors are doing and where you can outperform them."
              items={[
                "Competitor ranking analysis",
                "Review sentiment comparison",
                "Content gap identification",
                "Local keyword opportunities",
                "Market share tracking",
              ]}
            />
            <SectionBlock
              title="Local Content Strategy"
              text="Attract nearby customers with content that speaks directly to your local audience and signals relevance to search engines for location-based queries."
              items={[
                "Location-specific landing pages",
                "Local blog content",
                "Community event coverage",
                "Local schema markup",
                "Neighborhood and area pages",
              ]}
            />
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Dominate Local Search?</h3>
              <p className="text-white/90 mb-8 leading-relaxed">Get a custom local SEO strategy that puts your business at the top of local results and drives more foot traffic and calls.</p>
              <div className="space-y-3">
                <Link to="/contact" className="block w-full text-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl">
                  Get Your Free Local Audit
                </Link>
                <Link to="/contact" className="block w-full text-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Other Services</h3>
              <ul className="space-y-4">
                <li><Link to="/service-seo" className="text-gray-600 hover:text-accent transition-colors font-medium">SEO</Link></li>
                <li><Link to="/service-ppc" className="text-gray-600 hover:text-accent transition-colors font-medium">PPC Advertising</Link></li>
                <li><Link to="/service-social-media" className="text-gray-600 hover:text-accent transition-colors font-medium">Social Media</Link></li>
                <li><Link to="/service-web-design" className="text-gray-600 hover:text-accent transition-colors font-medium">Web Design</Link></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to="/services" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
                  View All Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Show Up When Locals Are Searching</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">Get a free local SEO audit and discover how your business can attract more local customers starting today.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Claim Your Free Strategy Session
          </Link>
        </div>
      </section>
    </>
  );
}

function SectionBlock({ title, text, items }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{text}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700">
            <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
