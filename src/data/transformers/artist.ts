import { Artist } from "@/types/Artist";
import { TypeArtist, TypeArtistFields } from "@/types/contentful.ts";
import { Asset } from "contentful";

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
  bio: apiArtist.fields.bio || "",
  profilePicture: apiArtist.fields.profilePicture
    ? (apiArtist.fields.profilePicture as Asset<undefined, "">)?.fields?.file
        ?.url || ""
    : "",
  socials: apiArtist.fields.socials || [],
});
