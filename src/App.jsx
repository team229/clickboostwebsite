import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SEO from "./pages/ServiceSEO";
import PPC from "./pages/ServicePPC";
import WebDev from "./pages/ServiceWebDesign";
import Social from "./pages/ServiceSocialMedia";
import AppDev from "./pages/ServiceSEO"; // Placeholder until created
import ContentMarketing from "./pages/ServiceSEO"; // Placeholder until created
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import "./index.css";

export const BRAND = {
  name: "Click Boost Media",
  address: "105 Vulcan Road Ste 221, Birmingham, AL 35209, United States",
  phone: "(XXX) XXX-XXXX", // TODO: confirm phone number
  email: "info@clickboostmedia.com",
  domain: "clickboostmedia.com",
  year: "2026"
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seo-optimization" element={<SEO />} />
      <Route path="/ppc-management" element={<PPC />} />
      <Route path="/website-development" element={<WebDev />} />
      <Route path="/social-media-management" element={<Social />} />
      <Route path="/app-development" element={<AppDev />} />
      <Route path="/content-marketing" element={<ContentMarketing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
