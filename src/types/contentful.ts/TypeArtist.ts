import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeArtistFields {
  name: EntryFieldTypes.Symbol;
  profilePicture?: EntryFieldTypes.AssetLink;
  socials?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  slug: EntryFieldTypes.Symbol;
  bio?: EntryFieldTypes.Text;
}

export type TypeArtistSkeleton = EntrySkeletonType<TypeArtistFields, "artist">;
export type TypeArtist<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeArtistSkeleton, Modifiers, Locales>;
