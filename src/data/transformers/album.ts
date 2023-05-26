import { Album } from "@/types/Album";
import { TypeAlbum } from "@/types/contentful.ts";

export const transformAlbumsFull = (
  apiAlbums: TypeAlbum<undefined, "">[]
): Album[] => {
  return apiAlbums.map(transformAlbum);
};

export const transformAlbum = (apiAlbum: TypeAlbum<undefined, "">): Album => ({
  id: apiAlbum.sys.id,
  name: apiAlbum.fields.name,
  slug: apiAlbum.fields.slug,
});
