export type Img = { src: string; alt: string };

/**
 * Shared artwork. Every image has descriptive alt text because the art carries
 * meaning in this design rather than being decorative wallpaper.
 */
export const IMG = {
  hero: { src: "/assets/hero.webp", alt: "Sculptural vermilion ribbon rising through a sunlit architectural space" },
  ribbon: { src: "/assets/ribbon.jpg", alt: "Close view of a glossy vermilion ribbon sculpture" },
  spheres: { src: "/assets/spheres.jpg", alt: "Faceted cream sphere and chrome sphere on a concrete podium" },
  glow: { src: "/assets/glow.jpg", alt: "Warm light falling across a ribbon sculpture and chrome sphere" },
  sculpture: { src: "/assets/sculpture.jpg", alt: "Interlocking vermilion ribbons beside a faceted sphere on a concrete podium" },
  partnership: { src: "/assets/partnership.jpg", alt: "Two interlocked rings, one vermilion and one cream, symbolising partnership" },
  contact: { src: "/assets/contact.jpg", alt: "A cream sphere and a chrome sphere beneath a vermilion ring" },
};

export const pool: Img[] = [IMG.ribbon, IMG.spheres, IMG.glow];

const alts: Record<string, string> = {
  "websites-and-apps": "A browser window rendered in cream and vermilion",
  "seo-and-ai-search": "A vermilion magnifying glass holding a chrome sphere",
  "paid-media": "Ascending cream bars with a vermilion peak and a chrome sphere on top",
  "social-and-creative": "Overlapping rounded tiles in vermilion, cream and graphite",
  "app-store-optimization": "A vermilion app icon with a faceted sphere",
  "crm-and-automation": "A chain of interlocked vermilion links",
  "search-beyond-the-search-bar": "A chrome sphere orbited by vermilion rings",
  "better-website-better-conversations": "Two chat bubbles, one vermilion and one cream",
  "connected-growth": "Ascending steps topped by spheres and a sweeping vermilion ribbon",
};

export const serviceImg = (slug: string, title: string): Img => ({
  src: `/assets/services/${slug}.jpg`,
  alt: alts[slug] ?? `${title}: brand artwork`,
});

export const insightImg = (slug: string, title: string): Img => ({
  src: `/assets/insights/${slug}.jpg`,
  alt: alts[slug] ?? title,
});
