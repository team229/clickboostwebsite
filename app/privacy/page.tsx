import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "Privacy policy";
const description =
  "How ClickBoostMedia collects, uses and protects the information you share through this website, and how to have your data removed.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/privacy/",
});

const sections: [string, string][] = [
  [
    "Information we collect",
    "We collect information you provide directly through our contact forms, including your name, email address, phone number, company name and any additional details you share about your business or project. We also automatically collect certain technical information when you visit the website, including your IP address, browser type, operating system, referring URLs and pages visited.",
  ],
  [
    "How we use your information",
    "We use the information we collect to respond to your enquiries and provide quotes or proposals, deliver the services you have requested, improve our website and service offerings, send relevant marketing communications (only with your consent) and comply with legal obligations.",
  ],
  [
    "Data sharing",
    "We do not sell your personal information to third parties. We may share your data with trusted service providers who assist in operating our website and business, provided they agree to keep your information confidential.",
  ],
  [
    "Cookies and analytics",
    "This website uses Google Analytics and Google Ads conversion tracking to understand how visitors use the site and whether our advertising is working. You can block or delete cookies through your browser settings; the site will continue to work.",
  ],
  [
    "Data security",
    "We implement reasonable security measures to protect your personal information from unauthorised access, alteration, disclosure or destruction.",
  ],
  [
    "Your rights",
    "You have the right to access, correct or delete your personal data held by us. To exercise these rights, contact us at info@clickboostmedia.com and we will respond within a reasonable period.",
  ],
  [
    "Retention",
    "Enquiry records are kept for as long as needed to respond, maintain a commercial relationship, or meet legal and accounting obligations. To have a request deleted, email info@clickboostmedia.com.",
  ],
  [
    "Contact",
    "If you have questions about this Privacy Policy, reach us at info@clickboostmedia.com or call +1 (619) 365-4177.",
  ],
];

export default function Privacy() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/privacy/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Privacy policy", path: "/privacy/" },
          ])
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">Your information</div>
          <h1 className="h1">Privacy, in plain language.</h1>
        </div>
        <p className="lead">
          What we collect when you get in touch, what we do with it and how to have it removed. Last updated July 2026.
        </p>
      </div>

      <div className="wrap">
        <div className="legal-body">
          {sections.map(([h, p]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}
          <p>
            <Link href="/contact/">
              Contact us about your data <span className="arr">↗</span>
            </Link>
          </p>
          <p className="fine">
            {site.legalName} · {site.address.street}, {site.address.city}, {site.address.region}{" "}
            {site.address.postalCode}
          </p>
        </div>
      </div>
    </main>
  );
}
