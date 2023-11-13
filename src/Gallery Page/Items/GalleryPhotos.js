import { useState, useEffect } from "react";

export default function GalleryPhotos({ setIsGalleryLoaded }) {
  const data = [
    { img: "/img/Gallery/gallery-gym-1.webp", alt: "Gym Equipment" },
    { img: "/img/Gallery/gallery-gym-2.webp", alt: "Gym Equipment" },
    {
      img: "/img/Gallery/gallery-gym-3.webp",
      alt: "2 men training in the gym",
    },
    {
      img: "/img/Gallery/gallery-gym-4.webp",
      alt: "A man and a woman training in the gym",
    },
    { img: "/img/Gallery/gallery-gym-5.webp", alt: "Man lifting wheights" },
    { img: "/img/Gallery/gallery-gym-6.webp", alt: "Gym space" },
    { img: "/img/Gallery/gallery-gym-7.webp", alt: "Balneary space" },
    { img: "/img/Gallery/gallery-gym-8.webp", alt: "Balneary showers" },
    {
      img: "/img/Gallery/gallery-gym-9.webp",
      alt: "Woman in the reception",
    },
    {
      img: "/img/Gallery/gallery-gym-10.webp",
      alt: "Man in the reception",
    },
    { img: "/img/Gallery/gallery-gym-11.webp", alt: "Reception space" },
    { img: "/img/Gallery/gallery-gym-12.webp", alt: "Green hard Court" },
    {
      img: "/img/Gallery/gallery-gym-13.webp",
      alt: "Two kids holding their rackets",
    },
    { img: "/img/Gallery/gallery-gym-14.webp", alt: "Woman playing tennis" },
    {
      img: "/img/Gallery/gallery-gym-15.webp",
      alt: "Blue hard court",
    },
  ];

  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === data.length) {
      // All images are loaded
      setIsGalleryLoaded(true);
    }
  }, [loadedImages, data.length, setIsGalleryLoaded]);

  return (
    <div className="gallery-photos-grid">
      {data.map((item, index) => (
        <div className="gallery-photo-div" key={index}>
          <img
            className="gallery-photo-img"
            src={item.img}
            alt={item.alt}
            onLoad={handleImageLoad}
          />
        </div>
      ))}
    </div>
  );
}
