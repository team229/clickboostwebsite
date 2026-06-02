import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
              More Clicks.<br className="sm:hidden" /> More Customers. v3
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              AI-powered digital marketing solutions designed to drive measurable growth. We combine cutting-edge technology with proven strategies to maximize your ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5">
                Start Free Consultation
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive digital marketing solutions tailored to your business goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard to="/service-seo" title="SEO" desc="AI-driven keyword research and technical optimization for faster rankings." svg={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            } />
            <ServiceCard to="/service-local-seo" title="Local SEO" desc="Dominate local search results with Google My Business optimization." svg={
              <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>
            } />
            <ServiceCard to="/service-ppc" title="PPC Advertising" desc="AI-powered bidding and targeting for maximum ROI on every campaign." svg={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            } />
            <ServiceCard to="/service-social-media" title="Social Media" desc="Build engaged communities with data-driven social media strategies." svg={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            } />
            <ServiceCard to="/service-content" title="Content Marketing" desc="SEO-optimized content that drives traffic and converts visitors." svg={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            } />
            <ServiceCard to="/service-web-design" title="Web Design" desc="Conversion-focused websites with AI-powered UX optimization." svg={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            } />
            <ServiceCard to="/contact" title="AI Agent Set-Up" desc="Custom AI agents configured to automate workflows, qualify leads, and support customers." svg={
              <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4V2m0 2a6 6 0 016 6v4a6 6 0 01-12 0v-4a6 6 0 016-6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M16 12h.01M9 17h6M4 13H2m22 0h-2" /></>
            } />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <Stat num="500+" label="Clients Served" />
            <Stat num="250%" label="Average ROI Increase" />
            <Stat num="10M+" label="Leads Generated" />
            <Stat num="98%" label="Client Satisfaction" />
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

function ServiceCard({ to, title, desc, svg }) {
  return (
    <Link to={to} className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{svg}</svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{desc}</p>
      <span className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

function Stat({ num, label }) {
  return (
    <div className="text-center">
      <h3 className="text-5xl sm:text-6xl font-bold text-accent mb-2">{num}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{label}</p>
    </div>
  );
}
