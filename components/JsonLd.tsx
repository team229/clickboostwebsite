import type { Img } from "@/lib/images";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Schema is generated in this repo from typed objects, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type { Img };
