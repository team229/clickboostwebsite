import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to) => {
    if (to === "/") return pathname === to;
    return pathname.startsWith(to);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo imageClassName="h-11 sm:h-12 w-auto" />

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`text-sm font-medium transition-colors ${
                    isActive(l.to)
                      ? "text-gray-900 hover:text-accent"
                      : "text-gray-600 hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive(l.to)
                    ? "text-gray-900 hover:text-accent"
                    : "text-gray-600 hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
