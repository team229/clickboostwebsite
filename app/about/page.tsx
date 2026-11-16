import Link from "next/link";
import type { Metadata } from "next";
import Art from "@/components/Art";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/Chrome";
import { Arrow } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { IMG } from "@/lib/images";
import { principles } from "@/lib/content";
import { breadcrumbLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "About us";
const description =
  "An independent digital growth agency in Birmingham, Alabama, with delivery teams across the US and India. Strategy, creativity and technology under one roof.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/about/",
});

export default function About() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/about/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About us", path: "/about/" },
          ])
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">Meet ClickBoostMedia</div>
          <h1 className="h1">Independent minds. Shared ambition.</h1>
        </div>
        <p className="lead">
          We’re a digital growth partner for businesses that want more than a collection of marketing services.
        </p>
      </div>

      <section className="wrap hero" style={{ paddingTop: 0 }}>
        <Art img={IMG.hero} ratio="1/1.08" eager />
        <div>
          <div className="eyebrow">A partner, not a handoff</div>
          <h2 className="h2">Your ambition. Our shared focus.</h2>
          <p className="lead" style={{ margin: "24px 0" }}>
            ClickBoostMedia takes care of the entire digital presence: websites, search, apps, social, advertising and
            the systems that connect them. With 120+ client partnerships across 20+ industries, we understand the value
            of showing up consistently.
          </p>
          <Link href="/services/">
            Meet our capabilities <Arrow />
          </Link>
        </div>
      </section>

      <section className="wrap" style={{ padding: "0 32px 56px" }}>
        <div className="stats" style={{ borderTop: "1px solid var(--line)", paddingBottom: 0 }}>
          <div className="stat">
            <b>2023</b>
            <span className="small">Founded</span>
          </div>
          <div className="stat">
            <b>120+</b>
            <span className="small">Client partnerships</span>
          </div>
          <div className="stat">
            <b>20+</b>
            <span className="small">Industries</span>
          </div>
          <div className="stat">
            <b>
              US <span style={{ color: "var(--accent)" }}>/</span> IN
            </b>
            <span className="small">Delivery teams</span>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap" style={{ padding: "72px 32px" }}>
          <div className="eyebrow">How we work</div>
          <h2 className="h2" style={{ marginBottom: 40 }}>
            Clear thinking. Close collaboration.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px" }} className="principles">
            {principles.map(([t, d], i) => (
              <div key={t} style={{ borderTop: "1px solid var(--line)", padding: "20px 0 32px" }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 24, marginBottom: 8 }}>{t}</h3>
                <p className="lead">{d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 56 }}>
            <Art img={IMG.sculpture} ratio="21/8" />
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "56px 32px" }}>
        <div className="split" style={{ padding: 0 }}>
          <div>
            <div className="eyebrow">Where we are</div>
            <h2 className="h2">
              Birmingham, Alabama.
              <br />
              Working across the US and Canada.
            </h2>
          </div>
          <div>
            <p className="lead">
              Our headquarters is in Birmingham, AL, with a delivery team in New Delhi. That combination keeps strategy
              close to your market and production close to your deadlines.
            </p>
            <p className="lead">
              105 Vulcan Road, Ste 221
              <br />
              Birmingham, AL 35209
              <br />
              Mon–Fri, 9AM–6PM EST
            </p>
            <Link href="/contact/">
              Start a conversation <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Let’s build
            <br />
            something lasting.
          </>
        }
        lead="Tell us where you are and where you want to be. We will tell you honestly whether we are the right team for it."
      />
    </main>
  );
}
