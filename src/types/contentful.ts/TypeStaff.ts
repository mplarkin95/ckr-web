import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeStaffFields {
    name: EntryFieldTypes.Symbol;
    profilePicture: EntryFieldTypes.AssetLink;
    bio: EntryFieldTypes.Text;
}

export type TypeStaffSkeleton = EntrySkeletonType<TypeStaffFields, "staff">;
export type TypeStaff<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeStaffSkeleton, Modifiers, Locales>;
