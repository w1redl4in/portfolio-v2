import { createApi } from "unsplash-js";
import { config } from "config";
import * as nodeFetch from "node-fetch";

export const unsplashApi = createApi({
  accessKey: config.unsplashAccessKey,
  fetch: nodeFetch.default as unknown as typeof fetch,
});

export async function getUnsplashImage(
  keywords: string,
  orientation: "landscape" = "landscape"
) {
  const response = await unsplashApi.search.getPhotos({
    query: keywords,
    orientation,
  });

  const image = response.response?.results[3];

  console.log("image", image);

  return {
    thumbnail: image?.urls?.full,
    altThumbnail: image?.alt_description,
  };
}
