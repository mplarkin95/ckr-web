import { Artist } from "@/types/Artist";

export const transformArtistsFull = (apiArtists: any[]): Artist[] => {
  return apiArtists.map((artist) => ({
    id: artist.sys.id,
    name: artist.fields.name,
  }));
};
