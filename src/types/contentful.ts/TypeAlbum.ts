import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAlbumFields {
    name: EntryFieldTypes.Symbol;
    artist?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    slug: EntryFieldTypes.Symbol;
    links?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    albumDescription?: EntryFieldTypes.Text;
}

export type TypeAlbumSkeleton = EntrySkeletonType<TypeAlbumFields, "album">;
export type TypeAlbum<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAlbumSkeleton, Modifiers, Locales>;
