import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "Terms & conditions";
const description =
  "The terms that apply to using the ClickBoostMedia website and to engagements with our team. Last updated July 2026.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/terms/",
});

const sections: [string, string][] = [
  [
    "Acceptance of terms",
    "By accessing or using the ClickBoostMedia website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.",
  ],
  [
    "Services",
    "ClickBoostMedia provides digital marketing services including SEO, PPC management, social media management, web development, app development, CRM development and AI automation. The specific scope, deliverables and pricing for each engagement are set out in a separate service agreement.",
  ],
  [
    "Intellectual property",
    "All content on this website, including text, graphics, logos and software, is the property of ClickBoostMedia unless otherwise stated and is protected by applicable intellectual property laws.",
  ],
  [
    "Client obligations",
    "Clients agree to provide accurate information and the necessary access to platforms and accounts required for service delivery. Delays caused by failure to provide timely access may affect project timelines.",
  ],
  [
    "Limitation of liability",
    "ClickBoostMedia shall not be liable for indirect, incidental or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service giving rise to the claim.",
  ],
  [
    "Termination",
    "Either party may terminate a service agreement in accordance with the terms outlined in the applicable service contract.",
  ],
  [
    "Changes to terms",
    "We reserve the right to update these terms at any time. Changes will be posted on this page with an updated effective date.",
  ],
  [
    "Contact",
    "For questions about these terms, contact us at info@clickboostmedia.com or call +1 (619) 365-4177.",
  ],
];

export default function Terms() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/terms/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Terms & conditions", path: "/terms/" },
          ])
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">The fine print</div>
          <h1 className="h1">Terms & conditions.</h1>
        </div>
        <p className="lead">
          The terms that apply to this website and to our engagements. Last updated July 2026.
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
              Ask us a question <span className="arr">↗</span>
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
