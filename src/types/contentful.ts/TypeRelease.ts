import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeReleaseFields {
    title: EntryFieldTypes.Symbol;
    releaseDate: EntryFieldTypes.Date;
    copywrite?: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
    link?: EntryFieldTypes.Symbol;
}

export type TypeReleaseSkeleton = EntrySkeletonType<TypeReleaseFields, "release">;
export type TypeRelease<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeReleaseSkeleton, Modifiers, Locales>;
