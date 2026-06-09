import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">About ClickBoost Media</h1>
          <p className="text-lg sm:text-xl text-gray-600">Your growth is our story. Empowering businesses through innovative digital marketing.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>Our story didn't begin in a boardroom; it began with a conviction. A conviction that in the digital age, every business deserves a fighting chance to thrive. We were a small team, yes, but we were fueled by a big vision: to demystify digital marketing.</p>
            <p>To us, <strong className="text-gray-900">&quot;More Clicks. More Customers&quot;</strong> isn't just a tagline-it's a promise. A promise to empower the local bakery, the tech startup, the family-run store with the same powerful strategies as the giants.</p>
            <p>We are here to be the catalyst for your growth, turning your ambition into your achievement.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MissionCard icon="check" title="Our Mission" text="Your growth is our story. Our mission is to walk beside you, translating the noise of the digital landscape into a symphony of new customers and soaring revenue. We provide more than solutions; we are the architects of your success, building innovative marketing engines designed for one purpose: to make your growth inevitable." />
            <MissionCard icon="eye" title="Our Vision" text="We build our legacy on trust, choosing integrity over shortcuts to fuel your long-term growth. We envision a world where every business, regardless of size, has access to world-class digital marketing strategies that deliver measurable, sustainable results." />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard icon="search" title="Transparency" desc="Clear communication, honest reporting, and no hidden agendas" />
            <ValueCard icon="lightbulb" title="Innovation" desc="Embracing cutting-edge technology and creative solutions" />
            <ValueCard icon="heart" title="Customer-First" desc="Your success is our success-we're invested in your growth" />
            <ValueCard icon="book" title="Continuous Learning" desc="Staying ahead of trends and evolving with the industry" />
            <ValueCard icon="shield" title="Integrity" desc="Doing what's right, even when no one is watching" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Why Choose ClickBoost Media?</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600 mb-10">
            <p>We believe effective marketing stems from deep understanding. Your dedicated Account Manager invests the time to truly know your business, industry, and ambitions.</p>
            <p>This partnership ensures strategies are not just executed, but are thoughtfully crafted and continuously optimized for your unique market position.</p>
          </div>
          <Link to="/contact" className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5">
            Take Your Business to the Next Level
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
            <p className="text-lg text-gray-600">Trusted expertise backed by industry-leading certifications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <CertCard title="Google Partner Certified" icon="search" />
            <CertCard title="Google Analytics Certified" icon="chart" />
            <CertCard title="Meta Ads Certified" icon="share" />
            <CertCard title="HubSpot Inbound Marketing" icon="check" />
            <CertCard title="SEMrush Certified" icon="settings" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Let's discuss how we can help your business achieve predictable, scalable growth.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Claim Your Free Strategy Session
          </Link>
        </div>
      </section>
    </>
  );
}

const icons = {
  check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  eye: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>,
  search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  lightbulb: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  heart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  book: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  share: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
  settings: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
};

function MissionCard({ icon, title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icons[icon]}</svg>
      </div>
      <h3 className="text-2xl font-bold text-accent mb-4">{title}</h3>
      <p className="text-white/90 leading-relaxed">{text}</p>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icons[icon]}</svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function CertCard({ title, icon }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-accent hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icons[icon]}</svg>
      </div>
      <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
    </div>
  );
}
