import { Artist } from "@/types/Artist";

export const transformArtistsFull = (apiArtists: any[]): Artist[] => {
  console.log(apiArtists);
  return apiArtists.map((artist) => ({
    id: artist.sys.id,
    name: artist.fields.name,
  }));
};
