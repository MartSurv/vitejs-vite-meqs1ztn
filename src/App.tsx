import { useState, useEffect } from "react";

import { PAGE_TITLE } from "./constants";
import type { PicsumImage } from "./types";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { ImageModal } from "./components/ImageModal";
import { Image } from "./components/Image";
import { useGetImages } from "./hooks";

import "./App.css";

function App() {
  const { images, loading, error } = useGetImages();
  const [selectedImage, setSelectedImage] = useState<PicsumImage | null>(null);

  const openModal = (image: PicsumImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  if (loading) {
    return (
      <div className="app">
        <Loader title={PAGE_TITLE} message="Loading images..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <ErrorMessage title={PAGE_TITLE} message={`Error ${error}`} />
      </div>
    );
  }

  return (
    <>
      <div className="app">
        <h1>{PAGE_TITLE}</h1>
        <div className="gallery">
          {images.map((image) => (
            <Image key={image.id} image={image} openModal={openModal} />
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
      )}
    </>
  );
}

export default App;
