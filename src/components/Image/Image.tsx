import type { PicsumImage } from "../../types";

import "./Image.css";

type ImageProps = {
  image: PicsumImage;
  openModal: (image: PicsumImage) => void;
};

export const Image: React.FC<ImageProps> = ({ image, openModal }) => {
  return (
    <div className="image-card" onClick={() => openModal(image)}>
      <img
        src={`https://picsum.photos/id/${image.id}/400/300`}
        alt={`Photo by ${image.author}`}
        loading="lazy"
      />
      <div className="image-info">
        <span className="author">📸 {image.author}</span>
      </div>
      <div className="click-hint">Click to view larger</div>
    </div>
  );
};
