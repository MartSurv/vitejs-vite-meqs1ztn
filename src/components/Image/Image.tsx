import type { PicsumImage } from "../../types";

import "./Image.css";

type ImageProps = {
  image: PicsumImage;
  openModal: (image: PicsumImage) => void;
};

export const Image: React.FC<ImageProps> = ({ image, openModal }) => {
  // Calculate height based on aspect ratio with fixed width of 400px
  const fixedWidth = 400;
  const aspectRatio = image.width / image.height;
  const calculatedHeight = Math.round(fixedWidth / aspectRatio);

  return (
    <div className="image-card" onClick={() => openModal(image)}>
      <img
        src={`https://picsum.photos/id/${image.id}/${fixedWidth}/${calculatedHeight}`}
        alt={`Photo by ${image.author}`}
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: `${image.width} / ${image.height}`,
        }}
      />
      <div className="image-info">
        <span className="author">📸 {image.author}</span>
      </div>
      <div className="click-hint">Click to view larger</div>
    </div>
  );
};
