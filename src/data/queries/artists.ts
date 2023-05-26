import { TypeArtistSkeleton } from "@/types/contentful.ts";
import contentfulClient from "../contentfulClient";
export const getArtists = async () => {
  const response = await contentfulClient.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
  });

  return response.items;
};
