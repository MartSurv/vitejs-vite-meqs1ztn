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

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          ✕
        </button>
        {imageLoading && (
          <>
            <Loader message="Loading high-res image..." />
            <br />
          </>
        )}
        <img
          src={`https://picsum.photos/id/${selectedImage.id}/${selectedImage.width}/${selectedImage.height}`}
          alt={`Large view - Photo by ${selectedImage.author}`}
          className="modal-image"
          onLoad={handleImageLoad}
        />
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
