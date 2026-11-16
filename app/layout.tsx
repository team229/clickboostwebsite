import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Chrome";
import { site } from "@/lib/content";

const body = DM_Sans({ subsets: ["latin"], variable: "--body", display: "swap" });
const head = Manrope({ subsets: ["latin"], variable: "--head", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ClickBoostMedia: Built to stand out. Designed to grow.",
    template: "%s | ClickBoostMedia",
  },
  description:
    "An independent digital growth agency connecting strategy, creativity and technology across SEO, paid media, social, web, apps, CRM and AI automation.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: { google: "etMp9dhuMT1icYJIHD_u30uMpAzCkqm2OWsx-dKfWAE" },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: "ClickBoostMedia: Built to stand out. Designed to grow.",
    description:
      "An independent digital growth agency connecting strategy, creativity and technology across strategy, search, social, web and apps.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ClickBoostMedia" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D41W3094BF" strategy="afterInteractive" />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-D41W3094BF');gtag('config','AW-18505824596');`}
        </Script>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
