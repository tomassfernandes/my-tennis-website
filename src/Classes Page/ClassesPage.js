import Header from "../Home Page/Sections.js/Header";
import ClassesInfoSection from "./Sections/ClassesInfoSection";
import ClassesSection from "./Sections/ClassesSection";
import CoachesSection from "./Sections/CoachesSection";
import Footer from "../Home Page/Sections.js/Footer";
import { useEffect } from "react";

export default function ClassesPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <ClassesSection />
      <CoachesSection />
      <ClassesInfoSection />
      <Footer />
    </>
  );
}
