import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/gallery-animation.json";
import Header from "../Home Page/Sections.js/Header";
import GalleryPhotos from "./Items/GalleryPhotos";
import Footer from "../Home Page/Sections.js/Footer";

export default function GalleryPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false);
  const [showLottie, setShowLottie] = useState(true);

  useEffect(() => {
    const lottieTimeout = setTimeout(() => {
      setShowLottie(false);
    }, 2000);

    const imagesLoadedTimeout = setTimeout(() => {
      setIsGalleryLoaded(true);
      setShowLottie(false);
    }, 2000);

    return () => {
      clearTimeout(lottieTimeout);
      clearTimeout(imagesLoadedTimeout);
    };
  }, []);

  return (
    <>
      <Header />
      <h1 className="heading-primary gallery-h1">Gallery</h1>
      {showLottie && (
        <Lottie className="gallery-lottie" animationData={animationData} />
      )}
      {isGalleryLoaded && !showLottie && (
        <section className="gallery-section">
          <GalleryPhotos setIsGalleryLoaded={setIsGalleryLoaded} />
        </section>
      )}
      <Footer />
    </>
  );
}
