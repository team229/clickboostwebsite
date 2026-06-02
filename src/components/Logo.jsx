import { Link } from "react-router-dom";

const logoSrc = "https://i.ibb.co/pFHtTMF/Chat-GPT-Image-Jun-3-2026-01-52-29-AM.png";

export default function Logo({ className = "", imageClassName = "h-12 w-auto", framed = false }) {
  const frameClasses = framed
    ? "inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-white/10"
    : "inline-flex items-center";

  return (
    <Link to="/" className={`${frameClasses} ${className}`.trim()} aria-label="Click To Boost home">
      <img src={logoSrc} alt="Click To Boost" className={`${imageClassName} object-contain`.trim()} />
    </Link>
  );
}
