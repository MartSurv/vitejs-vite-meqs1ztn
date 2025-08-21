import { API_URL } from "../constants";
import type { PicsumImage } from "../types";

export const getImages = async (
  page: number,
  limit: number
): Promise<PicsumImage[]> => {
  const response = await fetch(`${API_URL}list?page=${page}&limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();

  return data;
};
