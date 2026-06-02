import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Strategic Web Design & Development',
    items: [
      'Custom website design aligned with your brand',
      'User research and customer journey mapping',
      'Wireframing and prototyping',
      'Conversion rate optimization (CRO)',
      'Analytics integration and tracking',
    ],
  },
  {
    title: 'Responsive, Mobile-First Design',
    items: [
      'Mobile-optimized layouts and navigation',
      'Touch-friendly interfaces',
      'Fast loading on all devices',
      'Cross-browser compatibility',
      'Progressive web app (PWA) capabilities',
    ],
  },
  {
    title: 'Conversion-Centered UX/UI',
    items: [
      'Clear calls-to-action (CTAs)',
      'Optimized form design',
      'Strategic content placement',
      'Trust signals and social proof',
      'Frictionless checkout processes',
    ],
  },
  {
    title: 'AI-Powered UX for Hyper-Personalization',
    items: [
      'Personalized content recommendations',
      'Behavioral targeting and segmentation',
      'Dynamic pricing and offers',
      'Smart search and product recommendations',
      'Predictive user flow optimization',
    ],
  },
  {
    title: 'Intelligent Chatbots for 24/7 Engagement',
    items: [
      'Custom chatbot development',
      'Lead qualification automation',
      'Multi-language support',
      'CRM and email integration',
      'Conversation analytics and optimization',
    ],
  },
  {
    title: 'High-Performance Technical Execution',
    items: [
      'Optimized Core Web Vitals',
      'CDN and caching implementation',
      'Image and asset optimization',
      'Security best practices and SSL',
      'Regular updates and maintenance',
    ],
  },
]

export default function ServiceWebDesign() {
  return (
    <div>
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Web Design & Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Conversion-focused websites built with AI-powered UX and cutting-edge technology.
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
                <h3 className="text-xl font-bold text-white">Ready for a Better Website?</h3>
                <p className="mt-3 text-white/90">
                  Let us build a website that drives conversions and delivers an exceptional user experience.
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
                  >
                    Get Website Audit
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
                    <Link to="/service-content" className="text-white/90 hover:text-accent transition-colors">
                      Content Marketing
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
            Is Your Website Converting?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Get a free website audit and uncover opportunities to boost your conversion rates today.
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
