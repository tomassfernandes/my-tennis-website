import Header from "../Home Page/Sections.js/Header";
import GalleryPhotos from "./Items/GalleryPhotos";
import Footer from "../Home Page/Sections.js/Footer";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <h1 className="heading-primary gallery-h1">Gallery</h1>
      <section className="gallery-section">
        <GalleryPhotos />
      </section>
      <Footer />
    </>
  );
}
