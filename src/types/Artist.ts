import { EntryFieldTypes } from "contentful";

export interface Artist {
  id: string;
  name: string;
  slug: string;
  profilePicture?: string;
  bio?: string;
}
