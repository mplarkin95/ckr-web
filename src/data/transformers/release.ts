import { Release } from "@/types/Release";
import { TypeRelease } from "@/types/contentful.ts";
import { Asset } from "contentful";

export const transformReleasesFull = (
  apiReleases: TypeRelease<undefined, "">[]
): Release[] => {
  return apiReleases.map(transformRelease);
};

const dateTransform = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${month}/${day}/${year}`;
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
  releaseDate: dateTransform(apiRelease.fields.releaseDate),
});
