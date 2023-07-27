import { TypeReleaseSkeleton } from "@/types/contentful.ts";

import contentfulClient from "../contentfulClient";

export const getReleases = async () => {
  const response = await contentfulClient.getEntries<TypeReleaseSkeleton>({
    content_type: "release",
  });

  return response.items;
};
