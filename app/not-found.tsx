import Link from "next/link";
import type { Metadata } from "next";
import { Arrow } from "@/components/Header";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="wrap notfound">
      <div className="eyebrow">404</div>
      <h1 className="h1">That page moved on.</h1>
      <p className="lead" style={{ maxWidth: 520, margin: "20px 0 28px" }}>
        The link may be old, or the page may have been renamed. Everything we do is still one click away.
      </p>
      <p style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
        <Link href="/services/" className="btn">
          See our services <Arrow />
        </Link>
        <Link href="/">Back to the homepage</Link>
      </p>
    </main>
  );
}
