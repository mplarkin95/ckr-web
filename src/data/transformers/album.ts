import { Album } from "@/types/Album";
import { TypeArtist } from "@/types/contentful.ts";

export const transformAlbumsFull = (
  apiAlbums: TypeArtist<undefined, "">[]
): Album[] => {
  return apiAlbums.map(transformAlbum);
};

export const transformAlbum = (apiAlbum: TypeArtist<undefined, "">): Album => ({
  id: apiAlbum.sys.id,
  name: apiAlbum.fields.name,
  slug: apiAlbum.fields.slug,
});
