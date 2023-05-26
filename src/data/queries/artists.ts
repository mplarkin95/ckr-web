import { TypeArtistSkeleton } from "@/types/contentful.ts";
import contentfulClient from "../contentfulClient";
export const getArtists = async () => {
  const response = await contentfulClient.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
  });

  return response.items;
};

export const getArtistBySlug = async (slug: string) => {
  const response = await contentfulClient.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    "fields.slug": slug,
  });

  return response.items[0];
};
