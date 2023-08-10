import { TypeStaff } from "@/types/contentful.ts";
import { Asset } from "contentful";

export const transformStaff = (apiStaff: TypeStaff<undefined, "">) => ({
  id: apiStaff.sys.id,
  name: apiStaff.fields.name,
  profilePicture: apiStaff.fields.profilePicture
    ? (apiStaff.fields.profilePicture as Asset<undefined, "">)?.fields?.file
        ?.url || ""
    : "",
  bio: apiStaff.fields.bio,
});

export const transformStaffFull = (apiStaff: TypeStaff<undefined, "">[]) => {
  return apiStaff.map(transformStaff);
};
