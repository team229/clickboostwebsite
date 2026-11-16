import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const service = services.find((s) => s.slug === "social-media")!;

export const metadata: Metadata = pageMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/social-media/",
  image: service.image,
});

export default function Page() {
  return <ServicePage service={service} />;
}
