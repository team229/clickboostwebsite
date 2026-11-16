import Link from "next/link";
import type { Metadata } from "next";
import Art from "@/components/Art";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/Chrome";
import { JsonLd } from "@/components/JsonLd";
import { pool, insightImg } from "@/lib/images";
import { insights, services } from "@/lib/content";
import { breadcrumbLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "Insights";
const description =
  "Practical thinking on search, AI visibility, website experience and connected growth — written by the ClickBoostMedia team.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/blogs/",
});

export default function Insights() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/blogs/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blogs/" },
          ])
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">The ClickBoostMedia perspective</div>
          <h1 className="h1">Ideas for a world that doesn’t stand still.</h1>
        </div>
        <p className="lead">Practical thinking on digital discovery, brand experiences and connected growth.</p>
      </div>

      <div className="wrap cards" style={{ paddingBottom: 72 }}>
        {insights.map((a, i) => (
          <Reveal key={a.slug} delay={i * 110}>
            <Link href={`/blogs/${a.slug}/`} className="card">
              <Art img={insightImg(a.slug, a.title)} fallback={pool[i % 3]} />
              <h2>{a.title}</h2>
              <div className="small">
                {a.cat} · {a.read}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <section className="band">
        <div className="wrap" style={{ padding: "56px 32px" }}>
          <div className="eyebrow">Go deeper</div>
          <h2 className="h2" style={{ marginBottom: 32 }}>
            The services behind the thinking.
          </h2>
          <div className="cards">
            {services.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/${s.slug}/`} className="card">
                <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>{s.title}</h3>
                <div className="small">{s.tags}</div>
                <p style={{ color: "var(--mute)", fontSize: 13 }}>{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
