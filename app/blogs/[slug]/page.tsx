import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Art from "@/components/Art";
import { CtaBand } from "@/components/Chrome";
import { JsonLd } from "@/components/JsonLd";
import { insightImg, pool } from "@/lib/images";
import { insights } from "@/lib/content";
import { articleLd, breadcrumbLd, graph, pageMeta, webPageLd, websiteLd } from "@/lib/seo";

export const generateStaticParams = () => insights.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return {};
  return pageMeta({
    title: { absolute: article.title },
    description: article.lead,
    path: `/blogs/${article.slug}/`,
    image: insightImg(article.slug, article.title).src,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) notFound();

  const path = `/blogs/${article.slug}/`;

  return (
    <main id="main">
      <JsonLd
        data={graph(
          websiteLd(),
          webPageLd({ path, title: article.title, description: article.lead }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blogs/" },
            { name: article.title, path },
          ]),
          articleLd({ title: article.title, description: article.lead, path, date: article.date })
        )}
      />

      <div className="wrap" style={{ paddingTop: 32 }}>
        <Link href="/blogs/" className="small">
          ← All insights
        </Link>
        <div className="article">
          <aside>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              {article.cat}
            </div>
            <div className="small">
              {article.read}
              <br />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <br />
              By ClickBoostMedia
            </div>
          </aside>

          <article className="article-body">
            <h1 className="h1" style={{ fontSize: "clamp(36px,4.5vw,56px)" }}>
              {article.title}
            </h1>
            <p className="standfirst">{article.lead}</p>
            <div style={{ margin: "0 0 36px" }}>
              <Art img={insightImg(article.slug, article.title)} fallback={pool[0]} ratio="16/9" />
            </div>
            {article.sections.map((section) => (
              <section key={section.h}>
                <h2>{section.h}</h2>
                <p>{section.p}</p>
              </section>
            ))}
            <p className="fine" style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
              Our perspective is educational, not a guarantee of specific marketing results. The right approach depends
              on your business and your audience.
            </p>
            <p style={{ marginTop: 24 }}>
              <Link href="/contact/">
                Talk to us about your next move <span className="arr">↗</span>
              </Link>
            </p>
          </article>
        </div>
      </div>

      <CtaBand />
    </main>
  );
}
