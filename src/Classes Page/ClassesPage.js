import Header from "../Home Page/Sections.js/Header";
import ClassesInfoSection from "./Sections/ClassesInfoSection";
import ClassesSection from "./Sections/ClassesSection";
import CoachesSection from "./Sections/CoachesSection";
import Footer from "../Home Page/Sections.js/Footer";

export default function ClassesPage() {
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
