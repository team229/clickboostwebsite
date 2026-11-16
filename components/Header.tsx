"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/lib/content";

const links = [
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/case-studies/", label: "Our work" },
  { href: "/about/", label: "About us" },
  { href: "/blogs/", label: "Insights" },
];

const servicePaths = services.map((s) => `/${s.slug}/`);

export function Arrow() {
  return (
    <span className="arr" aria-hidden>
      ↗
    </span>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/services/"
      ? pathname.startsWith("/services") || servicePaths.includes(pathname)
      : pathname === href || pathname.startsWith(href);

  return (
    <header>
      <div className="wrap">
        <Link href="/" className="logo" aria-label="ClickBoostMedia — home">
          <i aria-hidden>↗</i>
          <span>
            clickboostmedia<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>

        <nav aria-label="Main">
          <div className="nav-list">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        <Link href="/contact/" className="btn header-cta">
          Let’s talk <Arrow />
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" className="menu-panel" hidden={!open}>
        <ul>
          <li>
            <Link href="/services/">Services</Link>
          </li>
          {services.map((s) => (
            <li key={s.slug} style={{ paddingLeft: 16 }}>
              <Link href={`/${s.slug}/`}>{s.navLabel}</Link>
            </li>
          ))}
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="menu-cta">
          <Link href="/contact/" className="btn">
            Book a discovery call <Arrow />
          </Link>
        </div>
      </div>
    </header>
  );
}
