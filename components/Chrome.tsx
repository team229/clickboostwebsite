import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { Arrow } from "@/components/Header";

export function CtaBand({ title, lead }: { title?: ReactNode; lead?: string }) {
  return (
    <section className="band">
      <div className="wrap split">
        <Reveal>
          <div className="eyebrow">The next chapter</div>
          <h2 className="h2">{title ?? (<>Big ambition?<br />Let’s give it direction.</>)}</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="lead">
            {lead ?? "Tell us where you are. Show us where you want to go. We’ll work out the next move together."}
          </p>
          <Link href="/contact/" className="btn">
            Book a discovery call <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="dark">
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="logo">
              <span>
                clickboostmedia<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </div>
            <p style={{ color: "#bbb" }}>
              Independent thinking.
              <br />
              Connected expertise.
              <br />
              Growth that means something.
            </p>
          </div>
          <div>
            <div className="small">Explore</div>
            <Link href="/services/">Services</Link>
            <Link href="/pricing/">Pricing</Link>
            <Link href="/case-studies/">Our work</Link>
            <Link href="/blogs/">Insights</Link>
            <Link href="/about/">About us</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <div>
            <div className="small">Start a conversation</div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <p style={{ color: "#bbb", marginTop: 8 }}>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <span>
            <Link href="/privacy/" style={{ marginRight: 20, display: "inline" }}>
              Privacy policy
            </Link>
            <Link href="/terms/" style={{ marginRight: 20, display: "inline" }}>
              Terms
            </Link>
            <Link href="/sitemap.xml" style={{ display: "inline" }}>
              Sitemap
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
