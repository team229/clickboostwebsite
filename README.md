# clickboostmedia.com

Marketing site for ClickBoost Media. Next.js 15 App Router, statically exported and served from Bunny CDN storage.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, `output: "export"`) |
| Language | TypeScript + React 19 |
| Styling | One global stylesheet (`app/globals.css`), design tokens in `:root` |
| Fonts | DM Sans + Manrope via `next/font/google` (self-hosted at build) |
| Output | Static HTML in `out/` — no server runtime |

## Structure

```
app/
  layout.tsx            chrome, fonts, metadata defaults, GA/Ads tags
  template.tsx          per-navigation page fade
  page.tsx              homepage
  globals.css           all styling
  services/page.tsx     services index
  <service>/page.tsx    one thin page per service (kept at the existing URLs)
  pricing/  case-studies/  about/  contact/
  blogs/  blogs/[slug]/  privacy/  terms/
  sitemap.ts  robots.ts  not-found.tsx
components/
  Header.tsx            sticky nav + mobile menu + shared Arrow
  Chrome.tsx            footer + CTA band
  ServicePage.tsx       the shared service-detail template
  Art.tsx               image with fallback
  Reveal.tsx            scroll reveal (IntersectionObserver)
  CountUp.tsx           animated stat numbers
  LeadForm.tsx          contact form (posts to the existing form endpoint)
  JsonLd.tsx            schema renderer
lib/
  content.ts            ALL copy, services, plans, case studies, FAQs, articles
  seo.ts                metadata factory + JSON-LD builders
  images.ts             artwork map and alt text
public/                 assets, favicon, og-image
```

## Editing content

Almost everything lives in `lib/content.ts` — services, pricing plans, the
comparison matrix, case studies, articles, principles and FAQs. Change the data,
not the JSX. Service pages render from `components/ServicePage.tsx`, so one copy
pattern serves all seven.

Adding a service:

1. Add an entry to `services` in `lib/content.ts` (`slug`, `title`, `tags`, …).
2. Create `app/<slug>/page.tsx` — copy an existing one and change the slug.
   (Keeping explicit folders is what preserves the existing clean URLs.)
3. Add artwork to `public/assets/services/`.
4. It appears automatically in the nav, footer, services index, sitemap and
   the contact form's service dropdown.

## Build, preview, deploy

```bash
npm install
npm run build          # -> out/
npx serve out          # or: python3 -m http.server 48173 -d out
```

Preview is served through the `web` Cloudflare tunnel at
`https://web.clickboostmedia.com` (127.0.0.1:48173).

Deploy is the shared Bunny script, which reads `.repos.json`
(`deploy.localDir` is `out` for this site):

```bash
cd websites
./scripts/bunny/deploy.sh clickboostwebsite --build --delete --purge
```

`--delete` mirrors the zone, so removed pages actually disappear from the CDN.
`.repos.json` is gitignored and holds the zone credentials reference.

## SEO implementation

- One `<h1>` per page, no skipped heading levels.
- Per-page `title`, `description`, canonical and Open Graph/Twitter metadata via `lib/seo.ts`.
- JSON-LD per page: `ProfessionalService`, `WebSite`, `WebPage`, `BreadcrumbList`,
  plus `Service` + `FAQPage` on service pages, `Article` on posts, `CollectionPage`
  on case studies. FAQ schema is only emitted where the FAQ is visible.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- All URLs from the previous site are preserved (`/ai-seo/`, `/ppc/`, `/pricing/`, …).
- Images use explicit aspect ratios (no layout shift) and descriptive alt text.
- Hero art ships as a 30 KB WebP rather than the original 830 KB PNG.

## Gotchas

- `next/font/google` downloads fonts at build time, so builds need network access.
- `output: "export"` means no server features. `useSearchParams` is avoided —
  `LeadForm` reads the query string on the client instead.
- `trailingSlash: true` keeps `/page/` style URLs, matching the old site.
- The contact form posts JSON as `text/plain` to the bythub endpoint to avoid a
  CORS preflight. Keep the honeypot field `_hp`.
