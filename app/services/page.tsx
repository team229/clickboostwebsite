import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/Chrome";
import { Arrow } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/content";
import { breadcrumbLd, graph, organizationLd, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

const title = "Digital growth services";
const description =
  "One connected team for search, paid media, social, websites, apps, CRM and AI automation. Pick a starting point — we’ll connect it to the bigger picture.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/services/",
});

export default function Services() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd({ path: "/services/", title, description }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
          ])
        )}
      />

      <div className="wrap page-head">
        <div>
          <div className="eyebrow">What we do</div>
          <h1 className="h1">One connected team. Your entire digital world.</h1>
        </div>
        <p className="lead">Pick a starting point. We’ll connect it to the bigger picture.</p>
      </div>

      <div className="wrap" style={{ paddingBottom: 72 }}>
        {services.map((s, i) => (
          <Link key={s.slug} href={`/${s.slug}/`} className="row">
            <span>0{i + 1}</span>
            <h2>{s.title}</h2>
            <p>{s.tagline}</p>
            <Arrow />
          </Link>
        ))}
      </div>

      <CtaBand
        title={
          <>
            Not sure where
            <br />
            to start?
          </>
        }
        lead="Most projects begin with one clearly scoped piece of work. Tell us what is not working and we will point at the smallest useful next step."
      />
    </main>
  );
}
