import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/Chrome";
import { Arrow } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies } from "@/lib/content";
import { breadcrumbLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "Client case studies";
const description =
  "Real campaigns, real numbers: conversion growth, lower cost per acquisition and stronger visibility across paid search, SEO and social.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/case-studies/",
});

const collectionLd = {
  "@type": "CollectionPage",
  "@id": "https://www.clickboostmedia.com/case-studies/#collection",
  name: title,
  description,
  hasPart: caseStudies.map((c) => ({
    "@type": "CreativeWork",
    name: c.name,
    about: c.industry,
  })),
};

export default function Work() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/case-studies/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Our work", path: "/case-studies/" },
          ]),
          collectionLd
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">Client case studies</div>
          <h1 className="h1">The work. The evidence.</h1>
        </div>
        <p className="lead">
          Five client engagements, with the numbers that moved. Every figure below comes from the platform or account
          where it was measured.
        </p>
      </div>

      <div className="wrap" style={{ paddingBottom: 32 }}>
        <div className="cards two">
          {caseStudies.map((c) => (
            <div key={c.name} className="case-card">
              <div className="small">{c.services}</div>
              <h2 style={{ fontSize: 28, margin: "8px 0 4px" }}>{c.name}</h2>
              <div className="small">{c.industry}</div>
              <ul className="metrics">
                {c.metrics.map(([label, value]) => (
                  <li key={label}>
                    <span>{label}</span>
                    <b>{value}</b>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link href="/contact/" className="case-card" style={{ justifyContent: "center" }}>
            <div className="small">Your business next</div>
            <h2 style={{ fontSize: 28, margin: "8px 0 4px" }}>
              What would your numbers look like? <Arrow />
            </h2>
            <p style={{ color: "var(--mute)", margin: 0 }}>
              A free audit shows where the biggest gain is, and what it would take to get it.
            </p>
          </Link>
        </div>
      </div>

      <section className="dark">
        <div className="wrap hero">
          <div>
            <div className="small">Our standard for proof</div>
            <h2 className="h2">Context before claims.</h2>
          </div>
          <p style={{ color: "#ccc" }}>
            A result is only useful when you understand the starting point, the work involved and how it was measured.
            We report the platform, the period and the metric — and we will happily walk you through the account
            behind any of these.
          </p>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Want results like
            <br />
            these?
          </>
        }
        lead="Start with a free audit. We will show you what is working, what is leaking and the first three things we would change."
      />
    </main>
  );
}
