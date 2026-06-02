import { useState } from "react";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    title: "Email",
    detail: "hello@clickboostmedia.com",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: "Business Hours",
    detail: "Mon-Fri: 9:00 AM - 6:00 PM EST",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    title: "Free Strategy Call",
    detail: "Schedule your 30-minute consultation",
  },
];

const faqs = [
  {
    q: "How long does it take to see results from SEO?",
    a: "While every business is different, most clients begin seeing measurable improvements within 3-6 months. SEO is a long-term strategy that builds momentum over time. We focus on sustainable growth with transparent reporting every step of the way.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "We start with a deep-dive discovery call to understand your goals. After that we develop a custom strategy, present it to you for feedback, and then execute with regular check-ins and monthly performance reports. Every engagement includes a dedicated account manager.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "Not at all. We offer flexible month-to-month agreements because we believe our results should earn your business every single month. No lock-in contracts, no hidden fees, just transparent partnership.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "We work with businesses across e-commerce, professional services, healthcare, real estate, hospitality, SaaS, and local service providers. Our strategies are tailored to your specific industry rather than relying on one-size-fits-all tactics.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Let's Grow Your Business Together</h1>
          <p className="text-lg sm:text-xl text-gray-600">Ready to take your digital presence to the next level? We're here to help.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form className="bg-white border border-gray-100 rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">Company</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" placeholder="Your Company" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">Service</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-gray-600">
                  <option value="">Select a service</option>
                  <option value="seo">SEO</option>
                  <option value="local-seo">Local SEO</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="social-media">Social Media</option>
                  <option value="content">Content Marketing</option>
                  <option value="web-design">Web Design</option>
                  <option value="email">Email Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know before getting started</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your free strategy call today and discover how ClickBoost Media can transform your digital presence.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Claim Your Free Strategy Session
          </Link>
        </div>
      </section>
    </>
  );
}
