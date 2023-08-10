import { TypeStaffSkeleton } from "@/types/contentful.ts";
import contentfulClient from "../contentfulClient";

export const getStaff = async () => {
  const response = await contentfulClient.getEntries<TypeStaffSkeleton>({
    content_type: "staff",
  });

  return response.items;
};
