import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceSEO from "./pages/ServiceSEO";
import ServiceLocalSEO from "./pages/ServiceLocalSEO";
import ServicePPC from "./pages/ServicePPC";
import ServiceSocialMedia from "./pages/ServiceSocialMedia";
import ServiceContent from "./pages/ServiceContent";
import ServiceEmail from "./pages/ServiceEmail";
import ServiceWebDesign from "./pages/ServiceWebDesign";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/service-seo" element={<ServiceSEO />} />
        <Route path="/service-local-seo" element={<ServiceLocalSEO />} />
        <Route path="/service-ppc" element={<ServicePPC />} />
        <Route path="/service-social-media" element={<ServiceSocialMedia />} />
        <Route path="/service-content" element={<ServiceContent />} />
        <Route path="/service-email" element={<ServiceEmail />} />
        <Route path="/service-web-design" element={<ServiceWebDesign />} />
      </Routes>
    </Layout>
  );
}
