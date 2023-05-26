import { Artist } from "@/types/Artist";
import { TypeArtist } from "@/types/contentful.ts";

export const transformArtistsFull = (
  apiArtists: TypeArtist<undefined>[]
): Artist[] => {
  return apiArtists.map((artist) => ({
    id: artist.sys.id,
    name: artist.fields.name,
  }));
};
