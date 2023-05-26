import { Artist } from "@/types/Artist";
import { TypeArtist } from "@/types/contentful.ts";

export const transformArtistsFull = (
  apiArtists: TypeArtist<undefined, "">[]
): Artist[] => {
  return apiArtists.map(transformArtist);
};

export const transformArtist = (
  apiArtist: TypeArtist<undefined, "">
): Artist => ({
  id: apiArtist.sys.id,
  name: apiArtist.fields.name,
  slug: apiArtist.fields.slug,
});
