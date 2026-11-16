import Link from "next/link";
import Art from "@/components/Art";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/Chrome";
import { Arrow } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import type { Service } from "@/lib/content";
import { services } from "@/lib/content";
import { IMG } from "@/lib/images";
import { breadcrumbLd, faqLd, graph, organizationLd, serviceLd, webPageLd, websiteLd } from "@/lib/seo";

export default function ServicePage({ service }: { service: Service }) {
  const path = `/${service.slug}/`;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path, title: service.metaTitle, description: service.metaDescription }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: service.title, path },
          ]),
          serviceLd({ name: service.title, description: service.metaDescription, path }),
          ...(service.faqs ? [faqLd(service.faqs)] : [])
        )}
      />

      <div className="wrap" style={{ paddingTop: 32 }}>
        <Link href="/services/" className="small">
          ← All capabilities
        </Link>
        <div className="split">
          <div>
            <div className="eyebrow">{service.tags}</div>
            <h1 className="h1">{service.title}</h1>
          </div>
          <p className="lead">{service.tagline}</p>
        </div>

        <div className="svc-grid">
          <div>
            <h2 style={{ fontSize: 28 }}>Built for a meaningful next step.</h2>
            <p className="lead" style={{ maxWidth: 520 }}>
              {service.intro}
            </p>
            <h3 style={{ fontSize: 28, margin: "32px 0 12px" }}>What we bring to the table</h3>
            <ul className="svc-list">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Art
              img={{ src: service.image, alt: service.alt }}
              fallback={IMG.ribbon}
              pos={service.position}
            />
            <div className="panel" style={{ marginTop: 24 }}>
              <div className="eyebrow">The bigger picture</div>
              <p>
                We define success together, align the right capabilities and keep you close to the work with clear
                communication and reporting.
              </p>
              <Link href={`/contact/?service=${encodeURIComponent(service.title)}`} className="btn">
                Talk about your project <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {service.sections?.map((section, i) => (
        <section key={section.title} className={i % 2 === 0 ? "band" : undefined}>
          <div className="wrap" style={{ padding: "56px 32px" }}>
            <div className="split top" style={{ padding: 0 }}>
              <Reveal>
                <div className="eyebrow">{section.eyebrow}</div>
                <h2 className="h2" style={{ maxWidth: 460 }}>
                  {section.title}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                {section.body && <p className="lead">{section.body}</p>}
                {section.bullets && (
                  <ul className="checks" style={{ maxWidth: 620 }}>
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {service.compare && (
        <section className="wrap" style={{ padding: "56px 32px" }}>
          <div className="eyebrow">Straight answers</div>
          <h2 className="h2" style={{ marginBottom: 12 }}>
            {service.compare.title}
          </h2>
          {service.compare.lead && <p className="lead" style={{ maxWidth: 640, marginBottom: 24 }}>{service.compare.lead}</p>}
          <div className="table-scroll">
            <table className="tbl">
              <thead>
                <tr>
                  {service.compare.head.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.compare.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {service.steps && (
        <section className="band">
          <div className="wrap" style={{ padding: "56px 32px" }}>
            <div className="eyebrow">How an engagement runs</div>
            <h2 className="h2" style={{ marginBottom: 40 }}>
              Clear stages. No surprises.
            </h2>
            <ol className="steps">
              {service.steps.map((step, i) => (
                <li key={step.title}>
                  <b>0{i + 1}</b>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {service.faqs && (
        <section className="wrap" style={{ padding: "56px 32px" }}>
          <div className="split top" style={{ padding: 0 }}>
            <div>
              <div className="eyebrow">Questions</div>
              <h2 className="h2">
                A few things
                <br />
                worth knowing.
              </h2>
            </div>
            <div className="faq">
              {service.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="wrap" style={{ padding: "0 32px 72px" }}>
        <div className="eyebrow">Keep exploring</div>
        <h2 className="h2" style={{ marginBottom: 32 }}>
          Works well with.
        </h2>
        <div className="cards">
          {related.map((r) => (
            <Link key={r.slug} href={`/${r.slug}/`} className="card">
              <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>{r.title}</h3>
              <div className="small">{r.tags}</div>
              <p style={{ color: "var(--mute)", fontSize: 13 }}>{r.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
