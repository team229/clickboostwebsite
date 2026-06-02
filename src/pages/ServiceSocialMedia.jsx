import { Link } from "react-router-dom";

const sections = [
  {
    title: "Cross-Platform Strategy & Setup",
    text: "We develop cohesive social media strategies tailored to each platform, ensuring your brand shows up consistently and compellingly wherever your audience spends their time.",
    items: [
      "Instagram growth and engagement",
      "Facebook community building",
      "LinkedIn B2B networking",
      "TikTok viral content strategies",
      "YouTube channel optimization",
      "Twitter/X thought leadership",
    ],
  },
  {
    title: "Integrated Organic & Paid Campaigns",
    text: "Our holistic approach combines organic content strategies with paid social advertising to maximize reach, engagement, and conversions across all channels.",
    items: [
      "Content calendar planning and execution",
      "Paid social advertising campaigns",
      "Influencer partnership coordination",
      "User-generated content campaigns",
      "Social commerce integration",
    ],
  },
  {
    title: "Creative Content Production",
    text: "Our creative team produces high-quality, platform-optimized content that stops the scroll, tells your story, and drives meaningful engagement with your target audience.",
    items: [
      "Custom graphics and branded templates",
      "Video content and Reels production",
      "Story content strategies",
      "Carousel posts and interactive content",
      "Live streaming and event coverage",
    ],
  },
  {
    title: "Audience Development & Social Listening",
    text: "We use advanced social listening tools and audience research to understand what your customers care about and create content that resonates deeply.",
    items: [
      "Target audience research and personas",
      "Hashtag strategy and trend monitoring",
      "Community management and engagement",
      "Sentiment analysis and reputation management",
      "Competitor analysis and benchmarking",
    ],
  },
  {
    title: "Performance & Conversion Analytics",
    text: "Every post, campaign, and strategy is measured against clear KPIs. We provide transparent reporting and actionable insights to continuously improve your social ROI.",
    items: [
      "Engagement rate optimization",
      "Conversion tracking and attribution",
      "A/B testing of content formats",
      "ROI reporting and insights",
      "Monthly performance reviews",
    ],
  },
];

const otherServices = [
  { name: "SEO Services", path: "/service-seo" },
  { name: "PPC Advertising", path: "/service-ppc" },
  { name: "Content Marketing", path: "/service-content" },
  { name: "Web Design", path: "/service-web-design" },
  { name: "View All Services", path: "/services" },
];

export default function ServiceSocialMedia() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Social Media Marketing
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              AI-driven social strategies that build engaged communities, amplify your brand voice, and deliver measurable business results across every platform.
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
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Grow Your Community?</h3>
                <p className="text-white/90 mb-8 leading-relaxed">Get a free social media audit and discover untapped opportunities for your brand.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/contact" className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all">
                    Get Social Media Audit
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Turn Followers into Customers</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Get a free social media audit and discover how to turn your social presence into a revenue engine.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Get Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
