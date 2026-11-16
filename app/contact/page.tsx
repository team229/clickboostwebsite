import type { Metadata } from "next";
import Art from "@/components/Art";
import LeadForm from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { IMG } from "@/lib/images";
import { site } from "@/lib/content";
import { breadcrumbLd, faqLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "Contact";
const description =
  "Book a discovery call or a free marketing audit. Tell us about your business — we reply within one business day.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/contact/",
});

const faqs = [
  {
    q: "What time zones do you work with?",
    a: "We work across EST, IST and GMT. Standard hours are Monday to Friday, 9AM–6PM EST, and we adjust call times to suit your schedule.",
  },
  {
    q: "What is your minimum engagement?",
    a: "It depends on the work. Most strategy services start with a three-month minimum, while audits and one-off projects are fixed scope. Social media management can start with a short trial.",
  },
  {
    q: "How do you communicate with clients?",
    a: "Email and Slack day to day, with a scheduled video call for reviews. You also get access to a live dashboard for campaign and ranking data.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Client confidentiality is a priority — send yours over and we will sign before any detail is shared.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most clients are onboarded within three to five business days. Fast-start campaigns can be live inside a week once access is in place.",
  },
];

const contactLd = {
  "@type": "ContactPage",
  "@id": "https://www.clickboostmedia.com/contact/#contactpage",
  name: title,
  description,
};

export default function Contact() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/contact/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact/" },
          ]),
          contactLd,
          faqLd(faqs)
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">Let’s talk about what’s next</div>
          <h1 className="h1">A good conversation can change everything.</h1>
        </div>
        <p className="lead">
          You don’t need a perfect brief. Just a little about your business and where you want to go.
        </p>
      </div>

      <div className="wrap contact-grid">
        <aside className="contact-aside">
          <h2>Here’s what happens next.</h2>
          {["We understand your goals.", "We explore the possibilities.", "We map the next move."].map((t, i) => (
            <p key={t} className="step">
              <span className="eyebrow">0{i + 1}</span>
              <br />
              {t}
            </p>
          ))}
          <div style={{ margin: "28px 0" }}>
            <Art img={IMG.contact} />
          </div>
          <div className="small">Prefer a direct conversation?</div>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p style={{ color: "var(--mute)", fontSize: 13 }}>
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
            <br />
            {site.hours}
          </p>
        </aside>

        <LeadForm />
      </div>

      <section className="band">
        <div className="wrap" style={{ padding: "56px 32px" }}>
          <div className="split top" style={{ padding: 0 }}>
            <div>
              <div className="eyebrow">Questions we hear often</div>
              <h2 className="h2">
                Before you
                <br />
                get in touch.
              </h2>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
