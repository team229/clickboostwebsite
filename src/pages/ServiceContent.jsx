import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Comprehensive Content Strategy',
    items: [
      'Content audit and gap analysis',
      'Buyer persona development',
      'Topic research and ideation',
      'Content calendar planning',
      'Competitor content analysis',
    ],
  },
  {
    title: 'SEO-Optimized Blogs & Articles',
    items: [
      'Keyword-optimized long-form articles',
      'Thought leadership pieces',
      'How-to guides and tutorials',
      'Industry news and insights',
      'Guest posting on authority sites',
    ],
  },
  {
    title: 'Video Content Production',
    items: [
      'Explainer and demo videos',
      'Video testimonials and case studies',
      'YouTube channel optimization',
      'Short-form content for social media',
      'Video transcription and repurposing',
    ],
  },
  {
    title: 'Infographics & Visual Content',
    items: [
      'Data visualization and infographics',
      'Interactive content and tools',
      'Slide presentations and SlideShare',
      'Social media graphics',
      'Custom illustrations and diagrams',
    ],
  },
  {
    title: 'Full-Funnel Content Mapping',
    items: [
      'Top-of-funnel awareness content',
      'Middle-of-funnel consideration content',
      'Bottom-of-funnel conversion content',
      'Post-purchase retention content',
      'Content upgrade and lead magnets',
    ],
  },
  {
    title: 'Performance Optimization',
    items: [
      'Traffic and engagement analytics',
      'Conversion tracking and attribution',
      'Content refresh and updating',
      'A/B testing of headlines and formats',
      'Monthly performance reporting',
    ],
  },
]

export default function ServiceContent() {
  return (
    <div>
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Content Marketing
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Human creativity + AI-powered content that educates, engages, and converts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="mt-4 text-white/90 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="mt-1 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-8">
                <h3 className="text-xl font-bold text-white">Ready for Better Content?</h3>
                <p className="mt-3 text-white/90">
                  Let us create content that drives traffic, engagement, and conversions for your business.
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
                  >
                    Get Content Audit
                  </Link>
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>

              <div className="rounded-xl bg-gray-800/50 p-8">
                <h3 className="text-xl font-bold text-white">Other Services</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link to="/service-seo" className="text-white/90 hover:text-accent transition-colors">
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-ppc" className="text-white/90 hover:text-accent transition-colors">
                      Pay-Per-Click Advertising
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-social-media" className="text-white/90 hover:text-accent transition-colors">
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-web-design" className="text-white/90 hover:text-accent transition-colors">
                      Web Design & Development
                    </Link>
                  </li>
                  <li className="pt-2">
                    <Link to="/services" className="text-accent hover:text-accent/90 font-semibold transition-colors">
                      View All Services →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Content That Converts?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Get a free content audit and discover how your content strategy stacks up against the competition.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Request Free Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
