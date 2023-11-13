import Header from "./Sections.js/Header";
import CTASection from "./Sections.js/CTASection";
import AboutSection from "./Sections.js/AboutSection";
import ServicesSection from "./Sections.js/ServicesSection";
import ClubSection from "./Sections.js/ClubSection";
import PricingSection from "./Sections.js/PricingSection";
import Footer from "./Sections.js/Footer";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <CTASection />
      <AboutSection />
      <ServicesSection />
      <ClubSection />
      <PricingSection />
      <Footer />
    </>
  );
}
