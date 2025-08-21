import { useEffect, useState } from "react";

import type { PicsumImage } from "../types";
import { getImages } from "../api";

export const useGetImages = () => {
  const [images, setImages] = useState<PicsumImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setLoading(true);

      const imageData = await getImages(Math.floor(Math.random() * 10), 30);

      setImages(imageData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return { images, loading, error };
};
