import { TypeAlbumSkeleton } from "@/types/contentful.ts";
import contentfulClient from "../contentfulClient";
export const getAlbums = async () => {
  const response = await contentfulClient.getEntries<TypeAlbumSkeleton>({
    content_type: "album",
  });

  return response.items;
};

export const getAlbumBySlug = async (slug: string) => {
  const response = await contentfulClient.getEntries<TypeAlbumSkeleton>({
    content_type: "album",
    "fields.slug": slug,
  });

  return response.items[0];
};
