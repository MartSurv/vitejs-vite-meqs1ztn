import { useState } from "react";
import type { PicsumImage } from "../../types";

import "./ImageModal.css";
import { Loader } from "../Loader";

type ImageModalProps = {
  selectedImage: PicsumImage;
  closeModal: () => void;
};

export const ImageModal: React.FC<ImageModalProps> = ({
  selectedImage,
  closeModal,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          ✕
        </button>
        <div className="modal-image-container">
          {imageLoading && !imageError && (
            <div className="modal-loading">
              <Loader message="Loading high-resolution image..." />
            </div>
          )}

          {imageError && (
            <div className="modal-error">
              <div className="error-content">
                <span className="error-icon">⚠️</span>
                <h3>Failed to load image</h3>
                <p>The high-resolution image couldn't be loaded.</p>
              </div>
            </div>
          )}

          {!imageError && (
            <img
              src={`https://picsum.photos/id/${selectedImage.id}/${selectedImage.width}/${selectedImage.height}`}
              alt={`Large view - Photo by ${selectedImage.author}`}
              className="modal-image"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
        <div className="modal-info">
          <h3>📸 {selectedImage.author}</h3>
          <p>Image ID: {selectedImage.id}</p>
          <p>
            Original size: {selectedImage.width} × {selectedImage.height}
          </p>
        </div>
      </div>
    </div>
  );
};
