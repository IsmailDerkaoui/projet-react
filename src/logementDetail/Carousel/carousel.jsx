import React, { useState } from "react";
import "./Carousel/Carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
  };

  return (
    <div>
      <div className="carouselContainer">
        <button onClick={prevImage} className="prevButton">
        <div className="flecheGauche"><i class="fa-solid fa-chevron-left"></i></div>
        </button>
        <img
          src={images[currentIndex]}
          alt={` ${currentIndex + 1}`}
          className="carouselImage"
          onClick={() => openLightbox(images[currentIndex])}
        />
        <button onClick={nextImage} className="nextButton">
        <div className="flecheDroite"><i class="fa-solid fa-chevron-right"></i></div>
        </button>
      </div>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img
              src={lightboxImage}
              alt="en grand"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
