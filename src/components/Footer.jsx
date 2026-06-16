import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BRAND } from "../App";

export default function Footer() {
  return (
    <footer className="bg-section-alt pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1 */}
          <div className="lg:col-span-1">
            <Logo imageClassName="h-10 w-auto mb-6" />
            <p className="text-text-secondary text-sm mb-6 italic">"AI-Powered Growth for Ambitious Brands."</p>
            <div className="flex gap-4 mb-6">
              {/* Placeholder Social Icons */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><span className="text-xs">FB</span></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><span className="text-xs">IG</span></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><span className="text-xs">LI</span></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><span className="text-xs">YT</span></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"><span className="text-xs">X</span></a>
            </div>
            <p className="text-text-secondary text-xs">Est. {BRAND.year}</p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Dashboard</h4>
            <p className="text-text-secondary text-sm mb-4">Real-time, 24/7 campaign dashboard. No delays, just clarity.</p>
            <Link to="/contact" className="text-accent font-bold hover:underline" data-gtm="footer-login">Log In →</Link>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/seo-optimization" className="text-text-secondary text-sm hover:text-accent transition-colors">SEO Optimization</Link></li>
              <li><Link to="/ppc-management" className="text-text-secondary text-sm hover:text-accent transition-colors">PPC Management</Link></li>
              <li><Link to="/website-development" className="text-text-secondary text-sm hover:text-accent transition-colors">Website Development</Link></li>
              <li><Link to="/app-development" className="text-text-secondary text-sm hover:text-accent transition-colors">App Development</Link></li>
              <li><Link to="/social-media-management" className="text-text-secondary text-sm hover:text-accent transition-colors">Social Media Management</Link></li>
              <li><Link to="/content-marketing" className="text-text-secondary text-sm hover:text-accent transition-colors">Content Marketing</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-bold mb-6">Locations</h4>
            <ul className="space-y-3">
              <li><Link to="/birmingham-al-digital-marketing" className="text-text-secondary text-sm hover:text-accent transition-colors">Birmingham AL</Link></li>
              {/* Add other cities */}
            </ul>
          </div>

          {/* Col 5 */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-text-secondary text-sm leading-relaxed">{BRAND.address}</li>
              <li className="text-text-secondary text-sm font-bold">{BRAND.phone}</li>
              <li className="text-text-secondary text-sm">{BRAND.email}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-text-secondary text-xs">© {BRAND.name} {BRAND.year}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-text-secondary text-xs hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="text-text-secondary text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/sitemap" className="text-text-secondary text-xs hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
