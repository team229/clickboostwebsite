import { Link } from "react-router-dom";

export default function ServiceSEO() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Search Engine Optimization (SEO)</h1>
          <p className="text-lg sm:text-xl text-gray-600">Drive organic traffic, dominate search rankings, and grow your business with data-driven SEO strategies that deliver measurable results.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <SectionBlock
              title="Keyword Research That Converts"
              text="We go beyond basic keyword lists. Our AI-powered research identifies high-intent search terms your competitors are missing, targeting users ready to take action."
              items={[
                "Predictive keyword trend analysis",
                "Competitor keyword gap analysis",
                "Long-tail opportunity identification",
                "Search intent mapping",
                "Voice search optimization",
              ]}
            />
            <SectionBlock
              title="On-Page SEO That Ranks"
              text="Every element of your page is optimized to signal relevance to search engines while delivering an exceptional user experience that keeps visitors engaged."
              items={[
                "Meta tags and structured data optimization",
                "Content optimization for featured snippets",
                "Internal linking architecture",
                "Image optimization and alt text",
                "URL structure and site hierarchy",
              ]}
            />
            <SectionBlock
              title="Technical SEO That Works"
              text="We ensure search engines can crawl, index, and understand your site with a rock-solid technical foundation that maximizes your organic potential."
              items={[
                "Site speed and Core Web Vitals optimization",
                "Mobile-first indexing compliance",
                "Schema markup implementation",
                "XML sitemap and robots.txt optimization",
                "HTTPS and security best practices",
                "Crawl budget optimization",
              ]}
            />
            <SectionBlock
              title="Link Building That Builds Trust"
              text="Our white-hat link building strategies earn high-quality backlinks that boost your domain authority and drive referral traffic from reputable sources."
              items={[
                "Authority site outreach and partnerships",
                "Digital PR and content promotion",
                "Broken link reclamation",
                "Competitor backlink analysis",
                "Guest posting on relevant sites",
              ]}
            />
            <SectionBlock
              title="Transparent Results You Can See"
              text="No fluff, no guesswork. We provide clear, real-time reporting so you always know exactly how your SEO investment is performing."
              items={[
                "Keyword ranking tracking",
                "Organic traffic growth metrics",
                "Conversion and revenue attribution",
                "Competitor performance benchmarking",
                "Custom dashboards and reporting",
              ]}
            />
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Rank Higher?</h3>
              <p className="text-white/90 mb-8 leading-relaxed">Get a custom SEO strategy tailored to your business goals and start driving more organic traffic today.</p>
              <div className="space-y-3">
                <Link to="/contact" className="block w-full text-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl">
                  Get Your Free SEO Audit
                </Link>
                <Link to="/contact" className="block w-full text-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Other Services</h3>
              <ul className="space-y-4">
                <li><Link to="/service-local-seo" className="text-gray-600 hover:text-accent transition-colors font-medium">Local SEO</Link></li>
                <li><Link to="/service-ppc" className="text-gray-600 hover:text-accent transition-colors font-medium">PPC Advertising</Link></li>
                <li><Link to="/service-content" className="text-gray-600 hover:text-accent transition-colors font-medium">Content Marketing</Link></li>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Start Dominating Search Results</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">Let's build an SEO strategy that drives real, measurable growth for your business.</p>
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
