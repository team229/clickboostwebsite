import type { Metadata } from "next";
import { site } from "./content";

export const BASE = site.url;

type MetaInput = {
  title: string | { absolute: string };
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMeta({ title, description, path, image, type = "website", publishedTime }: MetaInput): Metadata {
  const url = `${BASE}${path}`;
  const ogImage = `${BASE}${image ?? "/og-image.png"}`;
  const titleText = typeof title === "string" ? title : title.absolute;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: titleText,
      description,
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.name} — ${titleText}` }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description,
      images: [ogImage],
    },
  };
}

export const organizationLd = () => ({
  "@type": "ProfessionalService",
  "@id": `${BASE}/#organization`,
  name: site.name,
  alternateName: "Clickboostmedia",
  url: `${BASE}/`,
  logo: { "@type": "ImageObject", url: `${BASE}/logo-512.png`, width: 512, height: 512 },
  image: `${BASE}/og-image.png`,
  description:
    "Digital growth agency delivering SEO, PPC, social media, web and app development, CRM and AI automation for growth-focused brands.",
  email: site.email,
  telephone: "+1-619-365-4177",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: site.markets.map((m) => ({ "@type": "City", name: m })),
  knowsAbout: [
    "Search engine optimization",
    "Answer engine optimization",
    "Generative engine optimization",
    "Pay per click advertising",
    "Social media marketing",
    "Web development",
    "Mobile app development",
    "CRM development",
    "AI automation",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
});

export const websiteLd = () => ({
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: `${BASE}/`,
  name: site.name,
  publisher: { "@id": `${BASE}/#organization` },
  inLanguage: "en-US",
});

export const webPageLd = ({ path, title, description }: { path: string; title: string; description: string }) => ({
  "@type": "WebPage",
  "@id": `${BASE}${path}#webpage`,
  url: `${BASE}${path}`,
  name: title,
  description,
  isPartOf: { "@id": `${BASE}/#website` },
  about: { "@id": `${BASE}/#organization` },
  inLanguage: "en-US",
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE}${item.path}`,
  })),
});

export const serviceLd = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@type": "Service",
  "@id": `${BASE}${path}#service`,
  name,
  serviceType: name,
  description,
  url: `${BASE}${path}`,
  provider: { "@id": `${BASE}/#organization` },
  areaServed: site.markets.map((m) => ({ "@type": "City", name: m })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleLd = ({
  title,
  description,
  path,
  date,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
}) => ({
  "@type": "Article",
  "@id": `${BASE}${path}#article`,
  headline: title,
  description,
  datePublished: date,
  dateModified: date,
  mainEntityOfPage: { "@id": `${BASE}${path}#webpage` },
  author: { "@type": "Organization", name: site.name, url: `${BASE}/` },
  publisher: { "@id": `${BASE}/#organization` },
  inLanguage: "en-US",
});

export const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
