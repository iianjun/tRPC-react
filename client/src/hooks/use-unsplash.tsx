import { useState } from "react";
import { createApi } from "unsplash-js";
import { VeryBasic } from "unsplash-js/dist/methods/photos/types";
import { UnsplashOptions } from "./index.d";
export const useUnsplash = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const api = createApi({
    accessKey: "Z6FiDQqJRLkCTQ6tiW1NKPLZ3iRi1VXG2UlXFnefIbc",
  });

  const getPhotos = async (options: UnsplashOptions): Promise<VeryBasic[]> => {
    setLoading(true);
    const ret = await api.search.getPhotos({
      ...options,
      orientation: "landscape",
    });
    const { response } = ret;
    if (!response) return [];
    const { results } = response;
    setLoading(false);
    return results;
  };

  return { getPhotos, loading };
};
