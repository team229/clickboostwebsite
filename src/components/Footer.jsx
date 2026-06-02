import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <Logo framed imageClassName="h-16 w-auto" className="mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed">Your partner for digital growth.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2.5">
              <Link to="/service-seo" className="block text-gray-400 hover:text-accent transition-colors text-sm">SEO</Link>
              <Link to="/service-local-seo" className="block text-gray-400 hover:text-accent transition-colors text-sm">Local SEO</Link>
              <Link to="/service-ppc" className="block text-gray-400 hover:text-accent transition-colors text-sm">PPC Advertising</Link>
              <Link to="/service-social-media" className="block text-gray-400 hover:text-accent transition-colors text-sm">Social Media</Link>
              <Link to="/service-content" className="block text-gray-400 hover:text-accent transition-colors text-sm">Content Marketing</Link>
              <Link to="/service-email" className="block text-gray-400 hover:text-accent transition-colors text-sm">Email Marketing</Link>
              <Link to="/service-web-design" className="block text-gray-400 hover:text-accent transition-colors text-sm">Web Design</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2.5">
              <Link to="/about" className="block text-gray-400 hover:text-accent transition-colors text-sm">About Us</Link>
              <Link to="/services" className="block text-gray-400 hover:text-accent transition-colors text-sm">Services</Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-accent transition-colors text-sm">Pricing</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-accent transition-colors text-sm">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">Email: info@clickboostmedia.com</p>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">&copy; 2026 ClickBoost Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
