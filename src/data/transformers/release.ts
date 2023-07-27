import { Release } from "@/types/Release";
import { TypeRelease } from "@/types/contentful.ts";
import { Asset } from "contentful";

export const transformReleasesFull = (
  apiReleases: TypeRelease<undefined, "">[]
): Release[] => {
  return apiReleases.map(transformRelease);
};

export const transformRelease = (
  apiRelease: TypeRelease<undefined, "">
): Release => ({
  id: apiRelease.sys.id,
  title: apiRelease.fields.title,
  copywrite: apiRelease.fields.copywrite || "",
  image: apiRelease.fields.image
    ? (apiRelease.fields.image as Asset<undefined, "">)?.fields?.file?.url || ""
    : "",
  releaseDate: apiRelease.fields.releaseDate,
});
