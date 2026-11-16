import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/Chrome";
import { Arrow } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { comparisons, plans, pricingFaqs } from "@/lib/content";
import { breadcrumbLd, faqLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "SEO pricing & packages";
const description =
  "Monthly SEO plans from $500, with the keywords, backlinks, pages and AI visibility work each tier includes. Ad spend and third-party fees are separate.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/pricing/",
});

export default function Pricing() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/pricing/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing/" },
          ]),
          faqLd(pricingFaqs)
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">Pricing</div>
          <h1 className="h1">Clear plans. No mystery invoices.</h1>
        </div>
        <p className="lead">
          Four monthly SEO plans, priced by the work involved. Every plan includes technical SEO, on-page work,
          backlinks, AI visibility tracking and reporting.
        </p>
      </div>

      <div className="wrap" style={{ paddingBottom: 32 }}>
        <div className="plans">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan${plan.featured ? " featured" : ""}`}>
              {plan.featured && <span className="tag">Most popular</span>}
              <div className="small" style={{ marginTop: plan.featured ? 12 : 0 }}>
                Monthly plan
              </div>
              <h2 style={{ fontSize: 26, margin: "10px 0 2px" }}>{plan.name}</h2>
              <div className="price">
                {plan.price}
                <s>was {plan.was}</s>
              </div>
              <div className="small">per month · USD</div>
              <ul>
                {plan.features.map(([label, value]) => (
                  <li key={label}>
                    <span>{label}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/contact/?plan=${encodeURIComponent(plan.name)}`} className="btn">
                Start today <Arrow />
              </Link>
            </div>
          ))}
        </div>

        <p className="fine" style={{ marginTop: 16, maxWidth: 720 }}>
          Prices are in USD per month. Advertising spend, software licences and third-party fees are billed separately
          and stay in your own accounts. Plans are month-to-month; most clients commit to six months because that is
          where the work compounds.
        </p>
      </div>

      <section className="wrap" style={{ padding: "56px 32px" }}>
        <div className="eyebrow">What is included</div>
        <h2 className="h2" style={{ marginBottom: 8 }}>
          Compare every line item.
        </h2>
        <p className="lead" style={{ maxWidth: 640, marginBottom: 32 }}>
          The short version: higher tiers buy more keywords, more backlinks, more optimized pages and more AI visibility
          work. Nothing in a lower tier is taken away.
        </p>

        <p className="scroll-hint">Swipe the table sideways to compare all four plans.</p>
        <div className="table-scroll">
          {comparisons.map((section) => (
            <table className="cmp" key={section.title}>
              <caption>{section.title}</caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {section.columns.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row" style={{ fontWeight: 400 }}>
                      {row[0]}
                    </th>
                    {row.slice(1).map((cell, i) => (
                      <td key={i} className={cell === "—" ? "no" : undefined}>
                        {cell === "—" ? "—" : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap" style={{ padding: "56px 32px" }}>
          <div className="split top" style={{ padding: 0 }}>
            <div>
              <div className="eyebrow">Pricing questions</div>
              <h2 className="h2">
                Before you
                <br />
                choose.
              </h2>
            </div>
            <div className="faq">
              {pricingFaqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Not sure which
            <br />
            plan fits?
          </>
        }
        lead="Send us your site and your goal. We will tell you which tier makes sense, what we would do first, and what we would leave alone."
      />
    </main>
  );
}
