import Link from "next/link";
import Art from "@/components/Art";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { CtaBand } from "@/components/Chrome";
import { Arrow } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { IMG, pool, insightImg } from "@/lib/images";
import { services, insights, caseStudies } from "@/lib/content";
import { graph, organizationLd, websiteLd, webPageLd } from "@/lib/seo";
import type { Metadata } from "next";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const title = "ClickBoostMedia: Built to stand out. Designed to grow.";
const description =
  "An independent digital growth agency connecting strategy, creativity and technology — SEO, paid media, social, web and app development, CRM and AI automation.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.clickboostmedia.com/" },
};

export default function Home() {
  const featured = services.slice(0, 4);

  return (
    <main id="main">
      <JsonLd
        data={graph(organizationLd(), websiteLd(), webPageLd({ path: "/", title, description }))}
      />

      <section className="wrap hero">
        <div>
          <div className="eyebrow">● Independent agency. Integrated impact.</div>
          <h1 className="h1">
            <span className="line">
              <span>Built to</span>
            </span>
            <span className="line">
              <span style={d(90)}>stand out.</span>
            </span>
            <span className="line">
              <span style={{ ...d(180), color: "var(--accent)" }}>Designed</span>
            </span>
            <span className="line">
              <span style={{ ...d(270), color: "var(--accent)" }}>to grow.</span>
            </span>
          </h1>
          <Reveal delay={450}>
            <p className="lead">
              We connect strategy, creativity and technology to turn your digital presence into your next growth
              story.
            </p>
            <Link href="/services/">
              Discover what we do <Arrow />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={250}>
          <Art img={IMG.hero} ratio="1/1.08" eager className="hero-art" />
        </Reveal>
      </section>

      <section className="wrap intro">
        <div className="eyebrow">
          Not another agency.
          <br />
          Your growth partner.
        </div>
        <Reveal>
          <h2 className="h2">
            The bigger picture.
            <br />
            Every little detail.
          </h2>
          <p className="lead" style={{ maxWidth: 520, margin: "24px 0" }}>
            Your website. Your search presence. Your next campaign. They shouldn’t work in silos. We bring every part
            of your digital world together, with one team, one clear strategy and your ambition at the centre.
          </p>
          <Link href="/about/">
            Get to know ClickBoostMedia <Arrow />
          </Link>
        </Reveal>
      </section>

      <div className="wrap">
        <Reveal className="stats">
          <div className="stat">
            <b>
              <CountUp to={120} suffix="+" />
            </b>
            <span className="small">Client partnerships</span>
          </div>
          <div className="stat">
            <b>
              <CountUp to={20} suffix="+" />
            </b>
            <span className="small">Industries served</span>
          </div>
          <div className="stat">
            <b>
              $<CountUp to={1} suffix="M+" />
            </b>
            <span className="small">Annual ad spend managed</span>
          </div>
          <div className="stat">
            <b>
              US <span style={{ color: "var(--accent)" }}>/</span> IN
            </b>
            <span className="small">Delivery teams in your time zone</span>
          </div>
        </Reveal>
      </div>

      <section className="band">
        <div className="wrap" style={{ padding: "72px 32px" }}>
          <div className="eyebrow">Our capabilities</div>
          <h2 className="h2" style={{ marginBottom: 40 }}>
            Connected by design.
          </h2>
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link href={`/${s.slug}/`} className="row">
                <span>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <Arrow />
              </Link>
            </Reveal>
          ))}
          <p style={{ marginTop: 24 }}>
            <Link href="/services/">
              Explore all services <Arrow />
            </Link>
          </p>
        </div>
      </section>

      <section className="dark">
        <div className="wrap hero">
          <Reveal>
            <div className="small">Made for the next search</div>
            <div style={{ fontSize: 96, fontFamily: "var(--head)", letterSpacing: "-.05em" }}>
              SEO<span style={{ color: "var(--accent)" }}>+</span>
            </div>
            <div className="small">AEO / GEO / ASO</div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="h2">Don’t just rank. Be the answer.</h2>
            <p style={{ color: "#bbb", maxWidth: 420 }}>
              Search is evolving. So should your strategy. We help your brand become discoverable across search
              engines, AI-powered answers and app stores.
            </p>
            <Link href="/ai-seo/">
              Discover the new search landscape <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="wrap" style={{ padding: "72px 32px 24px" }}>
        <div className="eyebrow">Client case studies</div>
        <div className="section-head">
          <h2 className="h2">The work. The evidence.</h2>
          <Link href="/case-studies/">
            Explore case studies <Arrow />
          </Link>
        </div>
        <div className="cards two">
          {caseStudies.slice(0, 2).map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <div className="card">
                <Art img={pool[i]} />
                <div className="small" style={{ marginTop: 16 }}>
                  {c.services}
                </div>
                <h3 style={{ margin: "8px 0 16px" }}>{c.name}</h3>
                <ul className="metrics" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {c.metrics.map(([k, v]) => (
                    <li
                      key={k}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderTop: "1px solid var(--line)",
                        padding: "8px 0",
                        fontSize: 13,
                        color: "var(--mute)",
                      }}
                    >
                      <span>{k}</span>
                      <b style={{ color: "var(--ink)", fontFamily: "var(--head)" }}>{v}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ padding: "72px 32px" }}>
        <div className="eyebrow">Ideas worth your time</div>
        <h2 className="h2" style={{ marginBottom: 40 }}>
          A fresh perspective.
        </h2>
        <div className="cards">
          {insights.map((a, i) => (
            <Reveal key={a.slug} delay={i * 110}>
              <Link href={`/blogs/${a.slug}/`} className="card">
                <Art img={insightImg(a.slug, a.title)} fallback={pool[i % 3]} />
                <h3>{a.title}</h3>
                <div className="small">
                  {a.cat} · {a.read}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
