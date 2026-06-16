import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const services = [
  { to: "/seo-optimization", label: "SEO Optimization" },
  { to: "/ppc-management", label: "PPC Management" },
  { to: "/website-development", label: "Website Development" },
  { to: "/app-development", label: "App Development" },
  { to: "/social-media-management", label: "Social Media Management" },
  { to: "/content-marketing", label: "Content Marketing" },
];

const locations = [
  { to: "/birmingham-al-digital-marketing", label: "Birmingham AL" },
  // Add other cities as needed
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary-navy/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo imageClassName="h-10 w-auto" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-bold text-white hover:text-accent">Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-bold text-white hover:text-accent"
                onMouseEnter={() => setActiveDropdown('services')}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-card-bg border border-border rounded-lg shadow-xl py-4 transition-all duration-200 ${activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} onMouseLeave={() => setActiveDropdown(null)}>
                {services.map(s => (
                  <Link key={s.to} to={s.to} className="block px-6 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/5">{s.label}</Link>
                ))}
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-bold text-white hover:text-accent"
                onMouseEnter={() => setActiveDropdown('locations')}
              >
                Locations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-card-bg border border-border rounded-lg shadow-xl py-4 transition-all duration-200 ${activeDropdown === 'locations' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} onMouseLeave={() => setActiveDropdown(null)}>
                {locations.map(l => (
                  <Link key={l.to} to={l.to} className="block px-6 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/5">{l.label}</Link>
                ))}
              </div>
            </div>

            <Link to="/case-studies" className="text-sm font-bold text-white hover:text-accent">Case Studies</Link>
            <Link to="/about" className="text-sm font-bold text-white hover:text-accent">About Us</Link>
            <Link to="/blog" className="text-sm font-bold text-white hover:text-accent">Blog / Resources</Link>
            <Link to="/contact" className="text-sm font-bold text-white hover:text-accent">Contact Us</Link>
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary" data-gtm="nav-book-call">Book a Free Call</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 bg-primary-navy z-40 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full p-8 pt-24 overflow-y-auto">
          <Link to="/" className="text-2xl font-bold text-white mb-6">Home</Link>

          <div className="mb-6">
            <button onClick={() => toggleDropdown('services')} className="flex items-center justify-between w-full text-2xl font-bold text-white mb-4">
              Services
              <svg className={`w-6 h-6 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {activeDropdown === 'services' && (
              <div className="flex flex-col gap-4 pl-4 border-l border-accent/30 ml-2">
                {services.map(s => (
                  <Link key={s.to} to={s.to} className="text-lg text-text-secondary">{s.label}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="mb-6">
            <button onClick={() => toggleDropdown('locations')} className="flex items-center justify-between w-full text-2xl font-bold text-white mb-4">
              Locations
              <svg className={`w-6 h-6 transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {activeDropdown === 'locations' && (
              <div className="flex flex-col gap-4 pl-4 border-l border-accent/30 ml-2">
                {locations.map(l => (
                  <Link key={l.to} to={l.to} className="text-lg text-text-secondary">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/case-studies" className="text-2xl font-bold text-white mb-6">Case Studies</Link>
          <Link to="/about" className="text-2xl font-bold text-white mb-6">About Us</Link>
          <Link to="/blog" className="text-2xl font-bold text-white mb-6">Blog / Resources</Link>
          <Link to="/contact" className="text-2xl font-bold text-white mb-6">Contact Us</Link>

          <Link to="/contact" className="btn-primary mt-auto text-center" data-gtm="mobile-nav-book-call">Book a Free Call</Link>
        </div>
      </div>
    </nav>
  );
}
