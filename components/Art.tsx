"use client";

import { useState } from "react";
import type { Img } from "@/lib/images";

type Props = {
  img: Img;
  fallback?: Img;
  ratio?: string;
  pos?: string;
  eager?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function Art({ img, fallback, ratio = "4/3", pos = "center", eager, className = "", children }: Props) {
  const [src, setSrc] = useState(img.src);

  return (
    <div className={`frame ${className}`} style={{ aspectRatio: ratio }}>
      <img
        className="art"
        src={src}
        alt={img.alt}
        style={{ objectPosition: pos }}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={() => fallback && src !== fallback.src && setSrc(fallback.src)}
      />
      {children}
    </div>
  );
}
