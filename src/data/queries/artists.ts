import contentfulClient from "../contentfulClient";
export const getArtists = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "artist",
  });

  return response.items;
};
